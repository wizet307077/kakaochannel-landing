import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary py-12 mt-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-4">
              <span className="text-kakao font-bold">채널</span>메이트
            </h3>
            <p className="text-muted-foreground max-w-md">
              디지털 마케팅 사각지대 소상공인의 &apos;로컬 밀착형 CRM 파트너&apos;
              카카오톡채널 무료 개설 및 운영 대행 서비스
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">서비스</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                  서비스 소개
                </Link>
              </li>
              <li>
                <Link href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">
                  서비스 혜택
                </Link>
              </li>
              <li>
                <Link href="#process" className="text-muted-foreground hover:text-foreground transition-colors">
                  이용 방법
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">문의</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="http://pf.kakao.com/_xnSYrn/chat" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  카톡으로 채팅요청
                </a>
              </li>
              <li>
                <span className="text-muted-foreground">
                  이메일: 307077@naver.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} 채널메이트. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 