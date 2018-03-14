// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

// routes
import Home from './pages/Home'

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{ path: '/', component: Home }
	]
})


new Vue({
	el: '#app',
	// data: {
	// 	ViewComponent: {
	// 		render: h => h('div', 'loading...')
	// 	}
	// },
	router,
	render(h) {
		return h(this.ViewComponent)
	}
})
