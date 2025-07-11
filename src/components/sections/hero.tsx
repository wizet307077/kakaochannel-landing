"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeroSection() {
  // 이제 단일 이미지만 사용
  const image = { src: "/images/1-3.jpg", alt: "카카오톡 채널 서비스" };

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
            리뷰가 고객을 부르고, 고객이 리뷰를 남기는 마법 같은 선순환이 시작됩니다!
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
            {/* 단일 이미지를 컨테이너 없이 표시, 상단이 잘리지 않도록 objectFit 수정 */}
            <div className="relative w-full aspect-[4/3]">
              <Image 
                src={image.src} 
                alt={image.alt} 
                fill
                style={{ objectFit: 'contain', objectPosition: 'top' }}
                className="rounded-lg"
                priority
              />
            </div>
            
          
            
            {/* 장식 요소들 */}
            <div className="absolute -right-4 -top-4 w-20 h-20 bg-kakao/30 rounded-full blur-xl"></div>
            <div className="absolute -left-4 -bottom-4 w-40 h-40 bg-blue-500/20 rounded-full blur-xl"></div>
          </motion.div>
        </div>
        
        {/* 트러스트 배지 */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h4 className="text-2xl md:text-3xl font-bold text-foreground">10,000+</h4>
            <p className="text-muted-foreground">등록 매장</p>
          </div>
          <div>
            <h4 className="text-2xl md:text-3xl font-bold text-foreground">92%</h4>
            <p className="text-muted-foreground">계약 연장률</p>
          </div>
          <div>
            <h4 className="text-2xl md:text-3xl font-bold text-foreground">67%</h4>
            <p className="text-muted-foreground">리뷰 증가율</p>
          </div>
          <div>
            <h4 className="text-2xl md:text-3xl font-bold text-foreground">45%</h4>
            <p className="text-muted-foreground">방문 증가율</p>
          </div>
        </div>
      </div>
    </div>
  );
} 