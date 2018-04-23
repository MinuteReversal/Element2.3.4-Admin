/**
 * @author   : mailzy@vip.qq.com
 * @datetime :20180423
 */
export default {
  name: 'nuxt-loader',
  functional: true,
  props: {
    path: {
      type: String,
      default: 'default'
    },
    params: {
      type: Object,
      default: () => null
    },
    _routerRoot:{
      type:Object,
      default:()=>$nuxt._routerRoot
    }
  },
  render(_, ref) {
    console.log("nuxt-loader render");

    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    let resolved = $nuxt.$router.resolve(props.path).resolved;
    let matched = resolved.matched;
    let component = matched.find(x => x.path === resolved.path).components.default;


    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      vm._routerRoot={
        _route:resolved,
        _router: $nuxt.$router
      }
    }

      // also register instance in prepatch hook
      // in case the same component instance is reused across different routes
      ; (data.hook || (data.hook = {})).prepatch = function (_, vnode) {
        component = vnode.componentInstance;
      };

    // resolve props
    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass);
      // pass non-declared props as attrs
      var attrs = data.attrs = data.attrs || {};
      for (var key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key];
          delete propsToPass[key];
        }
      }
    }

    return h(component, data, children)
  }
}

function resolveProps(route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

function extend(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
  return to
}