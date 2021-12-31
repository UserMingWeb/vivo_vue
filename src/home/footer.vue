<!--  -->
<template>
  <div class="foot">
    <div class="vivo_foot">
      <div class="vivo_foot_title">
        <span><i class="iconfont icon-vivo"></i>&nbsp; X系列</span>
      </div>
      <div class="vivo_foot_content">
        <div class="vivo_foot_content_tb">
          <ul>
            <li>
              <dl>
                <dt @click="click('appear1')">{{ data.links.name }} <span class="none"><i class="iconfont icon-jia"></i></span></dt>
                <dd
                  v-for="(link, index) in data.links.allLinks"
                  :key="index"
                  v-show="show === appear1"
                >
                  <a href="#">{{ link }}</a>
                </dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt @click="click('appear2')">{{ data.buys.name }} <span class="none"><i class="iconfont icon-jia"></i></span></dt>
                <dd
                  v-for="(buy, index) in data.buys.allBuys"
                  :key="index"
                  v-show="show === appear2"
                >
                  <a href="#">{{ buy }}</a>
                </dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt @click="click('appear3')">{{ data.servece.name }} <span class="none"><i class="iconfont icon-jia"></i></span></dt>
                <dd
                  v-for="(serves, index) in data.servece.allServece"
                  :key="index"
                  v-show="show === appear3"
                >
                  <a href="#">{{ serves }}</a>
                </dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt @click="click('appear4')">{{ data.qus.name }} <span class="none"><i class="iconfont icon-jia"></i></span></dt>
                <dd
                  v-for="(qu, index) in data.qus.allQus"
                  :key="index"
                  v-show="show === appear4"
                >
                  <a href="#">{{ qu }}</a>
                </dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt @click="click('appear5')">{{ data.aboutVivo.name }} <span class="none"><i class="iconfont icon-jia"></i></span></dt>
                <dd
                  v-for="(about, index) in data.aboutVivo.allAboutVivo"
                  :key="index"
                  v-show="show === appear5"
                >
                  <a href="#">{{ about }}</a>
                </dd>
              </dl>
            </li>
          </ul>
        </div>
        <div class="vivo_foot_content_service">
          <ul>
            <li>
              <a href="#"><i class="iconfont icon-IMliaotian"></i> 在线客服</a>
            </li>
            <li>
              <a href="#"
                ><i class="iconfont icon-dianhua"></i> 全国客户服务热线
                7*24小时</a
              >
              <p>400-678-9688</p>
            </li>
            <li>
              <a href="#"
                ><i class="iconfont icon-kefu"></i> NEX专属服务热线 7*24小时</a
              >
              <p>400-678-9688</p>
            </li>
            <li>
              <a href="#"
                ><i class="iconfont icon-tubiao209"></i> 服务监督邮箱</a
              ><br />
              <a id="vivocom" href="#">vivo@vivo.com</a>
            </li>
            <li>
              <a href="#"
                ><i class="iconfont icon-chakantieziguanzhu"></i> 关注vivo</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="foot_right">
      <div class="foot_info">
        <p>
          ©2011-2021 广东天宸网络科技有限公司 版权所有 <br />
        </p>
        <p>隐私政策<span>|</span>法律声明<span>|</span>营业执照<span>|</span>粤B2-20150324<span>|</span>粤ICP备14052990号<span>|</span>粤公网安备<span>|</span>44190002004246号</p>
        <p id="right">Select Location<i class="iconfont icon-wangluo"></i></p>
      </div>
    </div>
  </div>
</template>

<script>
import testData from "./../assets/info.json";

export default {
  name: "my-footer",
  methods: {
    click: function (a) {
      if (a === "appear1") {
        this.appear1 = !this.appear1;
        this.appear2 = false;
        this.appear3 = false;
        this.appear4 = false;
        this.appear5 = false;
      } else if (a === "appear2") {
        this.appear2 = !this.appear2;
        this.appear1 = false;
        this.appear3 = false;
        this.appear4 = false;
        this.appear5 = false;
      } else if (a === "appear3") {
        this.appear3 = !this.appear3;
        this.appear1 = false;
        this.appear2 = false;
        this.appear4 = false;
        this.appear5 = false;
      } else if (a === "appear4") {
        this.appear4 = !this.appear4;
        this.appear1 = false;
        this.appear2 = false;
        this.appear3 = false;
        this.appear5 = false;
      } else if (a === "appear5") {
        this.appear5 = !this.appear5;
        this.appear1 = false;
        this.appear2 = false;
        this.appear3 = false;
        this.appear4 = false;
      }
    },
  },
  data() {
    return {
      show: true,
      appear1: false,
      appear2: false,
      appear3: false,
      appear4: false,
      appear5: false,
      data: "",
    };
  },
  created() {
    this.data = testData;
  },
};
</script>

<style  scoped>
@media screen and (max-width: 1000px) {
  .foot {
    width: 100%;
    background-color: #242933;
    color: blanchedalmond;
  }
  .vivo_foot {
    width: 86%;
    margin: 0 auto;
  }
  .vivo_foot_title {
    text-align: left;
    padding-top: 10vw;
  }
  .vivo_foot_title span {
    font-size: 16px;
  }
  .vivo_foot_title i {
    font-size: 70px;
    vertical-align: text-bottom;
  }
  .vivo_foot_content {
    width: 100%;
    text-align: left;
    padding-top: 5vw;
  }
  .vivo_foot_content_tb ul li dl dt {
    font-size: 15px;
    padding-top: 2vw;
    padding-bottom: 2vw;
    font-weight: bold;
    border-bottom: 0.02vw rgba(119, 119, 119, 0.411) solid;
  }
  .vivo_foot_content_tb ul li dl dt span {
    float: right;
  }
  .vivo_foot_content_tb ul li dl dt span i {
    font-size: 10px;
    font-weight: 300;
  }
  .vivo_foot_content_tb ul li dl dd {
    display: block;
    font-size: 12px;
    line-height: 14px;
    padding-top: 10px;
    padding-bottom: 14px;
    color: #8a8f99;
    font-weight: bold;
  }
  .vivo_foot_content_service ul li {
    font-size: 17px;
    padding-top: 3px;
    padding-bottom: 8px;
  }
  .vivo_foot_content_service ul li p {
    margin-left: 30px;
    font-size: 20px;
    color: rgb(71, 68, 253);
    font-weight: bold;
  }
  .vivo_foot_content_service ul li i {
    display: inline-block;
    margin-right: 10px;
    font-size: 18px;
    vertical-align: text-top;
  }
  #vivocom {
    margin-left: 32px;
    color: rgba(150, 148, 148, 0.555);
  }
  .foot_right {
    width: 100%;
    background-color: #415fff;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .foot_info {
    width: 90%;
    margin: 0 auto;
    text-align: left;
  }
  .foot_info p {
    margin-top: 8px;
  }
}

@media screen and (min-width: 1000px) {
  .foot {
    width: 100%;
    float: left;
  }
  .vivo_foot {
    text-align: left;
    background-color: #242933;
    width: 100%;
    color: blanchedalmond;
  }
  .vivo_foot_title {
    width: 1200px;
    margin: 0 auto;
    padding-top: 50px;
  }
  .vivo_foot_title a:hover {
    color: rgb(109, 109, 224);
  }
  .vivo_foot_title a i {
    font-size: 80px;
    vertical-align: middle;
  }
  .vivo_foot_title span {
    font-size: 16px;
  }
  .vivo_foot_title span i {
    font-size: 58px;
    vertical-align: middle;
    cursor: pointer;
  }
  .vivo_foot_title span i:hover {
    color: rgb(76, 45, 250);
  }
  .vivo_foot_content {
    width: 1200px;
    margin: 0 auto;
    padding-top: 50px;
    line-height: 30px;
  }
  .vivo_foot_content_tb {
    width: 900px;
    display: inline-block;
    vertical-align: top;
  }
  .vivo_foot_content_tb ul {
    left: 100px;
  }
  .vivo_foot_content_tb ul li {
    display: inline-table;
    width: 150px;
  }
  .vivo_foot_content_tb ul li dl dt {
    font-size: 17px;
    font-weight: 700;
    padding-bottom: 20px;
    color: wheat;
  }
  .vivo_foot_content_tb ul li dl dd {
    display: block !important;
    color: #8a8f99;
    margin: 0;
    padding: 0;
    font-size: 15px;
  }
  .vivo_foot_content_tb ul li dl dd:hover {
    color: rgb(124, 124, 255);
  }
  .vivo_foot_content_service {
    display: inline-block;
    width: 300px;
    line-height: 20px;
  }
  .vivo_foot_content_service ul li {
    padding-bottom: 30px;
    color: rgb(224, 224, 224);
  }
  .vivo_foot_content_service ul li a {
    font-size: 17px;
  }
  .vivo_foot_content_service ul li a:hover {
    color: rgb(124, 124, 255);
  }
  .vivo_foot_content_service ul li p {
    font-size: 32px;
    font-weight: 600;
    color: rgb(71, 68, 253);
  }

  .foot_right {
    background-color: rgb(92, 89, 255);
  }
  .foot_info {
    width: 1200px;
    height: 45px;
    line-height: 45px;
    margin: 0 auto;
  }
  .foot_info p {
    display: inline-block;
    font-size: 10px;
    color: white;
    cursor: pointer;
  }
  .foot_info p span {
    text-align: center;
    margin: 0 3px;
  }
  #right {
    float: right;
    cursor: pointer;
  }
  .none {
    display: none;
  }
}
</style>
