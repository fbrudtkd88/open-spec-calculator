// 계산기 상태 관리
const state = {
  currentValue: '0',
  previousValue: '',
  operator: null,
  shouldResetDisplay: false,
  isError: false
};

// DOM 요소
const displayElement = document.getElementById('display');
const buttonsContainer = document.querySelector('.buttons-grid');

// 디스플레이 업데이트 함수
function updateDisplay(value = state.currentValue) {
  displayElement.textContent = value;
}

// 숫자 버튼 클릭 처리
function handleNumber(value) {
  // 에러 상태 해제
  if (state.isError) {
    state.isError = false;
    state.currentValue = '0';
    state.shouldResetDisplay = true;
  }

  // 디스플레이 초기화 필요한 경우
  if (state.shouldResetDisplay) {
    state.currentValue = value;
    state.shouldResetDisplay = false;
  } else {
    // 소수점 처리
    if (value === '.') {
      if (state.currentValue.includes('.')) {
        return; // 이미 소수점이 있으면 무시
      }
      state.currentValue += value;
    } else {
      // 첫 입력이 0인 경우 제거
      if (state.currentValue === '0' && value !== '0') {
        state.currentValue = value;
      } else if (state.currentValue !== '0') {
        state.currentValue += value;
      }
      // 연속된 0은 하나만 유지
      if (state.currentValue === '00') {
        state.currentValue = '0';
      }
    }
  }

  updateDisplay();
}

// 연산자 버튼 클릭 처리
function handleOperator(op) {
  // 에러 상태 확인
  if (state.isError) {
    return;
  }

  // 이전에 연산자가 있으면 먼저 계산 수행
  if (state.operator !== null && !state.shouldResetDisplay) {
    try {
      const result = calculate(state.previousValue, state.currentValue, state.operator);
      state.currentValue = result.toString();
      updateDisplay();
    } catch (error) {
      displayError(error.message);
      return;
    }
  }

  state.previousValue = state.currentValue;
  state.operator = op;
  state.shouldResetDisplay = true;
}

// 결과(=) 버튼 클릭 처리
function handleEquals() {
  // 에러 상태 확인
  if (state.isError) {
    return;
  }

  // 연산자가 없으면 아무것도 하지 않음
  if (state.operator === null) {
    return;
  }

  try {
    const result = calculate(state.previousValue, state.currentValue, state.operator);
    state.currentValue = result.toString();
    state.previousValue = '';
    state.operator = null;
    state.shouldResetDisplay = true;
    updateDisplay();
  } catch (error) {
    displayError(error.message);
  }
}

// 초기화(C) 버튼 클릭 처리
function handleClear() {
  state.currentValue = '0';
  state.previousValue = '';
  state.operator = null;
  state.shouldResetDisplay = false;
  state.isError = false;
  updateDisplay();
}

// 에러 표시
function displayError(message) {
  state.isError = true;
  updateDisplay(message);
}

// 이벤트 위임
buttonsContainer.addEventListener('click', (e) => {
  const button = e.target;
  const { type, value } = button.dataset;

  if (!type || !value) {
    return;
  }

  switch (type) {
    case 'number':
      handleNumber(value);
      break;
    case 'operator':
      handleOperator(value);
      break;
    case 'function':
      if (value === 'C') {
        handleClear();
      } else if (value === '=') {
        handleEquals();
      }
      break;
  }
});

// 초기 디스플레이 업데이트
updateDisplay();
