import runGame from '../index.js';

const description = 'What number is missing in the progression?';
export const gameProgression = () => {
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
    
    
    const generateQuestion = () => {
        const start = Math.floor(Math.random() * 10) + 1;
        const step = Math.floor(Math.random() * 10) + 1;
        const length = Math.floor(Math.random() * 6) + 5;
        const hiddenIndex = Math.floor(Math.random() * length);  
        const progression = generateProgression(start, step, length);
        const question = hideElement(progression, hiddenIndex);
        const correctAnswer = progression[hiddenIndex].toString();
        return [question, correctAnswer];
    };  
    return runGame(description, generateQuestion)
}