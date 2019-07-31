<template>
  <div class="m-flashSaleModule">
    <div class="moduleTitle" style="padding: 0 .4rem;box-sizing: border-box">
      <div class="left">
        <span>限时购</span>
      </div>
      <a href="#" class="right">
        <span>更多</span>
        <i class="icon"></i>
      </a>

      <div class="m-countdown">
        <span class="hours">00</span>
        <span class="colon">:</span>
        <span class="mins">00</span>
        <span class="colon">:</span>
        <span class="secs">01</span>
      </div>
    </div>
    <div class="cnt">
      <a href="#" class="m-indexFlashSaleItem" v-for="(item, index) in saleList" :key="index">
        <div class="imgWrap">
          <img v-lazy="item.picUrl" alt />
        </div>
        <div class="price">
          <span class="actualPrice">{{item.activityPrice}}</span>
          <span class="retailPrice">{{item.originPrice}}</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      saleList: state => state.home.saleData
    })
  }
};
</script>

<style>
.m-flashSaleModule {
  background-color: #fff;
  margin-bottom: 0.26667rem;
}
.moduleTitle .m-countdown {
  float: left;
  display: inline-block;
  margin: 0 0 0 0.16rem;
}
.moduleTitle .m-countdown .hours,
.moduleTitle .m-countdown .mins,
.moduleTitle .m-countdown .secs {
  display: inline-block;
  font-size: 0.32rem;
  line-height: 0.48rem;
  width: 0.48rem;
  height: 0.48rem;
  text-align: center;
  background-color: #333;
  border-radius: 0.05333rem;
  color: #fff;
  margin: 0 0.13333rem;
  font-family: PingFangSC-Medium;
}
.m-indexFlashSaleItem {
  display: block;
  color: #333;
  float: left;
  margin-right: 0.26667rem;
  padding-bottom: 0.4rem;
}
.m-flashSaleModule .cnt {
  overflow: hidden;
  padding: 0 0.13333rem 0 0.4rem;
  width: 100%;
  box-sizing: border-box;
}
.m-indexFlashSaleItem .imgWrap {
  width: 2.88rem;
  height: 2.88rem;
  background: #f5f5f5;
  border-radius: 4px;
  margin-bottom: 0.16rem;
}
.m-indexFlashSaleItem .imgWrap img {
  width: 2.88rem;
  height: 2.88rem;
}
.m-indexFlashSaleItem .price {
  padding-left: 0.26667rem;
}
.m-indexFlashSaleItem .price .actualPrice {
  font-size: 0.37333rem;
  color: #b4282d;
  margin-right: 0.16rem;
}
.m-indexFlashSaleItem .price .retailPrice {
  font-size: 0.32rem;
  color: #7f7f7f;
  text-decoration: line-through;
}
</style>
