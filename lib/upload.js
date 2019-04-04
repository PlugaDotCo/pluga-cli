const fs = require('fs');
const request = require('request');

const url = 'https://file.io';

module.exports = (dest) => {
  const options = {
    url,
    formData: {
      file: fs.createReadStream(dest),
    },
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  request.post(options, (err, _res, data) => {
    if (err) throw err;
    console.log(data);
  });
};
