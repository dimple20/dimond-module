import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "@/assets/diamond-icon/css/diamond.css";
import "@/assets/portal-icons/css/portal-icons.css";

Vue.config.productionTip = false;
//Lodash
import _ from "lodash";
Object.defineProperty(Vue.prototype, "_", { value: _ });

export const bus = new Vue();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
