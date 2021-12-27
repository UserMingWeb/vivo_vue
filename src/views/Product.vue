<!--  -->
<template>
  <div class="product">
    <header-menu></header-menu>
    <nav-fix></nav-fix>
    <div class="product_main">
      <div class="product_vivoPro">
        <div class="product_vivoPro_left">
          <ul class="ul">
            <li style="position: relative">
              <img class="right" src="../assets/img/hot.png" alt="v" />
            </li>
            <li v-for="(item, index) in msg" :key="index">
              <img :src="item.url" alt="" v-show="index == showIndex" />
            </li>
          </ul>
          <div class="product_vivoPro_left_button">
            <ul>
              <li @mouseover="changShow(0)">
                <img :src="msg[0].url" alt="" />
              </li>
              <li @mouseover="changShow(1)">
                <img :src="msg[1].url" alt="" />
              </li>
              <li @mouseover="changShow(2)">
                <img :src="msg[2].url" alt="" />
              </li>
              <li @mouseover="changShow(3)">
                <img :src="msg[3].url" alt="" />
              </li>
            </ul>
            :
          </div>
        </div>

        <div class="product_vivoPro_right">
          <div class="product_vivoPro_right_info">
            <div class="vivo_product_info">
              <h1>vivo X70 Pro+ 12GB+256GB 至黑</h1>
              <p>
                <span
                  >【①白银黄金会员选赠无线影音耳机; ②指定整点加赠半年延保</span
                >
                全四摄光学防抖|陶瓷云窗|IP68级防尘抗水性能
              </p>
            </div>
            <div class="vivo_product_price">
              <div class="vivo_product_price_left">￥5999.00</div>
              <div class="vivo_product_price_right">
                <span>积分</span> 购物送积分
              </div>
            </div>
            <div class="vivo_product_support">
              <span
                >商品支持：&nbsp;&nbsp;&nbsp;&nbsp;<i>√</i>花呗分期&nbsp;&nbsp;<i>√</i>以旧换新&nbsp;&nbsp;<i>√</i>积分抵现</span
              >
            </div>
          </div>
          <div class="vivo_product_version">
            <p>版本</p>
            <div class="vivo_product_version_select">
              <ul>
                <li>8GB+256GB</li>
                <li>12GB+256GB</li>
                <li>12GB+512GB</li>
              </ul>
            </div>
          </div>
          <div class="vivo_product_version">
            <p>颜色</p>
            <div class="vivo_product_version_select">
              <ul>
                <li><span class="span_color1"></span> 旅程</li>
                <li><span class="span_color2"></span> 至黑</li>
                <li><span class="span_color3"></span> 旷野</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import footer from "../home/footer.vue";
import header_menu from "../home/header_menu.vue";
import headNavFix from "../home/headNavFix.vue";

export default {
  name: "product",
  data() {
    return {
      showIndex: 0,
      imgList: {
        List1: [
          {
            url: require("../assets/img/vivo_pro1.webp"),
          },
          {
            url: require("../assets/img/vivo_pro2.webp"),
          },
          {
            url: require("../assets/img/vivo_pro3.webp"),
          },
          {
            url: require("../assets/img/vivo_pro4.webp"),
          },
        ],
        List2: [
          {
            url: require("../assets/img/vivo_pro5.webp"),
          },
          {
            url: require("../assets/img/vivo_pro6.webp"),
          },
          {
            url: require("../assets/img/vivo_pro7.webp"),
          },
          {
            url: require("../assets/img/vivo_pro8.webp"),
          },
        ],
        List3: [
          {
            url: require("../assets/img/vivo_pro9.webp"),
          },
          {
            url: require("../assets/img/vivo_pro10.webp"),
          },
          {
            url: require("../assets/img/vivo_pro11.webp"),
          },
          {
            url: require("../assets/img/vivo_pro12.webp"),
          },
        ],
      },
      msg: "",
    };
  },
  mounted() {
    console.log(this.$route.qurey);
    if (this.$route.query.id == 1) {
      this.msg = this.imgList.List1;
    } else if (this.$route.query.id == 2) {
      this.msg = this.imgList.List2;
    } else if (this.$route.query.id == 3) {
      this.msg = this.imgList.List3;
    }
  },
  methods: {
    changShow: function (cnt) {
      this.showIndex = cnt;
    },
  },
  components: {
    "my-footer": footer,
    "header-menu": header_menu,
    "nav-fix": headNavFix,
  },
};
</script>

<style  scoped>
.product_main {
  width: 100%;
  float: left;
}
.product_vivoPro {
  width: 100%;
}
.product_vivoPro_left {
  width: 40%;
  float: left;
  position: relative;
  padding-left: 5%;
}
.product_vivoPro_left .ul {
  overflow: hidden;
  height: 520px;
}
.product_vivoPro_left ul li img {
  width: 100%;
}
.product_vivoPro_left .product_vivoPro_left_button ul {
  margin: 10% 78px;
}
.product_vivoPro_left .product_vivoPro_left_button ul li {
  display: inline-block;
  width: 25%;
  cursor: pointer;
}
.right {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  width: 80px !important;
}

.product_vivoPro_right {
  float: right;
  width: 37%;
  padding-right: 5%;
}
.vivo_product_info h1 {
  text-align: left;
  line-height: 40px;
  font-size: 38px;
  font-weight: 500;
}
.vivo_product_info p {
  font-size: 14px;
  text-align: left;
}
.vivo_product_info span {
  color: red;
}
.vivo_product_price {
  border-width: 1px 0px;
  border-style: solid;
  border-color: silver;
  padding: 50px 30px;
  margin-top: 30px;
}
.vivo_product_price_left {
  vertical-align: middle;
  color: red;
  font-size: 50px;
  display: inline-block;
}
.vivo_product_price_right {
  vertical-align: middle;
  display: inline-block;
  font-size: 18px;
  padding-left: 20px;
  margin-left: 20px;
  border-width: 0px 0px 0px 1px;
  border-style: solid;
  border-color: silver;
}
.vivo_product_price_right span {
  display: inline-block;
  height: 23px;
  line-height: 23px;
  font-size: 12px;
  text-align: center;
  padding: 0 5px;
  margin-right: 10px;
  color: #fff;
  background-color: #f51314;
  border-radius: 2px;
}
.vivo_product_support {
  margin-top: 30px;
  line-height: 18px;
  width: 100%;
  text-align: left;
  font-size: 17px;
}
.vivo_product_support i {
  color: red;
}
.vivo_product_version {
  text-align: left;
  width: 100%;
  margin-top: 50px;
}
.vivo_product_version p {
  font-size: 20px;
}
.vivo_product_version_select ul li {
  text-align: center;
  display: inline-block;
  border-width: 1px;
  border-style: solid;
  border-color: silver;
  border-radius: 8px;
  padding: 20px;
  width: 45%;
  box-sizing: border-box;
  margin-top: 10px;
  margin-right: 10px;
  font-size: 19px;
  color: #8a8989;
}
.vivo_product_version_select ul li:hover {
  color: red;
  cursor: pointer;
}
.vivo_product_version_select ul li:visited {
  border-color: red;
  color: red;
}
.vivo_product_version_select ul li span {
  display: inline-block;
  width: 18px;
  height: 18px;
  border-radius: 18px;
}
.vivo_product_version_select ul li .span_color1 {
  background-color: hotpink;
}
.vivo_product_version_select ul li .span_color2 {
  background-color: hotpink;
}
.vivo_product_version_select ul li .span_color3 {
  background-color: hotpink;
}
</style>
