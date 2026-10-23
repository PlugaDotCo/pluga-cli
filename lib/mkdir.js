const fs = require('fs');
const { dirname } = require('path');

module.exports = (path) => {
  fs.mkdirSync(dirname(path), { recursive: true });
};
