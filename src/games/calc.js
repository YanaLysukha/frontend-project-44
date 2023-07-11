import { greeting, wrongAnswer, getAnswer, numberOfRounds } from '../index.js';
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

const calculator = () => {
  const greetForUser = greeting();
  console.log('What is the result of the expression?');

  for (let i = 0; i < numberOfRounds; i += 1) {
    const number1 = getRandomNumber(0, 100);
    const number2 = getRandomNumber(0, 100);
    const operator = getOperator();
    const calcResult = getCalcResult(number1, number2, operator).toString();
    const question = `${number1} ${operator} ${number2}`;
    console.log(`Question: ${question}`);
    const userAnswer = getAnswer();

    if (userAnswer === calcResult) {
      console.log('Correct!');
    } else {
      return wrongAnswer(userAnswer, calcResult, greetForUser);
    }
  }
  console.log(`Congratulations, ${greetForUser}!`);
};

export default calculator;