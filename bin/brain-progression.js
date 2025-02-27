#!/usr/bin/env node
import readlineSync from 'readline-sync';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const hideElement = (progression, hiddenIndex) => {
  const hiddenProgression = [...progression];
  hiddenProgression[hiddenIndex] = '..';
  return hiddenProgression.join(' ');
};

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What number is missing in the progression?');

let correctAnswersCount = 0;
while (correctAnswersCount < 3) {
  const start = Math.floor(Math.random() * 10) + 1;
  const step = Math.floor(Math.random() * 10) + 1;
  const length = Math.floor(Math.random() * 6) + 5;
  const hiddenIndex = Math.floor(Math.random() * length);

  const progression = generateProgression(start, step, length);
  const question = hideElement(progression, hiddenIndex);
  const correctAnswer = progression[hiddenIndex];

  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');

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
