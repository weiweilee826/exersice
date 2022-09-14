import Vue from "vue";
import "./plugins/bootstrap-vue";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

// const router = createRouter({ ... })

router.beforeEach((to, from) => {
  console.log("to", to, "from", from);
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_API}/api/user/check`;
    axios.post(api).then((response) => {
      console.log(response.data);
      if (response.data.success) {
        return false;
      } else {
        return { name: "login" };
      }
    });
  } else {
    return false;
  }
});
