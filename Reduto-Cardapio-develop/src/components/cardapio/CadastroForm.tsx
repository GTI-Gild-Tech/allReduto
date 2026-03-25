import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import {
  FormField,
  CadastroSizeQuantityTags,
  CadastroSizeOptions,
  CadastroSizeValues,
} from "./CadastroComponents";

function CadastroLeftColumn({
  onSelectFile,
  isVisible,
  onToggleVisible,
}: {
  onSelectFile?: (file: File | null) => void;
  isVisible: boolean;
  onToggleVisible: (next: boolean) => void;
}) {
  return (
    <div className="w-full md:w-[350px] md:h-[322px] md:relative shrink-0 flex flex-col gap-4 md:gap-0">
      <div className="md:absolute md:h-[59.8px] md:left-0 md:top-0 md:w-[350px]">
        <FormField label="Nome" placeholder="" />
      </div>
      <div className="md:absolute md:h-[58.8px] md:left-0 md:top-[67.8px] md:w-[350px]">
        <FormField label="Categoria" placeholder="" />
      </div>
      <div className="md:absolute md:h-[57.8px] md:left-0 md:top-[134.6px] md:w-[350px]">
        <FormField label="Valor" placeholder="" />
      </div>
      <div className="md:absolute md:h-[56.8px] md:left-0 md:top-[200.4px] md:w-[350px]">
        <FormField label="Descrição" placeholder="" />
      </div>

      {/* NOVO: mostrar/ocultar no cardápio do cliente */}
      <div className="md:absolute md:left-0 md:top-[248px] md:w-[350px]">
        <div className="text-[13px] mb-1">Mostrar no cardápio do cliente</div>
        <label className="flex items-center gap-2 text-[13px] select-none">
          <button
            type="button"
            role="switch"
            aria-checked={isVisible}
            aria-label="Mostrar no cardápio do cliente"
            onClick={() => onToggleVisible(!isVisible)}
            className={`relative inline-flex h-5 w-10 items-center rounded-full transition-colors ${
              isVisible ? "bg-[#0f4c50]" : "bg-[#9ca3af]"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                isVisible ? "translate-x-5" : "translate-x-1"
              }`}
            />
          </button>
          <span>{isVisible ? "Visível" : "Oculto"}</span>
        </label>
      </div>

      {/* campo de foto */}
      <div className="md:absolute md:left-0 md:top-[286px] md:w-[350px]">
        <div className="text-[13px] mb-1">Foto</div>
        <input
          type="file"
          accept="image/*"
          className="w-full text-[13px]"
          onChange={(e) => onSelectFile?.(e.target.files?.[0] ?? null)}
        />
      </div>
    </div>
  );
}

function CadastroRightColumn() {
  return (
    <div className="w-full md:w-[350px] md:h-[322px] md:relative shrink-0 flex flex-col gap-4 md:gap-0">
      <div className="md:absolute md:box-border md:content-stretch md:flex md:flex-col md:gap-[5px] md:items-start md:justify-start md:left-0 md:px-2.5 md:py-0 md:top-0 md:w-[350px]">
        <div
          className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[13px] tracking-[0.52px] w-full"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          <p className="leading-[normal]">Tamanho ou porção</p>
        </div>
        <CadastroSizeQuantityTags />
      </div>
      <div className="md:absolute md:box-border md:content-stretch md:flex md:flex-col md:items-start md:justify-start md:left-0 md:px-2.5 md:py-0 md:top-[67.8px] md:w-[350px]">
        <div
          className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[13px] text-nowrap tracking-[0.52px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          <p className="leading-[normal] whitespace-pre">Selecione as opções</p>
        </div>
        <CadastroSizeOptions />
      </div>
      <div className="md:absolute md:h-[57.8px] md:left-2 md:top-[134px] md:w-[350px]">
        <div className="md:absolute md:box-border md:content-stretch md:flex md:flex-col md:gap-[3px] md:items-start md:justify-start md:left-[-7px] md:px-2.5 md:py-0 md:top-0 md:w-[337px]">
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

export function CadastroFormFields({
  onSelectFile,
  isVisible,
  onToggleVisible,
}: {
  onSelectFile?: (file: File | null) => void;
  isVisible: boolean;
  onToggleVisible: (next: boolean) => void;
}) {
  return (
    <div className="w-full flex flex-col md:flex-row gap-4 md:gap-2 items-start justify-start relative">
      <CadastroLeftColumn
        onSelectFile={onSelectFile}
        isVisible={isVisible}
        onToggleVisible={onToggleVisible}
      />
      <CadastroRightColumn />
    </div>
  );
}

interface CadastroButtonProps {
  onFinalizarCadastro?: (file?: File, is_visible?: boolean) => void;
}
export function CadastroButton({ onFinalizarCadastro }: CadastroButtonProps) {
  return (
    <button
      className="w-full md:w-auto bg-[#0f4c50] box-border content-stretch flex gap-2.5 items-center justify-center px-4 md:px-[273px] py-4 relative rounded-[50px] shrink-0 cursor-pointer hover:bg-[#0d4247] transition-colors"
      onClick={() => onFinalizarCadastro?.()}
    >
      <div
        className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[16px] md:text-[20px] text-center text-nowrap tracking-[0.2px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-none whitespace-pre">Finalizar cadastro</p>
      </div>
    </button>
  );
}

interface CadastroContainerProps {
  onFinalizarCadastro?: (file?: File, is_visible?: boolean) => void;
  onBack?: () => void;
}
export function CadastroContainer({ 
  onFinalizarCadastro,
  onBack 
}: CadastroContainerProps) {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(true); // default: visível

  return (
    <div className="bg-[#f9f8f5] flex flex-col md:flex-row md:h-[464px] md:w-[896px] md:items-center md:justify-center w-full min-h-screen md:min-h-0 relative">
      {/* Botão voltar - apenas mobile */}
      {onBack && (
        <button
          onClick={onBack}
          className="md:hidden fixed top-4 left-4 z-50 p-2 hover:bg-white rounded-lg transition-colors"
          aria-label="Voltar"
        >
          <ArrowLeft className="w-6 h-6 text-[#0f4c50]" />
        </button>
      )}

      {/* Conteúdo - Mobile: flex col com padding, Desktop: centered */}
      <div className="flex flex-col gap-6 w-full md:w-auto p-4 md:p-0 pt-16 md:pt-0">
        {/* Título - apenas mobile */}
        <div className="md:hidden">
          <h1 className="text-[24px] font-bold text-[#0f4c50]">Cadastro de Produto</h1>
        </div>

        {/* Form Fields */}
        <CadastroFormFields
          onSelectFile={setImageFile}
          isVisible={isVisible}
          onToggleVisible={setIsVisible}
        />

        {/* Button */}
        <CadastroButton
          onFinalizarCadastro={() =>
            onFinalizarCadastro?.(imageFile ?? undefined, isVisible)
          }
        />
      </div>
    </div>
  );
}
