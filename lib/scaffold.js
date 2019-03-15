const glob = require('glob');

const options = {
  cwd: __dirname,
  absolute: true,
};

module.exports = (scope, iterator) => {
  const relDir = `../scaffold/${scope}/**/*`;
  const regExp = new RegExp(`scaffold\/${scope}/(.+)$`);

  glob.sync(relDir, options)
    .filter(f => f.indexOf('.') > 0)
    .forEach(f => iterator(f, f.match(regExp)[1]));
};
