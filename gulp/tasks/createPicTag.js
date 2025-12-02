import { src, dest } from 'gulp';
import picture from 'gulp-picture-html';
import browserSync from 'browser-sync';

import config from '../config.js';

export const createPicTag = () => {
    return src(`${config.build.root}/*.html`)
    .pipe(picture(
        {
            extensions : ['.jpg', '.png', '.jpeg'], 
            source : ['.webp', '.avif'],    
        }
    ))
    .pipe(dest(`${config.build.root}`))
    .pipe(browserSync.stream());
}