import { src, dest, watch } from "gulp";
import htmlmin from "gulp-htmlmin";
import rename from "gulp-rename";
import include from "gulp-file-include";
import clone from "gulp-clone";
import merge from "merge-stream";
import browserSync from "browser-sync";

import config from "../config.js";

export const htmlBuild = (cb) => {
  const otherPages = src([
    `${config.src.html}/pages/**/*.html`,
    `!${config.src.html}/pages/home/index.html`,
    `!${config.src.html}/pages/**/blocks/*.html`,
  ])
    .pipe(
      include({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(dest(config.build.root))
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest(config.build.root));

  const indexPage = src(`${config.src.html}/pages/home/index.html`)
    .pipe(
      include({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(
      rename((file) => {
        file.dirname = "";
      })
    )
    .pipe(dest(config.build.root))
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest(config.build.root));

  return merge(otherPages, indexPage).pipe(browserSync.stream());
};

export const htmlWatch = () => {
  watch(`${config.src.html}/**/*.html`, htmlBuild);
};
