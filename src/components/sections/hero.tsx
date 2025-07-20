"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeroSection() {
  // 기존 단일 이미지 복원
  const mainImage = { src: "/images/img_first.jpg", alt: "카카오톡 채널 서비스" };
  
  // 7개의 슬라이드 이미지 배열
  const slideImages = [
    { src: "/images/001.jpg", alt: "카카오톡 채널 서비스 1" },
    { src: "/images/002.jpg", alt: "카카오톡 채널 서비스 2" },
    { src: "/images/003.jpg", alt: "카카오톡 채널 서비스 3" },
    { src: "/images/004.jpg", alt: "카카오톡 채널 서비스 4" },
    { src: "/images/005.jpg", alt: "카카오톡 채널 서비스 5" },
    { src: "/images/006.jpg", alt: "카카오톡 채널 서비스 6" },
    { src: "/images/007.jpg", alt: "카카오톡 채널 서비스 7" },
  ];

  // 현재 표시 중인 이미지 인덱스
  const [currentIndex, setCurrentIndex] = useState(0);

  // 자동 슬라이드 기능
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
    }, 3000); // 3초마다 이미지 변경

    return () => clearInterval(interval);
  }, [slideImages.length]);

  // 이전 이미지로 이동
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slideImages.length - 1 : prevIndex - 1
    );
  };

  // 다음 이미지로 이동
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % slideImages.length
    );
  };

  return (
    <div className="relative overflow-hidden bg-background pt-16 md:pt-24">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block bg-kakao/20 text-kakao-foreground font-medium rounded-full px-4 py-1 text-sm mb-6">
              소상공인 10분 선착순 모집 중!
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              카카오톡채널, 네이버스마트플레이스 운영대행<br /> <span className="text-red-500 font-extrabold">3개월 무료!</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              단골 확보·매장 소식·쿠폰 발송까지 자동으로 관리해드립니다!
            </p>
            <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
            카톡으로 고객을 부르고, 고객이 리뷰를 남기는 마법 같은 선순환이 시작됩니다!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-kakao hover:bg-kakao/90 text-kakao-foreground text-lg"
                asChild
              >
                <a href="http://pf.kakao.com/_xnSYrn/chat" target="_blank" rel="noopener noreferrer">
                  카톡 상담 시작하기
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex flex-col gap-6"
          >
            {/* 기존 단일 이미지 복원 */}
            <div className="relative w-full aspect-[4/3]">
              <Image 
                src={mainImage.src} 
                alt={mainImage.alt} 
                fill
                style={{ objectFit: 'contain', objectPosition: 'top' }}
                className="rounded-lg"
                priority
              />
            </div>
            
            {/* 슬라이드 컨테이너 - 기존 이미지 아래에 추가 */}
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
              {/* 이미지 슬라이더 */}
              <div className="relative w-full h-full">
                {slideImages.map((image, index) => (
                  <div 
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                      index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image 
                      src={image.src} 
                      alt={image.alt} 
                      fill
                      style={{ objectFit: 'contain', objectPosition: 'top' }}
                      priority={index === currentIndex}
                      className="rounded-lg"
                    />
                  </div>
                ))}
              </div>

              {/* 슬라이드 네비게이션 화살표 */}
              <button 
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 backdrop-blur-sm z-10"
                aria-label="이전 이미지"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 backdrop-blur-sm z-10"
                aria-label="다음 이미지"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* 슬라이드 인디케이터 (점) */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {slideImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === currentIndex ? "bg-kakao" : "bg-white/50"
                    }`}
                    aria-label={`이미지 ${index + 1}로 이동`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* 트러스트 배지 */}
        <div className="mt-20 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8"
          >
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="bg-white/50 backdrop-blur-sm p-5 md:p-7 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center justify-center"
            >
              <h4 className="text-2xl md:text-3xl font-bold text-foreground bg-gradient-to-r from-kakao to-blue-500 bg-clip-text text-transparent">0원</h4>
              <p className="text-muted-foreground font-medium mt-1">3개월 비용</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="bg-white/50 backdrop-blur-sm p-5 md:p-7 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center justify-center"
            >
              <h4 className="text-2xl md:text-3xl font-bold text-foreground bg-gradient-to-r from-kakao to-blue-500 bg-clip-text text-transparent">3년+</h4>
              <p className="text-muted-foreground font-medium mt-1">마케팅 경력</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="bg-white/50 backdrop-blur-sm p-5 md:p-7 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center justify-center"
            >
              <h4 className="text-2xl md:text-3xl font-bold text-foreground bg-gradient-to-r from-kakao to-blue-500 bg-clip-text text-transparent">20,000건</h4>
              <p className="text-muted-foreground font-medium mt-1">무료 메시지</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 