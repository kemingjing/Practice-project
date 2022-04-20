<template>
  <div>
    <Header />
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!-- 在Home与Search可见的,其他路由组件隐藏 -->
    <Footer v-show="$route.meta.isShow" />
  </div>
</template>

<script>
//引入Header与Footer非路由组件
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "",
  data() {
    return {
      msg: "abc"
    }
  },
  components: {
    Header,
    Footer,
  },
  mounted() {
    //派发一个action||获取商品分类的三级列表的数据
    this.$store.dispatch("getCategoryList");
  },
};
</script>

<style scoped></style>
