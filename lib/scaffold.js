const glob = require('glob');

const options = {
  cwd: __dirname,
  absolute: true,
};

const doScaffold = (scope, iterator, globSufix) => {
  const relDir = `../scaffold/${scope}/**/${globSufix}`;
  const regExp = new RegExp(`scaffold/${scope}/(.+)$`);

  glob.sync(relDir, options)
    .filter(f => f.indexOf('.') > 0)
    .forEach(f => iterator(f, f.match(regExp)[1]));
};

module.exports = (scope, iterator) => {
  doScaffold(scope, iterator, '*');
  doScaffold(scope, iterator, '.*');
};
