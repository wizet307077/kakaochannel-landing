"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
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
              카카오톡채널 개설 및 운영 <span className="text-kakao font-extrabold">무료 대행!</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              전화번호 없이 &apos;채널 추가&apos; 한 번이면 OK—단골 확보·매장 소식·쿠폰 발송까지 자동으로 관리해드립니다!
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              배달앱 수수료 없이 손님 주문을 직접 받아보세요!
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
            <div className="aspect-[4/3] relative rounded-xl overflow-hidden border border-border shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-100 via-yellow-50 to-white flex items-center justify-center">
                <div className="max-w-[80%] aspect-[3/5] rounded-xl bg-white shadow-lg border border-gray-200 overflow-hidden flex flex-col">
                  {/* 카카오톡채널 인터페이스 */}
                  <div className="bg-kakao p-3 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-white/20"></div>
                    <div className="ml-2 text-kakao-foreground font-medium">
                      채널메이트
                    </div>
                  </div>
                  <div className="flex-1 p-4 flex flex-col gap-3">
                    <div className="h-10 bg-gray-100 rounded-lg w-full"></div>
                    <div className="h-28 bg-gray-100 rounded-lg w-full"></div>
                    <div className="h-20 bg-yellow-100 rounded-lg w-full flex items-center justify-center">
                      <div className="text-sm font-medium text-yellow-800">
                        첫 방문 할인쿠폰
                      </div>
                    </div>
                    <div className="h-10 bg-gray-100 rounded-lg w-full"></div>
                  </div>
                </div>
              </div>
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
                <span className="text-lg font-bold text-kakao-foreground">10,000</span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">메시지 비용</p>
                <p className="font-medium">무료 발송 지원</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 