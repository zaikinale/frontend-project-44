// bin/brain-prime.js
import runGame from '../src/index.js';
import { description, generateQuestion } from '../src/games/play_prime.js';

runGame(description, generateQuestion);