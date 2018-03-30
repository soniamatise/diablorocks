module.exports = {
	/*
	 ** Headers of the page
	 */
	head: {
		title: 'Matise | Creative Digital Agency',
		meta: [{
				charset: 'utf-8'
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				hid: 'description',
				name: 'description',
				content: 'Matise 2018 in Nuxt'
			}
		],
		link: [{
			rel: 'icon',
			type: 'image/x-icon',
			href: '/favicon.ico'
		}]
	},
	/*
	 ** Customize the progress bar color
	 */
	loading: {
		color: '#000000'
	},
	plugins: [{
			src: '~plugins/swiper.js',
			ssr: false
		},
		{
			src: '~plugins/velocity.js',
			ssr: false
		},
	],
	/*
	 ** Build configuration
	 */
	build: {
		postcss: {
			plugins: {
				'postcss-custom-properties': false
			}
		},
		/*
		 ** Run ESLint on save
		 */
		extend(config, {
			isDev,
			isClient
		}) {
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		},
		vendor: ['velocity-animate']
	},
	css: [{
			src: '~assets/scss/app.scss',
			lang: 'scss'
		},
		{
			src: 'swiper/dist/css/swiper.css'
		}
	]
}
