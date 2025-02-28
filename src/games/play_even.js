// brain-even.js
import runGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateQuestion = () => {
    const questionNumber = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = (questionNumber % 2 === 0 ? 'yes' : 'no');
    return [questionNumber, correctAnswer];
};

export { description, generateQuestion };