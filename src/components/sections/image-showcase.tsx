"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { shimmerBlurDataURL, kakaoBlurDataURL, imagesPaths, imagesSizes } from "@/lib/image-utils";

export default function ImageShowcaseSection() {
  // 로컬 이미지
  const images = imagesPaths.showcaseImages.map((src, index) => ({
    src,
    alt: `카카오채널 이미지 ${index + 1}`
  }));
  
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const openModal = useCallback(() => {
    // 처음 모달을 열 때는 첫 번째 이미지(001.jpg)를 표시
    setSelectedImage(0);
  }, []);
  
  const closeModal = useCallback(() => {
    setSelectedImage(null);
  }, []);
  
  const nextImage = useCallback(() => {
    if (selectedImage === null) return;
    setSelectedImage((prev) => (prev === null ? 0 : prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length, selectedImage]);
  
  const prevImage = useCallback(() => {
    if (selectedImage === null) return;
    setSelectedImage((prev) => (prev === null ? 0 : prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length, selectedImage]);
  
  // 키보드 이벤트 처리
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        case 'Escape':
          closeModal();
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    // 모달이 열려 있을 때 스크롤 막기
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      // 모달이 닫힐 때 스크롤 복원
      document.body.style.overflow = '';
    };
  }, [selectedImage, nextImage, prevImage, closeModal]);

  return (
    <div className="section bg-gradient-to-b from-background to-secondary/30" id="image-showcase">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            채널메이트 마케팅대행 서비스<span className="text-kakao font-bold"><br /> 활용 사례</span>
          </motion.h2>
          
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            웹툰으로 더 쉽게 이해하기
          </motion.span>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            
            <br />
            아래 이미지를 클릭하면 더 자세한 활용 사례를 볼 수 있습니다.(총 7장)
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          {/* 메인 이미지 하나만 표시 */}
          <div className="max-w-2xl mx-auto">
            <div 
              className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg cursor-pointer group"
              onClick={openModal}
            >
              <Image 
                src="/images/001.jpg"
                alt="카카오채널 활용 사례"
                fill 
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes={imagesSizes.thumbnailSizes}
                placeholder="blur"
                blurDataURL={kakaoBlurDataURL}
                quality={85}
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/80 rounded-full p-3">
                  <ZoomIn className="w-6 h-6" />
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-muted-foreground"
              >
              
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
      
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <button 
              onClick={closeModal}
              className="absolute right-4 top-4 z-50 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="relative w-full max-w-5xl h-[80vh]">
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                fill
                className="object-contain"
                sizes={imagesSizes.modalSizes}
                placeholder="blur"
                blurDataURL={shimmerBlurDataURL}
                quality={90}
                priority
              />
            </div>
            
            <button 
              onClick={prevImage}
              className="absolute left-4 bg-black/50 p-3 rounded-full text-white hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
            
            <button 
              onClick={nextImage}
              className="absolute right-4 bg-black/50 p-3 rounded-full text-white hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
            
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <div className="inline-block bg-black/70 px-4 py-2 rounded-full text-white">
                {selectedImage + 1} / {images.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 