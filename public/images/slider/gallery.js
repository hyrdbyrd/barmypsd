const fs = require('fs');
const path = require('path');
let paths = fs.readdirSync(path.join(__dirname)) || [];
paths = paths.map(e => path.join('images', 'slider', e)).filter(e => /^[\\A-Za-z0-9\_\-\.]*.(png|jpg|gif)$/.test(e));
fs.writeFile(path.join(__dirname, 'gallery.json'), JSON.stringify(paths), err => {
    if (err)
        throw err;
    console.log("JSON ok!");
});
