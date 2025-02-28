// src/games/prime.js
const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i += 1) {
        if (num % i === 0) return false;
    }
    return true;
};  
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateQuestion = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
    return [randomNumber, correctAnswer];
};  
export { description, generateQuestion };