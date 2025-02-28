import runGame from '../src/index.js';
import { description, generateQuestion } from '../src/games/play_gcd.js';

runGame(description, generateQuestion);