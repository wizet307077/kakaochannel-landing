"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <span className="text-kakao">채널</span>메이트
        </Link>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-foreground/70 hover:text-foreground transition-colors">
            서비스 소개
          </Link>
          <Link href="#benefits" className="text-foreground/70 hover:text-foreground transition-colors">
            혜택
          </Link>
          <Link href="#process" className="text-foreground/70 hover:text-foreground transition-colors">
            이용 방법
          </Link>
          <Link href="#contact" className="text-foreground/70 hover:text-foreground transition-colors">
            문의하기
          </Link>
          <Button className="bg-kakao hover:bg-kakao/90 text-kakao-foreground">
            카톡 상담 시작
          </Button>
        </nav>

        {/* 모바일 메뉴 토글 버튼 */}
        <button 
          className="md:hidden text-foreground"
          onClick={toggleMenu}
          aria-label="메뉴 열기"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {mobileMenuOpen && (
        <div className="md:hidden container py-4 bg-background border-t">
          <nav className="flex flex-col space-y-4">
            <Link 
              href="#features" 
              className="text-foreground/70 hover:text-foreground transition-colors py-2"
              onClick={toggleMenu}
            >
              서비스 소개
            </Link>
            <Link 
              href="#benefits" 
              className="text-foreground/70 hover:text-foreground transition-colors py-2"
              onClick={toggleMenu}
            >
              혜택
            </Link>
            <Link 
              href="#process" 
              className="text-foreground/70 hover:text-foreground transition-colors py-2"
              onClick={toggleMenu}
            >
              이용 방법
            </Link>
            <Link 
              href="#contact" 
              className="text-foreground/70 hover:text-foreground transition-colors py-2"
              onClick={toggleMenu}
            >
              문의하기
            </Link>
            <Button 
              className="bg-kakao hover:bg-kakao/90 text-kakao-foreground w-full"
              onClick={toggleMenu}
            >
              카톡 상담 시작
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
} 