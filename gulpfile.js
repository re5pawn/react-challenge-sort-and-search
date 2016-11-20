'use strict';

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const config = require('./gulp/configs/main.config');
const register = require(`./gulp/utils/register`);

register(gulp, plugins, config)([
  'build-js',
  'build-scss',
  'copy',
  'serve',
  'watch',
  'deploy'
]);

gulp.task('build', ['build-js', 'build-scss', 'copy']);
gulp.task('default', ['watch', 'serve']);
