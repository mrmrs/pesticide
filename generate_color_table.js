'use strict';

var colors = require(process.env.COLOR_TABLE || './color_table.json'),
    less = require('./src/model/less'),
    scss = require('./src/model/scss'),
    stylus = require('./src/model/stylus'),
    javascript = require('./src/model/javascript'),
    ColorTableGenerator = require('./src/generator'),
    generator;

// Generate source files
generator = new ColorTableGenerator(colors);
generator.add(javascript);
generator.add(less);
generator.add(scss);
generator.add(stylus);
generator.run();
