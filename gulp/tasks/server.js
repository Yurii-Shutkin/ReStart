import browserSync from "browser-sync";
import config from "../config.js";

browserSync.create();

const server = done => {
  browserSync.init({
    server: config.build.root, // хост по заданному каталогу
    port: config.server.port, // использовать заданный порт

    open: true, // автоматически открыть страницу в браузере после запуска таска
    notify: false, // показать уведомление
  })

  done()
}

export default server;