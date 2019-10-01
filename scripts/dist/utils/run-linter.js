import execa from 'execa';


export async function runLinter() {
	const { exitCode, message } = await execa('npm', ['run', 'lint']);

	if (exitCode !== 0) {
		throw message;
	}
}
