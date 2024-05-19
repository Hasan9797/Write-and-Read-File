import path from 'path';
import fs from 'fs';

// data folder bor bo'lsa oladi yo'q bo'lsa data folder yaratadi
const dataDir = path.join(process.cwd(), 'data');
const filePath = path.join(dataDir, 'data.json');

export const writeFile = async data => {
	if (!fs.existsSync(dataDir)) {
		fs.mkdirSync(dataDir);
	}

	const currentFile = await readFile();

	if (currentFile) {
		currentFile.push(...data);
		data = currentFile;
	}

	// ma'lumotni JSON ga o'firish
	const jsonString = JSON.stringify(data, null, 2);

	// JSON holatida data/data.json filega yozadi
	return new Promise((resolve, reject) => {
		fs.writeFile(filePath, jsonString, err => {
			if (err) {
				reject(err);
			} else {
				resolve(console.log('Data saved successfully'));
			}
		});
	});
};

export const readFile = async () => {
	return new Promise((resolve, reject) => {
		fs.readFile(path.join(dataDir, 'data.json'), 'utf-8', (err, data) => {
			if (err) {
				reject(err);
			} else {
				resolve(JSON.parse(data));
			}
		});
	});
};
