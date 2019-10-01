import { copy } from '@suns-echoes/file-system-utils/src/utils/copy';

import { config } from '../config';


export async function copySourceFiles() {
	await copy(config.paths.src.input, config.paths.src.output);
}
