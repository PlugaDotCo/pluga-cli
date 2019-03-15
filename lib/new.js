const fs       = require('fs');
const mustache = require('mustache');

const scaffold = require('./scaffold');
const mkdir    = require('./mkdir');

function humanize(str) {
  return str
    .replace(/^\w/, (l) => l.toUpperCase())
    .replace(/[_-]+(\w)/g, (_, l) => l.toUpperCase());
}

module.exports = (dir, cmd) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  const appId   = dir.match(/[^\/]+$/)[0];
  const appName = cmd.appName || humanize(appId);

  const params = { appId, appName };

  scaffold('new', (src, dest) => {
    dest = `${dir}/${dest}`;

    fs.readFile(src, 'utf8', (err, data) => {
      if (err) throw err;

      mkdir(dest);
      fs.writeFileSync(dest, mustache.render(data, params));
    });
  });

  console.log(`App ${appName} created! :D`);
};
