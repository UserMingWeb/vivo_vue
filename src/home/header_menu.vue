<!--  -->
<template>
  <div id="menu1">
    <div class="menu1">
      <ul class="menu1_list1">
        <li><a href="#">品牌</a><span>|</span></li>
        <li><a href="#">OriginOS</a><span>|</span></li>
        <li><router-link to="/test">体验店</router-link><span>|</span></li>
        <li><router-link to="/about">社区</router-link></li>
      </ul>

      <ul class="menu1_list2">
        <li><a href="#"></a><span>|</span></li>
        <li><a href="#">下载APP</a><span>|</span></li>
        <li><a href="#">购物车</a><span>|</span></li>
        <li><a href="#">个人中心</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "menu1",
  data() {
    return {};
  },
};
</script>

<style  scoped>
@media screen and (min-width: 1000px) {
  #menu1 {
  width: 100%;
  background-color: rgb(42, 42, 46);
  color: rgb(185, 185, 185);
}
  .menu1 {
    width: 90%;
    margin: 0 auto;
  }
  .menu1 ul {
    display: inline-block;
    height: 35px;
  line-height: 35px;
  }
  .menu1 li {
    display: inline-block;
  }
  .menu1 .menu1_list1 {
    float: left;
  }
  .menu1 .menu1_list2 {
    float: right;
  }
  .menu1::after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  .menu1 ul li a:hover {
  color: bisque;
}
.menu1 ul li span {
  margin:0 10px;
}
}
@media screen and (max-width: 1000px) {
  .menu1 {
    display: none;
  }
}
</style>
