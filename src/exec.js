import { spawn } from 'child_process';


export function exec(cmd, args, config = {}) {
	return new Promise((resolve) => {
		const subprocess = spawn(cmd, args, { shell: true });
		const {
			buffer = true,
			stderr = null,
			stdout = null,
		} = config;

		let error = '';
		let output = '';

		subprocess.on('exit', (code) => {
			resolve({
				code,
				error: (error ? error.trimRight() : null),
				output: (buffer ? output.trimRight() : null),
			});
		});

		subprocess.stderr.setEncoding('utf8');
		subprocess.stderr.on('data', (data) => {
			error += data;

			if (buffer) {
				output += data;
			}

			if (stderr) {
				stderr(data);
			}
		});

		subprocess.stdout.setEncoding('utf8');
		subprocess.stdout.on('data', (data) => {
			if (buffer) {
				output += data;
			}

			if (stdout) {
				stdout(data);
			}
		});
	});
}
