import { writeFile, readFile } from './helper/file_write_read.js';
import path from 'path';
import fs from 'fs';

import { fileURLToPath } from 'url';

const data = {
	ip: '127.0.0.1',
	login: 'admin',
	password: 'admin97',
};

// writeFile(data);

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// console.log(...data);
const result = readFile();
console.log(result);