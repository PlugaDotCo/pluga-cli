const json = require('./json');
const build = require('./build');
const upload = require('./upload');

module.exports = () => {
  const { appId, version } = json('lib/app.json');
  const dest = `build/${appId}@${version}-${Date.now()}.zip`;

  build(dest, () => {
    upload(dest);
  });
};
