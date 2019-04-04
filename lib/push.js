const json = require('./json');
const build = require('./build');
const upload = require('./upload');
const notify = require('./notify');

function validateEmail(email) {
  const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExp.test(String(email).trim().toLowerCase());
}

module.exports = (email) => {
  const timestamp = Date.now();
  const { appId, version } = json('lib/app.json');
  const dest = `build/${appId}@${version}-${timestamp}.zip`;

  if (!validateEmail(email)) {
    console.error('Invalid contact email');
    return;
  }

  build(dest, () => {
    upload(dest, (file) => {
      notify(appId, version, email, file, timestamp);
    });
  });
};
