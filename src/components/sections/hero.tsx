"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    { src: "/images/1.png", alt: "카카오톡 채널 인터페이스" },
    { src: "/images/1-1.jpeg", alt: "카카오톡 채널 서비스 예시" },
    { src: "/images/1-2.jpeg", alt: "카카오톡 채널 활용 사례" }
  ];

  // 자동 이미지 전환 효과
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // 4초마다 이미지 전환
    return () => clearInterval(interval);
  }, []);

  // 이미지 수동 전환 함수
  const changeImage = (index: number) => {
    setCurrentImage(index);
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
              카카오톡채널, 네이버스마트플레이스 운영대행 <span className="text-kakao font-extrabold"> 3개월 무료!</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              전화번호 없이 &apos;채널 추가&apos; 한 번이면 OK—단골 확보·매장 소식·쿠폰 발송까지 자동으로 관리해드립니다!
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
            리뷰 폭발 → 검색 상위! 네이버 고객 유입, 우리가 터뜨립니다!
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
            className="relative"
          >
            {/* 이미지 캐러셀 컨테이너 */}
            <div className="aspect-[4/3] relative rounded-xl overflow-hidden border border-border shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-100 via-yellow-50 to-white flex items-center justify-center">
                {/* 이미지 슬라이더 */}
                <div className="relative w-[80%] h-[80%] rounded-xl bg-white shadow-lg border border-gray-200">
                  {images.map((image, index) => (
                    <div 
                      key={index}
                      className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                        currentImage === index 
                          ? "opacity-100 translate-x-0" 
                          : index < currentImage 
                            ? "opacity-0 -translate-x-full" 
                            : "opacity-0 translate-x-full"
                      }`}
                    >
                      <div className="relative w-full h-full">
                        <Image 
                          src={image.src} 
                          alt={image.alt} 
                          fill
                          style={{ objectFit: 'cover' }}
                          priority={index === 0}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* 이미지 선택 도트 및 화살표 */}
            <div className="flex justify-center items-center mt-4 gap-3">
              <button
                className="text-gray-600 hover:text-kakao"
                onClick={() => changeImage((currentImage - 1 + images.length) % images.length)}
                aria-label="이전 이미지"
              >
                ◀
              </button>
              
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentImage === index ? "bg-kakao scale-125" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => changeImage(index)}
                  aria-label={`이미지 ${index + 1} 보기`}
                />
              ))}
              
              <button
                className="text-gray-600 hover:text-kakao"
                onClick={() => changeImage((currentImage + 1) % images.length)}
                aria-label="다음 이미지"
              >
                ▶
              </button>
            </div>
            
            {/* 출처 문구 */}
            <div className="text-center mt-2">
              <p className="text-sm text-gray-700">- 이미지출처 : 카카오단골만들기지원센터</p>
            </div>
            
            {/* 장식 요소들 */}
            <div className="absolute -right-4 -top-4 w-20 h-20 bg-kakao/30 rounded-full blur-xl"></div>
            <div className="absolute -left-4 -bottom-4 w-40 h-40 bg-blue-500/20 rounded-full blur-xl"></div>
          </motion.div>
        </div>
        
        {/* 트러스트 배지 */}
        <div className="mt-16 mb-8 border-y border-border py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div className="flex items-center md:justify-start gap-3 pl-4">
              <div className="w-12 h-12 rounded-full bg-kakao/20 flex items-center justify-center">
                <span className="text-lg font-bold text-kakao-foreground">3+</span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">경력</p>
                <p className="font-medium">3년 이상 마케팅 경험</p>
              </div>
            </div>
            <div className="flex items-center md:justify-start gap-3 pl-4">
              <div className="w-12 h-12 rounded-full bg-kakao/20 flex items-center justify-center">
                <span className="text-lg font-bold text-kakao-foreground">0</span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">초기 비용</p>
                <p className="font-medium">3개월 무료 이용</p>
              </div>
            </div>
            <div className="flex items-center md:justify-start gap-3 pl-4">
              <div className="w-12 h-12 rounded-full bg-kakao/20 flex items-center justify-center">
                <span className="text-lg font-bold text-kakao-foreground">10K</span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">메시지 비용</p>
                <p className="font-medium">10,000건 무료 발송</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 