import {src, dest} from 'gulp'
import webpack from 'webpack-stream';
import browserSync, { watch } from 'browser-sync';

import config from '../config.js';

export const jsBuild = () => {
    return src(`${config.src.js}/app.js`, { sourcemaps: true })
    .pipe(webpack({
        mode: 'development',
        target: 'web',
        output: {
            filename: 'app.min.js'
        }
    }))
    .pipe(dest(config.build.js))
    .pipe(browserSync.stream())
}

export const jsWatch = () => {
    watch(`${config.src.js}/**/*.js`, jsBuild)
}