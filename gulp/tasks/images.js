import { src, dest, watch, series } from 'gulp';
import imagemin from 'gulp-imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminOptipng from 'imagemin-optipng';
import webp from 'gulp-webp';
import avif from 'gulp-avif';
import browserSync from 'browser-sync';

import config from '../config.js';


const imageOptim = () => {
    return src(`${config.src.assets.images}/**/*.{png,jpg,jpeg}`, {encoding: false})
    .pipe(imagemin([
        imageminMozjpeg({quality: 75, progressive: true}),
        imageminOptipng({optimizationLevel: 5}),
    ]))

    .pipe(dest(config.build.images))
    .pipe(browserSync.stream());
}

const toAvif = () => {
    return src(`${config.src.assets.images}/**/*.{png,jpg,jpeg}0`, {encoding: false})
    .pipe(avif({ quality: 75 }))
    .pipe(dest(config.build.images))
    .pipe(browserSync.stream());
}

const toWebp = () => {
    return src(`${config.src.assets.images}/**/*.{png,jpg,jpeg}`, {encoding: false})
    .pipe(webp({ quality: 75 }))
    .pipe(dest(config.build.images))
    .pipe(browserSync.stream());
}

export const imageBuild = series(imageOptim, toAvif, toWebp);


export const imageWatch = () => {
    watch(`${config.src.assets.images}/**/*.{png,jpg,jpeg}`, imageBuild)
}