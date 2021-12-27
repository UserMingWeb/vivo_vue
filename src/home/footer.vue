<!--  -->
<template>
  <div class="foot">
    <div class="vivo_foot">
      <div class="vivo_foot_title">
        <a href="#"></a>
        <span><i class="iconfont icon-vivo"></i> X系列</span>
      </div>
      <div class="vivo_foot_content">
        <div class="vivo_foot_content_tb">
          <ul>
            <li>
              <dl>
                <dt>热门链接</dt>
                <dd v-for="(link, index) in links" :key="index">
                  <a href="#">{{ link }}</a>
                </dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>在线购买</dt>
                <dd v-for="(buy, index) in buys" :key="index">
                  <a href="#">{{ buy }}</a>
                </dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>服务支持</dt>
                <dd v-for="(serves, index) in servece" :key="index">
                  <a href="#">{{ serves }}</a>
                </dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>vivo社区</dt>
                <dd v-for="(qu, index) in qus" :key="index">
                  <a href="#">{{ qu }}</a>
                </dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>关于vivo</dt>
                <dd v-for="(about, index) in aboutVivo" :key="index">
                  <a href="#">{{ about }}</a>
                </dd>
              </dl>
            </li>
          </ul>
        </div>
        <div class="vivo_foot_content_service">
          <ul>
            <li>
              <a href="#">在线客服</a>
            </li>
            <li>
              <a href="#">全国客户服务热线 7*24小时</a>
              <p>400-678-9688</p>
            </li>
            <li>
              <a href="#">NEX专属服务热线 7*24小时</a>
              <p>400-678-9688</p>
            </li>
            <li>
              <a href="#">服务监督邮箱</a><br />
              <a href="#">vivo@vivo.com</a>
            </li>
            <li>
              <a href="#">关注vivo</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="foot_right">
      <div class="foot_info">
        <p>
          ©2011-2021 广东天宸网络科技有限公司
          版权所有<span>|</span>隐私政策<span>|</span>法律声明<span>|</span>营业执照<span>|</span>粤B2-20150324<span>|</span>粤ICP备14052990号<span>|</span>粤公网安备<span>|</span>44190002004246号
        </p>
        <p id="right">Select Location<i class="iconfont icon-wangluo"></i></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-footer",
  data() {
    return {
      links: [
        "X70 Pro+",
        "S10系列",
        "NEX 3S",
        "vivo摄影",
        "查找手机",
        "常见问题",
      ],
      buys: [
        "官方商城",
        "选购手机",
        "选购配件",
        "企业服务",
        "以旧换新",
        "保障服务",
      ],
      servece: [
        "体验店",
        "服务首页",
        "服务网点查询",
        "真伪查询",
        "预约维修",
        "维修配件价格",
        "服务政策",
        "安全公告",
        "环保回收",
      ],
      qus: ["社区首页", "摄影专区", "新浪微博", "百度贴吧"],
      aboutVivo: [
        "vivo简介",
        "工作机会",
        "新闻资讯",
        "采购平台",
        "供应商协同平台",
        "开放平台",
        "廉正合规",
      ],
    };
  },
};
</script>

<style  scoped>
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
</style>
