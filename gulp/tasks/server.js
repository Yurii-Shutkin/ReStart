import browserSync from "browser-sync";
import config from "../config.js";

browserSync.create();

const server = (done) => {
  browserSync.init({
    server: config.build.root,
    port: config.server.port,
    open: true,
    notify: false,
  });

  done();
};

export default server;
