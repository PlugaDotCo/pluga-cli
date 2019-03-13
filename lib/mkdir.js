const fs = require('fs');

module.exports = (path) => {
  const breadcrumbs = path.split('/');

  for (let i = 1, l = breadcrumbs.length; i < l; i++) {
    const target = breadcrumbs.slice(0, i).join('/');
    if (!fs.existsSync(target)) fs.mkdirSync(target);
  }
};
