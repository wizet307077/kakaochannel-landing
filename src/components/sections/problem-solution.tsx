"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PhoneOff, MessageSquare, BadgePercent, UserPlus, Search } from "lucide-react";

export default function ProblemSolutionSection() {
  const problems = [
    {
      icon: <PhoneOff className="h-10 w-10 text-red-500" />,
      title: "고객 연락처 확보의 어려움",
      description: "개인정보 이슈로 전화번호 수집이 어려워 고객과의 지속적인 연락이 힘듭니다."
    },
    {
      icon: <UserPlus className="h-10 w-10 text-red-500" />,
      title: "단골 고객 확보 및 관리",
      description: "방문 고객을 단골로 만들고 지속적인 관계를 유지하는 것이 어렵습니다."
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-red-500" />,
      title: "마케팅 메시지 발송의 한계",
      description: "개별 문자메시지는 비용이 높고, 열람률이 낮아 효과적인 소통이 어렵습니다."
    },
    {
      icon: <BadgePercent className="h-10 w-10 text-red-500" />,
      title: "배달앱의 높은 중개 수수료",
      description: "중개수수료에 허공으로 사라지는 이익, 더 이상 안 됩니다!"
    }
  ];

  const solutions = [
    {
      icon: <MessageSquare className="h-10 w-10 text-kakao" />,
      title: "카카오톡채널로 단골고객 확보",
      description: "채널 추가만으로 단골고객과 연결되어 직접 소통할 수 있습니다."
    },
    {
      icon: <BadgePercent className="h-10 w-10 text-kakao" />,
      title: "자동화된 쿠폰 및 프로모션",
      description: "맞춤형 쿠폰과 프로모션을 통해 재방문율을 높이고 단골 고객을 확보합니다."
    },
    {
      icon: <UserPlus className="h-10 w-10 text-kakao" />,
      title: "단골관리 시스템으로 ‘수수료 0’",
      description: "직접 전화주문 받으세요! 민생회복지원금, 지역화폐도 결제 OK!"
    },
    {
      icon: <Search className="h-10 w-10 text-kakao" />,
      title: "네이버 스마트플레이스 리뷰관리",
      description: "신규고객유입, 네이버검색 노출최대화를 위한 전문적인 리뷰 관리를 제공합니다."
    }
  ];

  return (
    <div className="section bg-secondary/50" id="features">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            소상공인 디지털 마케팅의 <span className="text-red-500 font-bold">문제점</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            매장을 운영하면서 느끼는 고객 관리와 마케팅의 어려움을 채널메이트가 해결해드립니다.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-background border-red-100">
                <CardHeader>
                  <div className="mb-4">{problem.icon}</div>
                  <CardTitle>{problem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{problem.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            채널메이트의 <span className="text-blue-500 font-bold">해결책</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            카카오톡채널과 네이버스마트플레이스를 활용하여 효과적인 고객 관리 솔루션을 제공합니다.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-background border-kakao/30">
                <CardHeader>
                  <div className="mb-4">{solution.icon}</div>
                  <CardTitle>{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{solution.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 