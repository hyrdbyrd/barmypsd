const express = require("express");
const app = express();
const path = require('path');
require(path.join(__dirname, 'public', 'images', 'slider', 'gallery.js'));
app.use(express.static(path.join(__dirname, "/public")));
app.get("/", (req, res) => {
    res.send("");
});
app.listen(3000);