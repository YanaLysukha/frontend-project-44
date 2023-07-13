import runGame from '../index.js';
import getRandomNumber from '../random-number.js';

const getProgression = () => {
  const firstNumber = getRandomNumber(1, 20);
  const progressionStep = getRandomNumber(2, 5);
  const progressionLength = getRandomNumber(5, 10);

  const progression = [];
  for (let num = firstNumber; progression.length < progressionLength; num += progressionStep) {
    progression.push(num);
  }
  return progression;
};

const round = () => {
  const progression = getProgression();
  const gap = getRandomNumber(0, progression.length - 1);
  const valueOfGap = progression[gap];
  const correctAnswer = valueOfGap.toString();
  progression[gap] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const progression = () => {
  const task = 'What number is missing in the progression?';
  runGame(task, round);
};

export default progression;
