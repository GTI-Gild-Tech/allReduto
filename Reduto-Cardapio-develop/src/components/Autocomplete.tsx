import { useState, useRef, useEffect } from "react";

interface AutocompleteOption {
  value: string;
  label: string;
}

interface AutocompleteProps {
  options: AutocompleteOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function Autocomplete({ options, value, onChange, placeholder = "Digite para buscar...", className = "" }: AutocompleteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Update input value when external value changes
  useEffect(() => {
    if (value) {
      const selectedOption = options.find(option => option.value === value);
      setInputValue(selectedOption ? selectedOption.label : value);
    } else {
      setInputValue("");
    }
  }, [value, options]);

  // Filter options based on input value
  useEffect(() => {
    if (inputValue === "") {
      setFilteredOptions(options);
    } else {
      const filtered = options.filter(option =>
        option.label.toLowerCase().includes(inputValue.toLowerCase()) ||
        option.value.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredOptions(filtered);
    }
    setHighlightedIndex(-1);
  }, [inputValue, options]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    setIsOpen(true);
    
    // If input is cleared, clear the selection
    if (newValue === "") {
      onChange("");
    }
  };

  const handleInputFocus = () => {
    setIsOpen(true);
  };

  const handleInputBlur = () => {
    // Delay hiding the dropdown to allow for option clicks
    setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  const handleOptionClick = (option: AutocompleteOption) => {
    setInputValue(option.label);
    onChange(option.value);
    setIsOpen(false);
    inputRef.current?.blur();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === "ArrowDown" || e.key === "Enter") {
        setIsOpen(true);
        return;
      }
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex(prev => 
          prev < filteredOptions.length - 1 ? prev + 1 : 0
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex(prev => 
          prev > 0 ? prev - 1 : filteredOptions.length - 1
        );
        break;
      case "Enter":
        e.preventDefault();
        if (highlightedIndex >= 0 && filteredOptions[highlightedIndex]) {
          handleOptionClick(filteredOptions[highlightedIndex]);
        }
        break;
      case "Escape":
        setIsOpen(false);
        inputRef.current?.blur();
        break;
    }
  };

  // Scroll highlighted option into view
  useEffect(() => {
    if (highlightedIndex >= 0 && listRef.current) {
      const highlightedElement = listRef.current.children[highlightedIndex] as HTMLElement;
      if (highlightedElement) {
        highlightedElement.scrollIntoView({
          block: "nearest",
          behavior: "smooth"
        });
      }
    }
  }, [highlightedIndex]);

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <div aria-hidden="true" className="absolute border border-[#b5b5b5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.25)]" />
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full px-3 py-2 bg-transparent text-[13px] font-['Open_Sans:Regular',_sans-serif] font-normal outline-none relative cursor-text"
          autoComplete="off"
        />
      </div>
      
      {isOpen && filteredOptions.length > 0 && (
        <div
          ref={listRef}
          className="absolute top-full left-0 right-0 z-50 mt-1 bg-white border border-[#b5b5b5] rounded-[5px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.15)] max-h-48 overflow-y-auto"
        >
          {filteredOptions.map((option, index) => (
            <div
              key={option.value}
              className={`px-3 py-2 text-[13px] font-['Open_Sans:Regular',_sans-serif] font-normal cursor-pointer border-b border-[#e0e0e0] last:border-b-0 transition-colors ${
                index === highlightedIndex
                  ? "bg-[#e4ddcd] text-[#0f4c50]"
                  : "text-[#000000] hover:bg-[#f5f5f5]"
              }`}
              onClick={() => handleOptionClick(option)}
              onMouseEnter={() => setHighlightedIndex(index)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
      
      {isOpen && filteredOptions.length === 0 && inputValue !== "" && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-white border border-[#b5b5b5] rounded-[5px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.15)]">
          <div className="px-3 py-2 text-[13px] font-['Open_Sans:Regular',_sans-serif] font-normal text-[#797474]">
            Nenhum cliente encontrado
          </div>
        </div>
      )}
    </div>
  );
}