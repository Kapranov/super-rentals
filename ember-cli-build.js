/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    emberCliFontAwesome: {
      useScss: true
    }
  });

  //app.import(app.bowerDirectory + '/bootstrap/dist/css/bootstrap.css');
  //app.import(app.bowerDirectory + '/bootstrap/dist/js/bootstrap.js');
  //app.import(app.bowerDirectory + '/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', {
  //  destDir: 'fonts'
  //});

  return app.toTree();
};
