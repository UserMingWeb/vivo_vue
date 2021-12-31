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
    <div class="phone">
      <div class="content">
        <div class="box1"><i class="iconfont icon-gengduo"></i></div>
        <div class="box2"><i class="iconfont icon-vivo"></i></div>
        <div class="box3"><i class="iconfont icon-sousuo"></i></div>
        <div class="box4"><i class="iconfont icon-icon-"></i></div>
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
@media screen and (min-width: 1000px) {
  .headNavFix {
    position: sticky;
    top: 0;
    z-index: 999;
  }
  .phone {
    display: none;
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
}

@media screen and (max-width: 1000px) {
  .headNavFix {
    position: sticky;
    top: 0;
    z-index: 999;
  }
  .navFix {
    display: none;
  }
  .content {
    position: relative;
    height: 10vw;
    background-color: rgb(255, 255, 255);
  }
  .content div {
    padding-top: 2.44vw;
  }
  .box1 {
    position: absolute;
    left: 5%;
  }
  .box1 i {
    font-size: 3.44vw;
  }
  .box2 {
    position: absolute;
    left: 43%;
  }
  .box2 i {
    font-size: 14vw;
    font-weight: 500;
  }
  .box3 {
    position: absolute;
    right: 12%;
  }
  .box3 i {
    font-size: 3.84vw;
    font-weight: bold;
  }
  .box4 {
    right: 5%;
    position: absolute;
  }
  .box4 i {
    font-size: 3.84vw;
    font-weight: bold;
  }
}
</style>
