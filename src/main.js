import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import VueSupabase from "vue-supabase";

Vue.use(VueSupabase, {
  supabaseUrl: "https://wyqkwblhpqjlbmarfzes.supabase.co",
  supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyOTk4NTM1LCJleHAiOjE5NTg1NzQ1MzV9.LkeDwA0BiB-4Caaqaqfsm62YbEqzMuvWS21u91NFtRw",
  supabaseOptions: {},
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
