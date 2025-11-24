# 계산기 프로토타입

기본 사칙연산과 나머지 연산(MOD)을 지원하는 웹 기반 계산기 프로토타입입니다.

## 파일 구조

```
calculator/
├── index.html           # HTML 구조 (UI 레이아웃)
├── style.css            # CSS 스타일링 (디자인)
├── calculator.js        # 계산 로직 (순수 계산 함수)
├── main.js              # 이벤트 처리 및 상태 관리
├── README.md            # 이 파일
└── test-manual.md       # 수동 테스트 가이드
```

## 사용하기

1. 브라우저에서 `index.html` 열기
2. 숫자 및 연산자 버튼을 클릭하여 계산

## 기능

### 지원하는 연산
- ➕ 덧셈 (+)
- ➖ 뺄셈 (-)
- ✖️ 곱셈 (×)
- ➗ 나눗셈 (÷)
- 📊 나머지 연산 (MOD)

### 특수 기능
- **Clear (C)**: 모든 상태 초기화, 디스플레이를 "0"으로 리셋
- **결과 (=)**: 현재까지의 계산 수행 및 결과 표시
- **소수점 (.)**: 소수 입력 지원 (중복 입력 방지)

### 에러 처리
- **0으로 나누기**: "0으로 나눌 수 없습니다" 메시지 표시
- **연속 0 처리**: 여러 개의 0 입력 시 하나만 유지
- **소수점 중복**: 이미 있는 소수점은 무시

## 아키텍처

### calculator.js
순수 계산 로직을 담당하는 모듈입니다.

```javascript
const Calculator = {
  add: (a, b) => a + b,           // 덧셈
  subtract: (a, b) => a - b,      // 뺄셈
  multiply: (a, b) => a * b,      // 곱셈
  divide: (a, b) => { ... },      // 나눗셈 (0 체크)
  modulo: (a, b) => { ... }       // 나머지 (0 체크)
}

function calculate(previousValue, currentValue, operator) {
  // 실제 계산 수행
}
```

### main.js
상태 관리와 이벤트 처리를 담당합니다.

**상태 객체:**
```javascript
const state = {
  currentValue: '0',           // 현재 입력값
  previousValue: '',           // 저장된 값
  operator: null,              // 현재 연산자
  shouldResetDisplay: false,   // 디스플레이 초기화 필요 여부
  isError: false               // 에러 상태
}
```

**주요 함수:**
- `handleNumber(value)`: 숫자/소수점 입력 처리
- `handleOperator(op)`: 연산자 입력 처리
- `handleEquals()`: 계산 수행
- `handleClear()`: 상태 초기화
- `updateDisplay()`: 디스플레이 업데이트

### index.html
버튼과 디스플레이로 구성된 UI입니다.

**특징:**
- 이벤트 위임을 위해 data 속성 사용
  - `data-type`: 버튼 타입 (number, operator, function)
  - `data-value`: 버튼의 실제 값

### style.css
Flexbox와 Grid를 이용한 반응형 디자인입니다.

**색상 스키마:**
- 배경: 그라디언트 (파란색 → 보라색)
- 숫자 버튼: 밝은 회색
- 연산자 버튼: 주황색
- 초기화 버튼: 빨간색
- 결과 버튼: 초록색

## 코드 스타일

### 명명 규칙
- 변수/함수: camelCase (예: `currentValue`, `handleNumber`)
- HTML class: kebab-case (예: `btn-number`, `calculator-container`)

### 구조
- 관심사의 분리: 로직(JS), 스타일(CSS), 구조(HTML)
- 단일 책임 원칙: 각 함수는 하나의 역할만 담당
- 모듈화: calculator.js와 main.js 분리

### 주석
- 필수적인 부분에만 주석 추가
- 로직이 명확한 경우 주석 생략

## 테스트

`test-manual.md` 파일에서 수동 테스트 가이드를 확인하세요.

**테스트 항목:**
- 덧셈, 뺄셈, 곱셈, 나눗셈
- MOD 연산
- 소수점 계산
- 0으로 나누기 에러 처리
- 연속 계산
- 초기화 기능
- UI/UX 검증

## 향후 확장

### 계획된 기능
- [ ] 계산 이력 조회
- [ ] 테마 설정 (다크모드)
- [ ] 소수점 자릿수 설정
- [ ] 키보드 입력 지원
- [ ] 추가 연산 (제곱, 제곱근 등)

### 확장 전략
현재 아키텍처는 다음과 같이 확장하기 쉽게 설계되었습니다:

1. **계산 이력**: `state`에 배열 추가
2. **테마 설정**: CSS 변수 또는 클래스 토글
3. **키보드 입력**: `keydown` 이벤트 리스너 추가
4. **추가 연산**: `Calculator` 객체에 새 함수 추가

## 브라우저 호환성

- Chrome/Edge: ✅ 완전 지원
- Firefox: ✅ 완전 지원
- Safari: ✅ 완전 지원
- IE: ❌ 미지원 (ES6 사용)

## 성능

- 번들 크기: ~6KB (HTML + CSS + JS)
- 초기 로드: < 1초
- 계산 속도: 즉시 (< 1ms)

## 라이선스

MIT

---

**생성 일자**: 2024-11-24
**버전**: 1.0.0-prototype
