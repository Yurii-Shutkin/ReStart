import {src, dest, watch} from 'gulp';
import htmlmin from 'gulp-htmlmin';
import rename from 'gulp-rename';
import include from 'gulp-file-include';
import clone from 'gulp-clone';
import merge from 'merge-stream';
import browserSync from 'browser-sync';

import config from '../config.js';

// export const htmlBuild = () => {
//     return src([
//       // `${config.src.html}/index.html`,
//       `${config.src.html}/pages/**/*.html`,
//       `!${config.src.html}/pages/**/blocks/*.html`
//     ])
//     .pipe(include({
//       prefix: '@@',
//       basepath: '@file'
//     }))
//     .pipe(dest(config.build.root))
//     .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
//     .pipe(rename({ suffix: '.min'}))
//     .pipe(dest((file) => {
//       file.path = path.join(file.base, path.basename(file.path));
//       return `${config.build.root}`
//     }))
//     .pipe(browserSync.stream())
// }

export const htmlBuild = () => { 
  const htmlStream = src([
    `${config.src.html}/pages/**/*.html`,
    `!${config.src.html}/pages/home/index.html`,
    `!${config.src.html}/pages/**/blocks/*.html`
  ])
    .pipe(include({
      prefix: '@@',
      basepath: '@file'
    }))

  const indexStream = src(`${config.src.html}/pages/home/index.html`)
    .pipe(include({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(rename(file => {
      file.dirname = ''
    }));

    const normalPages = htmlStream
      .pipe(clone())
      .pipe(dest(config.build.root));

    const minifiedPages = htmlStream
      .pipe(clone())
      .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments: true
      }))
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(dest(config.build.root));

      const normal = indexStream
      .pipe(clone())
      .pipe(dest(config.build.root));

    const minified = indexStream
      .pipe(clone())
      .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments: true
      }))
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(dest(config.build.root));

    return merge(normalPages, minifiedPages, normal, minified)
      .pipe(browserSync.stream());
};


export const htmlWatch = () => {
    watch(`${config.src.html}/**/*.html`, htmlBuild)
}