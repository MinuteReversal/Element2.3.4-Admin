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
      params:{
        type:Object,
        default:()=>null
      }
    },
    render (_, ref) {
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

      let resolved= $nuxt.$router.resolve(props.path).resolved;
      let component= resolved.matched.find(x=>x.path===resolved.path).components.default;
  
      return h(component, data, children)
    }
  }
  