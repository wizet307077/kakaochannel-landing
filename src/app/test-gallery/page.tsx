"use client";

import ImageShowcaseSection from "@/components/sections/image-showcase";

export default function TestGalleryPage() {
  return (
    <main className="min-h-screen">
      <div className="py-12">
        <h1 className="text-3xl font-bold text-center mb-8">이미지 갤러리 테스트</h1>
        <ImageShowcaseSection />
      </div>
    </main>
  );
} 