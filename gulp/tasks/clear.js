import { src } from 'gulp';
import clean from 'gulp-clean';

import config from '../config.js';

const clear = () => {
    return src(config.build.root, {
    read: false,
    allowEmpty: true, 
  }).pipe(
   
    clean({
      force: true, 
    }),
  )

};

export default clear;