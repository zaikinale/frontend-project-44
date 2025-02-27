import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let correctAnswersCount = 0;
while (correctAnswersCount < 3) {
  const questionNumber = Math.floor(Math.random() * 100) + 1;
  console.log(`Question: ${questionNumber}`);

  const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
  const correctAnswer = (questionNumber % 2 === 0 ? 'yes' : 'no');

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    correctAnswersCount += 1;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
}

if (correctAnswersCount === 3) {
  console.log(`Congratulations, ${name}!`);
}
