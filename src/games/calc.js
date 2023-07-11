import runGame from '../index.js';
import getRandomNumber from '../random-number.js';

const getOperator = () => {
  const operators = ['+', '-', '*'];
  const result = operators[getRandomNumber(0, operators.length - 1)];
  return result;
};

const getCalcResult = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Operator ${operator} is not defined`);
  }
};

const round = () => {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);
  const operator = getOperator();
  const correctAnswer = getCalcResult(number1, number2, operator).toString();
  const question = `${number1} ${operator} ${number2}`;
  return [question, correctAnswer];
};

const calculator = () => {
  const task = 'What is the result of the expression?';
  runGame(task, round);
};

export default calculator;
