"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="relative overflow-hidden rounded-xl border border-kakao bg-gradient-to-r from-kakao/20 to-secondary p-8 md:p-12 lg:p-16">
          {/* 장식 요소들 */}
          <div className="absolute -right-20 -top-20 w-40 h-40 bg-kakao/30 rounded-full blur-xl"></div>
          <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-kakao/20 rounded-full blur-xl"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              지금 바로 <span className="text-kakao-foreground bg-kakao px-2 py-1 rounded">카카오톡채널, 네이버스마트플레이스 운영대행</span> 서비스를 신청하세요
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg mb-8"
            >
              소상공인 10분 선착순! 3개월 무료 서비스를 체험해보세요.
              전문가가 매장 홍보부터 고객 관리까지 모든 것을 도와드립니다.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
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
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 