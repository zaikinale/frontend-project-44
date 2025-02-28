import readlineSync from 'readline-sync';

const gcd = (a, b) => {
  let num1 = a;
  let num2 = b;
  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
};

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Find the greatest common divisor of given numbers.');

let correctAnswersCount = 0;
while (correctAnswersCount < 3) {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;

  console.log(`Question: ${num1} ${num2}`);

  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = gcd(num1, num2);

  if (parseInt(userAnswer, 10) === correctAnswer) {
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
