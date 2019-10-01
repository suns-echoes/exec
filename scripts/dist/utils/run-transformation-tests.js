import execa from 'execa';


export async function runTransformationTests() {
	const { exitCode, message } = await execa('npm', ['run', 'test:dist']);

	if (exitCode !== 0) {
		throw message;
	}
}
