import Vue from 'vue';
import ElementUI from 'element-ui';
// import { Button, Select } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import VueResource from 'vue-resource';
import router from './router'


// 注册 全部引入
Vue.use(ElementUI)
// 按需引入
// Vue.use(Button)

// 注册 请求数据
Vue.use(VueResource)

// 挂载
const root = document.createElement('div');
document.body.appendChild(root);

// new Vue({
//   // el: '#app',
//   render: h => h(App),
//   data() {
//     console.log(this)
//     return {
//       message: 'Hello World!'
//     }
//   }
// }).$mount(root)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
}).$mount(root)

// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

