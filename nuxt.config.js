
export default {
	mode: 'universal',
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'preload', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css', as: 'style', onload: 'this.onload=null;this.rel="stylesheet"' }
		],
		htmlAttrs: {
			lang: 'en'
		}
	},
	loading: false,
	plugins: [
		'@/plugins/vue_lazyload',
		'@/plugins/v_click_outside',
		'@/plugins/ip_address'
	],
	buildModules: [
		'@nuxt/typescript-build',
		'@nuxtjs/stylelint-module',
		'@nuxtjs/gtm'
	],
	modules: [
		'@nuxtjs/pwa',
		'@nuxtjs/robots',
		'@nuxtjs/sitemap',
		'@nuxtjs/axios',
		'@nuxtjs/dotenv',
		'nuxt-webfontloader',
		'@nuxtjs/style-resources',
		'nuxt-purgecss',
		'nuxt-mq',
		'cookie-universal-nuxt'
	],
	build: {
		extractCSS: true,
		// publicPath: https://cdn.example.com/_nuxt,
		extend(config) {
			config.resolve.alias.vue = 'vue/dist/vue.common'
		}
	},
	eslint: {
		fix: true
	},
	robots: [
		{ UserAgent: '*' },
		{ Disallow: '' },
		{ Sitemap: 'http://localhost:3000/sitemap.xml' }
	],
	sitemap: {
		hostname: 'http://localhost:3333',
		routes: [
			{
				url: '/',
				changefreq: 'daily',
				priority: 1,
				lastmod: '2020-03-22T13:30:00.000Z'
			}
		]
	},
	axios: {
	},
	env: {
		PROJECT_START_YEAR: 2019
	},
	webfontloader: {
		google: {
			families: ['Arvo:700', 'Josefin Sans:400&display=swap']
		}
	},
	styleResources: {
		scss: ['assets/scss/colors.scss']
	},
	router: {
		middleware: [
			'navbar_middleware',
			'ga_middleware'
		]
	},
	pwa: {
		manifest: {
			name: 'Nuxt Application',
			lang: 'en',
			theme_color: '#f00'
		}
	},
	purgeCSS: {
		mode: 'postcss'
	},
	mq: {
		defaultBreakpoint: 'default',
		breakpoints: {
			xm: 576,
			sm: 768,
			md: 992,
			lg: 1200,
			xl: Infinity
		}
	},
	gtm: {
		id: 'GTM-M4VZWL3'
	}
}
