<template>
  <div class="rank">
    <div class="tab">
      <img src="./images/bg0.jpg" alt="" />
    </div>

    <div class="content">
      <ul>
        <li>
          <div class="img-item">
            <p class="tab-pic">
              <router-link :to="{name:'detail'}">
                <img src="./images/1.jpg" />
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
          <div class="img-item">
            <p class="tab-pic">
              <router-link :to="{name:'detail'}">
                <img src="./images/1.jpg" />
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
          <div class="img-item">
            <p class="tab-pic">
              <router-link :to="{name:'detail'}">
                <img src="./images/1.jpg" />
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
          <div class="img-item">
            <p class="tab-pic">
              <router-link :to="{name:'detail'}">
                <img src="./images/1.jpg" />
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
        <li>
          <div class="img-item">
            <p class="tab-pic">
              <router-link :to="{name:'detail'}">
                <img src="./images/1.jpg" />
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
          <div class="img-item">
            <p class="tab-pic">
              <router-link :to="{name:'detail'}">
                <img src="./images/1.jpg" />
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
          <div class="img-item">
            <p class="tab-pic">
              <router-link :to="{name:'detail'}">
                <img src="./images/1.jpg" />
              </router-link >
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
          <div class="img-item">
            <p class="tab-pic">
              <router-link :to="{name:'detail'}">
                <img src="./images/1.jpg" />
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
.rank {
  width: 1200px;
  margin: 0 auto;

  .tab {
    margin: 100px auto 0;
    width: 1170px;
    height: 120px;
  }

  .content {
    overflow: hidden;
    padding: 10px;

    ul {
      li {
        overflow: hidden;
        list-style: none;
        line-height: 18px;

        .img-item {
          border: 1px solid #e1251b;
          width: 269px;
          float: left;
          overflow: hidden;
          margin: 0 12px 10px;
          background: #fff;

          .tab-pic {
            width: 230px;
            height: 210px;
            text-align: center;
            margin: 5px auto;

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
}
</style>
