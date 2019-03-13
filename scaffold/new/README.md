# {{appId}}
{{appName}} app on Pluga

### Install Node.js with [nvm](https://github.com/creationix/nvm)
```sh
nvm install v8.10
nvm use 8.10
npm install
```

### Test with [mocha](https://github.com/mochajs/mocha)
```sh
npm test
```

### Test with mocha debug in command line
How to:
  - Write "debugger;" in test file to create a new breakpoint;
  - Press "c" to start test;
  - Type "repl" when break to enter current scope;
  - Now do debug in command line :);
  - Press "Ctrl + C" to exit repl;
  - Press "c" to start or continue;
  - Type ".exit" to finish test.
```sh
npm run debug
```

### Axios debug request
```sh
AXIOS_DEBUG=1 npm test
AXIOS_DEBUG=1 npm run debug
```
