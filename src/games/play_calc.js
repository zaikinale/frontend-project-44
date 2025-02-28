const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
};  
const operators = Object.keys(operations);  
const description = 'What is the result of the expression?';

const generateQuestion = () => {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    const operator = operators[Math.floor(Math.random() * operators.length)];

    const question = `${num1} ${operator} ${num2}`;
    const correctAnswer = operations[operator](num1, num2).toString();

    return [question, correctAnswer];
};  
export { description, generateQuestion };