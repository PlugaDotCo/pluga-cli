# {{appId}}
{{appName}} app on Pluga

### Install Node.js with [nvm](https://github.com/creationix/nvm)
```sh
# Pluga requires Node.js 8.10 or greater
$ nvm install v8.10
$ nvm use 8.10
$ npm install
```

### Test with [mocha](https://github.com/mochajs/mocha)
```sh
# Run all tests
$ pluga test

# Run glob specific tests
$ Pluga test test/triggers/*

# Run all tests with Axios requests debug enabled
$ AXIOS_DEBUG=1 pluga test
```
