import { exec } from './exec.js';


describe('exec', () => {
	it('executes command', async () => {
		const cmd = 'node -v';

		const result = await exec(cmd);

		expect(result.error).to.be.null;
		expect(result.output).to.match(/^v\d+\.\d+\.\d+$/);
	});

	it('skips buffer (no output)', async () => {
		const cmd = 'node -v';
		const args = ['-v'];

		const result = await exec(cmd, args, { buffer: false });

		expect(result.error).to.be.null;
		expect(result.output).to.be.null;
	});

	it('outputs in real-time (stderr, stdout)', async () => {
		const cmd = 'node -v';
		let stderr = '';
		let stdout = '';

		const result = await exec(cmd, null, {
			buffer: false,
			stderr: (data) => {
				stderr += data;
			},
			stdout: (data) => {
				stdout += data;
			},
		});

		expect(result.output).to.be.null;
		expect(stderr).to.be.equal('');
		expect(stdout).to.match(/^v\d+\.\d+\.\d+\r?\n$/);
	});

	it('returns error if command is invalid', async () => {
		const cmd = 'invalid_command';

		const result = await exec(cmd, null, {
			stderr: () => {},
			stdout: () => {},
		});

		expect(result.code).to.be.equal(1);
		expect(result.error).to.match(/invalid_command/);
		expect(result.output).to.be.equal(result.error);
	});

	it('returns error if command is invalid (buffer off)', async () => {
		const cmd = 'invalid_command';

		const result = await exec(cmd, null, { buffer: false });

		expect(result.code).to.be.equal(1);
		expect(result.error).to.match(/invalid_command/);
		expect(result.output).to.be.null;
	});
});
