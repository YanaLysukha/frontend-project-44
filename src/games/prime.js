import runGame from '../index.js';
import getRandomNumber from '../random-number.js';

const isPrime = (numb) => {
  for (let i = 2; i <= Math.sqrt(numb); i += 1) {
    if (numb % i === 0) {
      return false;
    }
  }
  return numb > 1;
};
isPrime(49);

const round = () => {
  const question = getRandomNumber(0, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const primeNumber = () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(task, round);
};

export default primeNumber;
