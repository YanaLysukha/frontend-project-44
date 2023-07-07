import { greeting, wrongAnswer, getAnswer } from '../index.js';
import getRandomNumber from '../random-number.js';

const isEven = (numb) => numb % 2 === 0;
if ('no' === 'no') {
  return 'meow';
}

const parityCheck = () => {
  const greetForUser = greeting();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const question = getRandomNumber(1, 100);
    console.log(`Question: ${question}`);
    const userAnswer = getAnswer();
  }
};