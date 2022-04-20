<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>聚划算欢迎您！</p>
          <!-- 没有用户名：未登录 -->
          <p v-if="!userName">
            <span>您好！请</span>
            <!-- 声明式导航：router-link务必要有to属性 -->
            <router-link to="">登录</router-link>
            <router-link class="register" to="">免费注册</router-link>
          </p>
          <!-- 登录了 -->
          <p v-else>
                <a>{{userName}}</a>
                <a class="register" @click="logout">退出登录</a>
          </p>
        </div>
        <div class="typeList">
          <router-link to="">我的订单</router-link>
          <router-link to="">我的购物车</router-link>
          <a href="###">我的聚划算</a>
          <a href="###">聚划算会员</a>
          <a href="###">企业采购</a>
          <a href="###">客服服务</a>
          <a href="###">合作招商</a>
          <a href="###">手机app</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <!-- router-link组件本省就是一个a标签 -->
        <router-link to="/" class="logo">
          <img src="./images/logo.png" alt="" />
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model="keyword"
          />
          <button
            class="sui-btn btn-xlarge btn-danger"
            type="button"
            @click="goSearch"
          >
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      //响应式数据，用于收集表单元素文本内容
      keyword: "",
    };
  },
  methods: {
    //搜索按钮的事件处理函数，用于跳转到search路由组件当中
    goSearch() {
      //代表的是如果有query参数也带过去
      if (this.$route.query) {
        let loction = {
          name: "search",
          params: { keyword: this.keyword || undefined },      //后面加个‘|| undefined’是为了防止this.keyword为''（空串）时，路径出现问题
        };
        loction.query = this.$route.query;
        this.$router.push(loction);
      }
    },

    logout(){}
  },
  mounted() {
    //通过全局事件总线清除关键字
    this.$bus.$on("clear", () => {
      this.keyword = "";
    });
  },
  computed:{
    //用户名信息
    userName(){
      
    }
  }
};
</script>

<style scoped lang="less">
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 80px;
          height: 80px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float:left;
      margin-top: 56px;
      margin-left: 100px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 500px;
          height: 40px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 40px;
          width: 70px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>
