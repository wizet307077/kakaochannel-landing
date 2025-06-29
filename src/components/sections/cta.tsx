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
              지금 바로 <span className="text-kakao-foreground bg-kakao px-2 py-1 rounded">무료 카카오톡채널</span> 서비스를 시작하세요
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg mb-8"
            >
              소상공인 10분 선착순! 3개월 무료로 카카오톡채널 운영을 체험해보세요.
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
              
              <p className="mt-4 text-sm text-muted-foreground">
                첫 상담은 무료입니다. 언제든지 문의해주세요.
              </p>
            </motion.div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <div className="bg-secondary/50 p-6 rounded-xl border border-border h-full">
              <div className="bg-kakao/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-xl font-bold mb-2">카톡으로 상담</h3>
              <p className="text-muted-foreground">
                실시간 채팅으로 궁금한 점을 편하게 문의하세요.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <div className="bg-secondary/50 p-6 rounded-xl border border-border h-full">
              <div className="bg-kakao/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✅</span>
              </div>
              <h3 className="text-xl font-bold mb-2">서비스 신청</h3>
              <p className="text-muted-foreground">
                간단한 정보 제공만으로 서비스가 시작됩니다.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <div className="bg-secondary/50 p-6 rounded-xl border border-border h-full">
              <div className="bg-kakao/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold mb-2">바로 시작</h3>
              <p className="text-muted-foreground">
                24시간 내에 채널이 개설되고 운영이 시작됩니다.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 