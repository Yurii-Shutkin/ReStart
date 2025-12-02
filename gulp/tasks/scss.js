import { src, dest } from 'gulp';
import gulpSass from 'gulp-sass';
import * as dartSass from 'sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';
import plumber from 'gulp-plumber';
import browserSync, { watch } from 'browser-sync';

import config from '../config.js';

const sass = gulpSass(dartSass)

export const scssBuild = () => {
    return src(`${config.src.scss}/main.scss`)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(dest(config.build.css))
    .pipe(postcss([
        autoprefixer(),
        cssnano()
    ]))
    .pipe(rename({ suffix: '.min'}))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(config.build.css))
    .pipe(browserSync.stream());
}

export const scssWatch = () => {
    watch(`${config.src.scss}/**/*.scss`, scssBuild)
}