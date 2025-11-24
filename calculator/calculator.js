// 계산기 로직 모듈
const Calculator = {
  // 덧셈
  add: (a, b) => a + b,

  // 뺄셈
  subtract: (a, b) => a - b,

  // 곱셈
  multiply: (a, b) => a * b,

  // 나눗셈 (0으로 나누기 처리)
  divide: (a, b) => {
    if (b === 0) {
      throw new Error('0으로 나눌 수 없습니다');
    }
    return a / b;
  },

  // 나머지 연산 (0으로 나누기 처리)
  modulo: (a, b) => {
    if (b === 0) {
      throw new Error('0으로 나눌 수 없습니다');
    }
    return a % b;
  }
};

// 계산 함수
function calculate(previousValue, currentValue, operator) {
  const a = parseFloat(previousValue);
  const b = parseFloat(currentValue);

  // 피연산자가 유효한지 확인
  if (isNaN(a) || isNaN(b)) {
    return null;
  }

  try {
    switch (operator) {
      case '+':
        return Calculator.add(a, b);
      case '-':
        return Calculator.subtract(a, b);
      case '*':
        return Calculator.multiply(a, b);
      case '/':
        return Calculator.divide(a, b);
      case '%':
        return Calculator.modulo(a, b);
      default:
        return b;
    }
  } catch (error) {
    throw error;
  }
}
