import { config } from 'dotenv';
import PurgecssPlugin from 'purgecss-webpack-plugin';
import autoPrefixer from 'autoprefixer';
import doesNothing from './plugins/postcss-does-nothing';
config();

export default {
    generate: {
        routes: []
    },
    mode: 'spa',
    /*
     ** Headers of the page
     */
    head: {
        title: 'Static template',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            }
        ]
        // link: [
        //     { rel: 'icon', type: 'image/png', href: '' }
        // ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    optimization: {
        splitChunks: {
            pages: true,
            commons: true
        }
    },
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module'
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    ],
    /*
     ** Nuxt.js modules
     */

    /*
     ** Build configuration
     */
    build: {
        extractCSS: true,
        transpile: ['vee-validate/dist/rules'],
        /*
         ** You can extend webpack config here
         */
        postcss: {
            plugins: [
                process.env.NODE_ENV === 'production'
                    ? autoPrefixer()
                    : doesNothing()
            ]
        }
    },
    env: {
        dev: process.env.NODE_ENV === 'development',
        baseUrl: process.env.BASE_URL
    },
    extend(config, ctx) {
        if (!ctx.isDev) {
            config.plugins.push(
                new PurgecssPlugin({
                    paths: [
                        'components/**/*.vue',
                        'layouts/**/*.vue',
                        'pages/**/*.vue',
                        'plugins/**/*.js'
                    ],
                    styleExtensions: ['.css'],
                    whitelist: ['body', 'html', 'nuxt-progress'],
                    extractors: [
                        {
                            extractor(content) {
                                return content.match(/[\w-.:/]+(?<!:)/g);
                            },
                            extensions: ['html', 'vue', 'js']
                        }
                    ]
                })
            );
        }
    }
};
