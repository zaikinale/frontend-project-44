// bin/brain-progression.js
import runGame from '../src/index.js';
import { description, generateQuestion } from '../src/games/play_progression.js';

runGame(description, generateQuestion);