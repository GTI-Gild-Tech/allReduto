import { ReactNode, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface CardProps {
  name: string;
  pricesText: string;
  description?: string | null;
  imageSrc: string;
  imageSources?: string[];
  imageAlt: string;
  onOrderClick: () => void;
  modal?: ReactNode;
}

export default function Card({
  name,
  pricesText,
  description,
  imageSrc,
  imageSources,
  imageAlt,
  onOrderClick,
  modal,
}: CardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [previousImageIndex, setPreviousImageIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const autoplayRef = useRef<number | null>(null);
  const slideTimeoutRef = useRef<number | null>(null);
  const imageContainerRef = useRef<HTMLDivElement | null>(null);

  const images = useMemo(() => {
    const list = (imageSources ?? []).map((src) => src?.trim()).filter(Boolean) as string[];
    return list.length > 0 ? list : [imageSrc];
  }, [imageSources, imageSrc]);

  const moveToNextImage = useCallback(() => {
    if (images.length <= 1) return;

    setCurrentImageIndex((prev) => {
      setPreviousImageIndex(prev);
      setIsSliding(true);
      return (prev + 1) % images.length;
    });
  }, [images.length]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current !== null) {
      window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    if (images.length <= 1 || autoplayRef.current !== null) return;

    autoplayRef.current = window.setInterval(() => {
      moveToNextImage();
    }, 1700);
  }, [images.length, moveToNextImage]);

  useEffect(() => {
    setCurrentImageIndex((prev) => (prev >= images.length ? 0 : prev));
    setPreviousImageIndex((prev) => (prev >= images.length ? 0 : prev));
  }, [images.length]);

  useEffect(() => {
    if (!isSliding) return;

    if (slideTimeoutRef.current !== null) {
      window.clearTimeout(slideTimeoutRef.current);
    }

    slideTimeoutRef.current = window.setTimeout(() => {
      setIsSliding(false);
      slideTimeoutRef.current = null;
    }, 500);

    return () => {
      if (slideTimeoutRef.current !== null) {
        window.clearTimeout(slideTimeoutRef.current);
        slideTimeoutRef.current = null;
      }
    };
  }, [isSliding]);

  useEffect(() => {
    return () => {
      stopAutoplay();
      if (slideTimeoutRef.current !== null) {
        window.clearTimeout(slideTimeoutRef.current);
        slideTimeoutRef.current = null;
      }
    };
  }, [stopAutoplay]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isMobile = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    if (!isMobile) return;

    const node = imageContainerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          startAutoplay();
        } else {
          stopAutoplay();
        }
      },
      { threshold: 0.75 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      stopAutoplay();
    };
  }, [startAutoplay, stopAutoplay]);

  return (
    <div className="bg-white flex flex-col gap-4 p-3 rounded-[12px] shadow-md max-w-[320px] hover:shadow-lg transition-all">
      <style>{`
        @keyframes card-slide-right-to-left {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>

      {/* Imagem */}
      <div
        ref={imageContainerRef}
        className="w-full h-[180px] rounded-[8px] bg-[#f5f5f5] overflow-hidden relative"
        onMouseEnter={startAutoplay}
        onMouseLeave={stopAutoplay}
      >
        {isSliding && previousImageIndex !== currentImageIndex ? (
          <ImageWithFallback
            src={images[previousImageIndex]}
            alt={imageAlt}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : null}

        <ImageWithFallback
          src={images[currentImageIndex]}
          alt={imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
          style={
            isSliding
              ? { animation: "card-slide-right-to-left 500ms ease forwards" }
              : undefined
          }
        />

        {images.length > 1 ? (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/25 px-2 py-1 rounded-full">
            {images.map((_, index) => (
              <span
                key={`${name}-dot-${index}`}
                className={`h-1.5 w-1.5 rounded-full ${
                  index === currentImageIndex ? "bg-white" : "bg-white/45"
                }`}
              />
            ))}
          </div>
        ) : null}
      </div>

      <div className="flex flex-col justify-evenly grow">
        <div className="flex ">
          {/* Nome */}
          <h3 className="font-semibold text-[#0f4c50] text-[20px]">{name}</h3>
        </div>

        {/* Precos */}
        <p className="text-[#2f1b04] text-[14px]">{pricesText}</p>

        {/* Descricao - aparece so na impressao */}
        {description?.trim() ? (
          <p className="show-on-print text-[12px] text-gray-700 mt-1" style={{ display: "none" }}>
            {description}
          </p>
        ) : null}
      </div>

      {/* Botao - escondido na impressao */}
      <button
        onClick={onOrderClick}
        className="hide-on-print bg-[#0f4c50] px-6 py-3 rounded-[8px] w-full text-white hover:bg-[#0d4247] transition-colors"
      >
        Fazer Pedido
      </button>

      {/* Modal */}
      {modal}
    </div>
  );
}
