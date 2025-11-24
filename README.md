# 계산기 프로토타입 프로젝트

OpenSpec을 사용하여 웹 기반 계산기 애플리케이션을 설계하고 구현하는 프로젝트입니다.

## 📋 프로젝트 개요

- **목표**: Vanilla JavaScript를 사용하여 사칙연산과 나머지 연산을 지원하는 웹 계산기 구현
- **기술 스택**: HTML5, CSS3 (Tailwind CSS), Vanilla JavaScript
- **방법론**: OpenSpec을 통한 체계적인 설계 및 구현

## 🎯 핵심 기능

### 기본 기능
- ✅ 사칙연산: 덧셈(+), 뺄셈(-), 곱셈(×), 나눗셈(÷)
- ✅ 나머지 연산: MOD
- ✅ 소수점 계산 지원
- ✅ 초기화(Clear) 기능
- ✅ 0으로 나누기 에러 처리

### 향후 계획 기능
- 📝 계산 이력 조회
- 🌓 테마/설정 (다크모드, 소수점 자릿수 설정)
- ⌨️ 키보드 입력 지원

## 📁 프로젝트 구조

```
open-spec-calculator/
├── README.md
├── CLAUDE.md                           # AI 어시스턴트 가이드
├── AGENTS.md
├── openspec/
│   ├── project.md                      # 프로젝트 전체 가이드라인
│   ├── AGENTS.md                       # OpenSpec 에이전트 가이드
│   ├── specs/                          # 명세 (향후)
│   └── changes/
│       ├── calculator-prototype/       # 계산기 프로토타입 제안
│       │   ├── proposal.md             # 제안서
│       │   ├── tasks.md                # 작업 목록
│       │   ├── design.md               # 설계 문서 (Mermaid 다이어그램 포함)
│       │   └── specs/
│       │       └── basic-operations/
│       │           └── spec.md         # 기능 명세
│       └── add-mermaid-diagrams/       # Mermaid 다이어그램 추가 제안
│           ├── proposal.md
│           ├── tasks.md
│           ├── design.md
│           └── specs/
│               └── diagram-visualization/
│                   └── spec.md
└── [구현 파일들 - 향후 추가]
    ├── index.html
    ├── style.css
    ├── calculator.js
    └── main.js
```

## 📊 설계 문서

### calculator-prototype/design.md
계산기 프로토타입의 상세 설계 문서로, 다음을 포함합니다:

1. **시스템 아키텍처** (Mermaid Flowchart)
   - HTML UI → Event Listeners → State Manager → Calculator Engine → Display Update

2. **상태 머신** (Mermaid State Diagram)
   - Initial → Waiting1stOperand → WaitingOperator → Waiting2ndOperand → Calculate

3. **이벤트 흐름** (Mermaid Sequence Diagram x3)
   - 숫자 버튼, 연산자 버튼, 초기화 버튼 클릭 시 상호작용

4. **데이터 흐름** (Mermaid Flowchart)
   - 입력값 → 파싱 → 타입 변환 → 유효성 검사 → 계산 → 화면 표시

5. **계산 로직**
   - 순수 계산 함수 설계
   - 에러 처리 (0으로 나누기 등)

6. **이벤트 처리**
   - 이벤트 위임 패턴 사용
   - 상태 관리 로직

7. **CSS 구조**
   - Tailwind CSS를 사용한 스타일링 방안

## 🔧 프로젝트 규칙

### 코드 스타일
- 변수/함수명: camelCase
- HTML 클래스명: kebab-case
- 함수: 단일 책임 원칙
- 주석: 로직이 명확하지 않을 때만

### 아키텍처 패턴
- 관심사의 분리: HTML(구조), CSS(스타일), JS(로직)
- 모듈 기반 구조
- 이벤트 위임 사용
- 데이터 속성(data attributes) 활용

### 테스트 전략
- Jest 또는 Vitest 사용
- 핵심 계산 로직에 높은 커버리지 목표

### Git 워크플로우
- Conventional Commits 형식
- 피처별 브랜치 생성
- 한 번에 하나의 기능/버그 수정 커밋

## 🚀 시작하기

### 1. 현재 상태
- ✅ 프로젝트 가이드라인 작성 (openspec/project.md)
- ✅ 계산기 프로토타입 제안서 작성
- ✅ 설계 문서 (6개 Mermaid 다이어그램 포함)
- ✅ 기능 명세 (9개 요구사항)
- ⏳ 구현 대기

### 2. 다음 단계
```bash
# 계산기 프로토타입 구현 시작
openspec apply calculator-prototype

# 또는 설계 문서 검토
cat openspec/changes/calculator-prototype/design.md
```

### 3. 구현 순서
1. HTML 구조 작성 (index.html)
2. CSS 스타일링 (style.css)
3. 계산기 로직 (calculator.js)
4. 이벤트 처리 (main.js)
5. 단위 테스트 작성
6. 통합 테스트

## 📝 OpenSpec 사용

이 프로젝트는 OpenSpec 방법론을 따릅니다:

- **proposal**: 새로운 기능 또는 변경 제안
- **design**: 구현 설계 문서
- **tasks**: 구체적인 작업 목록
- **specs**: 기능 명세 (요구사항 + 시나리오)

### 주요 명령어
```bash
# 변경 사항 나열
openspec list

# 특정 변경 제안 표시
openspec show calculator-prototype

# 변경 제안 검증
openspec validate calculator-prototype --strict

# 제안 적용 (구현)
openspec apply calculator-prototype
```

## 📚 참고 문서

- [openspec/project.md](openspec/project.md) - 프로젝트 전체 가이드라인
- [openspec/changes/calculator-prototype/design.md](openspec/changes/calculator-prototype/design.md) - 계산기 설계 (Mermaid 다이어그램)
- [openspec/changes/calculator-prototype/specs/basic-operations/spec.md](openspec/changes/calculator-prototype/specs/basic-operations/spec.md) - 기능 명세

## 🤝 기여

이 프로젝트는 OpenSpec을 학습하고 실습하기 위한 프로젝트입니다.

## 📄 라이선스

MIT License

---

**생성 일자**: 2024-11-24
**생성자**: Claude Code
**방법론**: OpenSpec
