# Melody Trip - 디자인 가이드 문서

## 1. 디자인 시스템 개요

### 1.1 프로덕트 철학

Melody Trip은 **감정 중심의 여행 기억 서비스**입니다. 단순한 정보 정리 도구를 넘어 **꿈같고 명상적인** 경험을 제공합니다.

| 속성 | 설명 |
|------|------|
| **분위기** | 꿈꾸는 듯한, 우주적, 감정적, 명상적 |
| **시각** | 부드러운 파스텔 톤, 어두운 우주 배경 |
| **상호작용** | 차분하고 예측 가능한, 스트레스 없는 |
| **타겟 감정** | 향수, 따뜻함, 경이로움, 고요함 |

### 1.2 디자인 원칙

```
1. 감정 우선 (Emotion First)
   → 아름다움과 기능성의 완벽한 균형

2. 숨 쉬는 공간 (Breathing Room)
   → 여백을 통한 명상적 경험

3. 미니멀한 텍스트 (Minimal Text)
   → 시각적 스토리텔링 강조

4. 부드러운 애니메이션 (Gentle Motion)
   → 편안함과 몰입감 제공

5. 카드 기반 레이아웃 (Card-Based)
   → 명확한 정보 구분과 계층성
```

---

## 2. 색상 팔레트 (Color Palette)

### 2.1 주요 색상 정의

#### 배경색 (Background)

```
# 우주 기반 그라데이션
Primary Background: #0F1419
  → RGB(15, 20, 25)
  → 심해 같은 어두운 네이비

Secondary Background: #1A2332
  → RGB(26, 35, 50)
  → 약간 더 밝은 네이비

Gradient Accent: #2D1B4E (자주색 accent)
  → RGB(45, 27, 78)
  → 우주의 신비로움 표현
```

**권장 그라데이션**:
```css
background: linear-gradient(135deg, #0F1419 0%, #1A2332 50%, #2D1B4E 100%);
```

#### 파스텔 악센트 (Pastel Accents)

| 색상명 | HEX | RGB | 용도 |
|--------|-----|-----|------|
| **Pastel Blue** | #6BAFDB | (107, 175, 219) | 일반 UI 요소, 활성 상태 |
| **Pastel Purple** | #B89FD9 | (184, 159, 217) | 하이라이트, 강조 |
| **Pastel Pink** | #F4A9D9 | (244, 169, 217) | 긍정적 피드백, CTA |
| **Pastel Green** | #A8D5BA | (168, 213, 186) | 성공 상태, 자연 요소 |
| **Pastel Cyan** | #7DD5E8 | (125, 213, 232) | 정보, 보조 요소 |
| **Pastel Peach** | #F5C99B | (245, 201, 155) | 따뜻함, 활성 인디케이터 |

#### 텍스트 색상 (Text Colors)

```
Primary Text: #E8EAED
  → RGB(232, 234, 237)
  → 기본 텍스트 (높은 대비)

Secondary Text: #A8ACAF
  → RGB(168, 172, 175)
  → 보조 정보, 라벨

Tertiary Text: #6B6F73
  → RGB(107, 111, 115)
  → 매우 보조적인 정보

Accent Text: #6BAFDB (Pastel Blue)
  → 상호작용 가능한 요소, 링크
```

#### 상태 색상 (Status Colors)

| 상태 | HEX | 설명 |
|------|-----|------|
| **Success** | #A8D5BA | 성공, 완료 |
| **Warning** | #F5C99B | 경고, 주의 |
| **Error** | #F4A9D9 (밝은 핑크) | 에러 |
| **Info** | #7DD5E8 | 정보 |
| **Disabled** | #3D4451 | 비활성 |

### 2.2 색상 접근성 검사

```
WCAG 2.2 AA 기준 대비:

✅ Primary Text (#E8EAED) vs Background (#0F1419)
   대비도: 13.5:1 (WCAG AAA 통과)

✅ Secondary Text (#A8ACAF) vs Background (#0F1419)
   대비도: 5.2:1 (WCAG AA 통과)

✅ Pastel Blue (#6BAFDB) vs Background (#0F1419)
   대비도: 7.8:1 (WCAG AA 통과)

⚠️ 참고: 밝은 파스텔 색상 위에 어두운 텍스트 사용 시 항상 대비 확인
```

### 2.3 색상 사용 가이드

```
글로브 (Globe):
  - 배경: 우주 그라데이션 (#0F1419 → #2D1B4E)
  - 마커: Pastel Blue (#6BAFDB), Pastel Purple (#B89FD9)
  - 별: 극도로 밝은 하얀색 (#F5F5F5, 20% opacity)

카드 (Cards):
  - 배경: #1A2332 + 반투명 흰색 (5% opacity) = #1F2A3A
  - 테두리: Pastel Blue (#6BAFDB, 30% opacity)
  - 그림자: 검은색 (20% opacity, 4px blur)

버튼:
  - Primary: Pastel Pink (#F4A9D9) bg, 검은 텍스트
  - Secondary: Pastel Blue (#6BAFDB, 20% opacity) bg, Pastel Blue 텍스트
  - Hover: 투명도 증가, 글로우 효과 추가

캘린더:
  - 오늘 날짜: Pastel Peach (#F5C99B)
  - 여행 있는 날짜: Pastel Blue (#6BAFDB)
  - 호버: 보라색 테두리 (#B89FD9)
```

---

## 3. 타이포그래피 (Typography)

### 3.1 폰트 선택

#### 기본 폰트 (Body)

```
Primary Font: 'Inter' 또는 'Poppins' (웹폰트)
Fallback: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

특징:
- 현대적이고 깔끔함
- 높은 가독성 (low x-height variation)
- 친화적이고 따뜻한 느낌
- 다양한 웨이트 지원 (300, 400, 500, 600, 700)
```

#### 제목 폰트 (Heading)

```
Primary Font: 'Poppins' 또는 'Montserrat' (웹폰트)
Fallback: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif

특징:
- 선명하고 기하학적
- 시각적 계층성 강함
- 감정적 표현력 풍부
- 웨이트: 600, 700 (대부분 사용)
```

### 3.2 타이포그래피 스케일

```
기본 비율: 1.2 (조화로운 스케일링)

Desktop:
├─ H1 (메인 제목): 48px / 56px line-height / 700 weight
├─ H2 (섹션 제목): 40px / 48px line-height / 700 weight
├─ H3 (카드 제목): 28px / 36px line-height / 600 weight
├─ H4 (소제목): 24px / 32px line-height / 600 weight
├─ Body Large: 18px / 28px line-height / 400 weight
├─ Body: 16px / 24px line-height / 400 weight
├─ Body Small: 14px / 20px line-height / 400 weight
├─ Caption: 12px / 16px line-height / 400 weight
└─ Label: 11px / 16px line-height / 500 weight

Tablet (768px):
├─ H1: 40px / 48px line-height
├─ H2: 32px / 40px line-height
├─ H3: 24px / 32px line-height
├─ H4: 20px / 28px line-height
├─ Body: 16px / 24px line-height
└─ Caption: 12px / 16px line-height

Mobile (320px):
├─ H1: 32px / 40px line-height
├─ H2: 24px / 32px line-height
├─ H3: 20px / 28px line-height
├─ H4: 18px / 26px line-height
├─ Body: 14px / 20px line-height
└─ Caption: 11px / 16px line-height
```

### 3.3 타이포그래피 사용 예시

```html
<!-- 대시보드 H1 -->
<h1 class="typography-h1">
  Melody Trip
  <span class="subtitle" style="font-size: 18px; color: #A8ACAF;">
    당신의 음악 여행 기록
  </span>
</h1>

<!-- 카드 제목 -->
<h3 class="typography-h3">파리에서의 봄</h3>

<!-- 본문 텍스트 -->
<p class="typography-body">
  라 비 앙 로즈를 들으며 에펠탑 아래를 거닐었던 그 날...
</p>

<!-- 부가 정보 -->
<span class="typography-caption">2024년 6월 15-20일</span>
```

---

## 4. 로고 및 브랜딩

### 4.1 로고 디자인

```
로고 구성:
├─ 심볼: 지구 + 음표 (겹침)
├─ 타입페이스: "Melody Trip"
├─ 컬러: Pastel Blue (#6BAFDB) 주 색상
└─ 스타일: 미니멀, 모던, 친화적

로고 사이즈:
- 큰 로고 (홈페이지): 200px × 200px
- 헤더 로고: 40px × 40px
- 파비콘: 32px × 32px (투명 배경)
```

### 4.2 브랜드 성조

```
주요 단어:
✨ Emotional (감정적인)
🌍 Cosmic (우주적인)
🎵 Musical (음악의)
💭 Reflective (반사적인)
🌙 Dreamy (꿈꾸는 듯한)
```

---

## 5. 대시보드 레이아웃 (Dashboard Layout)

### 5.1 레이아웃 구조 (Desktop - 1440px 기준)

```
┌─────────────────────────────────────────────────────────────────┐
│ Header (상단 고정)                                              │
│ [로고] [메뉴]                           [설정] [프로필]        │
├──────────────────────────────┬──────────────────────────────────┤
│                              │                                  │
│  여행 기록 배너              │  챗봇 패널                      │
│  (Travel Record Banner)      │  (Chatbot Panel)               │
│  (상단 왼쪽)                 │  (상단 오른쪽)                 │
│                              │                                  │
├──────────────────────────────┼──────────────────────────────────┤
│                              │                                  │
│  지구 글로브                 │  캘린더                         │
│  (Globe Component)           │  (Calendar Component)          │
│  (하단 왼쪽, 넓음)           │  (하단 오른쪽)                 │
│                              │                                  │
│  (계속 회전 애니메이션)      │  (월간 뷰)                     │
│                              │                                  │
└──────────────────────────────┴──────────────────────────────────┘
```

### 5.2 레이아웃 그리드

```css
/* 대시보드 컨테이너 */
.dashboard-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  gap: 24px;
  padding: 32px;
  height: 100vh;
  background: linear-gradient(135deg, #0F1419 0%, #1A2332 50%, #2D1B4E 100%);
}

/* 상단 왼쪽 */
.travel-banner {
  grid-column: 1;
  grid-row: 1;
  height: 280px;
}

/* 상단 오른쪽 */
.chatbot-panel {
  grid-column: 2;
  grid-row: 1;
  height: 280px;
}

/* 하단 왼쪽 (넓음) */
.globe-container {
  grid-column: 1 / 2;
  grid-row: 2;
  height: calc(100vh - 32px - 280px - 24px - 64px);
  min-height: 400px;
}

/* 하단 오른쪽 */
.calendar-container {
  grid-column: 2;
  grid-row: 2;
  height: calc(100vh - 32px - 280px - 24px - 64px);
  min-height: 400px;
}
```

### 5.3 여백 및 간격 (Spacing)

```
기본 간격 단위: 8px (8px 시스템 사용)

주요 간격:
├─ xs: 4px (매우 작은 간격)
├─ sm: 8px (작은 간격)
├─ md: 16px (표준 간격)
├─ lg: 24px (큰 간격)
├─ xl: 32px (매우 큰 간격)
└─ 2xl: 48px (극도로 큰 간격)

대시보드 적용:
- 패널 간격: 24px (lg)
- 패널 내부 padding: 24px (lg)
- 섹션 간 gap: 16px (md)
- 요소 간 gap: 12px (sm)
```

---

## 6. 컴포넌트 명세

### 6.1 여행 기록 배너 (Travel Record Banner)

#### 시각적 설계

```
┌─────────────────────────────────────┐
│ ✨ 새 여행 추가                      │
│                                     │
│ [사진] [음악 선택] [저장]           │
│                                     │
│ ─────────────────────────────────── │
│ 최근 여행: 파리                     │
│ La Vie en Rose • 2024.06.15         │
└─────────────────────────────────────┘
```

#### 컴포넌트 구조

```html
<div class="travel-banner card">
  <div class="banner-header">
    <h3 class="typography-h4">✨ 새 여행 추가</h3>
  </div>
  
  <div class="banner-content">
    <div class="input-group">
      <input type="text" placeholder="여행지명" class="input-field" />
      <input type="date" class="input-field date-input" />
    </div>
    
    <div class="action-buttons">
      <button class="btn btn-secondary">📷 사진</button>
      <button class="btn btn-secondary">🎵 음악</button>
      <button class="btn btn-primary">저장</button>
    </div>
  </div>
  
  <div class="banner-divider"></div>
  
  <div class="recent-trip">
    <p class="typography-body-small">최근 여행</p>
    <h4 class="typography-h4">파리</h4>
    <p class="typography-caption">La Vie en Rose • 2024.06.15</p>
  </div>
</div>
```

#### CSS 스타일

```css
.travel-banner {
  background: rgba(26, 35, 50, 0.6);
  border: 1px solid rgba(107, 175, 219, 0.3);
  border-radius: 16px;
  padding: 24px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.banner-header {
  margin-bottom: 16px;
}

.input-group {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}

.input-field {
  flex: 1;
  background: rgba(232, 234, 237, 0.1);
  border: 1px solid rgba(107, 175, 219, 0.2);
  border-radius: 8px;
  padding: 10px 12px;
  color: #E8EAED;
  font-size: 14px;
  transition: all 0.3s ease;
}

.input-field:focus {
  outline: none;
  border-color: rgba(107, 175, 219, 0.8);
  background: rgba(107, 175, 219, 0.1);
}

.date-input {
  width: 120px;
}

.action-buttons {
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
}

.btn {
  padding: 10px 14px;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.btn-primary {
  background: #F4A9D9;
  color: #0F1419;
}

.btn-primary:hover {
  background: #F4A9D9;
  box-shadow: 0 0 20px rgba(244, 169, 217, 0.4);
  transform: translateY(-2px);
}

.btn-secondary {
  background: rgba(107, 175, 219, 0.2);
  color: #6BAFDB;
  border: 1px solid rgba(107, 175, 219, 0.3);
}

.btn-secondary:hover {
  background: rgba(107, 175, 219, 0.3);
  border-color: rgba(107, 175, 219, 0.6);
}

.banner-divider {
  height: 1px;
  background: rgba(107, 175, 219, 0.2);
  margin: 16px 0;
}

.recent-trip {
  padding-top: 8px;
}

.recent-trip p:first-child {
  color: #A8ACAF;
  margin-bottom: 4px;
}

.recent-trip h4 {
  margin-bottom: 4px;
}

.recent-trip .typography-caption {
  color: #6B6F73;
}
```

#### 반응형 대응 (Tablet - 768px)

```css
@media (max-width: 768px) {
  .travel-banner {
    height: auto;
  }
  
  .input-group {
    flex-direction: column;
  }
  
  .date-input {
    width: 100%;
  }
  
  .action-buttons {
    flex-wrap: wrap;
  }
}
```

---

### 6.2 챗봇 패널 (Chatbot Panel)

#### 시각적 설계

```
┌─────────────────────────────────────┐
│ 🤖 여행지 추천 챗봇                  │
├─────────────────────────────────────┤
│                                     │
│ [대화 히스토리 - 스크롤 가능]       │
│                                     │
│ Bot: 안녕하세요!                    │
│      어떤 음악을 좋아하세요?        │
│                                     │
│ You: 클래식을 좋아해요              │
│                                     │
│ Bot: 오, 그렇다면...                │
│                                     │
├─────────────────────────────────────┤
│ [음악 검색 입력 필드]               │
│ [전송 버튼]                         │
└─────────────────────────────────────┘
```

#### 컴포넌트 구조

```html
<div class="chatbot-panel card">
  <div class="chatbot-header">
    <h3 class="typography-h4">🤖 여행지 추천 챗봇</h3>
  </div>
  
  <div class="chat-messages" id="chatMessages">
    <!-- 메시지 동적 추가 -->
    
    <div class="message bot-message">
      <div class="message-bubble">
        <p class="typography-body-small">
          안녕하세요! 어떤 음악을 좋아하세요?
        </p>
      </div>
    </div>
    
    <div class="message user-message">
      <div class="message-bubble">
        <p class="typography-body-small">
          클래식을 좋아해요
        </p>
      </div>
    </div>
  </div>
  
  <div class="chat-input-area">
    <div class="music-search-input">
      <input 
        type="text" 
        placeholder="🎵 음악 검색 또는 입력..." 
        class="input-field"
      />
      <button class="btn-send">→</button>
    </div>
  </div>
</div>
```

#### CSS 스타일

```css
.chatbot-panel {
  background: rgba(26, 35, 50, 0.6);
  border: 1px solid rgba(184, 159, 217, 0.3);
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.chatbot-header {
  margin-bottom: 16px;
  border-bottom: 1px solid rgba(184, 159, 217, 0.2);
  padding-bottom: 12px;
}

.chatbot-header h3 {
  color: #B89FD9;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
  padding-right: 8px;
  max-height: 180px;
}

/* 스크롤바 스타일링 */
.chat-messages::-webkit-scrollbar {
  width: 6px;
}

.chat-messages::-webkit-scrollbar-track {
  background: rgba(107, 175, 219, 0.1);
  border-radius: 3px;
}

.chat-messages::-webkit-scrollbar-thumb {
  background: rgba(107, 175, 219, 0.3);
  border-radius: 3px;
}

.chat-messages::-webkit-scrollbar-thumb:hover {
  background: rgba(107, 175, 219, 0.5);
}

.message {
  display: flex;
  margin-bottom: 8px;
  animation: messageSlideIn 0.3s ease;
}

@keyframes messageSlideIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.message-bubble {
  padding: 10px 14px;
  border-radius: 12px;
  max-width: 85%;
  word-wrap: break-word;
}

.bot-message {
  justify-content: flex-start;
}

.bot-message .message-bubble {
  background: rgba(107, 175, 219, 0.2);
  border: 1px solid rgba(107, 175, 219, 0.3);
  color: #E8EAED;
}

.user-message {
  justify-content: flex-end;
}

.user-message .message-bubble {
  background: rgba(244, 169, 217, 0.3);
  border: 1px solid rgba(244, 169, 217, 0.3);
  color: #E8EAED;
}

.chat-input-area {
  display: flex;
  gap: 8px;
}

.music-search-input {
  flex: 1;
  display: flex;
  gap: 8px;
  align-items: center;
}

.music-search-input .input-field {
  flex: 1;
  background: rgba(232, 234, 237, 0.1);
  border: 1px solid rgba(107, 175, 219, 0.2);
  border-radius: 8px;
  padding: 10px 12px;
  color: #E8EAED;
  font-size: 14px;
}

.btn-send {
  background: #F4A9D9;
  color: #0F1419;
  border: none;
  border-radius: 8px;
  padding: 10px 14px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
}

.btn-send:hover {
  box-shadow: 0 0 20px rgba(244, 169, 217, 0.4);
  transform: translateY(-2px);
}

.btn-send:active {
  transform: translateY(0);
}
```

#### 상호작용 패턴

```javascript
// 메시지 전송 로직 (예시)
async function sendMessage(userMessage) {
  // 1. 사용자 메시지 표시
  addMessageToChat(userMessage, 'user');
  
  // 2. 입력 필드 초기화
  clearInput();
  
  // 3. 로딩 상태 표시
  showTypingIndicator();
  
  // 4. AI 응답 요청 (LLM API)
  const aiResponse = await fetchAIRecommendation(userMessage);
  
  // 5. 로딩 상태 제거
  hideTypingIndicator();
  
  // 6. AI 응답 표시
  addMessageToChat(aiResponse, 'bot');
  
  // 7. 메시지 영역 자동 스크롤
  scrollToBottom();
}
```

---

### 6.3 글로브 컴포넌트 (Globe Component)

#### 시각적 설계

```
┌─────────────────────────────────────────────┐
│                                             │
│        🌍 (회전하는 지구)                   │
│                                             │
│   • 방문한 장소: 파란색 + 분홍색 점         │
│   • 배경: 우주 (별, 어두운 배경)           │
│   • 회전: 초당 매우 느린 회전              │
│                                             │
│   호버 시: 방문 지역 강조됨                 │
│   클릭 시: 여행 정보 팝업                   │
│                                             │
└─────────────────────────────────────────────┘
```

#### 컴포넌트 구조 (Three.js 또는 Babylon.js 사용)

```html
<div class="globe-container">
  <canvas id="globeCanvas"></canvas>
  
  <div class="globe-overlay">
    <div class="globe-info-popup" id="globePopup" style="display: none;">
      <h4 class="typography-h4">파리</h4>
      <p class="typography-body-small">France • 2024.06.15</p>
      <p class="typography-caption">🎵 La Vie en Rose</p>
    </div>
  </div>
  
  <div class="globe-controls">
    <button class="globe-btn" id="pauseGlobeBtn">⏸️ 정지</button>
    <button class="globe-btn" id="playGlobeBtn">▶️ 회전</button>
  </div>
</div>
```

#### CSS 스타일

```css
.globe-container {
  background: linear-gradient(135deg, #0F1419 0%, #1A2332 50%, #2D1B4E 100%);
  border: 1px solid rgba(107, 175, 219, 0.2);
  border-radius: 16px;
  padding: 0;
  overflow: hidden;
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.4);
}

#globeCanvas {
  width: 100%;
  height: 100%;
  display: block;
}

.globe-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.globe-info-popup {
  position: absolute;
  background: rgba(26, 35, 50, 0.95);
  border: 1px solid rgba(107, 175, 219, 0.4);
  border-radius: 12px;
  padding: 12px 16px;
  backdrop-filter: blur(10px);
  pointer-events: auto;
  animation: popupFadeIn 0.3s ease;
}

@keyframes popupFadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.globe-controls {
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  gap: 8px;
  pointer-events: auto;
}

.globe-btn {
  background: rgba(107, 175, 219, 0.2);
  border: 1px solid rgba(107, 175, 219, 0.3);
  color: #6BAFDB;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.3s ease;
}

.globe-btn:hover {
  background: rgba(107, 175, 219, 0.3);
  border-color: rgba(107, 175, 219, 0.6);
  box-shadow: 0 0 15px rgba(107, 175, 219, 0.3);
}

.globe-btn:active {
  transform: scale(0.95);
}
```

#### 글로브 구현 가이드 (Three.js)

```javascript
// 글로브 초기화
import * as THREE from 'three';

function initializeGlobe() {
  // 씬 설정
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x0F1419, 0);
  document.getElementById('globeCanvas').appendChild(renderer.domElement);
  
  // 별 배경 생성
  const starsGeometry = new THREE.BufferGeometry();
  const starPositions = new Float32Array(1000 * 3);
  
  for (let i = 0; i < 1000; i++) {
    starPositions[i * 3] = (Math.random() - 0.5) * 2000;
    starPositions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
    starPositions[i * 3 + 2] = (Math.random() - 0.5) * 2000;
  }
  
  starsGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
  const starsMaterial = new THREE.PointsMaterial({ color: 0xFFFFFF, size: 2 });
  const stars = new THREE.Points(starsGeometry, starsMaterial);
  scene.add(stars);
  
  // 지구 생성
  const earthGeometry = new THREE.SphereGeometry(100, 64, 64);
  const earthTexture = new THREE.TextureLoader().load('earth-texture.jpg');
  const earthMaterial = new THREE.MeshPhongMaterial({ map: earthTexture });
  const earth = new THREE.Mesh(earthGeometry, earthMaterial);
  scene.add(earth);
  
  // 조명
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  const pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(100, 100, 100);
  scene.add(ambientLight);
  scene.add(pointLight);
  
  // 여행지 마커 추가
  const travelLocations = [
    { lat: 48.8566, lng: 2.3522, name: 'Paris' },
    { lat: 35.6762, lng: 139.6503, name: 'Tokyo' },
    // ... 더 많은 위치
  ];
  
  travelLocations.forEach(location => {
    const markerGeometry = new THREE.SphereGeometry(2, 8, 8);
    const markerMaterial = new THREE.MeshBasicMaterial({ color: 0x6BAFDB });
    const marker = new THREE.Mesh(markerGeometry, markerMaterial);
    
    // 위도/경도를 3D 좌표로 변환
    const lat = (Math.PI * location.lat) / 180;
    const lng = (Math.PI * location.lng) / 180;
    const radius = 102;
    
    marker.position.set(
      radius * Math.cos(lat) * Math.cos(lng),
      radius * Math.sin(lat),
      radius * Math.cos(lat) * Math.sin(lng)
    );
    
    scene.add(marker);
  });
  
  // 애니메이션 루프
  function animate() {
    requestAnimationFrame(animate);
    
    // 지구 회전 (매우 느리게)
    earth.rotation.y += 0.0001;
    
    renderer.render(scene, camera);
  }
  
  animate();
  
  // 반응형 처리
  window.addEventListener('resize', onWindowResize);
  
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
}

initializeGlobe();
```

#### 글로브 상호작용

```javascript
// 마우스 오버 효과
document.addEventListener('mousemove', (event) => {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(scene.children);
  
  if (intersects.length > 0) {
    const marker = intersects[0].object;
    // 마커 강조 처리
    marker.material.color.set(0xF4A9D9);
  }
});

// 클릭 이벤트
document.addEventListener('click', (event) => {
  // 클릭된 마커의 여행 정보 표시
  const popup = document.getElementById('globePopup');
  popup.style.display = 'block';
  popup.style.left = event.clientX + 'px';
  popup.style.top = event.clientY + 'px';
});
```

---

### 6.4 캘린더 컴포넌트 (Calendar Component)

#### 시각적 설계

```
┌─────────────────────────────────────┐
│ March 2024                   < >   │
├─────────────────────────────────────┤
│ Su Mo Tu We Th Fr Sa               │
│ 25 26 27 28  1  2 3               │ (이전 달 흐린색)
│  4  5  6  7  8  9 10              │
│ 11 12 13 14 15 16 17              │
│ 18 19 20 21 22 23 24              │
│ 25 26 27 28 29 30 31              │
│  1  2  3  4  5  6  7               │ (다음 달 흐린색)
└─────────────────────────────────────┘

여행 있는 날짜: 파란색 배경 + 음악 정보 표시
오늘: 주황색 테두리
호버: 보라색 약한 배경
```

#### 컴포넌트 구조

```html
<div class="calendar-container card">
  <div class="calendar-header">
    <button class="nav-btn" id="prevMonth">←</button>
    <h3 class="calendar-title" id="calendarTitle">March 2024</h3>
    <button class="nav-btn" id="nextMonth">→</button>
  </div>
  
  <div class="calendar-grid">
    <div class="weekday-header">
      <div class="weekday">Su</div>
      <div class="weekday">Mo</div>
      <div class="weekday">Tu</div>
      <div class="weekday">We</div>
      <div class="weekday">Th</div>
      <div class="weekday">Fr</div>
      <div class="weekday">Sa</div>
    </div>
    
    <div class="days-grid" id="daysGrid">
      <!-- 날짜들이 동적으로 추가됨 -->
    </div>
  </div>
  
  <div class="selected-date-info" id="selectedDateInfo" style="display: none;">
    <div class="divider"></div>
    <p class="typography-caption" style="color: #A8ACAF;">선택한 날짜</p>
    <h4 class="typography-h4" id="selectedDestination">파리</h4>
    <p class="typography-body-small" id="selectedSong">
      🎵 La Vie en Rose • Édith Piaf
    </p>
  </div>
</div>
```

#### CSS 스타일

```css
.calendar-container {
  background: rgba(26, 35, 50, 0.6);
  border: 1px solid rgba(107, 175, 219, 0.3);
  border-radius: 16px;
  padding: 24px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
}

.calendar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

.nav-btn {
  background: rgba(107, 175, 219, 0.2);
  border: 1px solid rgba(107, 175, 219, 0.3);
  color: #6BAFDB;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
}

.nav-btn:hover {
  background: rgba(107, 175, 219, 0.3);
  border-color: rgba(107, 175, 219, 0.6);
}

.calendar-title {
  color: #E8EAED;
  margin: 0;
  font-size: 18px;
}

.calendar-grid {
  flex: 1;
}

.weekday-header {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(107, 175, 219, 0.2);
}

.weekday {
  text-align: center;
  font-size: 12px;
  color: #A8ACAF;
  font-weight: 500;
  padding: 8px 0;
}

.days-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  margin-bottom: 16px;
}

.calendar-day {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.calendar-day.other-month {
  color: #3D4451;
  cursor: not-allowed;
}

.calendar-day.today {
  border: 2px solid #F5C99B;
  color: #E8EAED;
}

.calendar-day.has-trip {
  background: rgba(107, 175, 219, 0.3);
  border: 1px solid rgba(107, 175, 219, 0.6);
  color: #6BAFDB;
  font-weight: 600;
}

.calendar-day.has-trip:hover {
  background: rgba(107, 175, 219, 0.5);
  box-shadow: 0 0 12px rgba(107, 175, 219, 0.3);
}

.calendar-day.selected {
  background: rgba(184, 159, 217, 0.4);
  border: 2px solid rgba(184, 159, 217, 0.8);
  color: #B89FD9;
}

.calendar-day:not(.other-month):hover {
  background: rgba(184, 159, 217, 0.2);
  border-color: rgba(184, 159, 217, 0.3);
}

.divider {
  height: 1px;
  background: rgba(107, 175, 219, 0.2);
  margin-bottom: 12px;
}

.selected-date-info {
  padding: 12px 0;
}

.selected-date-info #selectedDestination {
  margin: 4px 0;
}

.selected-date-info #selectedSong {
  color: #6B6F73;
}
```

#### 캘린더 로직 (JavaScript)

```javascript
class Calendar {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.currentDate = new Date();
    this.travelData = {}; // { 'YYYY-MM-DD': { destination, song } }
    
    this.init();
  }
  
  init() {
    this.loadTravelData();
    this.render();
    this.attachEventListeners();
  }
  
  loadTravelData() {
    // API 또는 localStorage에서 여행 데이터 로드
    // 예시:
    this.travelData['2024-03-15'] = {
      destination: 'Paris',
      song: 'La Vie en Rose • Édith Piaf'
    };
  }
  
  render() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    
    // 제목 업데이트
    const monthName = new Date(year, month).toLocaleDateString('en-US', { 
      month: 'long', 
      year: 'numeric' 
    });
    document.getElementById('calendarTitle').textContent = monthName;
    
    // 날짜 생성
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    
    const daysGrid = document.getElementById('daysGrid');
    daysGrid.innerHTML = '';
    
    // 이전 달 날짜
    for (let i = firstDay - 1; i >= 0; i--) {
      const day = daysInPrevMonth - i;
      const dayEl = this.createDayElement(day, true);
      daysGrid.appendChild(dayEl);
    }
    
    // 현재 달 날짜
    const today = new Date();
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = year === today.getFullYear() && 
                      month === today.getMonth() && 
                      day === today.getDate();
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const hasTrip = dateStr in this.travelData;
      
      const dayEl = this.createDayElement(day, false, isToday, hasTrip, dateStr);
      daysGrid.appendChild(dayEl);
    }
    
    // 다음 달 날짜
    const remainingDays = 42 - (firstDay + daysInMonth);
    for (let day = 1; day <= remainingDays; day++) {
      const dayEl = this.createDayElement(day, true);
      daysGrid.appendChild(dayEl);
    }
  }
  
  createDayElement(day, isOtherMonth, isToday = false, hasTrip = false, dateStr = '') {
    const dayEl = document.createElement('div');
    dayEl.className = 'calendar-day';
    dayEl.textContent = day;
    
    if (isOtherMonth) {
      dayEl.classList.add('other-month');
    } else {
      if (isToday) dayEl.classList.add('today');
      if (hasTrip) dayEl.classList.add('has-trip');
      
      dayEl.addEventListener('click', () => {
        this.selectDate(dateStr);
      });
    }
    
    return dayEl;
  }
  
  selectDate(dateStr) {
    const trip = this.travelData[dateStr];
    if (!trip) return;
    
    // 이전 선택 제거
    document.querySelectorAll('.calendar-day.selected').forEach(el => {
      el.classList.remove('selected');
    });
    
    // 새 선택 추가
    event.target.classList.add('selected');
    
    // 정보 표시
    document.getElementById('selectedDestination').textContent = trip.destination;
    document.getElementById('selectedSong').textContent = trip.song;
    document.getElementById('selectedDateInfo').style.display = 'block';
  }
  
  attachEventListeners() {
    document.getElementById('prevMonth').addEventListener('click', () => {
      this.currentDate.setMonth(this.currentDate.getMonth() - 1);
      this.render();
    });
    
    document.getElementById('nextMonth').addEventListener('click', () => {
      this.currentDate.setMonth(this.currentDate.getMonth() + 1);
      this.render();
    });
  }
}

// 초기화
const calendar = new Calendar('calendarContainer');
```

---

## 7. 애니메이션 및 상호작용 (Animation & Interaction)

### 7.1 애니메이션 원칙

```
원칙 1: 부드러움 (Smoothness)
- 모든 애니메이션은 최소 200ms 이상
- easing: cubic-bezier(0.4, 0, 0.2, 1) 사용

원칙 2: 목적성 (Purpose)
- 애니메이션은 피드백을 제공해야 함
- 무의미한 움직임 제거

원칙 3: 접근성 (Accessibility)
- prefers-reduced-motion 존중
- 극도로 빠른 애니메이션 피함
```

### 7.2 주요 애니메이션

#### 페이드 인 (Fade In)

```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 0.4s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .fade-in {
    animation: none;
  }
}
```

#### 슬라이드 업 (Slide Up)

```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-up {
  animation: slideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
```

#### 펄스 글로우 (Pulse Glow)

```css
@keyframes pulseGlow {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(107, 175, 219, 0.4);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(107, 175, 219, 0);
  }
}

.pulse-glow {
  animation: pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

#### 글로브 회전 (Globe Rotation)

```css
@keyframes globeRotate {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}

.globe-rotating {
  animation: globeRotate 60s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .globe-rotating {
    animation: none;
  }
}
```

#### 메시지 슬라이드 인 (Message Slide In)

```css
@keyframes messageSlideIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.message-slide-in {
  animation: messageSlideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### 7.3 호버 효과 (Hover Effects)

#### 버튼 호버

```css
.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(244, 169, 217, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn:active {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(244, 169, 217, 0.2);
}
```

#### 카드 호버

```css
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
  border-color: rgba(107, 175, 219, 0.6);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

#### 캘린더 날짜 호버

```css
.calendar-day:not(.other-month):hover {
  background: rgba(184, 159, 217, 0.2);
  border-color: rgba(184, 159, 217, 0.3);
  transform: scale(1.05);
  transition: all 0.2s ease;
}
```

### 7.4 전환 효과 (Transitions)

```css
/* 일반적인 전환 기본값 */
* {
  transition-property: background-color, border-color, color, box-shadow, transform;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* 빠른 전환 (UI 요소) */
.transition-fast {
  transition-duration: 0.15s;
}

/* 느린 전환 (모달, 오버레이) */
.transition-slow {
  transition-duration: 0.5s;
}
```

---

## 8. 반응형 디자인 (Responsive Design)

### 8.1 브레이크포인트

```
Mobile (320px - 767px):
- 모바일 우선 디자인
- 1열 레이아웃
- 터치 친화적 인터페이스
- 간소화된 네비게이션

Tablet (768px - 1023px):
- 2열 레이아웃 (부분)
- 확대된 터치 타겟 (최소 44×44px)
- 최적화된 여백

Desktop (1024px - 1439px):
- 2×2 그리드 레이아웃
- 풍부한 여백
- 세부 정보 표시

Wide (1440px+):
- 최대 너비: 1920px
- 추가 여백 (좌우)
```

### 8.2 모바일 레이아웃 (320px - 767px)

```css
@media (max-width: 767px) {
  .dashboard-container {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
    gap: 16px;
    padding: 16px;
  }
  
  .travel-banner {
    grid-column: 1;
    grid-row: 1;
    height: auto;
  }
  
  .chatbot-panel {
    grid-column: 1;
    grid-row: 2;
    height: auto;
    max-height: 300px;
  }
  
  .globe-container {
    grid-column: 1;
    grid-row: 3;
    height: 300px;
  }
  
  .calendar-container {
    grid-column: 1;
    grid-row: 4;
    height: auto;
  }
  
  /* 타이포그래피 스케일 조정 */
  .typography-h1 {
    font-size: 28px;
    line-height: 36px;
  }
  
  .typography-h3 {
    font-size: 18px;
    line-height: 26px;
  }
  
  /* 버튼 크기 */
  .btn {
    min-height: 44px;
    min-width: 44px;
    padding: 12px 16px;
  }
  
  /* 카드 패딩 */
  .card {
    padding: 16px;
  }
  
  /* 입력 필드 */
  .input-field {
    min-height: 44px;
    padding: 12px 14px;
    font-size: 16px; /* iOS 줌 방지 */
  }
}
```

### 8.3 태블릿 레이아웃 (768px - 1023px)

```css
@media (min-width: 768px) and (max-width: 1023px) {
  .dashboard-container {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
    gap: 20px;
    padding: 24px;
  }
  
  .travel-banner {
    grid-column: 1;
    grid-row: 1;
    height: 240px;
  }
  
  .chatbot-panel {
    grid-column: 2;
    grid-row: 1;
    height: 240px;
  }
  
  .globe-container {
    grid-column: 1 / 2;
    grid-row: 2;
  }
  
  .calendar-container {
    grid-column: 2;
    grid-row: 2;
  }
}
```

### 8.4 반응형 컴포넌트 예시

#### 여행 배너 반응형

```css
/* Desktop */
.input-group {
  flex-direction: row;
  gap: 12px;
}

/* Tablet */
@media (max-width: 1023px) {
  .input-group {
    flex-direction: column;
  }
  
  .date-input {
    width: 100%;
  }
}

/* Mobile */
@media (max-width: 767px) {
  .action-buttons {
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
  }
}
```

#### 캘린더 반응형

```css
/* Desktop */
.calendar-grid {
  font-size: 14px;
}

.calendar-day {
  aspect-ratio: 1;
}

/* Tablet */
@media (max-width: 1023px) {
  .calendar-grid {
    font-size: 13px;
  }
  
  .calendar-day {
    font-size: 11px;
  }
}

/* Mobile */
@media (max-width: 767px) {
  .calendar-day {
    font-size: 10px;
    padding: 4px;
  }
  
  .weekday {
    font-size: 10px;
  }
  
  .calendar-title {
    font-size: 14px;
  }
}
```

---

## 9. 페이지별 레이아웃 상세

### 9.1 대시보드 페이지 (Dashboard Page)

```
전체 높이: 100vh (전체 화면)
구성: 4개 주요 섹션

┌─────────────────────────────────────────────────────────────┐
│ Header (고정)                                               │
│ [Logo] [Menu]                    [Settings] [Profile]      │
├──────────────────────────┬────────────────────────────────┤
│                          │                                │
│ 여행 기록 배너           │ 챗봇 패널                      │
│ (280px)                  │ (280px)                        │
│                          │                                │
├──────────────────────────┼────────────────────────────────┤
│                          │                                │
│ 글로브                   │ 캘린더                         │
│ (비율 유지)              │ (비율 유지)                    │
│                          │                                │
│                          │                                │
└──────────────────────────┴────────────────────────────────┘
```

### 9.2 여행 상세보기 (Travel Detail Page)

```
┌─────────────────────────────────────┐
│ ← 뒤로가기        [수정] [삭제]      │
├─────────────────────────────────────┤
│ 파리 (France)                       │
│ 2024.06.15 - 2024.06.20             │
├─────────────────────────────────────┤
│                                     │
│ [사진 갤러리 - 슬라이드]            │
│                                     │
├─────────────────────────────────────┤
│ 🎵 La Vie en Rose                   │
│    Édith Piaf • 클래식              │
│ [재생 버튼] [Spotify 이동]          │
├─────────────────────────────────────┤
│ 여행 설명:                          │
│ "로맨틱한 파리의 밤거리..."         │
├─────────────────────────────────────┤
│ 감정: 설렘, 감동                    │
├─────────────────────────────────────┤
│ 비슷한 여행:                        │
│ • 베를린 (4개월 전)                 │
│ • 런던 (8개월 전)                   │
└─────────────────────────────────────┘
```

### 9.3 여행 추가 페이지 (Travel Add Page)

```
┌─────────────────────────────────────┐
│ 새 여행 추가                        │
├─────────────────────────────────────┤
│ 여행지명 *                          │
│ [입력 필드]                         │
├─────────────────────────────────────┤
│ 시작 날짜 *    종료 날짜 *          │
│ [날짜선택]     [날짜선택]           │
├─────────────────────────────────────┤
│ 사진 추가                           │
│ [드래그 & 드롭 영역]                │
│ (또는 [클릭하여 선택])              │
├─────────────────────────────────────┤
│ 음악 선택 *                         │
│ [Spotify 검색]                      │
│ 🎵 선택된 곡: La Vie en Rose        │
├─────────────────────────────────────┤
│ 설명 (선택)                         │
│ [텍스트 영역]                       │
├─────────────────────────────────────┤
│ 감정 태그 (선택)                    │
│ [설렘] [평온] [감동] [신나는]       │
├─────────────────────────────────────┤
│ [저장] [취소]                       │
└─────────────────────────────────────┘
```

---

## 10. 접근성 (Accessibility)

### 10.1 색상 대비 검사

```
WCAG 2.2 AA 기준:
- 일반 텍스트: 4.5:1 이상
- 큰 텍스트 (18px+): 3:1 이상
- UI 컴포넌트: 3:1 이상

Melody Trip 검증:
✅ Primary Text (#E8EAED) on Dark Background: 13.5:1
✅ Secondary Text (#A8ACAF) on Dark Background: 5.2:1
✅ Pastel Blue (#6BAFDB) on Dark Background: 7.8:1
✅ 모든 버튼 상태가 기준 충족
```

### 10.2 포커스 관리

```css
/* 포커스 스타일 */
*:focus-visible {
  outline: 2px solid #6BAFDB;
  outline-offset: 2px;
}

/* 키보드 네비게이션 */
button:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: 2px solid #6BAFDB;
  outline-offset: 2px;
}

/* 마우스 사용자는 포커스 링 제거 (선택적) */
button:focus:not(:focus-visible),
input:focus:not(:focus-visible) {
  outline: none;
}
```

### 10.3 화면 리더 최적화

```html
<!-- 의미론적 HTML -->
<header role="banner">
  <nav aria-label="메인 네비게이션">
    <a href="/dashboard" aria-current="page">대시보드</a>
  </nav>
</header>

<main role="main">
  <section aria-labelledby="globe-title">
    <h2 id="globe-title">내 여행 세계 지도</h2>
    <canvas id="globeCanvas" aria-label="회전하는 지구 글로브 시각화"></canvas>
  </section>
</main>

<!-- 폼 라벨 -->
<label for="destination-input">여행지명</label>
<input id="destination-input" type="text" aria-required="true" />

<!-- 버튼 레이블 -->
<button aria-label="여행 기록 저장">저장</button>

<!-- 동적 콘텐츠 -->
<div aria-live="polite" aria-atomic="true" role="status">
  여행이 저장되었습니다.
</div>
```

### 10.4 운동 감지 (Motion Preferences)

```css
/* 과도한 애니메이션 감소 요청 시 */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .globe-rotating {
    animation: none;
  }
  
  .pulse-glow {
    animation: none;
    box-shadow: 0 0 0 3px rgba(107, 175, 219, 0.3);
  }
}
```

### 10.5 다크 모드 지원

```css
/* 시스템 다크 모드 자동 감지 */
@media (prefers-color-scheme: dark) {
  /* 기본 설정이 이미 다크 모드 */
  :root {
    --bg-primary: #0F1419;
    --text-primary: #E8EAED;
  }
}

@media (prefers-color-scheme: light) {
  /* 라이트 모드 대안 (선택적) */
  :root {
    --bg-primary: #FFFFFF;
    --text-primary: #1A1A1A;
  }
}
```

---

## 11. 파일 구조 및 코드 구성

### 11.1 CSS 폴더 구조

```
styles/
├── globals.css (전역 스타일, 리셋)
├── variables.css (색상, 폰트 변수)
├── typography.css (타이포그래피)
├── animations.css (애니메이션)
├── components/
│  ├── button.css
│  ├── card.css
│  ├── input.css
│  └── modal.css
└── layouts/
   ├── dashboard.css
   ├── header.css
   └── footer.css
```

### 11.2 색상 변수 정의 (variables.css)

```css
:root {
  /* 배경 */
  --color-bg-primary: #0F1419;
  --color-bg-secondary: #1A2332;
  --color-bg-tertiary: #2D1B4E;
  
  /* 텍스트 */
  --color-text-primary: #E8EAED;
  --color-text-secondary: #A8ACAF;
  --color-text-tertiary: #6B6F73;
  
  /* 악센트 */
  --color-accent-blue: #6BAFDB;
  --color-accent-purple: #B89FD9;
  --color-accent-pink: #F4A9D9;
  --color-accent-green: #A8D5BA;
  --color-accent-cyan: #7DD5E8;
  --color-accent-peach: #F5C99B;
  
  /* 상태 */
  --color-success: #A8D5BA;
  --color-warning: #F5C99B;
  --color-error: #F4A9D9;
  --color-info: #7DD5E8;
  
  /* 간격 */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 48px;
  
  /* 전환 */
  --transition-fast: 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-normal: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* 그림자 */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.15);
  --shadow-md: 0 8px 32px rgba(0, 0, 0, 0.2);
  --shadow-lg: 0 12px 40px rgba(0, 0, 0, 0.3);
  
  /* 테두리 반지름 */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
}
```

### 11.3 전역 스타일 (globals.css)

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, var(--color-bg-primary) 0%, var(--color-bg-secondary) 50%, var(--color-bg-tertiary) 100%);
  color: var(--color-text-primary);
  line-height: 1.5;
  overflow-x: hidden;
}

/* 스크롤바 스타일 */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(107, 175, 219, 0.1);
}

::-webkit-scrollbar-thumb {
  background: rgba(107, 175, 219, 0.3);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(107, 175, 219, 0.5);
}
```

---

## 12. 마크업 예시

### 12.1 HTML 구조 (Dashboard)

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Melody Trip - 음악과 함께하는 여행 기록</title>
  
  <!-- 폰트 -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
  
  <!-- 스타일 -->
  <link rel="stylesheet" href="styles/globals.css" />
  <link rel="stylesheet" href="styles/variables.css" />
  <link rel="stylesheet" href="styles/typography.css" />
  <link rel="stylesheet" href="styles/animations.css" />
  <link rel="stylesheet" href="styles/layouts/dashboard.css" />
</head>
<body>
  <header class="header" role="banner">
    <div class="header-content">
      <div class="logo">
        <img src="logo.svg" alt="Melody Trip" />
      </div>
      <nav aria-label="메인 네비게이션">
        <!-- 네비게이션 -->
      </nav>
      <div class="user-menu">
        <!-- 사용자 메뉴 -->
      </div>
    </div>
  </header>

  <main class="dashboard-container" role="main">
    <!-- 여행 기록 배너 -->
    <section class="travel-banner card slide-up">
      <!-- ... -->
    </section>

    <!-- 챗봇 패널 -->
    <section class="chatbot-panel card slide-up" style="animation-delay: 0.1s;">
      <!-- ... -->
    </section>

    <!-- 글로브 -->
    <section class="globe-container slide-up" style="animation-delay: 0.2s;">
      <!-- ... -->
    </section>

    <!-- 캘린더 -->
    <section class="calendar-container card slide-up" style="animation-delay: 0.3s;">
      <!-- ... -->
    </section>
  </main>

  <!-- 스크립트 -->
  <script src="js/globe.js"></script>
  <script src="js/calendar.js"></script>
  <script src="js/chatbot.js"></script>
</body>
</html>
```

---

## 13. 성능 최적화

### 13.1 이미지 최적화

```html
<!-- 반응형 이미지 -->
<img 
  srcset="
    hero-small.jpg 320w,
    hero-medium.jpg 768w,
    hero-large.jpg 1440w
  "
  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 100vw, 1440px"
  src="hero-large.jpg"
  alt="여행 사진"
/>

<!-- WebP 지원 -->
<picture>
  <source srcset="hero.webp" type="image/webp" />
  <source srcset="hero.jpg" type="image/jpeg" />
  <img src="hero.jpg" alt="여행 사진" />
</picture>
```

### 13.2 CSS 및 JS 최소화

```
프로덕션 빌드:
- CSS: 최소화 + 자동 접두사
- JS: 번들 최적화 (webpack, vite 등)
- 폰트: WOFF2 포맷 사용, 서브셋 활용

권장 도구:
- PostCSS (자동 접두사)
- cssnano (CSS 최소화)
- Terser (JS 최소화)
```

### 13.3 로딩 최적화

```html
<!-- 글꼴 지연 로드 -->
<link rel="preload" href="fonts/inter.woff2" as="font" type="font/woff2" crossorigin />

<!-- 중요 CSS -->
<style>
  /* 위드폴드 CSS (인라인) */
</style>

<!-- 나머지 CSS 지연 로드 -->
<link rel="stylesheet" href="styles.css" />

<!-- 이미지 지연 로드 -->
<img loading="lazy" src="image.jpg" alt="..." />
```

---

## 14. 다크/라이트 모드 (선택사항)

### 14.1 테마 전환 (선택적 구현)

```javascript
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

// 초기 로드
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = savedTheme || (prefersDark ? 'dark' : 'light');
  
  document.documentElement.setAttribute('data-theme', theme);
});
```

### 14.2 라이트 모드 변수

```css
[data-theme='light'] {
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F5F5F5;
  --color-bg-tertiary: #E8E0F0;
  
  --color-text-primary: #1A1A1A;
  --color-text-secondary: #4A4A4A;
  --color-text-tertiary: #808080;
}
```

**참고**: Melody Trip은 기본적으로 다크 모드 중심이므로, 라이트 모드는 선택사항입니다.

---

## 15. 설계 검증 체크리스트

```
□ 모든 텍스트의 색상 대비가 WCAG AA 기준 충족
□ 폰트 크기가 모바일에서 최소 14px
□ 버튼/클릭 요소의 최소 크기 44×44px
□ 애니메이션이 prefers-reduced-motion 존중
□ 키보드 네비게이션 가능
□ 스크린 리더기 호환성 확인
□ 모든 이미지에 대체 텍스트
□ 폼 라벨이 입력 필드와 연결됨
□ 모바일/태블릿/데스크톱 반응형 확인
□ 로딩 성능 < 3초 (LCP)
□ Lighthouse 점수 >= 90
□ 글로브 애니메이션 부드러움 (60fps)
□ 캘린더 월 전환 매끄로움
□ 채팅 메시지 스크롤 반응성
□ 모든 이미지/리소스 최적화됨
```

---

## 16. 마무리

### 16.1 디자인 원칙 요약

| 원칙 | 구현 |
|------|------|
| **감정 우선** | 파스텔 색상, 부드러운 애니메이션, 명상적 분위기 |
| **명확한 계층** | 카드 기반 레이아웃, 명확한 섹션 구분 |
| **접근성** | WCAG 2.2 AA 준수, 키보드 네비게이션 |
| **반응형** | 모바일부터 데스크톱까지 최적화 |
| **성능** | 최소화된 번들, 로딩 최적화, 부드러운 애니메이션 |

### 16.2 개발 가이드

**프론트엔드 개발자를 위한 팁:**

1. **CSS 변수 활용**: `var(--color-accent-blue)` 사용으로 유지보수 용이
2. **컴포넌트 단위 개발**: 재사용 가능한 컴포넌트 먼저 구현
3. **성능 모니터링**: DevTools Lighthouse 정기 검사
4. **접근성 테스트**: 스크린 리더(NVDA, JAWS) 테스트
5. **크로스 브라우저**: Chrome, Firefox, Safari, Edge 테스트

**디자이너와의 협력:**

- 색상 변경 시 모든 대비 확인
- 새로운 애니메이션은 60fps 확인 필수
- 폰트 변경 시 가독성 테스트
- 모바일 레이아웃 변경 사항 명시

---
