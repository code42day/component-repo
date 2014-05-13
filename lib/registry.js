var path = require('path');
var fs = require('fs');
var cp = require('cp-r');

module.exports = registry;

function registry(repo) {
  forEachComponent('components', function(component, version) {
    var from = path.join('components', component);
    var to = path.join(repo, component.replace('-', '/'), version);
    cp(from, to);
  });
}

/**
 * Search `dir` for installed components.
 *
 * @param {String} dir
 * @return {Object}
 */
function forEachComponent(dir, fn) {
  forEachInDir(dir, function(d) {
    var file = path.join(dir, d, 'component.json');
    var conf = require(path.resolve(file));
    fn(d, conf.version);
  });
}

function forEachInDir(dir, fn) {
  fs.readdir(dir, function(err, files) {
    if (err) {
      return console.log(err);
    }
    files.forEach(fn);
  });
}