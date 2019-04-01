const fs = require('fs');
const archiver = require('archiver');

const json = require('./json');
const mkdir = require('./mkdir');

module.exports = () => {
  const { appId, version } = json('lib/app.json');
  const dest = `build/${appId}@${version}-${Date.now()}.zip`;

  mkdir(dest);

  const output = fs.createWriteStream(dest);
  const archive = archiver('zip', { zlib: { level: 9 } });

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
