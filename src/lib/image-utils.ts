/**
 * 이미지 로딩 최적화를 위한 유틸리티 함수
 */

// 일반적으로 사용할 저품질 블러 이미지 데이터 URL (10x7 크기 회색조 이미지)
export const shimmerBlurDataURL = 'data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjcwMCIgaGVpZ2h0PSI0NzUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzMzIiBvZmZzZXQ9IjIwJSIgLz4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzIyMiIgb2Zmc2V0PSI1MCUiIC8+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzMzMiIG9mZnNldD0iNzAlIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjcwMCIgaGVpZ2h0PSI0NzUiIGZpbGw9IiMzMzMiIC8+CiAgPHJlY3QgaWQ9InIiIHdpZHRoPSI3MDAiIGhlaWdodD0iNDc1IiBmaWxsPSJ1cmwoI2cpIiAvPgogIDxhbmltYXRlIHhsaW5rOmhyZWY9IiNyIiBhdHRyaWJ1dGVOYW1lPSJ4IiBmcm9tPSItNzAwIiB0bz0iNzAwIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgIC8+Cjwvc3ZnPg==';

// 카카오 브랜드 색상 기반의 블러 이미지 데이터 URL
export const kakaoBlurDataURL = 'data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjcwMCIgaGVpZ2h0PSI0NzUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkVFNTAwIiBvZmZzZXQ9IjIwJSIgLz4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRDIwMCIgb2Zmc2V0PSI1MCUiIC8+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRUU1MDAiIG9mZnNldD0iNzAlIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjcwMCIgaGVpZ2h0PSI0NzUiIGZpbGw9IiNGRUU1MDAiIC8+CiAgPHJlY3QgaWQ9InIiIHdpZHRoPSI3MDAiIGhlaWdodD0iNDc1IiBmaWxsPSJ1cmwoI2cpIiAvPgogIDxhbmltYXRlIHhsaW5rOmhyZWY9IiNyIiBhdHRyaWJ1dGVOYW1lPSJ4IiBmcm9tPSItNzAwIiB0bz0iNzAwIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgIC8+Cjwvc3ZnPg==';

// 이미지 경로를 중앙 관리
export const imagesPaths = {
  // 메인 이미지
  mainImage: "/images/img_first.jpg",
  
  // 활용 사례 이미지들
  showcaseImages: [
    "/images/001.jpg",
    "/images/002.jpg",
    "/images/003.jpg",
    "/images/004.jpg",
    "/images/005.jpg",
    "/images/006.jpg",
    "/images/007.jpg",
  ]
};

// 이미지 크기를 미리 계산하여 CLS(Cumulative Layout Shift) 방지 
export const imagesSizes = {
  thumbnailSizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  modalSizes: "95vw",
  heroSizes: "(max-width: 1200px) 100vw, 50vw",
}; 