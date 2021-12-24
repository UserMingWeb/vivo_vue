<!--  -->
<template>
  <div class="footer">
    <div class="footer_content">
      <div class="footer_content_title">
        <p>{{ info.address }}&nbsp;&nbsp;{{ info.post }}</p>
        <p>{{ info.school }} &nbsp; {{ info.id }}</p>
        <p>{{ info.net }}</p>
      </div>
      <div class="footer_content_icon">
        <i class="iconfont icon-weibo"></i>
        <i class="iconfont icon-88"></i>
        <i class="iconfont icon-shouji"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  data() {
    return {
      info: {
        address: "地址：湖南吉首市人民南路120号",
        post: "邮编:416000",
        school: "Copyright 吉首大学",
        id: "教QS3-200505-000069 湘ICP备 05003899号-1",
        net: "湘公网安备 43310102000102号",
      },
    };
  },
};
</script>

<style  scoped>
.footer_content {
    text-align: left;
  float: left;
  width: 100%;
  background: url('./../assets/img/jsu_logo2.png') no-repeat center rgb(62, 163, 246);
  padding: 20px 10px;
}
.footer_content_title {
  float: left;
  width: 60%;
  margin: auto;
  line-height: 30px;
  color: rgb(255, 255, 255);
}
.footer_content_title p {
  margin-left: 30px;
}
.footer_content_icon {
  float: right;
  width: 30%;
  line-height: 80px;
}
.footer_content_icon i {
  font-size: 3vw;
  cursor: pointer;
  margin-right: 10px;
}
</style>
