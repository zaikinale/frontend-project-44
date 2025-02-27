import readlineSync from 'readline-sync';

export function greet() {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
}
export const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
