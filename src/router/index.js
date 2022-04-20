//引入vue-router路由插件
import VueRouter from "vue-router";
//引入Vue
import Vue from "vue";
import routes from "./routes";
//使用插件
Vue.use(VueRouter);
//引入store
import store from "@/store";


//对外暴露VueRouter类的实例
let router = new VueRouter({
  //配置路由

  routes,

});



export default router;
