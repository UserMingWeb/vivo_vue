<!--  -->
<template>
  <div class="headNavFix">
    <div class="navFix">
      <div class="navFix_content">
        <div class="navFix_content_logo">
          <i class="iconfont icon-vivo"></i>
        </div>
        <div class="navFix_content_nav">
          <ul>
            <li v-for="(vi, index) in vivo" :key="index">
              <a href="vi.url">{{ vi.name }}</a>
            </li>
          </ul>
        </div>
        <div class="navFix_content_seo">
          <i class="iconfont icon-sousuo"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeadNavFix",
  data() {
    return {
      vivo: [
        {
          name: "NEX系列",
          url: "/",
        },
        {
          name: "X系列",
          url: "/",
        },
        {
          name: "S系列",
          url: "/",
        },
        {
          name: "T系列",
          url: "/",
        },
        {
          name: "iQOO系列",
          url: "/",
        },
        {
          name: "智能硬件",
          url: "/",
        },
        {
          name: "商城",
          url: "/",
        },
        {
          name: "服务",
          url: "/",
        },
      ],
    };
  },
};
</script>

<style  scoped>
.headNavFix {
  position: sticky;
  top: 0;
  z-index: 999;
}
.navFix {
  float: left;
  width: 100%;
}
.navFix_content {
  float: left;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 30px;
  background-color: rgb(255, 254, 254);
  border-radius: 0 0 24px 24px;
}
.navFix_content_logo {
  width: 24%;
  text-align: center;
  float: left;
  height: 100%;
}
.navFix_content_logo i {
  font-size: 90px;
  vertical-align: middle;
}
i {
  cursor: pointer;
}
i:hover {
  color: rgb(18, 72, 221);
}
.navFix_content_nav {
  float: left;
  width: 60%;
}
.navFix_content_nav ul {
  margin: 0 auto;
  text-align: center;
}
.navFix_content_nav ul li {
  display: inline-block;
  padding-left: 2vw;
  padding-right: 1.5vw;
  font-size: 1.17vw;
  font-weight: 600;
  transition: color 0.3s ease-in-out;
}
.navFix_content_nav ul li:hover {
  color: rgb(18, 72, 221);
}
</style>
