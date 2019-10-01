import execa from 'execa';


export async function runTests() {
	const { exitCode, message } = await execa('npm', ['run', 'coverage']);

	if (exitCode !== 0) {
		throw message;
	}
}
