"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

interface ImageGalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
  className?: string;
}

export function ImageGallery({ images, className }: ImageGalleryProps) {
  const [currentImage, setCurrentImage] = useState<number | null>(null);

  const openModal = (index: number) => {
    setCurrentImage(index);
  };

  const closeModal = () => {
    setCurrentImage(null);
  };

  const nextImage = () => {
    if (currentImage === null) return;
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : (prev || 0) + 1));
  };

  const prevImage = () => {
    if (currentImage === null) return;
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : (prev || 0) - 1));
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "Escape") closeModal();
  };

  return (
    <>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ${className || ""}`}>
        {images.map((image, index) => (
          <div 
            key={index} 
            className="cursor-pointer relative aspect-[3/4] overflow-hidden rounded-lg border border-border shadow-sm group"
            onClick={() => openModal(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="bg-white/80 rounded-full p-3">
                <ZoomIn className="w-6 h-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={currentImage !== null} onOpenChange={(open: boolean) => !open && closeModal()}>
        <DialogContent 
          className="max-w-7xl w-[95vw] h-[95vh] p-0 overflow-hidden bg-black/95 border-none" 
          onKeyDown={handleKeyDown}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <button 
              onClick={closeModal}
              className="absolute right-4 top-4 bg-black/50 p-2 rounded-full z-50 text-white hover:bg-black/70 transition-colors"
              aria-label="닫기"
            >
              <X className="w-6 h-6" />
            </button>
            
            {currentImage !== null && (
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-full h-[90vh] max-h-[90vh]">
                  <Image
                    src={images[currentImage].src}
                    alt={images[currentImage].alt}
                    fill
                    sizes="95vw"
                    className="object-contain"
                    priority
                    quality={100}
                  />
                </div>
                
                <button 
                  onClick={prevImage}
                  className="absolute left-4 bg-black/50 p-3 rounded-full text-white hover:bg-black/70 transition-colors"
                  aria-label="이전 이미지"
                >
                  <ChevronLeft className="w-7 h-7" />
                </button>
                
                <button 
                  onClick={nextImage}
                  className="absolute right-4 bg-black/50 p-3 rounded-full text-white hover:bg-black/70 transition-colors"
                  aria-label="다음 이미지"
                >
                  <ChevronRight className="w-7 h-7" />
                </button>
                
                <div className="absolute bottom-6 left-0 right-0 text-center">
                  <div className="inline-block bg-black/70 px-4 py-2 rounded-full text-white">
                    {currentImage + 1} / {images.length}
                  </div>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
} 