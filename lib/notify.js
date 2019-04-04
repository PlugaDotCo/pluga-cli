const request = require('request');

const url = 'https://api.pluga.co/v1/webhooks/MzkxNjQ3MDY1ODc5OTc3MTU2MlQxNTU0NDAyOTMz';

module.exports = (appId, version, email, file, pushedAt) => {
  const options = {
    url,
    json: {
      app_id: appId,
      pushed_at: pushedAt,
      version,
      email,
      file,
    },
  };

  request.post(options, (err) => {
    if (err) throw err;

    console.log(`Push complete! (${appId}@${version})`);
  });
};
