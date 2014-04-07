'use strict';

var fs = require('fs'),
    format = require('util').format,
    p = ColorTableGenerator.prototype;

/**
 * Color table generator.
 * @param {Object} colors Color table.
 */
function ColorTableGenerator(colors) {
  this.colors = colors;
  this.models = [];
}

/**
 * Add a new generator item model to the queue.
 * @param {Object} model Generator item model.
 */
p.add = function(model) {
  this.models.push(model);
};

p.run = function() {
  console.log('Generating all the files...');
  this.models.forEach(this._modelIterate.bind(this));
  console.log('Done at %s', new Date);
};

/**
 * Iterate through model instances.
 * @param {Object} model Model instance.
 * @private
 */
p._modelIterate = function(model) {
  this._performSubstitution(model);
};

/**
 * Perform file substitution and creation.
 * @param {Object} model Generator item model.
 * @private
 */
p._performSubstitution = function(model) {
  var fileBuffer = fs.readFileSync(model.source).toString(),
      cssRules = '',
      color;

  console.log('Generating → "%s"', model.target);

  // Generate CSS rules
  for(color in this.colors) {
    cssRules += format(model.entry, color, this.colors[color]) + '\n';
  }

  // Remove line break
  cssRules = cssRules.slice(0, cssRules.length - 1);

  // Perform the file substitution
  fileBuffer = format(fileBuffer, cssRules);

  // Writes the file
  fs.writeFileSync(model.target, fileBuffer);

  console.log('✔ File generated with success');
};

module.exports = ColorTableGenerator;
