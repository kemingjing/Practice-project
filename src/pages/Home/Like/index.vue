<template>
  <div class="like">
    <div class="py-container">
      <div class="title">
        <h3 class="fl">猜你喜欢</h3>
        <a href="javascript:;" class="fr tip changeBnt">换一换</a>
      </div>
      <div class="bd">
        <ul class="favourate">
          <li>
            <router-link :to="{name:'detail'}">
              <img src="./images/1.jpg" alt="" />
              </router-link>
            <div class="like-text">
              <router-link :to="{name:'detail'}">
              <p>男士休闲鞋</p>
              </router-link>
              <h3>¥158.00</h3>
            </div>
          </li>
          <li>
            <router-link :to="{name:'detail'}">
            <img src="./images/1.jpg" alt="" />
            </router-link>
            <div class="like-text">
              <router-link :to="{name:'detail'}">
              <p>男士休闲鞋</p>
              </router-link>
              <h3>¥158.00</h3>
            </div>
          </li>
          <li>
            <router-link :to="{name:'detail'}">
            <img src="./images/1.jpg" alt="" />
            </router-link>
            <div class="like-text">
              <router-link :to="{name:'detail'}">
              <p>男士休闲鞋</p>
              </router-link>
              <h3>¥158.00</h3>
            </div>
          </li>
        </ul>
      </div>

      <div class="bd">
        <ul class="favourate">
          <li>
            <router-link :to="{name:'detail'}">
            <img src="./images/2.jpg" alt="" />
            </router-link>
            <div class="like-text">
              <router-link :to="{name:'detail'}">
              <p>男士休闲鞋</p>
               </router-link>
              <h3>¥158.00</h3>
            </div>
          </li>
          <li>
             <router-link :to="{name:'detail'}">
            <img src="./images/2.jpg" alt="" />
            </router-link>
            <div class="like-text">
              <router-link :to="{name:'detail'}">
              <p>男士休闲鞋</p>
              </router-link>
              <h3>¥158.00</h3>
            </div>
          </li>
          <li>
            <router-link :to="{name:'detail'}">
            <img src="./images/2.jpg" alt="" />
            </router-link>
            <div class="like-text">
              <router-link :to="{name:'detail'}">
              <p>男士休闲鞋</p>
              </router-link>
              <h3>¥158.00</h3>
            </div>
          </li>
        </ul>
      </div>

      <div class="bd">
        <ul class="favourate">
          <li>
            <router-link :to="{name:'detail'}">
            <img src="./images/3.jpg" alt="" />
            </router-link>
            <div class="like-text">
              <router-link :to="{name:'detail'}">
              <p>男士休闲鞋</p>
              </router-link>
              <h3>¥158.00</h3>
            </div>
          </li>
          <li>
            <router-link :to="{name:'detail'}">
            <img src="./images/3.jpg" alt="" />
            </router-link>
            <div class="like-text">
              <router-link :to="{name:'detail'}">
              <p>男士休闲鞋</p>
              </router-link>
              <h3>¥158.00</h3>
            </div>
          </li>
          <li>
            <router-link :to="{name:'detail'}">
            <img src="./images/3.jpg" alt="" />
            </router-link>
            <div class="like-text">
              <router-link :to="{name:'detail'}">
              <p>男士休闲鞋</p>
              </router-link>
              <h3>¥158.00</h3>
            </div>
          </li>
        </ul>
      </div>

      <div class="load">
        <a>点击加载更多 >></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
};
</script>

<style scoped lang="less">
.like {
  margin-top: 15px;
  margin-bottom: 100px;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .load {
      width: 200px;
      height: 40px;
      background-color: #df3033;
      font-size: 20px;
      margin: 30px auto;
      padding-top:10px;
      text-align: center;
      a {
        color: rgb(248, 242, 242);
      }
    }

    .title {
      overflow: hidden;

      .fl {
        // float: left;
        font-size: 30px;
        line-height: 50px;
        text-align: center;
        margin-top: 30px;
        color: #df3033;
      }

      .fr {
        float: right;
        background-image: url(./images/icons.png);
        width: 70px;
        height: 22px;
        background-position: -3px 3px;
        line-height: 30px;
        font-size: 12px;
        font-weight: 400;
        color: #666;
        text-decoration: none;
      }
    }

    .bd {
      .favourate {
        // border: 1px solid #e4e4e4;
        overflow: hidden;
        padding: 0 10px;
        // box-sizing: border-box;
        display: flex;
        margin-top: 30px;

        li {
          height: 450px;
          margin: 0 -1px;
          overflow: hidden;
          background: #fff;
          position: relative;
          width: 33.3%;
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;

          img {
            width: 340px;
            height: 340px;
            transition: all 400ms;
            margin-bottom:20px;

            &:hover {
              // opacity: 0.8;
              transform: scale(1.1);
            }
          }

          .like-text {
            padding: 0;
            width: 142px;
            // border-right: 1px solid #e4e4e4;
            font-size: 20px;

            p {
              margin: 5px 0;
            }

            h3 {
              color: #df3033;
              font-size: 20px;
              line-height: 30px;
              margin: 9px 0;
              font-weight: 700;
            }
          }
        }
      }
    }
  }
}
</style>
