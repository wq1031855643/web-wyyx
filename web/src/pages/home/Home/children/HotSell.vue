<template>
  <div class="m-categoryHotSellModule">
    <div class="moduleTitle">
      <h3 class="title">类目热销榜</h3>
    </div>
    <div class="content">
      <ul>
        <a
          :class="{'item-big': index < 2}"
          :href="item.targetUrl"
          v-for="(item, index) in items"
          :key="index"
          class="item"
        >
          <div class="name">{{item.categoryName}}</div>
          <div class="imgWrap">
            <img v-lazy="item.picUrl" alt />
          </div>
        </a>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      items: state => state.home.hotSellData
    })
  }
};
</script>

<style>
.m-categoryHotSellModule {
  background-color: #fff;
  margin-bottom: 0.26667rem;
}
.m-categoryHotSellModule .moduleTitle .title {
  float: left;
  font-size: 0.4rem;
  font-family: PingFangSC-Regular;
  padding-left: 0.4rem;
}
.m-categoryHotSellModule .content {
  padding: 0 0.26667rem 0.26667rem 0.4rem;
  overflow: hidden;
}
.m-categoryHotSellModule .content .item {
  display: block;
  width: 2.2rem;
  height: 2.4rem;
  background: #f5f5f5;
  border-radius: 0.05333rem;
  float: left;
  margin: 0 0.13333rem 0.13333rem 0;
}
.m-categoryHotSellModule .content .item .name {
  margin-top: 0.13333rem;
  text-align: center;
  font-size: 0.32rem;
  color: #333;
  font-family: PingFangSC-Medium;
}
.m-categoryHotSellModule .content .item .imgWrap {
  width: 1.6rem;
  height: 1.6rem;
  margin: 0.02667rem 0 0 0.30667rem;
}
.m-categoryHotSellModule .content .item .imgWrap > img {
  width: 100%;
  height: auto;
}
.m-categoryHotSellModule .content .item-big {
  position: relative;
  width: 4.53333rem;
  height: 2.66667rem;
}
.m-categoryHotSellModule .content .item-big .name {
  position: relative;
  padding-left: 0.32rem;
  color: #333;
  font-family: PingFangSC-Medium;
  font-size: 0.4rem;
  margin-top: 0.88rem;
  z-index: 5;
  text-align: left;
}
.m-categoryHotSellModule .content .item-big .name::before {
  content: "";
  position: absolute;
  left: 0.3rem;
  bottom: -0.21333rem;
  width: 0.64rem;
  height: 0.05333rem;
  background: #333;
}
.m-categoryHotSellModule .content .item-big .imgWrap {
  position: absolute;
  right: 0;
  top: 0;
  width: 2.66667rem;
  height: 2.66667rem;
}
.m-categoryHotSellModule .content ul a:nth-child(1){
    background: #F9F3E4;
}
.m-categoryHotSellModule .content ul a:nth-child(2){
    background: #EBEFF6;
}
</style>
