<!-- 上部主内容 -->
<template>
  <div class="content">
    <div class="content_up">
      <div class="content_up_box1">
        <div class="content_up_box1_title">
          <div class="content_up_box1_title_logo">
            <img src="../assets/img/vivo3.svg" alt="vivo" />
          </div>
          <p>{{ product.product1.title1 }}</p>
          <p>{{ product.product1.title2 }}</p>
          <div class="content_up_box1_title_info">
            <router-link
              :to="{ name: 'Product', query: { id: 1 } }"
              tag="a"
              target="_blank"
              >{{ product.product1.know }}</router-link
            ><span>{{product.product1.buy}}</span>
          </div>
        </div>

        <div class="content_up_box1_img">
          <img src="../assets/img/vivo9.jpg" alt="vivo" />
        </div>
      </div>
      <div class="content_up_box2">
        <div class="content_up_box2_title">
          <div class="content_up_box2_title_logo">
            <img src="../assets/img/vivo4.svg" alt="vivo" />
          </div>
          <p>{{ product.product2.title1 }}</p>
          <p>{{ product.product2.title2 }}</p>
          <div class="content_up_box2_title_info">
            <router-link
              :to="{ name: 'Product', query: { id: 2 } }"
              tag="a"
              target="_blank"
              >{{ product.product2.know }}</router-link
            ><span>立即购买</span>
          </div>
        </div>

        <div class="content_up_box2_img">
          <img src="../assets/img/vivo10.jpg" alt="vivo" />
        </div>
      </div>
      <div class="content_up_box1">
        <div class="content_up_box1_title">
          <div class="content_up_box1_title_logo">
            <img src="../assets/img/vivo5.svg" alt="vivo" />
          </div>
          <p>{{ product.product3.title1 }}</p>
          <p>{{ product.product3.title2 }}</p>
          <div class="content_up_box1_title_info">
            <router-link
              :to="{ name: 'Product', query: { id: 3 } }"
              tag="a"
              target="_blank"
              >{{ product.product3.know }}</router-link
            ><span>立即购买</span>
          </div>
        </div>

        <div class="content_up_box1_img">
          <img src="../assets/img/vivo11.jpg" alt="vivo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "content1",
  data() {
    return {
      product: {
        product1: {
          title1: "全部稳才是真的稳",
          title2: "蔡司专业摄像",
          know: "进一步了解",
          buy: "立即购买",
        },
        product2: {
          title1: "夜色稳精彩",
          title2: "专业影像芯片V1",
          know: "进一步了解",
          buy: "立即购买",
        },
        product3: {
          title1: "内 [芯] 强大",
          title2: "",
          know: "进一步了解",
          buy: "立即购买",
        },
      },
    };
  },
};
</script>

<style  scoped>
.content {
  content: "";
  width: 100%;
  padding-top: 320px;
  padding-bottom: 80px;
}
.content .content_up {
  background-color: #fff;
  width: 100%;
}
.content .content_up .content_up_box1 {
  width: 1200px;
  height: 600px;
  text-align: right;
  margin: 70px auto;
  position: relative;
}
.content .content_up .content_up_box1 .content_up_box1_title {
  position: absolute;
  line-height: 60px;
  left: 0;
  top: 63.4%;
  transform: translateY(-100%);
}
.content .content_up .content_up_box1 .content_up_box1_title p {
  font-size: 40px;
  font-weight: bold;
  text-align: left;
  max-width: 434px;
}
.content
  .content_up
  .content_up_box1
  .content_up_box1_title
  .content_up_box1_title_logo {
  height: 28px;
  text-align: left;
  margin-bottom: 30px;
}
.content
  .content_up
  .content_up_box1
  .content_up_box1_title
  .content_up_box1_title_logo
  img {
  height: 100%;
}
.content
  .content_up
  .content_up_box1
  .content_up_box1_title
  .content_up_box1_title_info {
  width: 250px;
  bottom: -8.603vw;
  font-size: 17px;
  font-weight: 600;
  margin-top: 50px;
}
.content
  .content_up
  .content_up_box1
  .content_up_box1_title
  .content_up_box1_title_info
  a {
  color: white;
  display: inline-block;
  text-align: center;
  background-color: #415fff;
  height: 45px;
  line-height: 45px;
  border-radius: 26px;
  width: 130px;
  cursor: pointer;
  margin-right: 30px;
}
.content
  .content_up
  .content_up_box1
  .content_up_box1_title
  .content_up_box1_title_info
  a:hover {
  background-color: rgb(75, 137, 253);
}
.content
  .content_up
  .content_up_box1
  .content_up_box1_title
  .content_up_box1_title_info
  span {
  cursor: pointer;
}
.content
  .content_up
  .content_up_box1
  .content_up_box1_title
  .content_up_box1_title_info
  span:hover {
  color: rgb(85, 85, 241);
}
.content .content_up .content_up_box1 .content_up_box1_img {
  display: inline-block;
  text-align: right;
  border-radius: 24px;
  overflow: hidden;
  height: 100%;
  width: 750px;
}

.content .content_up .content_up_box2 {
  width: 1200px;
  height: 600px;
  text-align: left;
  margin: 0 auto;
  position: relative;
}
.content .content_up .content_up_box2 .content_up_box2_title {
  position: absolute;
  line-height: 60px;
  right: 0;
  top: 63.4%;
  transform: translateY(-100%);
}
.content .content_up .content_up_box2 .content_up_box2_title p {
  font-size: 40px;
  font-weight: bold;
  text-align: left;
  max-width: 434px;
}
.content
  .content_up
  .content_up_box2
  .content_up_box2_title
  .content_up_box2_title_logo {
  height: 28px;
  text-align: left;
  margin-bottom: 30px;
}
.content
  .content_up
  .content_up_box2
  .content_up_box2_title
  .content_up_box2_title_logo
  img {
  height: 100%;
}
.content
  .content_up
  .content_up_box2
  .content_up_box2_title
  .content_up_box2_title_info {
  width: 250px;
  bottom: -8.603vw;
  font-size: 17px;
  font-weight: 600;
  margin-top: 50px;
}
.content
  .content_up
  .content_up_box2
  .content_up_box2_title
  .content_up_box2_title_info
  a {
  color: white;
  display: inline-block;
  text-align: center;
  background-color: #415fff;
  height: 45px;
  line-height: 45px;
  border-radius: 26px;
  width: 130px;
  cursor: pointer;
  margin-right: 30px;
}
.content
  .content_up
  .content_up_box2
  .content_up_box2_title
  .content_up_box2_title_info
  a:hover {
  background-color: rgb(75, 137, 253);
}
.content
  .content_up
  .content_up_box2
  .content_up_box2_title
  .content_up_box2_title_info
  span {
  cursor: pointer;
}
.content
  .content_up
  .content_up_box2
  .content_up_box2_title
  .content_up_box2_title_info
  span:hover {
  color: rgb(85, 85, 241);
}
.content .content_up .content_up_box2 .content_up_box2_img {
  display: inline-block;
  text-align: right;
  border-radius: 24px;
  overflow: hidden;
  height: 100%;
  width: 750px;
}
</style>
