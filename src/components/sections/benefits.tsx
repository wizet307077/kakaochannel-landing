"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";

export default function BenefitsSection() {
  const services = [
    {
      id: "setup",
      title: "채널 셋업",
      icon: "🔧",
      features: [
        "프로필 설정 및 최적화",
        "채널홈 디자인 및 구성",
        "자동응답 시나리오 설정",
        "웰컴 메시지 작성",
        "채널 추가 홍보물 제작"
      ]
    },
    {
      id: "coupon",
      title: "쿠폰 발행",
      icon: "🎟️",
      features: [
        "월 2회 맞춤형 쿠폰 제작",
        "시즌별 특별 할인 쿠폰",
        "신규 고객 유치 쿠폰",
        "재방문 유도 프로모션",
        "주문형 매장 맞춤 쿠폰"
      ]
    },
    {
      id: "marketing",
      title: "소식/메시지",
      icon: "📱",
      features: [
        "월 2회 매장 소식 발송",
        "신메뉴 소개 컨텐츠 제작",
        "이벤트 알림 메시지 작성",
        "고품질 이미지 콘텐츠 제작",
        "타겟 맞춤형 메시지 전략"
      ]
    },
    {
      id: "analytics",
      title: "데이터 분석",
      icon: "📊",
      features: [
        "쿠폰 사용률 분석",
        "친구수 증가 추이 분석",
        "메시지 참여율 리포트",
        "매출 연계 효과 측정",
        "월간 성과 리포트 제공"
      ]
    },
  ];

  const additionalServices = [
    "고객과의 1:1 채팅 관리",
    "카카오톡 예약 기능 설정",
    "카카오톡스토어 입점 대행",
    "네이버 스마트플레이스 연동",
    "영수증 리뷰 관리"
  ];

  return (
    <div className="section" id="benefits">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            채널메이트 <span className="text-blue-500 font-bold">무료 서비스</span> 혜택
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            소상공인을 위한 맞춤형 카카오톡채널 운영 대행 서비스를 제공합니다.
          </motion.p>
        </div>

        <Tabs defaultValue="setup" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 h-auto mb-12">
            {services.map((service) => (
              <TabsTrigger 
                key={service.id} 
                value={service.id}
                className="py-4 flex flex-col gap-2 data-[state=active]:text-kakao-foreground data-[state=active]:bg-kakao"
              >
                <span className="text-2xl">{service.icon}</span>
                <span>{service.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {services.map((service) => (
            <TabsContent key={service.id} value={service.id} className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="order-2 lg:order-1"
                >
                  <h3 className="text-2xl font-bold mb-6">{service.title}</h3>
                  <div className="space-y-4">
                    {service.features.map((feature, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="bg-kakao/20 rounded-full p-1 mt-1">
                          <Check className="h-4 w-4 text-kakao" />
                        </div>
                        <div>
                          <p className="font-medium">{feature}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="order-1 lg:order-2"
                >
                  <div className="aspect-[4/3] bg-secondary rounded-xl overflow-hidden border border-border flex items-center justify-center">
                    <div className="text-8xl">{service.icon}</div>
                  </div>
                </motion.div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <Separator className="my-16" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">확장 및 추가 서비스</h3>
            <p className="text-muted-foreground mb-8">
              카카오톡채널 기본 서비스와 함께 비즈니스에 필요한 추가 서비스도 지원해드립니다.
            </p>
            <div className="space-y-4">
              {additionalServices.map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="bg-kakao/20 rounded-full p-1">
                    <Check className="h-4 w-4 text-kakao" />
                  </div>
                  <p className="font-medium">{service}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-br from-kakao/20 to-secondary rounded-xl p-8 border border-border">
              <h4 className="text-xl font-bold mb-4">차별화 포인트</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="bg-kakao rounded-full p-1">
                    <Check className="h-4 w-4 text-kakao-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">비전화번호 기반</p>
                    <p className="text-sm text-muted-foreground">&apos;채널추가&apos;만으로 단골 확보, 개인정보 저장 無</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-kakao rounded-full p-1">
                    <Check className="h-4 w-4 text-kakao-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">재방문 유도</p>
                    <p className="text-sm text-muted-foreground">쿠폰·이벤트 등 매장소식 정기 발송</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-kakao rounded-full p-1">
                    <Check className="h-4 w-4 text-kakao-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">카카오 생태계 연동</p>
                    <p className="text-sm text-muted-foreground">카카오맵·Daum 리뷰·카카오내비 노출 관리</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-kakao rounded-full p-1">
                    <Check className="h-4 w-4 text-kakao-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">낮은 진입장벽</p>
                    <p className="text-sm text-muted-foreground">3개월 무료</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-kakao rounded-full p-1">
                    <Check className="h-4 w-4 text-kakao-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">메시지발송 무료</p>
                    <p className="text-sm text-muted-foreground">10,000여건 무료</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 