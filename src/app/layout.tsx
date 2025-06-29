import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "카카오톡채널 무료대행 서비스 | 채널메이트",
  description: "소상공인을 위한 카카오톡채널 무료 개설 및 운영 대행 서비스. 단골 확보·매장 소식·쿠폰 발송까지 자동으로 관리해드립니다!",
  keywords: "카카오톡채널, 카카오톡, 소상공인, 마케팅, 고객관리, CRM, 무료대행",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
