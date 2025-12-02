import { series, parallel } from 'gulp';
import config from "./gulp/config.js";
import server from "./gulp/tasks/server.js";
import { htmlBuild, htmlWatch } from "./gulp/tasks/html.js";
import { scssBuild, scssWatch } from './gulp/tasks/scss.js';
import { imageBuild, imageWatch } from './gulp/tasks/images.js';
import { createPicTag } from './gulp/tasks/createPicTag.js';
import { jsBuild, jsWatch } from './gulp/tasks/js.js';
import clear from './gulp/tasks/clear.js';


export const build = series(
    clear,
    htmlBuild,
    scssBuild,
    imageBuild,
    jsBuild,
    createPicTag,
)

export const watch = series(
    build,
    server,

    parallel(
        htmlWatch, 
        scssWatch, 
        imageWatch,
        jsWatch
    )
)

export default watch;
