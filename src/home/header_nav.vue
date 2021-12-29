<!--  -->
<template>
  <div class="nav">
    <div class="nav_content">
      <div class="nav_content_logo">
        <div><img src="../assets/img/vivo2.svg" alt="vivo"></div>
        <div class="nav_content_logo_title">专业影像旗舰</div>
      </div>
    </div>
    <div class="nav_img">
        <img src="../assets/img/vivo1.jpg" alt="vivo">
    </div>
    <div class="nav_footer">
      <div class="nav_footer_img">
        <ul>
          <li><img src="../assets/img/vivo3.png" alt="vivo"><p>X70t</p></li>
          <li><img src="../assets/img/vivo4.png" alt="vivo"><p>X70t Pro+</p></li>
          <li><img src="../assets/img/vivo5.png" alt="vivo"><p>X70 Pro</p></li>
          <li><img src="../assets/img/vivo6.png" alt="vivo"><p>X70</p></li>
          <li><img src="../assets/img/vivo7.png" alt="vivo"><p>X60t Pro+</p></li>
          <li><img src="../assets/img/vivo8.png" alt="vivo"><p>X60 曲屏版</p></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header_nav',
  data () {
    return {
    }
  }
}
</script>

<style  scoped>
  .nav {
    width: 100%;
    height: 900px;
    position: relative;
    margin-bottom: 219px;
  }
  .nav .nav_content {
    width: 1300px;
    height: 640px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }
  .nav .nav_content .nav_content_logo {
    position: absolute;
    top: 226px;
    left: 27.7%;
    transform: translateX(-50%);
    font-size: 32px;
    text-align: center;
  }
  .nav .nav_content .nav_content_logo img {
    height: 54px;
  } 
  .nav .nav_content .nav_content_logo .nav_content_logo_title {
    line-height: 60px;
  }
  .nav .nav_img img {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: auto;
    height: auto;
  }
  .nav .nav_footer {
    position: relative;
    display: table;
    table-layout: fixed;
    width: 1200px;
    height: 370px;
    margin: 0 auto;
    border-radius: 24px;
    background-color: white;
    top: 640px;
    z-index: 3;
  }
  .nav .nav_footer .nav_footer_img {
    width: 100%;
  }
  .nav .nav_footer .nav_footer_img ul {
    display: inline-block;
  }
  .nav .nav_footer .nav_footer_img ul li {
    display: inline-block;
    padding-top: 55px;
    margin: 0 10px;
    width: 180px;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }
  .nav .nav_footer .nav_footer_img ul li img {
    height: 150px;
    width: 150px;
  }
  .nav .nav_footer .nav_footer_img ul li p {
    margin-top: 20px;
  }
</style>
