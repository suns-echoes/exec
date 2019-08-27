import { copy } from '@suns-echoes/file-system-utils/src/utils/copy.js';

import { config } from '../config.js';


const filter = (src) => {
	return !(/\.(example|spec)\.js$/.test(src));
};


export async function copySourceFiles() {
	return await copy(config.paths.src.input, config.paths.src.output, filter);
}
