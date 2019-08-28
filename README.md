Exec Utility
============

**Execute command**

The `exec` function simplifies execution of shell commands.

Note: The stderr and stdout is concatenated into output property. The end of this output is trimmed.

Note: The stderr is concatenated into output error property. The end of error is trimmed.

```js
/* Promise */ exec(
	/* string */ cmd,
	/* array */ [args],
	/* object */ [config]
)
```


Arguments
---------

* `<string>` `cmd` - entity path;
* `<array>` `[args]` - optional, entity path;
* `<object>` `[config]` - optional, entity path:
	* `<bool>` `[buffer=true]` - optional, enable unified output;
	* `<function>` `[stderr=null]` - optional, stderr callback;
	* `<function>` `[stdout=null]` - optional, stdout callback.


Resolves
--------

* `<object>` - exit information:
	* `<number>` `code` - exit code
	* `<string>` `error` - error output
	* `<string>` `output` - unified output (concatenated stderr and stdout)


Returns
-------

* `<Promise>` - the promise of execution.


Installation
------------

`npm i @suns-echoes/exec`


Usage
-----

```js
// import library distribution (only default export)
import exec from './libs/exec/index.js';
```

```js
// import library from source (default export)
import exec from './libs/exec/src/index.js';
```

```js
// import library from source (named export)
import { exec } from './libs/exec/src/exec.js';
```


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


Methods
-------

### Async

* exec

### Sync

* *None by now, use **async** ;)*


License
-------

Licensed under MIT

Copyright (c) 2019 Aneta Suns
