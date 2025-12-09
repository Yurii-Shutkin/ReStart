import { src, dest } from "gulp";
import webpack from "webpack-stream";
import browserSync, { watch } from "browser-sync";

import config from "../config.js";

export const jsBuild = () => {
  return (
    src(`${config.src.js}/**/**.js`, {
      sourcemaps: true,
      base: "src",
    })
      // .pipe(
      //   webpack({
      //     mode: "development",
      //     target: "web",
      //     output: {
      //       filename: "main.min.js",
      //     },
      //   })
      // )
      .pipe(dest(`${config.build.root}`))
      .pipe(browserSync.stream())
  );
};

export const jsWatch = () => {
  watch(`${config.src.js}/**/*.js`, jsBuild);
};
