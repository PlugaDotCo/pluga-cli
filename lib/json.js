const fs = require('fs');

const isArray = val => !!val && val.constructor === Array;
const isObject = val => !!val && val.constructor === Object;

function camelCase(str) {
  return str.replace(/_+([a-z])/g, (_, l) => l.toUpperCase());
}

function mapToCamelCase(obj) {
  if (isArray(obj)) {
    return obj.map(mapToCamelCase);
  }
  if (isObject(obj)) {
    return Object.keys(obj).reduce((acc, key) => {
      acc[camelCase(key)] = mapToCamelCase(obj[key]);
      return acc;
    }, {});
  }
  return camelCase(obj);
}

module.exports = (path) => {
  const data = fs.readFileSync(path);
  const json = JSON.parse(data);
  return mapToCamelCase(json);
};
