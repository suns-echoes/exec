import { readTextFile } from '@suns-echoes/file-system-utils/src/utils/read-text-file';
import { writeTextFile } from '@suns-echoes/file-system-utils/src/utils/write-text-file';
import { transformESMIntoCJS } from '@suns-echoes/transform-esm-into-cjs/src';

import { findSourceFiles } from './utils/find-source-files';

import { config } from '../config';


export async function transformModulesIntoCJS() {
	const distPath = config.paths.dist;

	const files = await findSourceFiles(distPath);

	for (const filepath of files) {
		let source = await readTextFile(filepath);

		source = transformESMIntoCJS(source);

		await writeTextFile(filepath, source);
	}
}
