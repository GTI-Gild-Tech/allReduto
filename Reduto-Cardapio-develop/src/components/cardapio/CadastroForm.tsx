import {
  FormField,
  CadastroSizeQuantityTags,
  CadastroSizeOptions,
  CadastroSizeValues,
} from "./CadastroComponents";

function CadastroLeftColumn() {
  return (
    <div className="h-[322px] relative shrink-0 w-[350px]">
      <div className="absolute h-[59.8px] left-0 top-0 w-[350px]">
        <FormField label="Nome" placeholder="" />
      </div>
      <div className="absolute h-[58.8px] left-0 top-[67.8px] w-[350px]">
        <FormField label="Categoria" placeholder="" />
      </div>
      <div className="absolute h-[57.8px] left-0 top-[134.6px] w-[350px]">
        <FormField label="Valor" placeholder="" />
      </div>
      <div className="absolute h-[56.8px] left-0 top-[200.4px] w-[350px]">
        <FormField label="Descrição" placeholder="" />
      </div>
    </div>
  );
}

function CadastroRightColumn() {
  return (
    <div className="h-[322px] relative shrink-0 w-[350px]">
      <div className="absolute box-border content-stretch flex flex-col gap-[5px] items-start justify-start left-0 px-2.5 py-0 top-0 w-[350px]">
        <div
          className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[13px] tracking-[0.52px] w-full"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          <p className="leading-[normal]">
            Tamanho ou porção
          </p>
        </div>
        <CadastroSizeQuantityTags />
      </div>
      <div className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 px-2.5 py-0 top-[67.8px] w-[350px]">
        <div
          className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[13px] text-nowrap tracking-[0.52px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          <p className="leading-[normal] whitespace-pre">
            Selecione as opções
          </p>
        </div>
        <CadastroSizeOptions />
      </div>
      <div className="absolute h-[57.8px] left-2 top-[134px] w-[350px]">
        <div className="absolute box-border content-stretch flex flex-col gap-[3px] items-start justify-start left-[-7px] px-2.5 py-0 top-0 w-[337px]">
          <div
            className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[13px] tracking-[0.52px] w-full"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="leading-[normal]">Valor das opções</p>
          </div>
          <CadastroSizeValues />
        </div>
      </div>
    </div>
  );
}

export function CadastroFormFields() {
  return (
    <div className="content-stretch flex gap-2 items-start justify-start relative shrink-0">
      <CadastroLeftColumn />
      <CadastroRightColumn />
    </div>
  );
}

interface CadastroButttonProps {
  onFinalizarCadastro?: () => void;
}

export function CadastroButton({ onFinalizarCadastro }: CadastroButttonProps) {
  const handleFinalizarCadastro = () => {
    if (onFinalizarCadastro) {
      onFinalizarCadastro();
    } else {
      alert("Produto cadastrado com sucesso!");
    }
  };

  return (
    <div
      className="bg-[#0f4c50] box-border content-stretch flex gap-2.5 items-center justify-start px-[273px] py-4 relative rounded-[50px] shrink-0 cursor-pointer hover:bg-[#0d4247] transition-colors"
      data-name="Main Button"
      onClick={handleFinalizarCadastro}
    >
      <div
        className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[20px] text-center text-nowrap tracking-[0.2px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-none whitespace-pre">
          Finalizar cadastro
        </p>
      </div>
    </div>
  );
}

interface CadastroContainerProps {
  onFinalizarCadastro?: () => void;
}

export function CadastroContainer({ onFinalizarCadastro }: CadastroContainerProps) {
  return (
    <div className="bg-[#f9f8f5] content-stretch flex flex-col gap-2.5 h-[464px] items-center justify-center relative shrink-0 w-[896px]">
      <CadastroFormFields />
      <CadastroButton onFinalizarCadastro={onFinalizarCadastro} />
    </div>
  );
}