// 대륙 목록
export const CONTINENTS = [
  '아시아',
  '유럽',
  '북미',
  '남미',
  '아프리카',
  '오세아니아',
] as const;

export type Continent = (typeof CONTINENTS)[number];

// 여행 카테고리
export const TRAVEL_CATEGORIES = [
  '도시',
  '자연',
  '해변',
  '문화',
  '모험',
  '휴양',
] as const;

export type TravelCategory = (typeof TRAVEL_CATEGORIES)[number];

// 장르 색상 맵 (마커 색상용)
export const GENRE_COLORS: Record<string, string> = {
  indie: '#6366f1', // 인디고
  pop: '#ef4444', // 레드
  rock: '#f97316', // 오렌지
  jazz: '#22c55e', // 그린
  classical: '#a855f7', // 퍼플
  electronic: '#06b6d4', // 시안
  hiphop: '#eab308', // 옐로우
  rnb: '#ec4899', // 핑크
};

// 대륙별 기본 좌표
export const CONTINENT_CENTERS: Record<Continent, [number, number]> = {
  아시아: [34.0479, 100.6197],
  유럽: [54.526, 15.2551],
  북미: [54.526, -105.2551],
  남미: [-8.7832, -55.4915],
  아프리카: [-8.7832, 34.5085],
  오세아니아: [-25.2744, 133.7751],
};
