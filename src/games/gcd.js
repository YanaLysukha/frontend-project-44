import runGame from '../index.js';
import getRandomNumber from '../random-number.js';

const getGcd = (num1, num2) => ((num1 % num2) ? getGcd(num2, num1 % num2) : Math.abs(num2));

const round = () => {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);
  const correctAnswer = getGcd(number1, number2).toString();
  const question = `${number1} ${number2}`;
  return [question, correctAnswer];
};

const gcd = () => {
  const task = 'Find the greatest common divisor of given numbers.';
  runGame(task, round);
};

export default gcd;
