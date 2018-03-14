import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _091b3185 = () => import('../pages/Work.vue' /* webpackChunkName: "pages/Work" */).then(m => m.default || m)
const _757fcf51 = () => import('../pages/WhatWeDo.vue' /* webpackChunkName: "pages/WhatWeDo" */).then(m => m.default || m)
const _2be66f5a = () => import('../pages/Home.vue' /* webpackChunkName: "pages/Home" */).then(m => m.default || m)
const _5cab37d8 = () => import('../pages/404.vue' /* webpackChunkName: "pages/404" */).then(m => m.default || m)
const _dcb4e708 = () => import('../pages/WhoWeAre.vue' /* webpackChunkName: "pages/WhoWeAre" */).then(m => m.default || m)
const _345765ae = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/Work",
			component: _091b3185,
			name: "Work"
		},
		{
			path: "/WhatWeDo",
			component: _757fcf51,
			name: "WhatWeDo"
		},
		{
			path: "/Home",
			component: _2be66f5a,
			name: "Home"
		},
		{
			path: "/404",
			component: _5cab37d8,
			name: "404"
		},
		{
			path: "/WhoWeAre",
			component: _dcb4e708,
			name: "WhoWeAre"
		},
		{
			path: "/",
			component: _345765ae,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
