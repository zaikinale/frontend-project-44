import runGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const gamePrime = () => {
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i += 1) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const generateQuestion = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
    return [randomNumber, correctAnswer];
  };
  return runGame(description, generateQuestion);
};
