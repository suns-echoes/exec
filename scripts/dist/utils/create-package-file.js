import { readJSONFile } from '@suns-echoes/file-system-utils/src/utils/read-json-file.js';
import { writeJSONFile } from '@suns-echoes/file-system-utils/src/utils/write-json-file.js';

import { config } from '../config.js';


const whitelist = [
	'name',
	'version',
	'description',
	'author',
	'license',
	'dependencies',
];


export async function createPackageFile() {
	const pkg = await readJSONFile('./package.json');

	Object.keys(pkg).forEach((key) => {
		if (!whitelist.includes(key)) {
			pkg[key] = undefined;
		}
	});

	await writeJSONFile(`${config.paths.dist}/package.json`, pkg, null, '  ');
}
