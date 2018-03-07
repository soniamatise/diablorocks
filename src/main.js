// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.config.productionTip = false

const router = new VueRouter({
	routes // short for `routes: routes`
})

new Vue({
	el: '#app',
	data: {
		ViewComponent: {
			render: h => h('div', 'loading...')
		}
	},
	router,
	render(h) {
		return h(this.ViewComponent)
	}
})
