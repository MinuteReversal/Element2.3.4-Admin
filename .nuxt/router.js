import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _175c7073 = () => import('..\\pages\\main.vue' /* webpackChunkName: "pages_main" */).then(m => m.default || m)
const _5167d1fd = () => import('..\\pages\\main\\users\\index.vue' /* webpackChunkName: "pages_main_users_index" */).then(m => m.default || m)
const _495e20a8 = () => import('..\\pages\\main\\demo\\index.vue' /* webpackChunkName: "pages_main_demo_index" */).then(m => m.default || m)
const _2d9e7c5e = () => import('..\\pages\\main\\demo\\docs.vue' /* webpackChunkName: "pages_main_demo_docs" */).then(m => m.default || m)
const _69bfb8d9 = () => import('..\\pages\\main\\integration\\ECharts.vue' /* webpackChunkName: "pages_main_integration_ECharts" */).then(m => m.default || m)
const _24571579 = () => import('..\\pages\\main\\demo\\router.push.vue' /* webpackChunkName: "pages_main_demo_router.push" */).then(m => m.default || m)
const _54134b7c = () => import('..\\pages\\main\\demo\\tableexpand.vue' /* webpackChunkName: "pages_main_demo_tableexpand" */).then(m => m.default || m)
const _87492cf6 = () => import('..\\pages\\main\\demo\\listdetail.vue' /* webpackChunkName: "pages_main_demo_listdetail" */).then(m => m.default || m)
const _129c16a6 = () => import('..\\pages\\main\\integration\\CKEditor.vue' /* webpackChunkName: "pages_main_integration_CKEditor" */).then(m => m.default || m)
const _792b9440 = () => import('..\\pages\\main\\home\\welcome.vue' /* webpackChunkName: "pages_main_home_welcome" */).then(m => m.default || m)
const _5b91804c = () => import('..\\pages\\main\\demo\\form.vue' /* webpackChunkName: "pages_main_demo_form" */).then(m => m.default || m)
const _3dd1c46a = () => import('..\\pages\\main\\demo\\importPage.vue' /* webpackChunkName: "pages_main_demo_importPage" */).then(m => m.default || m)
const _063066b4 = () => import('..\\pages\\main\\demo\\list.vue' /* webpackChunkName: "pages_main_demo_list" */).then(m => m.default || m)
const _28c57ba2 = () => import('..\\pages\\main\\demo\\urlQuery.vue' /* webpackChunkName: "pages_main_demo_urlQuery" */).then(m => m.default || m)
const _5ad2c6ca = () => import('..\\pages\\main\\demo\\urlParams\\_id.vue' /* webpackChunkName: "pages_main_demo_urlParams__id" */).then(m => m.default || m)
const _3867a0b6 = () => import('..\\pages\\main\\users\\_id.vue' /* webpackChunkName: "pages_main_users__id" */).then(m => m.default || m)
const _94b30bf0 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



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
    mode: 'hash',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/main",
			component: _175c7073,
			name: "main",
			children: [
				{
					path: "users",
					component: _5167d1fd,
					name: "main-users"
				},
				{
					path: "demo",
					component: _495e20a8,
					name: "main-demo"
				},
				{
					path: "demo/docs",
					component: _2d9e7c5e,
					name: "main-demo-docs"
				},
				{
					path: "integration/ECharts",
					component: _69bfb8d9,
					name: "main-integration-ECharts"
				},
				{
					path: "demo/router.push",
					component: _24571579,
					name: "main-demo-router.push"
				},
				{
					path: "demo/tableexpand",
					component: _54134b7c,
					name: "main-demo-tableexpand"
				},
				{
					path: "demo/listdetail",
					component: _87492cf6,
					name: "main-demo-listdetail"
				},
				{
					path: "integration/CKEditor",
					component: _129c16a6,
					name: "main-integration-CKEditor"
				},
				{
					path: "home/welcome",
					component: _792b9440,
					name: "main-home-welcome"
				},
				{
					path: "demo/form",
					component: _5b91804c,
					name: "main-demo-form"
				},
				{
					path: "demo/importPage",
					component: _3dd1c46a,
					name: "main-demo-importPage"
				},
				{
					path: "demo/list",
					component: _063066b4,
					name: "main-demo-list"
				},
				{
					path: "demo/urlQuery",
					component: _28c57ba2,
					name: "main-demo-urlQuery"
				},
				{
					path: "demo/urlParams/:id?",
					component: _5ad2c6ca,
					name: "main-demo-urlParams-id"
				},
				{
					path: "users/:id?",
					component: _3867a0b6,
					name: "main-users-id"
				}
			]
		},
		{
			path: "/",
			component: _94b30bf0,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
