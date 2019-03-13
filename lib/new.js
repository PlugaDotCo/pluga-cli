const fs       = require('fs');
const mustache = require('mustache');

const scaffold = require('./scaffold');
const mkdir    = require('./mkdir');

module.exports = (dir, { name }) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  const appId  = dir.match(/[^\/]+$/)[0];
  const params = { appId, appName: name || appId };

  scaffold('new', (src, dest) => {
    dest = `${dir}/${dest}`;

    fs.readFile(src, 'utf8', (err, data) => {
      if (err) throw err;

      mkdir(dest);
      fs.writeFileSync(dest, mustache.render(data, params));
    });
  });

  console.log(`App ${appId} created! :D`);
};
