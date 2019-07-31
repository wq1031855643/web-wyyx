<template>
  <div class="m-sceneLightShoppingGuideModule">
    <a href="#" class="m-styleBanner" v-for="(item, index) in items" :key="index">
      <div class="title">{{item.title}}</div>
      <div class="desc">{{item.desc}}</div>
      <div class="picList">
        <img v-lazy="item.picUrlList[0]" alt class="pic" />
        <img v-lazy="item.picUrlList[1]" alt class="pic" />
      </div>
    </a>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      items: state => state.home.shopGuideData
    })
  }
};
</script>

<style>
.m-sceneLightShoppingGuideModule {
  overflow: hidden;
  padding: 0.13333rem 0.4rem 0.4rem 0.34667rem;
  background: #fff;
  margin-bottom: 0.26667rem;
}
.m-styleBanner {
  display: block;
  width: 4.57333rem;
  height: 3.52rem;
  margin: 0.05333rem 0 0 0.05333rem;
  padding: 0.26667rem 0 0 0.26667rem;
  border-radius: 0.05333rem;
  background-color: #f5f5f5;
  float: left;
  box-sizing: border-box
}
.m-styleBanner .title {
  padding-left: 0.13333rem;
  font-size: 0.42667rem;
  font-family: PingFangSC-Medium;
  color: #333333;
}
.m-styleBanner .desc {
  padding-left: 0.13333rem;
  font-size: 0.32rem;
  color: #7f7f7f;
}
.m-styleBanner .picList {
  width: 100%;
}
.m-styleBanner .picList .pic {
  width: 2rem;
  height: 2rem;
  float: left;
  margin-right: 0.05333rem;
}
</style>
