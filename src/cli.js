import readlineSync from 'readline-sync';
export function greet() {
    const username = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${username}!`);
}