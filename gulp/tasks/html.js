import {src, dest, series, watch} from 'gulp';
import htmlmin from 'gulp-htmlmin';
import rename from 'gulp-rename';
import include from 'gulp-file-include';
import browserSync from 'browser-sync';
import config from '../config.js';

export const htmlBuild = () => {
    return src(`${config.src.html}/pages/index.html`)
    .pipe(include({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(dest(config.build.root))
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(rename({ suffix: '.min'}))
    .pipe(dest(config.build.root))
    .pipe(browserSync.stream())
}

export const htmlWatch = () => {
    watch(`${config.src.html}/**/*.html`, htmlBuild)
}