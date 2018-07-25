const path = require('path');
const globby = require('globby');

const PATH_TO_IMAGES = path.join(__dirname, 'public', 'images', 'slider');

module.exports = () => {
    return globby(path.join(PATH_TO_IMAGES, '*.{png,jpg,gif}'))
        .then(paths => paths.map(filename => path.relative(path.join(__dirname, 'public'), filename)))
        .catch(console.error);
};
