const fs = require('fs');
const request = require('request');

const url = 'https://file.io';

module.exports = (dest, callback) => {
  const options = {
    url,
    json: true,
    formData: {
      file: fs.createReadStream(dest),
    },
    headers: {
      'content-type': 'multipart/form-data',
    },
  };

  request.post(options, (err, _res, data) => {
    if (err) throw err;

    if (data.success) {
      callback(data.link);
    } else {
      console.error(data);
    }
  });
};
