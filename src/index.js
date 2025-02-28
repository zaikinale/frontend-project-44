// Общая логика игр
// Функция должна принимать описание игры и массив раундов сгенерированных в games

// index.js
import readlineSync from 'readline-sync';

const runGame = (description, generateQuestion) => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log(description);

    let correctAnswersCount = 0;
    const roundsCount = 3; 

    for (let i = 0; i < roundsCount; i += 1) {
        const [question, correctAnswer] = generateQuestion();
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

        if (userAnswer === correctAnswer) {
            console.log('Correct!');
            correctAnswersCount += 1;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            break; // Завершаем игру при ошибке
        }
    }

    if (correctAnswersCount === roundsCount) {
        console.log(`Congratulations, ${name}!`);
    }
};

export default runGame;
