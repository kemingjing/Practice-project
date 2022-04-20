<template>
  <div>
    <!-- 全局的三级菜单 -->
    <!--typeNav在main.js中被定义为全局组件，可以直接使用-->
    <typeNav />
    <ListContainer />
    <Snapped />
    <Rank />
    <Like />

  </div>
</template>

<script>
//非路由组件定义、注册、使用
import ListContainer from "./ListContainer";
import Snapped from "./Snapped";
import Rank from "./Rank";
import Like from "./Like";

import { mapState } from "vuex";
export default {
  name: "",
  components: {
    ListContainer,
    Snapped,
    Rank,
    Like,
  },
  mounted() {

 
  },
  computed: {
  },
};
</script>

<style scoped></style>
