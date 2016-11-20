'use strict';

module.exports = (gulp, plugins, config) => () => {
  gulp.watch(config.paths.sass, ['build-scss']);
  gulp.watch(config.paths.js, ['build-js']);
  gulp.watch(config.paths.html, ['copy']);
};
