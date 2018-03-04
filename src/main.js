// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import page from 'page'
import routes from './routes'

Vue.config.productionTip = false

const app = new Vue({
  el: '#app',
  data: {
    ViewComponent: { render: h => h('div', 'loading...') }
  },
  render (h) { return h(this.ViewComponent) }
})

Object.keys(routes).forEach(route => {
  let view = routes[route]
  const Component = require('./pages/' + view + '.vue').default
  page(route, () => app.ViewComponent = Component)
})
page('*', () => app.ViewComponent = require('./pages/404.vue').default)
page()
