import runGame from '../index.js';
import getRandomNumber from '../random-number.js';

const isEven = (numb) => numb % 2 === 0;

const round = () => {
  const question = getRandomNumber(1, 100);
  // console.log(`Question: ${question}`);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const parityCheck = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(task, round);
};

export default parityCheck;
