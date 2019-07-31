<template>
  <div>
    <i class="m-goToTop" @click="goToTop"></i>
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener("scroll", this._initScroll, true);
  },
  methods: {
    _initScroll() {
      let iconTop = document.querySelector(".m-goToTop");
      let clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      // 设备/屏幕高度
      let scrollObj = document.querySelector(".page"); // 滚动区域
      let scrollToTop = scrollObj.scrollTop; // 滚动条到头部的距离
      let scrollHeight = scrollObj.scrollHeight; // 滚动条的总高度
      //滚动条到底部的条件
      if (scrollToTop > clientHeight) {
        iconTop.style.display = "block";
      } else {
        iconTop.style.display = "none";
      }
    },
    goToTop() {
      let scrollObj = document.querySelector(".page"); // 滚动区域
      let scrollToTop = scrollObj.scrollTop; // 滚动条到头部的距离
      let timer = setInterval(function() {
        scrollToTop -= 800;
        scrollObj.scrollTop = scrollToTop;
        if (scrollToTop <= 0) {
          clearInterval(timer);
        }
      }, 30);
    }
  }
};
</script>

<style>
.m-goToTop {
  position: fixed;
  right: 0.30667rem;
  bottom: 1.6rem;
  vertical-align: middle;
  width: 1.09333rem;
  height: 1.09333rem;
  background-image: url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/goToTop-f502426678.png");
  background-size: 1.09333rem 1.09333rem;
  z-index: 2;
  display: none;
}
</style>
