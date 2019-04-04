const fs = require('fs');
const archiver = require('archiver');

const mkdir = require('./mkdir');

module.exports = (dest, callback) => {
  mkdir(dest);

  const output = fs.createWriteStream(dest);
  const archive = archiver('zip', { zlib: { level: 9 } });

  output.on('close', callback);

  archive.on('error', (err) => {
    throw err;
  });

  archive.pipe(output);

  archive.file('package.json');
  archive.file('.env.example');

  archive.directory('lib', false);
  archive.directory('test', false);

  archive.finalize();
};
