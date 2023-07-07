import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  return userName;
};

const getAnswer = (question) => {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const wrongAnswer = (wrongAnsw, correctAnsw, name) => {
  console.log(`${wrongAnsw} is wrong answer ;(. Correct answer was ${correctAnsw}.`);
  console.log(`Let's try again, ${name}`);
};

export { greeting, wrongAnswer, getAnswer };