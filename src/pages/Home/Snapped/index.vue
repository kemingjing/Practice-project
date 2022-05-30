<template>
  <div class="today-recommend">
    <div class="py-container">
      <h3>每日必看</h3>
      <ul class="recommend">
        <li class="banner">
          <div class="img-item">
            <p class="tab-pic">
              <router-link :to="{name:'detail'}">
                <img src="./images/today01.jpg" />
              </router-link>
            </p>
            <div class="tab-info">
              <div class="info-title">
                <router-link :to="{name:'detail'}">【低至3折】李宁短袖 </router-link>
              </div>
              <p class="info-price">
                <a href="#"> 价格：¥130.00 </a>
              </p>
            </div>
          </div>
        </li>
        <li class="banner">
          <div class="img-item">
            <p class="tab-pic">
              <router-link :to="{name:'detail'}">
                <img src="./images/today01.jpg" />
              </router-link>
            </p>
            <div class="tab-info">
              <div class="info-title">
                <router-link :to="{name:'detail'}">【低至3折】李宁短袖 </router-link>
              </div>
              <p class="info-price">
                <a href="#"> 价格：¥130.00 </a>
              </p>
            </div>
          </div>
        </li>
        <li class="banner">
          <div class="img-item">
            <p class="tab-pic">
              <router-link :to="{name:'detail'}">
                <img src="./images/today01.jpg" />
              </router-link>
            </p>
            <div class="tab-info">
              <div class="info-title">
                <router-link :to="{name:'detail'}">【低至3折】李宁短袖 </router-link>
              </div>
              <p class="info-price">
                <a href="#"> 价格：¥130.00 </a>
              </p>
            </div>
          </div>
        </li>
        <li class="banner">
          <div class="img-item">
            <p class="tab-pic">
              <router-link :to="{name:'detail'}">
                <img src="./images/today01.jpg" />
              </router-link>
            </p>
            <div class="tab-info">
              <div class="info-title">
                <router-link :to="{name:'detail'}">【低至3折】李宁短袖 </router-link>
              </div>
              <p class="info-price">
                <a href="#"> 价格：¥130.00 </a>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
};
</script>

<style scoped lang="less">
.today-recommend {
  .py-container {
    width: 1200px;
    margin: 0 auto;

    h3 {
      font-weight: 1000;
      font-size: 30px;
      line-height: 100px;
      text-align: center;
    }
    .recommend {
      // height: 165px;
      background-color: #771d1d;
      margin: 10px 0;
      padding: 10px;
      display: flex;

      
      .img-item {
        // border: 1px solid #5c1a09;
        width: 269px;
        float: left;
        overflow: hidden;
        margin: 0 12px 10px;
        background: rgb(209, 146, 146);

        .tab-pic {
          width: 230px;
          height: 210px;
          // overflow: hidden;
          text-align: center;
          margin: 5px auto 18px;

          a {
            img {
              width: 100%;
              height: 100%;
              transition: all 400ms;

              &:hover {
                // opacity: 0.8;
                transform: scale(1.1);
              }
            }
          }
        }

        .tab-info {
          background: #fafafa;

          .info-title {
            height: 50px;
            line-height: 28px;
            overflow: hidden;
            margin: 0 auto;
            padding-left: 10px;

            a {
              color: #333;
              text-decoration: none;
            }
          }

          .info-price {
            a {
              text-decoration: none;
              font-size: 20px;
              color: #e1251b;
              height: 35px;
              padding-left: 10px;
              display: block;
              line-height: 24px;
              margin: 10px auto 0;
            }
          }
        }
      }
    }
  }
}
</style>
