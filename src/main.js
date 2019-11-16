import Vue from 'vue'
import App from './App.vue'
import router from "./router"
// import "@common/components"
import { Card } from 'vant';
import store from "@store";

/**复选框 */
import { Checkbox, CheckboxGroup } from 'vant';
Vue.use(Checkbox).use(CheckboxGroup);
/** button*/
import { Button } from 'vant';
Vue.use(Button);
/**购物车结算 */
import { SubmitBar } from 'vant';
Vue.use(SubmitBar);



Vue.use(Card);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
