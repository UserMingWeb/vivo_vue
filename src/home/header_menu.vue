<!--  -->
<template>
  <div id="menu1">
    <div class="menu1">
      <ul class="menu1_list1">
        <li><a href="#">品牌</a><span>|</span></li>
        <li><a href="#">OriginOS</a><span>|</span></li>
        <li><a href="#">体验店</a><span>|</span></li>
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
#menu1 {
  width: 100%;
  background-color: rgb(42, 42, 46);
}
.menu1 {
  width: 1300px;
  margin: 0 auto;
}
.menu1 ul{
  height: 35px;
  line-height: 35px;
}
.menu1 .menu1_list1 {
  display: inline-block;
  width: 700px;
  text-align: left;
  padding-left: 50px;
  box-sizing: border-box;
}
.menu1 .menu1_list2 {
  display: inline-block;
  width: 600px;
  text-align: right;
  padding-right: 50px;
  box-sizing: border-box;
}
.menu1 ul li {
  display: inline-block;
  color: rgb(179, 177, 176);
  font-size: 13px;
}
.menu1 ul li a:hover {
  color: bisque;
}
.menu1 ul li span {
  margin:0 10px;
}
</style>
