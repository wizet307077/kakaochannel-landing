"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, CheckCircle, Settings, BarChart } from "lucide-react";
import Image from "next/image";

export default function ProcessSection() {
  const steps = [
    {
      icon: <MessageCircle className="h-8 w-8 text-kakao" />,
      title: "카카오톡 상담 신청",
      description: "홈페이지에서 '카톡 상담 시작' 버튼을 통해 채널메이트와 상담을 시작합니다.",
      delay: 0
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-kakao" />,
      title: "무료 서비스 신청",
      description: "소상공인 점주님을 위한 무료 카카오톡채널 대행 서비스를 신청합니다.",
      delay: 0.2
    },
    {
      icon: <Settings className="h-8 w-8 text-kakao" />,
      title: "셋업 및 운영",
      description: "채널메이트가 카카오톡채널, 네이버스마트플레이스 운영을 대신해 드립니다.",
      delay: 0.4
    },
    {
      icon: <BarChart className="h-8 w-8 text-kakao" />,
      title: "성과 분석 및 개선",
      description: "월별 데이터를 기반으로 지속적인 개선과 효과 분석을 진행합니다.",
      delay: 0.6
    }
  ];

  const ownerResponsibilities = [
    {
      title: "QR 코드 활용",
      description: "QR코드를 활용하여 고객의 채널 추가, 리뷰를 유도합니다."
    },
    {
      title: "혜택 안내",
      description: "고객에게 이벤트 응모시 받을 수 있는 혜택을 안내합니다."
    },
    {
      title: "소식 자료 제공",
      description: "월 2회 매장 소식 및 신메뉴 등의 자료를 채널메이트에 제공합니다."
    },
    {
      title: "피드백 공유",
      description: "고객 반응 및 피드백을 채널메이트에 공유하여 서비스를 개선합니다."
    }
  ];

  return (
    <div className="section bg-secondary/50" id="process">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            이용 <span className="text-foreground font-bold">프로세스</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            카카오톡채널 무료 대행 서비스는 아래 단계를 통해 진행됩니다.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: step.delay }}
            >
              <Card className="h-full bg-background border border-kakao/20 relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-12 h-12 bg-kakao/10 rounded-full"></div>
                <div className="absolute right-2 top-2 w-6 h-6 bg-kakao/20 rounded-full"></div>
                <CardContent className="p-6">
                  <div className="bg-kakao/10 rounded-full p-3 inline-flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    <span className="inline-block bg-kakao/20 w-6 h-6 text-sm rounded-full mr-2 text-center">
                      {index + 1}
                    </span> {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-xl overflow-hidden border border-border bg-white shadow-lg">
              <div className="p-4 text-center">
                <Image 
                  src="/images/7.png" 
                  alt="채널 추가 QR 코드" 
                  width={300}
                  height={300}
                  style={{ width: '100%', height: 'auto', maxWidth: '300px' }}
                  className="mx-auto"
                  priority
                />
                <p className="font-medium text-lg mt-4 mb-2">이벤트 응모 QR 코드 활용</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">점주님의 역할</h3>
            <p className="text-muted-foreground mb-8">
              서비스 효과를 극대화하기 위해 점주님께서 도와주실 간단한 사항들입니다.
            </p>
            <div className="space-y-6">
              {ownerResponsibilities.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <h4 className="text-lg font-medium mb-1">{item.title}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 