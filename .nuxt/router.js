import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _abf19df6 = () => import('..\\pages\\main.vue' /* webpackChunkName: "pages_main" */).then(m => m.default || m)
const _7d35a9e2 = () => import('..\\pages\\main\\users\\index.vue' /* webpackChunkName: "pages_main_users_index" */).then(m => m.default || m)
const _d6c9a74c = () => import('..\\pages\\main\\demo\\index.vue' /* webpackChunkName: "pages_main_demo_index" */).then(m => m.default || m)
const _51a89ec1 = () => import('..\\pages\\main\\demo\\urlQuery.vue' /* webpackChunkName: "pages_main_demo_urlQuery" */).then(m => m.default || m)
const _0c15def7 = () => import('..\\pages\\main\\custom\\component.vue' /* webpackChunkName: "pages_main_custom_component" */).then(m => m.default || m)
const _5b5ea6cc = () => import('..\\pages\\main\\custom\\nuxtloader.vue' /* webpackChunkName: "pages_main_custom_nuxtloader" */).then(m => m.default || m)
const _eae15c8e = () => import('..\\pages\\main\\custom\\loaderwindow.vue' /* webpackChunkName: "pages_main_custom_loaderwindow" */).then(m => m.default || m)
const _36c2fed1 = () => import('..\\pages\\main\\custom\\loadcomponent.vue' /* webpackChunkName: "pages_main_custom_loadcomponent" */).then(m => m.default || m)
const _4e78447c = () => import('..\\pages\\main\\demo\\importPage.vue' /* webpackChunkName: "pages_main_demo_importPage" */).then(m => m.default || m)
const _017bb56c = () => import('..\\pages\\main\\demo\\form.vue' /* webpackChunkName: "pages_main_demo_form" */).then(m => m.default || m)
const _d9dd7de0 = () => import('..\\pages\\main\\integration\\CKEditor4.vue' /* webpackChunkName: "pages_main_integration_CKEditor4" */).then(m => m.default || m)
const _08d95d6e = () => import('..\\pages\\main\\home\\welcome.vue' /* webpackChunkName: "pages_main_home_welcome" */).then(m => m.default || m)
const _3574dc46 = () => import('..\\pages\\main\\demo\\list.vue' /* webpackChunkName: "pages_main_demo_list" */).then(m => m.default || m)
const _18753763 = () => import('..\\pages\\main\\demo\\docs.vue' /* webpackChunkName: "pages_main_demo_docs" */).then(m => m.default || m)
const _d9c14ede = () => import('..\\pages\\main\\integration\\CKEditor5.vue' /* webpackChunkName: "pages_main_integration_CKEditor5" */).then(m => m.default || m)
const _3ae1888c = () => import('..\\pages\\main\\integration\\AMap.vue' /* webpackChunkName: "pages_main_integration_AMap" */).then(m => m.default || m)
const _77b8402a = () => import('..\\pages\\main\\integration\\ECharts.vue' /* webpackChunkName: "pages_main_integration_ECharts" */).then(m => m.default || m)
const _288097a7 = () => import('..\\pages\\main\\demo\\router.push.vue' /* webpackChunkName: "pages_main_demo_router.push" */).then(m => m.default || m)
const _4bc04720 = () => import('..\\pages\\main\\demo\\tableexpand.vue' /* webpackChunkName: "pages_main_demo_tableexpand" */).then(m => m.default || m)
const _65fc2cd2 = () => import('..\\pages\\main\\demo\\listdetail.vue' /* webpackChunkName: "pages_main_demo_listdetail" */).then(m => m.default || m)
const _9f70579a = () => import('..\\pages\\main\\custom\\buttonCooldown.vue' /* webpackChunkName: "pages_main_custom_buttonCooldown" */).then(m => m.default || m)
const _3f826f63 = () => import('..\\pages\\main\\custom\\bizcomponents.vue' /* webpackChunkName: "pages_main_custom_bizcomponents" */).then(m => m.default || m)
const _2cfac3ad = () => import('..\\pages\\main\\demo\\urlParams\\_id.vue' /* webpackChunkName: "pages_main_demo_urlParams__id" */).then(m => m.default || m)
const _1310a537 = () => import('..\\pages\\main\\users\\_id.vue' /* webpackChunkName: "pages_main_users__id" */).then(m => m.default || m)
const _7853cbb6 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



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
			component: _abf19df6,
			name: "main",
			children: [
				{
					path: "users",
					component: _7d35a9e2,
					name: "main-users"
				},
				{
					path: "demo",
					component: _d6c9a74c,
					name: "main-demo"
				},
				{
					path: "demo/urlQuery",
					component: _51a89ec1,
					name: "main-demo-urlQuery"
				},
				{
					path: "custom/component",
					component: _0c15def7,
					name: "main-custom-component"
				},
				{
					path: "custom/nuxtloader",
					component: _5b5ea6cc,
					name: "main-custom-nuxtloader"
				},
				{
					path: "custom/loaderwindow",
					component: _eae15c8e,
					name: "main-custom-loaderwindow"
				},
				{
					path: "custom/loadcomponent",
					component: _36c2fed1,
					name: "main-custom-loadcomponent"
				},
				{
					path: "demo/importPage",
					component: _4e78447c,
					name: "main-demo-importPage"
				},
				{
					path: "demo/form",
					component: _017bb56c,
					name: "main-demo-form"
				},
				{
					path: "integration/CKEditor4",
					component: _d9dd7de0,
					name: "main-integration-CKEditor4"
				},
				{
					path: "home/welcome",
					component: _08d95d6e,
					name: "main-home-welcome"
				},
				{
					path: "demo/list",
					component: _3574dc46,
					name: "main-demo-list"
				},
				{
					path: "demo/docs",
					component: _18753763,
					name: "main-demo-docs"
				},
				{
					path: "integration/CKEditor5",
					component: _d9c14ede,
					name: "main-integration-CKEditor5"
				},
				{
					path: "integration/AMap",
					component: _3ae1888c,
					name: "main-integration-AMap"
				},
				{
					path: "integration/ECharts",
					component: _77b8402a,
					name: "main-integration-ECharts"
				},
				{
					path: "demo/router.push",
					component: _288097a7,
					name: "main-demo-router.push"
				},
				{
					path: "demo/tableexpand",
					component: _4bc04720,
					name: "main-demo-tableexpand"
				},
				{
					path: "demo/listdetail",
					component: _65fc2cd2,
					name: "main-demo-listdetail"
				},
				{
					path: "custom/buttonCooldown",
					component: _9f70579a,
					name: "main-custom-buttonCooldown"
				},
				{
					path: "custom/bizcomponents",
					component: _3f826f63,
					name: "main-custom-bizcomponents"
				},
				{
					path: "demo/urlParams/:id?",
					component: _2cfac3ad,
					name: "main-demo-urlParams-id"
				},
				{
					path: "users/:id?",
					component: _1310a537,
					name: "main-users-id"
				}
			]
		},
		{
			path: "/",
			component: _7853cbb6,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
