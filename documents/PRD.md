# 음악과 함께하는 여행 기록장 - 간소화 PRD (3시간 MVP)

## 1. 제품 개요

### 1.1 제품명
**Melody Trip (Simple)** - 음악과 함께하는 간단한 여행 기록

### 1.2 제품 설명
여행 경험을 **음악과 함께** 기록하고, **세계 지도에서 시각화**하며, AI 챗봇이 음악 취향에 맞는 여행지를 추천해주는 개인용 웹 애플리케이션입니다.

### 1.3 핵심 가치 (유지!)
- **음악 중심 여행 기록**: 각 여행마다 대표 음악을 함께 저장
- **세계 지도 시각화**: 다녀온 곳을 2D 지도에 마커로 표시 ⭐ 추가
- **음악 장르별 분류**: 내가 어떤 장르 음악과 함께 여행했는지 한눈에 파악
- **음악 기반 추천**: 좋아하는 음악의 분위기에 맞는 여행지 추천

---

## 2. 제품 범위 (3시간 MVP)

### 2.1 포함 기능 (Must-Have)

#### 2.1.1 여행 + 음악 기록 관리 ⭐ 핵심
- **여행 기록 생성**
  - 여행지 입력 (텍스트)
  - 국가 입력 (텍스트)
  - **대륙 선택** (드롭다운: 아시아, 유럽, 북미, 남미, 아프리카, 오세아니아) ⭐ 추가
  - **여행 카테고리 선택** (드롭다운: 도시, 자연, 해변, 문화, 모험, 휴양) ⭐ 추가
  - 날짜 입력 (시작일)
  - **좌표 입력** (위도, 경도 - 지도용)
  - **음악 정보 입력** (수동)
    - 곡명 (필수)
    - 아티스트명 (필수)
    - 장르 선택 (드롭다운: 팝, 인디, 클래식, 록, 재즈, 힙합, 기타)
  - 메모 입력 (선택사항)

- **여행 기록 조회**
  - 전체 여행 목록 (카드 형태)
  - 음악 정보 함께 표시
  - 장르별 색상 구분

- **여행 기록 수정/삭제**
  - 간단한 편집 페이지
  - 삭제 확인 모달

#### 2.1.2 다양한 통계 시각화 ⭐ 핵심 (강화!)
- **음악 장르별 통계**
  - 장르별 여행 횟수 (막대 차트 또는 카드)
  - 가장 많이 들은 장르 표시
  - 장르별 색상으로 시각화

- **대륙별 여행 통계** ⭐ 새로 추가
  - 대륙별 여행 횟수 (아시아, 유럽, 북미, 남미, 아프리카, 오세아니아)
  - 대륙별 방문 국가 수
  - 대륙 + 장르 교차 통계

- **여행 카테고리별 통계** ⭐ 새로 추가
  - 카테고리별 여행 횟수 (도시, 자연, 해변, 문화, 모험, 휴양)
  - 카테고리 + 장르 교차 통계
  - 내가 선호하는 여행 스타일 파악

- **기본 통계**
  - 총 여행 횟수
  - 방문한 국가 수
  - 저장된 음악 수

- **최근 여행 목록**
  - 음악 정보 포함
  - 장르별 색상 뱃지
  - 대륙 및 카테고리 표시

#### 2.1.3 세계 지도 시각화 ⭐ 핵심 (추가!)
- **2D 인터랙티브 지도**
  - Leaflet 또는 Mapbox 사용
  - 다녀온 여행지 마커로 표시
  - 장르별 색상으로 마커 구분

- **마커 상호작용**
  - 마커 클릭 시 여행 정보 팝업
  - 여행지명, 날짜, 음악 정보 표시

- **간단한 통계**
  - 방문한 국가 수
  - 총 마커 개수

#### 2.1.4 음악 기반 AI 챗봇 ⭐ 핵심
- **음악 입력 기반 추천**
  - 사용자가 음악 제목 + 아티스트 입력
  - 또는 장르 직접 언급
  - 예: "잔잔한 인디 음악 좋아해, 어디 갈까?"

- **여행지 추천**
  - 음악의 분위기 분석
  - 저장된 여행 기록 참고
  - 추천 이유 설명

- **다중 턴 대화**
  - 후속 질문 가능
  - 예: "좀 더 따뜻한 곳은?"

### 2.2 제외 기능 (Out of Scope)

❌ 로그인/인증 (단일 사용자)
❌ 사진 업로드
❌ Spotify API 통합 (수동 입력만)
❌ 감정 태그
❌ 복잡한 차트 (간단한 막대 차트만)
❌ 타임라인 뷰
❌ 데이터 내보내기
❌ 3D 지구본 (2D 지도만)
❌ 지도 필터링 (장르별, 연도별 - 시간 부족)
❌ 마커 클러스터링

---

## 3. 기술 스택

| 계층 | 기술 | 이유 |
|------|------|------|
| **프론트엔드** | Next.js 14 | 빠른 설정, SSR |
| **스타일링** | Tailwind CSS | 빠른 UI 구성 |
| **지도** | Leaflet + React-Leaflet | 2D 지도 시각화 |
| **차트** | Recharts (선택) | 간단한 막대 차트 |
| **백엔드** | Supabase | DB + API 일체형 |
| **데이터베이스** | PostgreSQL (via Supabase) | 관계형 DB |
| **AI 챗봇** | OpenAI API (GPT-4) | 음악 분석 + 추천 |
| **배포** | Vercel | Next.js 최적화 |

---

## 4. 데이터 구조

### 4.1 Supabase 테이블

#### genres (음악 장르 마스터 데이터)

```sql
CREATE TABLE genres (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT UNIQUE NOT NULL,
    code TEXT UNIQUE NOT NULL,
    color TEXT NOT NULL
);

-- 초기 데이터
INSERT INTO genres (name, code, color) VALUES
    ('팝', 'pop', '#FF6B6B'),
    ('인디', 'indie', '#4ECDC4'),
    ('클래식', 'classical', '#9B59B6'),
    ('록', 'rock', '#F39C12'),
    ('재즈', 'jazz', '#27AE60'),
    ('힙합', 'hiphop', '#2C3E50'),
    ('기타', 'other', '#95A5A6');
```

#### songs (음악 정보)

```sql
CREATE TABLE songs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    artist TEXT NOT NULL,
    genre_id UUID REFERENCES genres(id) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_songs_genre ON songs(genre_id);
```

#### trips (여행 기록)

```sql
CREATE TABLE trips (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    destination TEXT NOT NULL,
    country TEXT NOT NULL,
    continent TEXT NOT NULL,
    travel_category TEXT NOT NULL,
    travel_date DATE NOT NULL,
    latitude NUMERIC(10, 8),
    longitude NUMERIC(11, 8),
    song_id UUID REFERENCES songs(id) NOT NULL,
    notes TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_trips_song ON trips(song_id);
CREATE INDEX idx_trips_date ON trips(travel_date DESC);
CREATE INDEX idx_trips_coords ON trips(latitude, longitude);
CREATE INDEX idx_trips_continent ON trips(continent);
CREATE INDEX idx_trips_category ON trips(travel_category);
```

---

## 5. 페이지 구조

### 5.1 사이트맵

```
Melody Trip (Simple)
│
├─ 대시보드 (/)
│  ├─ 음악 장르별 통계 (차트/카드)
│  ├─ 기본 통계 (총 여행, 국가 수 등)
│  ├─ 최근 여행 목록 (음악 정보 포함)
│  └─ + 새 여행 추가 버튼
│
├─ 새 여행 추가 (/add)
│  └─ 폼 (여행지, 국가, 날짜, 좌표, 음악 정보, 메모)
│
├─ 여행 편집 (/edit/:id)
│  └─ 편집 폼
│
├─ 세계 지도 (/map) ⭐ 추가
│  ├─ 2D 인터랙티브 지도
│  ├─ 여행지 마커 (장르별 색상)
│  └─ 마커 클릭 → 여행 정보 팝업
│
└─ 챗봇 (/chatbot)
   ├─ 채팅 인터페이스
   └─ 음악 기반 여행지 추천
```

---

## 6. 핵심 코드 스니펫

### 6.1 세계 지도 컴포넌트 (Leaflet)

```javascript
// app/map/page.js
'use client'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

export default function MapPage({ trips }) {
  // 장르별 마커 색상
  const getMarkerIcon = (genreColor) => {
    return L.divIcon({
      className: 'custom-marker',
      html: `<div style="background-color: ${genreColor}; width: 25px; height: 25px; border-radius: 50%; border: 2px solid white;"></div>`,
      iconSize: [25, 25]
    })
  }

  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      style={{ height: '600px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />

      {trips.map(trip => (
        trip.latitude && trip.longitude && (
          <Marker
            key={trip.id}
            position={[trip.latitude, trip.longitude]}
            icon={getMarkerIcon(trip.song.genre.color)}
          >
            <Popup>
              <div>
                <h3>{trip.destination}, {trip.country}</h3>
                <p>{trip.travel_date}</p>
                <p>🎵 {trip.song.title} - {trip.song.artist}</p>
                <p>장르: {trip.song.genre.name}</p>
              </div>
            </Popup>
          </Marker>
        )
      ))}
    </MapContainer>
  )
}
```

### 6.2 여행 + 음악 + 좌표 + 통계 데이터 생성

```javascript
// app/add/actions.js
export async function createTrip(formData) {
  // 1. 음악 먼저 생성
  const { data: song } = await supabase
    .from('songs')
    .insert([{
      title: formData.songTitle,
      artist: formData.songArtist,
      genre_id: formData.genreId
    }])
    .select()
    .single()

  // 2. 여행 생성 (좌표, 대륙, 카테고리 포함)
  const { data: trip } = await supabase
    .from('trips')
    .insert([{
      destination: formData.destination,
      country: formData.country,
      continent: formData.continent,
      travel_category: formData.travelCategory,
      travel_date: formData.travelDate,
      latitude: formData.latitude,
      longitude: formData.longitude,
      song_id: song.id,
      notes: formData.notes
    }])

  return trip
}
```

### 6.3 다양한 통계 시각화 ⭐ 새로 추가

```javascript
// app/dashboard/page.js
export default async function Dashboard() {
  // 모든 여행 데이터 조회
  const { data: trips } = await supabase
    .from('trips')
    .select(`
      *,
      song:songs (
        title,
        artist,
        genre:genres (
          name,
          color
        )
      )
    `)

  // 1. 장르별 통계
  const genreStats = trips.reduce((acc, trip) => {
    const genreName = trip.song.genre.name
    if (!acc[genreName]) {
      acc[genreName] = {
        name: genreName,
        color: trip.song.genre.color,
        count: 0
      }
    }
    acc[genreName].count++
    return acc
  }, {})

  // 2. 대륙별 통계 ⭐ 새로 추가
  const continentStats = trips.reduce((acc, trip) => {
    const continent = trip.continent
    if (!acc[continent]) {
      acc[continent] = {
        name: continent,
        count: 0,
        countries: new Set()
      }
    }
    acc[continent].count++
    acc[continent].countries.add(trip.country)
    return acc
  }, {})

  // 3. 카테고리별 통계 ⭐ 새로 추가
  const categoryStats = trips.reduce((acc, trip) => {
    const category = trip.travel_category
    if (!acc[category]) {
      acc[category] = { name: category, count: 0 }
    }
    acc[category].count++
    return acc
  }, {})

  return (
    <div>
      {/* 장르별 통계 */}
      <StatsSection title="🎵 장르별 통계">
        {Object.values(genreStats).map(stat => (
          <StatCard
            key={stat.name}
            name={stat.name}
            count={stat.count}
            color={stat.color}
          />
        ))}
      </StatsSection>

      {/* 대륙별 통계 */}
      <StatsSection title="🌍 대륙별 통계">
        {Object.values(continentStats).map(stat => (
          <StatCard
            key={stat.name}
            name={stat.name}
            count={stat.count}
            subtitle={`${stat.countries.size}개국 방문`}
          />
        ))}
      </StatsSection>

      {/* 카테고리별 통계 */}
      <StatsSection title="✈️ 여행 카테고리별 통계">
        {Object.values(categoryStats).map(stat => (
          <StatCard
            key={stat.name}
            name={stat.name}
            count={stat.count}
          />
        ))}
      </StatsSection>
    </div>
  )
}
```

---

## 7. 3시간 구현 계획

### 7.1 Step-by-Step

| 시간 | 작업 | 상세 |
|------|------|------|
| **0:00-0:20** | Supabase 설정 | - 프로젝트 생성<br>- genres, songs, trips 테이블 생성<br>- genres 마스터 데이터 삽입 |
| **0:20-0:40** | Next.js 설정 | - create-next-app<br>- Tailwind CSS<br>- Supabase 클라이언트<br>- Leaflet 설치 |
| **0:40-1:10** | 대시보드 페이지 | - 여행 + 음악 조회 (JOIN)<br>- 장르별 통계 표시<br>- 최근 여행 카드 |
| **1:10-1:50** | 새 여행 추가 | - 폼 컴포넌트<br>- 음악 + 좌표 입력<br>- songs + trips 생성 |
| **1:50-2:30** | 세계 지도 페이지 ⭐ | - Leaflet 지도<br>- 마커 표시 (장르별 색상)<br>- 마커 팝업 |
| **2:30-2:50** | 챗봇 페이지 | - 채팅 UI<br>- API Route<br>- OpenAI 통합 |
| **2:50-3:00** | 테스트 & 배포 | - 기능 테스트<br>- Vercel 배포 |

### 7.2 필수 체크리스트

```
□ Supabase: genres, songs, trips 테이블 생성 (좌표 포함)
□ genres 마스터 데이터 7개 삽입
□ Leaflet 설치 및 설정
□ 대시보드: 여행 + 음악 JOIN 조회
□ 대시보드: 장르별 통계 표시
□ 새 여행 추가: 음악 + 좌표 입력란 포함
□ 새 여행 추가: songs + trips 순차 생성
□ 세계 지도: Leaflet 지도 렌더링
□ 세계 지도: 마커 표시 (장르별 색상)
□ 세계 지도: 마커 클릭 시 팝업
□ 챗봇: 음악 기반 프롬프트 작성
□ 챗봇: 과거 여행 기록 컨텍스트 전달
□ Vercel 배포 완료
```

---

## 8. UI 스케치

### 8.1 대시보드 페이지 (/) ⭐ 강화된 통계

```
┌───────────────────────────────────────────────────────────┐
│  🎵 Melody Trip                    [지도] [챗봇] [+여행]  │
├───────────────────────────────────────────────────────────┤
│                                                           │
│  🎵 장르별 여행 통계                                       │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐    │
│  │ 인디 🎸  │ │ 팝 🎤    │ │ 재즈 🎺  │ │ 록 🎸    │    │
│  │  5회     │ │  3회     │ │  2회     │ │  1회     │    │
│  │ #4ECDC4  │ │ #FF6B6B  │ │ #27AE60  │ │ #F39C12  │    │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘    │
│                                                           │
│  🌍 대륙별 여행 통계 ⭐ 새로 추가                         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐                 │
│  │ 유럽 🇪🇺 │ │ 아시아 🌏│ │ 북미 🌎  │                 │
│  │  4회     │ │  3회     │ │  2회     │                 │
│  │ 3개국    │ │ 2개국    │ │ 1개국    │                 │
│  └──────────┘ └──────────┘ └──────────┘                 │
│                                                           │
│  ✈️ 여행 카테고리별 통계 ⭐ 새로 추가                     │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐                 │
│  │ 도시 🏙️ │ │ 문화 🏛️ │ │ 자연 🏔️ │                 │
│  │  5회     │ │  3회     │ │  1회     │                 │
│  └──────────┘ └──────────┘ └──────────┘                 │
│                                                           │
│  📊 기본 통계                                             │
│  총 11회 | 6개국 | 11곡                                   │
│                                                           │
│  최근 여행                                                 │
│  ┌────────────────────────────────────────────────┐      │
│  │ 🟣 Paris, France (유럽 · 문화) 2024-06-15     │      │
│  │ 🎵 La vie en rose - Édith Piaf [클래식]        │      │
│  │ "로맨틱한 여행이었어요"                        │      │
│  │                              [편집] [삭제]      │      │
│  └────────────────────────────────────────────────┘      │
│                                                           │
└───────────────────────────────────────────────────────────┘
```

### 8.2 세계 지도 페이지 (/map)

```
┌───────────────────────────────────────────────────────────┐
│  🎵 Melody Trip                    [대시보드] [챗봇] [+]   │
├───────────────────────────────────────────────────────────┤
│  ← 뒤로가기           세계 지도                            │
│                                                           │
│  📊 통계: 5개국 방문 | 10개 도시                           │
│                                                           │
│  ┌─────────────────────────────────────────────────┐     │
│  │                                                 │     │
│  │         🗺️ 인터랙티브 세계 지도                │     │
│  │                                                 │     │
│  │    🔵(도쿄)           🟣(파리)                  │     │
│  │                                                 │     │
│  │              🟢(뉴욕)                           │     │
│  │                                                 │     │
│  │  🔴(런던)              🟠(바르셀로나)          │     │
│  │                                                 │     │
│  │               [줌인 +] [줌아웃 -]              │     │
│  └─────────────────────────────────────────────────┘     │
│                                                           │
│  [마커 클릭 시 팝업]                                       │
│  ┌────────────────────────┐                              │
│  │ 🟣 Paris, France       │                              │
│  │ 2024-06-15             │                              │
│  │ 🎵 La vie en rose      │                              │
│  │    Édith Piaf          │                              │
│  │ 장르: 클래식           │                              │
│  └────────────────────────┘                              │
│                                                           │
│  장르 범례:                                               │
│  🔵 인디  🔴 팝  🟣 클래식  🟠 록  🟢 재즈              │
└───────────────────────────────────────────────────────────┘
```

---

## 9. 성공 기준

| 기준 | 평가 |
|------|------|
| **음악-여행 연결** | 모든 여행에 음악 정보 저장됨 |
| **세계 지도 시각화** | 좌표가 있는 여행이 지도에 마커로 표시됨 |
| **장르별 색상 구분** | 지도 마커가 장르별로 다른 색상 |
| **다양한 통계 시각화** ⭐ | 장르별, 대륙별, 카테고리별 통계 모두 표시됨 |
| **대륙별 분류** ⭐ | 대시보드에서 대륙별 통계 확인 가능 |
| **카테고리별 분류** ⭐ | 대시보드에서 카테고리별 통계 확인 가능 |
| **음악 기반 추천** | 챗봇이 음악 취향 기반 추천 제공 |
| **구현 시간** | 3시간 이내 |
| **배포** | Vercel 배포 완료 |

---

## 10. 마무리

이 간소화된 PRD는 **음악과 여행의 연결 + 세계 지도 시각화 + 다양한 통계**라는 핵심을 유지합니다.

**포함된 핵심 기능**:
✅ 여행 + 음악 저장 (핵심!)
✅ 세계 지도 시각화 (2D, 장르별 색상)
✅ 다양한 통계 시각화 ⭐ 강화
  - 음악 장르별 통계
  - 대륙별 여행 통계 (새로 추가)
  - 여행 카테고리별 통계 (새로 추가)
✅ 음악 기반 AI 챗봇 추천
✅ 강화된 대시보드

**간소화된 부분**:
❌ 로그인 (단일 사용자)
❌ Spotify API (수동 입력)
❌ 3D 지구본 (2D만)
❌ 지도 필터링 (시간 부족)
❌ 사진 업로드

**다음 단계**:
1. Supabase 프로젝트 생성
2. genres, songs, trips 테이블 생성 (continent, travel_category 컬럼 포함)
3. Leaflet 설치
4. 3시간 구현 시작!

Good luck! 🎵🗺️📊✈️
