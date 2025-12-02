const srcPath = 'src';
const buildPath = 'build';

const config = {
    server: {
        proxy: 'http://localhost', 
        port: 3000,
    },

    src: {
        root: srcPath,
        html: `${srcPath}/html`,
        scss: `${srcPath}/scss`,
        js: `${srcPath}/js`,

        assets: {
            root: `${srcPath}/assets`,
            images: `${srcPath}/assets/images`,
            fonts: `${srcPath}/assets/fonts`,
            icons: `${srcPath}/assets/icons`
        },
    },

    build: {
        root: `${buildPath}`,
        html: `${buildPath}/`,
        css: `${buildPath}/css`,
        js: `${buildPath}/js`,
        images: `${buildPath}/images`,
        fonts: `${buildPath}/fonts`,
    }
}

export default config;