
import { AxiosStatic } from "axios";
import VueRouter from "vue-router";

declare module 'vue/types/vue' {
  interface Vue {
    $http: AxiosStatic;
    $router: VueRouter;
  }
}
