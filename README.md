Exec Utility
============

**Execute command**

The `exec` function simplifies execution of shell commands.

Note: The stderr and stdout is concatenated into output property. The end of this output is trimmed.

Note: The stderr is concatenated into output error property. The end of error is trimmed.


Installation
------------

`npm i @suns-echoes/exec`


Impport
-------

```js
// Import library distribution file
import { exec } from '@suns-echoes/exec';
```

```js
// Import library from source
import { exec } from './libs/@suns-echoes/exec/src';
// or
import { exec } from './libs/@suns-echoes/exec/src/exec';
```


Usage
-----


```js
const { code, error, output } = await exec(cmd, [...args], { buffer, stderr, stdout });
```


### Arguments

* `<string>` `cmd` - entity path;
* `<array>` `[args]` - optional, entity path;
* `<object>` `[config]` - optional, entity path:
	* `<boolean>` `[buffer=true]` - optional, enable unified output;
	* `<function>` `[stderr=null]` - optional, stderr callback;
	* `<function>` `[stdout=null]` - optional, stdout callback.


### Returns

* `<Promise>` - the promise of execution.


### Resolves

* `<object>` - exit information:
	* `<number>` `code` - exit code
	* `<string>` `error` - error output
	* `<string>` `output` - unified output (concatenated stderr and stdout)


Examples
--------

### simple use

```js
// simple command with param
const result = await exec('node -v');
// or with params in array
const result = await exec('node', ['-v']);

// result:
// {
// 	code: 0,
// 	error: null,
// 	output: 'v12.1.1',
// }
```

### real-time output (stderr, stdout)

```js
await exec('some_command', ['possible', 'params'], {
	// optionally disable ouptut
	buffer: false,
	stderr: (data) => { ... },
	stdout: (data) => { ... },
});
```


License
-------

Licensed under MIT

Copyright (c) 2019 Aneta Suns
