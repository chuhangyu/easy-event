const fs = require('fs');

fs.readFile('package.json', function(err, data) {
  const config = JSON.parse(data);
  const version = config.version.split(".");
  version[2] = (+version[2] + 1);
  const newVersion = version.join(".");
  config.version = newVersion;
  fs.writeFileSync('package.json', JSON.stringify(config, null, 2));
});