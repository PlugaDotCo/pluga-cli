const fs = require('fs');

function camelCase(str) {
  return str.replace(/_+([a-z])/g, (_, l) => l.toUpperCase());
}

function mapToCamelCase(obj) {
  return Object.keys(obj).reduce((acc, key) => {
    const value = obj[key];

    acc[camelCase(key)] = typeof value === 'object'
      ? mapToCamelCase(value)
      : value;

    return acc;
  }, {});
}

module.exports = path => mapToCamelCase(JSON.parse(fs.readFileSync(path)));
