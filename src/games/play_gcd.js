import runGame from '../index.js';

const gameGcd = () => {
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

  const description = 'Find the greatest common divisor of given numbers.';

  const generateQuestion = () => {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;

    const question = `${num1} ${num2}`;
    const correctAnswer = gcd(num1, num2).toString();
    return [question, correctAnswer];
  };
  return runGame(description, generateQuestion);
};

export default gameGcd;
