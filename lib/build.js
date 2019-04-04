const fs = require('fs');
const archiver = require('archiver');

const mkdir = require('./mkdir');

module.exports = (dest, callback) => {
  const output = fs.createWriteStream(dest);
  const archive = archiver('zip', { zlib: { level: 9 } });

  mkdir(dest);

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
