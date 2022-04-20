<template>
  <div class="footer">
    <div class="footer-container">
      <div class="footerList">
        <div class="footerItem">
          <h4>服务保障</h4>
          <ul class="footerItemCon">
            <li>正品保证</li>
            <li>7天无理由放心退</li>
            <li>生活旅行/团购</li>
            <li>7x15小时客户服务</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>购物指南</h4>
          <ul class="footerItemCon">
            <li>导购演示</li>
            <li>订单操作</li>
            <li>会员注册</li>
            <li>账户管理</li>
            <li>收货样品</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>收货样品</h4>
          <ul class="footerItemCon">
            <li>收货样品</li>
            <li>收货样品</li>
            <li>信用卡支付</li>
            <li>零钱支付</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>配送方式</h4>
          <ul class="footerItemCon">
            <li>配送范围及运费</li>
            <li>验货与签收</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>售后服务</h4>
          <ul class="footerItemCon">
            <li>退货政策</li>
            <li>退货流程</li>
            <li>退款方式和时效</li>
            <li>换货服务</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>帮助中心</h4>
          <div class="footerItemImg"><img src="./images/wx_cz.jpg" /></div>
        </div>
      </div>
      <div class="copyright">
        <ul class="helpLink">
          <li>
            关于我们
            <span class="space"></span>
          </li>
          <li>
            联系我们
            <span class="space"></span>
          </li>
          <li>
            媒体报道
            <span class="space"></span>
          </li>
          <li>
            媒体报道
            <span class="space"></span>
          </li>
          <li>
            媒体报道
            <span class="space"></span>
          </li>
          <li>
            媒体报道
            <span class="space"></span>
          </li>
          <li>
            廉正举报
            <span class="space"></span>
          </li>
          <li>
            营销中心
            <span class="space"></span>
          </li>
          <li>
            友情链接
            <span class="space"></span>
          </li>
          <li>联系我们</li>
        </ul>
        <p>地址：宇宙银河系太阳系赤乌恒星经纬（66.78，66.78）</p>
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
.footer {
  background-color: #eaeaea;

  .footer-container {
    width: 1200px;
    margin: 0 auto;
    padding: 0 15px;

    .footerList {
      padding: 20px;
      border-bottom: 1px solid #e4e1e1;
      border-top: 1px solid #e4e1e1;
      overflow: hidden;
      padding-left: 40px;

      .footerItem {
        width: 16.6666667%;
        float: left;

        h4 {
          font-size: 14px;
        }

        .footerItemCon {
          li {
            line-height: 18px;
          }
        }

        &:last-child {
          h4 {
            font-size: 14px;
            text-align: center;
          }
          .footerItemImg {
            margin: 0 auto;
            width: 50%;
            height: 50%;
          }
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    .copyright {
      padding: 20px;

      .helpLink {
        text-align: center;

        li {
          display: inline;

          .space {
            border-left: 1px solid #666;
            width: 1px;
            height: 13px;
            background: #666;
            margin: 8px 10px;
          }
        }
      }

      p {
        margin: 10px 0;
        text-align: center;
      }
    }
  }
}
</style>
