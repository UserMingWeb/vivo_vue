<!--  -->
<template>
  <div class="test">
    <div class="response">
      <div class="box1">
        <div class="box1_left">
          <div class="box1_left_cnt">
            <div class="box1_left_logo">
              <img src="./../assets/img/vivo3.svg" alt="" />
            </div>
            <div class="box1_left_title">
              <p>全部稳才是真的稳</p>
              <p>蔡司专业影像</p>
            </div>
            <div class="box1_left_learn">
              <span
                ><router-link
                  :to="{ name: 'Product', query: { id: 1 } }"
                  tag="a"
                  target="_blank"
                  >进一步了解</router-link
                ></span
              >
              <a class="buy">立即购买</a>
            </div>
          </div>
        </div>
        <div class="box1_right">
          <img src="./../assets/img/vivo9.jpg" alt="v" />
        </div>
      </div>
      <div class="box1">
        <div class="box1_right">
          <img src="./../assets/img/vivo10.jpg" alt="v" />
        </div>
        <div class="box1_left box_right">
          <div class="box1_left_cnt">
            <div class="box1_left_logo">
              <img src="./../assets/img/vivo4.svg" alt="" />
            </div>
            <div class="box1_left_title">
              <p>全部稳才是真的稳</p>
              <p>蔡司专业影像</p>
            </div>
            <div class="box1_left_learn">
              <span
                ><router-link
                  :to="{ name: 'Product', query: { id: 1 } }"
                  tag="a"
                  target="_blank"
                  >进一步了解</router-link
                ></span
              >
              <a class="buy">立即购买</a>
            </div>
          </div>
        </div>
      </div>
      <div class="box1">
        <div class="box1_left">
          <div class="box1_left_cnt">
            <div class="box1_left_logo">
              <img src="./../assets/img/vivo5.svg" alt="" />
            </div>
            <div class="box1_left_title">
              <p>全部稳才是真的稳</p>
              <p>蔡司专业影像</p>
            </div>
            <div class="box1_left_learn">
              <span
                ><router-link
                  :to="{ name: 'Product', query: { id: 1 } }"
                  tag="a"
                  target="_blank"
                  >进一步了解</router-link
                ></span
              >
              <a class="buy">立即购买</a>
            </div>
          </div>
        </div>
        <div class="box1_right">
          <img src="./../assets/img/vivo11.jpg" alt="v" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {};
  },
};
</script>

<style  scoped>
.response {
  width: 90%;
  margin: 0 auto;
}
.box1 {
  position: relative;
}
@media screen and (max-width: 600px) {
  .box1 {
    width: 100%;
    margin: 9.4444vw auto;
  }
  .box1_left {
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
  .box1_left_logo {
    text-align: center;
    font-size: 0;
    height: 3.88889vw;
    margin-bottom: 1.94444vw;
    -webkit-border-radius: 3.33333vw;
    -moz-border-radius: 3.33333vw;
    border-radius: 3.33333vw;
  }
  .box1_left_logo img {
    height: 100%;
  }
  .box1_left_title {
    width: 100%;
    line-height: 9vw;
    text-align: center;
    font-size: 8.33333vw;
    max-width: 100%;
  }
  .box1_left_learn {
    margin-top: 20px;
  }
  .box1_left_learn span {
    display: block;
    width: 29.44444vw;
    height: 10.27778vw;
    line-height: 10.27778vw;
    border-radius: 5vw;
    font-size: 3.88889vw;
    text-align: center;
    margin: 8.05556vw auto 3.05556vw;
    background: #415fff;
    color: rgb(255, 255, 255);
    font-weight: bold;
  }
  .buy {
    display: block;
    font-size: 3.88889vw;
    line-height: 5.27778vw;
    font-weight: bold;
    margin-bottom: 8.61111vw;
  }
  .box1_right {
    width: 100%;
    height: 60.27778vw;
    display: block;
    border-radius: 3.33333vw;
    overflow: hidden;
  }
  .box1_right img {
    width: 100%;
    height: 100%;
    border-radius: 3.33333vw;
  }
}

@media screen and (min-width: 600px) {
  .box1 {
    height: 34vw;
    margin: 8vw auto;
  }
  .box1_left {
    display: inline-block;
    width: 35vw;
    position: relative;
    vertical-align: top;
  }
  .box1_left_cnt {
    width: 30vw;
    position: relative;
    top: 7vw;
  }
  .box1_left_logo {
    height: 1.838vw;
    margin-bottom: 1vw;
    text-align: left;
  }
  .box1_left_logo img {
    height: 100%;
  }
  .box1_left_title {
    width: 100%;
    line-height: 4.3vw;
    text-align: left;
    font-size: 3.186vw;
    max-width: 100%;
  }
  .box1_left_learn {
    text-align: left;
  }
  .box1_left_learn span {
    display: inline-block;
    width: 13.44444vw;
    height: 4.27778vw;
    line-height: 4.27778vw;
    border-radius: 3vw;
    font-size: 1.88889vw;
    text-align: center;
    margin: 4.05556vw auto 1.05556vw;
    background: #415fff;
    color: rgb(255, 255, 255);
    font-weight: bold;
  }
  .buy {
    display: inline-block;
    font-size: 1.88889vw;
    line-height: 4.27778vw;
    font-weight: bold;
    margin-bottom: 2.61111vw;
    margin-left: 1vw;
  }
  .box1_right {
    display: inline-block;
    width: 55%;
    height: 100%;
    overflow: hidden;
  }
  .box1_right img {
    height: 100%;
    width: 100%;
    border-radius: 24px;
  }
  .box_right {
      position: relative;
      left: 10vw;
  }
}
</style>
