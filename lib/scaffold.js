const glob = require('glob');

const options = {
  cwd: __dirname,
  absolute: true,
  nodir: true,
  dot: true,
};

module.exports = (scope, iterator) => {
  const relDir = `../scaffold/${scope}/**/*`;
  const regExp = new RegExp(`scaffold/${scope}/(.+)$`);

  glob.sync(relDir, options).forEach((f) => iterator(f, f.match(regExp)[1]));
};
