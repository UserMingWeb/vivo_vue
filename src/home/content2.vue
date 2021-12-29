<!-- 下部主内容 -->
<template>
  <div id="content2" class="content">
    <div class="content_compare">
      <div class="content_title">
        <p>哪款手机更适合你？</p>
        <a href="#">比较各款手机</a>
      </div>
      <div class="content_subject">
        <div class="content_subject_img">
          <ul>
            <li>
              <img src="./../assets/img/vivo_img1.png" alt="vivo" v-show="type1 == 1" />
              <img src="./../assets/img/vivo_img2.png" alt="vivo" v-show="type1 == 2" />
              <img src="./../assets/img/vivo_img3.png" alt="vivo" v-show="type1 == 3" />
              <p>X70t</p>
              <span
                @click="chaangImg('product1', 1)"
                style="background-color: #D7DFF6"
              ></span>
              <span
                @click="chaangImg('product1', 2)"
                style="background-color: #F9F9FB"
              ></span>
              <span
                @click="chaangImg('product1', 3)"
                style="background-color: #2C2E34"
              ></span>
              <span class="none">{{vivo.vivo1.name[type1-1]}}</span>
              <div class="content_subject_img_buy">{{vivo.vivo1.buy[type1-1]}}</div>
              <a href="#">了解更多</a>
            </li>
            <li>
              <img src="./../assets/img/vivo_img4.png" alt="vivo" v-show="type2 == 1" />
              <img src="./../assets/img/vivo_img5.png" alt="vivo" v-show="type2 == 2" />
              <img src="./../assets/img/vivo_img6.png" alt="vivo" v-show="type2 == 3" />
              <p>X70t Pro+</p>
              <span
                @click="chaangImg('product2', 1)"
                style="background-color: #EA581E"
              ></span>
              <span
                @click="chaangImg('product2', 2)"
                style="background-color: #274E9A"
              ></span>
              <span
                @click="chaangImg('product2', 3)"
                style="background-color: #2C2E34"
              ></span>
              <span class="none">{{vivo.vivo2.name[type2-1]}}</span>
              <div class="content_subject_img_buy">{{vivo.vivo2.buy[type2-1]}}</div>
              <a href="#">了解更多</a>
            </li>
            <li id="small_li">
              <img src="./../assets/img/vivo_img7.png" alt="vivo" v-show="type3 == 1" />
              <img src="./../assets/img/vivo_img8.png" alt="vivo" v-show="type3 == 2" />
              <img src="./../assets/img/vivo_img9.png" alt="vivo" v-show="type3 == 3" />
              <p>X70t Pro</p>
              <span
                @click="chaangImg('product3', 1)"
                style="background-color: #D7DFF6"
              ></span>
              <span
                @click="chaangImg('product3', 2)"
                style="background-color: #F9F9FB"
              ></span>
              <span
                @click="chaangImg('product3', 3)"
                style="background-color: #2C2E34"
              ></span>
              <span class="none">{{vivo.vivo3.name[type3-1]}}</span>
              <div class="content_subject_img_buy">{{vivo.vivo3.buy[type3-1]}}</div>
              <a href="#">了解更多</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="content_part">
      <div class="content_title">
        <p>精选配件</p>
        <a href="#">为了更好的产品体验，我们为您精选了相关配件</a>
      </div>
      <div class="content_parts">
        <ul>
          <li class="content_parts_li1">
            <div class="content_parts_info">
              <div class="content_parts_info_logo">
                <img src="../assets/img/vivo8.svg" alt="vivo" />
              </div>
              <p>时刻任你展现</p>
              <a href="#"
                >立即购买<img id="buy" src="../assets/img/vivo.svg" alt="vivo"
              /></a>
            </div>
            <div class="content_parts_img">
              <img src="../assets/img/vivo12.jpg" alt="vivo" />
            </div>
          </li>

          <li class="content_parts_li2">
            <div class="content_parts_info">
              <div class="content_parts_info_logo">
                <img src="../assets/img/vivo9.svg" alt="vivo" />
              </div>
              <p>真无线耳机</p>
              <a href="#"
                >立即购买<img id="buy" src="../assets/img/vivo.svg" alt="vivo"
              /></a>
            </div>
            <div class="content_parts_img">
              <img src="../assets/img/vivo13.jpg" alt="vivo" />
            </div>
          </li>

          <li class="content_parts_li2">
            <div class="content_parts_info">
              <div class="content_parts_info_logo">
                <img src="../assets/img/vivo10.svg" alt="vivo" />
              </div>
              <p>移动电源</p>
              <a href="#"
                >立即购买<img id="buy" src="../assets/img/vivo.svg" alt="vivo"
              /></a>
            </div>
            <div class="content_parts_img">
              <img src="../assets/img/vivo14.jpg" alt="vivo" />
            </div>
          </li>

          <li class="content_parts_li2" id="part">
            <div class="content_parts_info">
              <div class="content_parts_info_logo">
                <img src="../assets/img/vivo11.svg" alt="vivo" />
              </div>
              <p>移动电源</p>
              <a href="#"
                >立即购买<img id="buy" src="../assets/img/vivo.svg" alt="vivo"
              /></a>
            </div>
            <div class="content_parts_img">
              <img src="../assets/img/vivo15.jpg" alt="vivo" />
            </div>
          </li>

          <li class="content_parts_li2" id="part2">
            <div class="content_parts_info">
              <p>挑选更多配件</p>
              <span>你的配件你做主</span>
              <a href="#"
                ><img id="bigbuy" src="../assets/img/vivo.svg" alt="vivo"
              /></a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "content2",
  methods: {
    chaangImg: function (product, condition) {
      if(product == 'product1')
        this.type1 = condition;
      else if(product == 'product2')
        this.type2 = condition;
      else if(product == 'product3')
        this.type3 = condition;
    }
  },
  data() {
    return {
      type1: 1,
      type2: 1,
      type3: 1,
      vivo: {
        vivo1: {
          buy: ['门店购买','门店购买','门店购买'],
          name: ['星云','独白','至黑']
        },
        vivo2: {
          buy: ['购买5499起','购买7499起','购买10499起'],
          name: ['旅程','旷野','至黑']
        },
        vivo3: {
          buy: ['购买3999起','购买3299起','购买3599起'],
          name: ['星云','独白','至黑']
        }
      }
    };
  },
};
</script>

<style  scoped>
@media screen and (max-width: 760px) {
  .content {
    background-color: #f5f7fa;
  }
  .content_compare {
    width: 100%;
    overflow: hidden;
    position: relative;
  }
  .content_title {
    width: 90%;
    margin: 19.44444vw auto 9.16667vw;;
    font-weight: bold;
  }
  .content_title p {
    text-align: center;
    font-size: 6.66667vw;
    line-height: 6.66667vw;
  }
  .content_title a {
    display: block;
    margin-top: 4.72222vw;
    font-size: 3.88889vw;
  }
  .content_subject {
    width: 90%;
    margin: 0 auto;
    overflow: hidden;
  }
  .content_subject_img {
    width: 100%;
    height: 100.33333vw;
    border-radius: 3.33333vw;
    padding-top: 11.94444vw;
    background-color: #fff;
  }
  .content_subject_img ul li {
    display: inline-block;
    width: 50%;
    overflow: hidden;
  }
  .content_subject_img ul li img {
    width: 100%;
  }
  .content_subject_img ul li span {
    width: 5.5556vw;
    height: 5vw;
    line-height: 28px;
    vertical-align: middle;
    display: inline-block;
    border-radius: 3.88889vw;
    font-size: 16px;
    margin-right: 14px;
    font-weight: 500;
    color: rgb(110, 110, 110);
    cursor: pointer;
  }
  .content_subject_img ul #small_li {
    display: none;
  }
  .none {
    display: none !important;
  }
  .content_subject_img_buy {
    width: 37.22222vw;
    height: 10.27778vw;
    line-height: 10.27778vw;
    margin: 3.88889vw auto;
    border-radius: 5vw;
    font-size: 3.88889vw;
    background: #415fff;
    color: rgb(255, 255, 255);
    font-weight: bold;
  }
  .content_subject_img a {
    font-size: 3.88889vw;
    line-height: 5.27778vw;
    font-weight: bold;
  }
  .content_part {
    width: 100%;
    position: relative;
  }
  .content_parts {
    width: 90%;
    margin: 0 auto;
    overflow: hidden;
  }
  .content_parts_info {
    width: 100%;
    position: absolute;
    z-index: 10;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
    top: 13.33333vw;
  }
  .content_parts_info_logo {
    height: 3.33333vw;
    margin-bottom: 1.11111vw;
  }
  .content_parts_info_logo img {
    height: 100%;
  }
  .content_parts_li1 {
    background: #fff;
    display: block;
    width: 100%;
    height: 100.66667vw;
    border-radius: 3.33333vw;
    margin-bottom: 5.55556vw;
    overflow: hidden;
    position: relative;
  }
  .content_parts_info p {
    font-size: 6.66667vw;
    margin-bottom: 5vw;
    margin: 2.555vw auto;
    font-weight: bold;
    width: 72.22222vw;
  }
  .content_parts_info a {
    font-size: 3.88889vw;
    line-height: 5.27778vw;
    margin-bottom: 8.61111vw;
    font-weight: bold;
  }
  .content_parts_info img {
    vertical-align: middle;
    margin-left: 2vw;
  }
  .content_parts_img {
    width: 100%;
    height: 100%;
  }
  .content_parts_img img {
    width: 100%;
  }
  .content_parts_li2 {
    background: #fff;
    display: block;
    width: 100%;
    height: 96.66667vw;
    border-radius: 3.33333vw;
    margin-bottom: 5.55556vw;
    overflow: hidden;
    position: relative;
  }
  .content_parts_li1 .content_parts_img img {
    transform: translateX(-10%);
  }
  .content_parts_li2 .content_parts_img img {
    transform: translateX(-37%) translateY(25%);
    width: 150%;
  }
  #part2 {
    height: 39.16vw;
  }
}














@media screen and (min-width: 760px){
  .content {
  background-color: #f5f7fa;
}
.content .content_compare {
  width: 1200px;
  margin: 0 auto;
  padding-top: 80px;
}
.content .content_compare .content_title {
  line-height: 60px;
  text-align: left;
}
.content .content_compare .content_title p {
  font-size: 40px;
  font-weight: bold;
}
.content .content_compare .content_title a {
  font-size: 25px;
  font-weight: 500;
}
.content .content_compare .content_title a:hover {
  color: rgb(46, 115, 245);
}
.content .content_subject {
  background-color: white;
  border-radius: 24px;
  padding-top: 110px;
  height: 700px;
}
.content .content_subject .content_subject_img {
  margin: 0 75px;
}
.content .content_subject .content_subject_img ul {
  display: inline-block;
  text-align: left;
}
.content .content_subject .content_subject_img ul li {
  display: inline-block;
  width: 300px;
  margin: 0 25px;
  text-align: center;
  line-height: 48px;
}
.content .content_subject .content_subject_img ul li img {
  width: 300px;
}
.content .content_subject .content_subject_img ul li p {
  font-size: 21px;
  font-weight: 600;
}
.content .content_subject .content_subject_img ul li span {
  width: 34px;
  height: 28px;
  line-height: 28px;
  vertical-align: middle;
  display: inline-block;
  border-radius: 14px;
  font-size: 16px;
  margin-right: 14px;
  font-weight: 500;
  color: rgb(110, 110, 110);
  cursor: pointer;
}
.content .content_subject .content_subject_img .content_subject_img_buy {
  margin: 16px auto 24px;
  font-size: 20px;
  height: 52px;
  line-height: 52px;
  width: 200px;
  color: antiquewhite;
  border-radius: 26px;
  background-color: #3552fc;
  cursor: pointer;
}
.content .content_subject .content_subject_img .content_subject_img_buy:hover {
  background-color: rgb(46, 115, 245);
}
.content .content_subject .content_subject_img ul li a {
  vertical-align: top;
  cursor: pointer;
  font-size: 20px;
  line-height: 28px;
  font-weight: bold;
  position: relative;
}
.content .content_subject .content_subject_img ul li a:hover {
  color: rgb(46, 115, 245);
}
.content .content_part {
  width: 1200px;
  margin: 0 auto;
  padding-top: 80px;
}
.content .content_part ul .content_parts_li1 {
  /* display: inline-block; */
  float: left;
  width: 580px;
  height: 600px;
  border-radius: 1.471vw;
  line-height: 25px;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  margin-bottom: 40px;
  vertical-align: top;
}
.content .content_part .content_title {
  line-height: 60px;
  text-align: left;
}
.content .content_part .content_title p {
  font-size: 40px;
  font-weight: bold;
}
.content .content_part .content_title a {
  font-size: 25px;
  font-weight: 500;
}
.content .content_part .content_title a:hover {
  color: rgb(46, 115, 245);
}
.content .content_part .content_parts .content_parts_li1 .content_parts_info {
  position: absolute;
  margin-top: 50px;
  margin-left: 30px;
}
.content
  .content_part
  .content_parts
  .content_parts_li1
  .content_parts_info
  .content_parts_info_logo
  img {
  height: 20px;
}
.content .content_part .content_parts .content_parts_li1 .content_parts_info p {
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 50px;
}
.content .content_part .content_parts .content_parts_li1 .content_parts_info a {
  font-size: 18px;
  font-weight: 600;
}
.content
  .content_part
  .content_parts
  .content_parts_li1
  .content_parts_info
  a:hover {
  color: rgb(46, 115, 245);
}
.content .content_part .content_parts .content_parts_li1 .content_parts_img {
  height: 100%;
  width: 100%;
  max-width: 768px;
}
.content
  .content_part
  .content_parts
  .content_parts_li1
  .content_parts_img
  img {
  width: 500px;
  height: 600px;
}

.content .content_part ul .content_parts_li2 {
  display: inline-block;
  width: 580px;
  height: 280px;
  border-radius: 1.471vw;
  line-height: 25px;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  margin-left: 40px;
  margin-bottom: 40px;
  vertical-align: top;
}
.content .content_part .content_parts .content_parts_li2 .content_parts_info {
  position: absolute;
  margin-top: 50px;
  margin-left: 30px;
}
.content
  .content_part
  .content_parts
  .content_parts_li2
  .content_parts_info
  .content_parts_info_logo
  img {
  height: 20px;
}
.content .content_part .content_parts .content_parts_li2 .content_parts_info p {
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 50px;
}
.content .content_part .content_parts .content_parts_li2 .content_parts_info a {
  font-size: 18px;
  font-weight: 600;
}
.content
  .content_part
  .content_parts
  .content_parts_li2
  .content_parts_info
  a:hover {
  color: rgb(46, 115, 245);
}
.content .content_part .content_parts .content_parts_li2 .content_parts_img {
  height: 100%;
  width: 100%;
  max-width: 768px;
}
.content
  .content_part
  .content_parts
  .content_parts_li2
  .content_parts_img
  img {
  width: 500px;
  height: 280px;
}
#part {
  margin-left: 0;
}
#part2 a {
  position: relative;
  left: 220px;
  top: 60px;
}
#buy {
  vertical-align: middle;
}
#bigbuy {
  height: 100px;
  width: 100px;
}
}
</style>