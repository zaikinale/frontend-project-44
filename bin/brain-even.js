// Сделать только вызов игры

import runGame from '../src/index.js';
import { description, generateQuestion } from '../src/games/play_even.js';

runGame(description, generateQuestion);
