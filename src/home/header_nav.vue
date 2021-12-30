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
        <img id='big_logo' src="../assets/img/vivo1.jpg" alt="vivo">
        <img id="small_logo" src="../assets/img/vivo_logo.jpg" alt="v">
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
@media screen and (max-width: 760px) {
  .nav {
    width: 100%;
  }
  .nav_content {
    width: 100%;
    height: 138.88889vw;
    position: absolute;
  }
  .nav_content_logo {
    position: absolute;
    top: 23.1%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 4.44444vw;
    z-index: 10;
  }
  .nav_content_logo img {
    height: 7.77778vw;
  }
  .nav_content_logo_title {
    line-height: 7.5vw;
  }
  .nav_img {
    height: 138.88889vw;
    width: 100%;
    overflow: hidden;
  }
  .nav_img img {
    width: 100%;
    height: 100%;
  }
  #big_logo {
    display: none;
  }
  .nav_footer {
    position: relative;
    width: 100%;
    height: 40.4444vw;
    border-radius: 3.3333vw;
    background-color: white;
    top: -9.7772vw;
    z-index: 3;
    overflow: hidden;
  }
  .nav_footer_img {
    height: 44.44444vw;
  }
  .nav_footer_img ul {
    padding-left: 0px;
    padding-right: 0px;
    height: 142.219px;
    min-width: 100%;
    text-align: center;
    position: relative;
    box-sizing: content-box;
    transition-property: transform,left,top,-webkit-transform,-moz-transform,-o-transform;
    transition-duration: 0s;
    transform: translate3d(0px,0,0);
    transition-timing-function: ease;
  }
  .nav_footer_img ul li {
    padding-top: 7.77778vw;
    width: 29.72222vw;
    display: inline-block;
    float: none;
    text-align: center;
    vertical-align: top;
  }
  .nav_footer_img ul li img {
    width: 22.77778vw;
    height: 22.77778vw;
  }
}







@media screen and (min-width: 760px) {
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
  #small_logo {
    display: none;
  }
}
</style>