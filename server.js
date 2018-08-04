const express = require('express');
express()
    .use(express.static('public'))
    .listen(3000);
