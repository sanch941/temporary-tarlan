import { config } from 'dotenv';
import autoPrefixer from 'autoprefixer';
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
        title: 'Tarlan Payments - платежи для бизнеса',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            }
        ],
        link: [{ rel: 'icon', type: 'image/png', href: 'favicon.png' }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: {},
    /*
     ** Global CSS
     */
    css: ['swiper/css/swiper.css', '@/assets/sass/style.scss'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: ['~/plugins/scroll-to.client.js'],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
        '@aceforth/nuxt-optimized-images'
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    ],
    optimizedImages: {
        optimizeImages: true
    },
    /*
     ** Nuxt.js modules
     */

    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        postcss: {
            plugins: [autoPrefixer()]
        }
    },
    env: {
        dev: process.env.NODE_ENV === 'development',
        baseUrl: process.env.BASE_URL
    }
};
