import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _175c7073 = () => import('..\\pages\\main.vue' /* webpackChunkName: "pages_main" */).then(m => m.default || m)
const _5167d1fd = () => import('..\\pages\\main\\users\\index.vue' /* webpackChunkName: "pages_main_users_index" */).then(m => m.default || m)
const _495e20a8 = () => import('..\\pages\\main\\demo\\index.vue' /* webpackChunkName: "pages_main_demo_index" */).then(m => m.default || m)
const _302b2aa7 = () => import('..\\pages\\main\\custom\\loaderwindow.vue' /* webpackChunkName: "pages_main_custom_loaderwindow" */).then(m => m.default || m)
const _3dd1c46a = () => import('..\\pages\\main\\demo\\importPage.vue' /* webpackChunkName: "pages_main_demo_importPage" */).then(m => m.default || m)
const _2d9e7c5e = () => import('..\\pages\\main\\demo\\docs.vue' /* webpackChunkName: "pages_main_demo_docs" */).then(m => m.default || m)
const _4d61b435 = () => import('..\\pages\\main\\custom\\bizcomponents.vue' /* webpackChunkName: "pages_main_custom_bizcomponents" */).then(m => m.default || m)
const _1e0d9f8a = () => import('..\\pages\\main\\demo\\fortable.vue' /* webpackChunkName: "pages_main_demo_fortable" */).then(m => m.default || m)
const _57d50378 = () => import('..\\pages\\main\\demo\\listform.vue' /* webpackChunkName: "pages_main_demo_listform" */).then(m => m.default || m)
const _44a243a3 = () => import('..\\pages\\main\\custom\\loadcomponent.vue' /* webpackChunkName: "pages_main_custom_loadcomponent" */).then(m => m.default || m)
const _4128adff = () => import('..\\pages\\main\\integration\\CKEditor5.vue' /* webpackChunkName: "pages_main_integration_CKEditor5" */).then(m => m.default || m)
const _87492cf6 = () => import('..\\pages\\main\\demo\\listdetail.vue' /* webpackChunkName: "pages_main_demo_listdetail" */).then(m => m.default || m)
const _5b91804c = () => import('..\\pages\\main\\demo\\form.vue' /* webpackChunkName: "pages_main_demo_form" */).then(m => m.default || m)
const _86f0199a = () => import('..\\pages\\main\\demo\\if.vue' /* webpackChunkName: "pages_main_demo_if" */).then(m => m.default || m)
const _28c57ba2 = () => import('..\\pages\\main\\demo\\urlQuery.vue' /* webpackChunkName: "pages_main_demo_urlQuery" */).then(m => m.default || m)
const _d6a87aa8 = () => import('..\\pages\\main\\demo\\elseif.vue' /* webpackChunkName: "pages_main_demo_elseif" */).then(m => m.default || m)
const _07ec5cc9 = () => import('..\\pages\\main\\custom\\component.vue' /* webpackChunkName: "pages_main_custom_component" */).then(m => m.default || m)
const _69bfb8d9 = () => import('..\\pages\\main\\integration\\ECharts.vue' /* webpackChunkName: "pages_main_integration_ECharts" */).then(m => m.default || m)
const _54134b7c = () => import('..\\pages\\main\\demo\\tableexpand.vue' /* webpackChunkName: "pages_main_demo_tableexpand" */).then(m => m.default || m)
const _24571579 = () => import('..\\pages\\main\\demo\\router.push.vue' /* webpackChunkName: "pages_main_demo_router.push" */).then(m => m.default || m)
const _792b9440 = () => import('..\\pages\\main\\home\\welcome.vue' /* webpackChunkName: "pages_main_home_welcome" */).then(m => m.default || m)
const _4b50398c = () => import('..\\pages\\main\\custom\\nuxtloader.vue' /* webpackChunkName: "pages_main_custom_nuxtloader" */).then(m => m.default || m)
const _eb324cb6 = () => import('..\\pages\\main\\custom\\permissionbutton.vue' /* webpackChunkName: "pages_main_custom_permissionbutton" */).then(m => m.default || m)
const _48bce8a3 = () => import('..\\pages\\main\\demo\\for.vue' /* webpackChunkName: "pages_main_demo_for" */).then(m => m.default || m)
const _5e5129a1 = () => import('..\\pages\\main\\custom\\buttonCooldown.vue' /* webpackChunkName: "pages_main_custom_buttonCooldown" */).then(m => m.default || m)
const _411a967e = () => import('..\\pages\\main\\integration\\CKEditor4.vue' /* webpackChunkName: "pages_main_integration_CKEditor4" */).then(m => m.default || m)
const _063066b4 = () => import('..\\pages\\main\\demo\\list.vue' /* webpackChunkName: "pages_main_demo_list" */).then(m => m.default || m)
const _43348ce8 = () => import('..\\pages\\main\\integration\\AMap.vue' /* webpackChunkName: "pages_main_integration_AMap" */).then(m => m.default || m)
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
					path: "custom/loaderwindow",
					component: _302b2aa7,
					name: "main-custom-loaderwindow"
				},
				{
					path: "demo/importPage",
					component: _3dd1c46a,
					name: "main-demo-importPage"
				},
				{
					path: "demo/docs",
					component: _2d9e7c5e,
					name: "main-demo-docs"
				},
				{
					path: "custom/bizcomponents",
					component: _4d61b435,
					name: "main-custom-bizcomponents"
				},
				{
					path: "demo/fortable",
					component: _1e0d9f8a,
					name: "main-demo-fortable"
				},
				{
					path: "demo/listform",
					component: _57d50378,
					name: "main-demo-listform"
				},
				{
					path: "custom/loadcomponent",
					component: _44a243a3,
					name: "main-custom-loadcomponent"
				},
				{
					path: "integration/CKEditor5",
					component: _4128adff,
					name: "main-integration-CKEditor5"
				},
				{
					path: "demo/listdetail",
					component: _87492cf6,
					name: "main-demo-listdetail"
				},
				{
					path: "demo/form",
					component: _5b91804c,
					name: "main-demo-form"
				},
				{
					path: "demo/if",
					component: _86f0199a,
					name: "main-demo-if"
				},
				{
					path: "demo/urlQuery",
					component: _28c57ba2,
					name: "main-demo-urlQuery"
				},
				{
					path: "demo/elseif",
					component: _d6a87aa8,
					name: "main-demo-elseif"
				},
				{
					path: "custom/component",
					component: _07ec5cc9,
					name: "main-custom-component"
				},
				{
					path: "integration/ECharts",
					component: _69bfb8d9,
					name: "main-integration-ECharts"
				},
				{
					path: "demo/tableexpand",
					component: _54134b7c,
					name: "main-demo-tableexpand"
				},
				{
					path: "demo/router.push",
					component: _24571579,
					name: "main-demo-router.push"
				},
				{
					path: "home/welcome",
					component: _792b9440,
					name: "main-home-welcome"
				},
				{
					path: "custom/nuxtloader",
					component: _4b50398c,
					name: "main-custom-nuxtloader"
				},
				{
					path: "custom/permissionbutton",
					component: _eb324cb6,
					name: "main-custom-permissionbutton"
				},
				{
					path: "demo/for",
					component: _48bce8a3,
					name: "main-demo-for"
				},
				{
					path: "custom/buttonCooldown",
					component: _5e5129a1,
					name: "main-custom-buttonCooldown"
				},
				{
					path: "integration/CKEditor4",
					component: _411a967e,
					name: "main-integration-CKEditor4"
				},
				{
					path: "demo/list",
					component: _063066b4,
					name: "main-demo-list"
				},
				{
					path: "integration/AMap",
					component: _43348ce8,
					name: "main-integration-AMap"
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
