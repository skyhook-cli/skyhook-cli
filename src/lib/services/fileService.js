const yaml = require('js-yaml');
const fs = require('fs');

const writeTetherfile = (config) => {
    fs.writeFileSync('./Tetherfile', yaml.safeDump(config));
};

module.exports = {
    writeTetherfile
}
