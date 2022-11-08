"use strict";
var sharp = require('sharp');
sharp('./assets/fjord.jpg')
    .resize(200, 200)
    .toFile('out_1.jpg');
