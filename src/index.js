import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const getAnswer = () => readlineSync.question('Your answer: ');

const runGame = (task, round) => {
  const greetForUser = greeting();
  console.log(`${task}`);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, correctAnswer] = round();
    console.log(`Question: ${question}`);
    const userAnswer = getAnswer();

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${greetForUser}!`);
      return;
    }
  }
  console.log(`Congratulations, ${greetForUser}!`);
};

export default runGame;
