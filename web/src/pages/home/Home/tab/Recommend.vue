<template>
  <div class="tj-main">
    <!-- 轮播图 -->
    <Swiper :images="images" />

    <div class="m-indexServicePolicy">
      <ul class="g-grow">
        <li>
          <a>
            <i class="u-icon"></i>
            <span>网易自营品牌</span>
          </a>
        </li>
        <li>
          <a>
            <i class="u-icon"></i>
            <span>30天无忧退货</span>
          </a>
        </li>
        <li>
          <a>
            <i class="u-icon"></i>
            <span>48小时快速退款</span>
          </a>
        </li>
      </ul>
    </div>

    <!-- 商品分类列表 -->
    <GoodsList />

    <!-- 新人专享 -->
    <div class="m-freshmanModule">
      <div class="moduleTitle">
        <span>新人专享礼</span>
      </div>
      <div class="content">
        <a href="#" class="left">
          <div class="name">新人专享礼包</div>
          <div class="imgWrap">
            <div class="img">
              <img src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt />
            </div>
          </div>
        </a>
        <div class="right">
          <div class="module1">
            <a href="#" class="m-activityItem">
              <div class="picWrap">
                <div class="pic m-lazyload">
                  <img
                    src="http://yanxuan.nosdn.127.net/7a04f29031ce5b7aabb14c22c6ac327d.png?imageView&thumbnail=200x200&quality=75"
                    alt
                  />
                </div>
                <div class="discount">
                  <div class="line1">64.9</div>
                  <div class="line2">74.9</div>
                </div>
              </div>
              <div class="cnt">
                <div class="title">福利社</div>
                <div class="subTitle">今日特价</div>
              </div>
            </a>
          </div>
          <div class="module2">
            <img src="../../../../assets/one.png" alt />
          </div>
        </div>
      </div>
    </div>

    <!-- 品牌制造商直供 -->
    <TagList />

    <!-- 类目热销榜 -->
    <HotSell />

    <!-- 人气推荐 -->
    <Popularity />

    <!-- 限时购 -->
    <FlashSale />

    <!-- 新品首发 -->
    <NewItem />

    <!-- 购物指南专区 -->
    <LightShopping />

    <!-- 推荐商品 -->
    <CateList :items='items1' />

    <!-- 回到顶部 -->
    <ToTop />
  </div>
</template>

<script>
import { mapState } from "vuex";
import ToTop from '../../../../components/ToTop';
import Swiper from "../../../../components/Swiper";
import Api from "../../../../request/api";
import { get } from "../../../../request/http";
import GoodsList from "../children/GoodsList";
import TagList from "../children/TagList";
import HotSell from "../children/HotSell";
import Popularity from "../children/Popularity";
import FlashSale from '../children/FlashSale';
import NewItem from '../children/NewItem';
import LightShopping from '../children/LightShopping';
import CateList from '../children/CateList';
export default {
  components: {
    ToTop,
    Swiper,
    GoodsList,
    TagList,
    HotSell,
    Popularity,
    FlashSale,
    NewItem,
    LightShopping,
    CateList
  },
  computed: {
    ...mapState({
      images: state => state.home.bannerData,
      items1: state => state.home.rmData,
    })
  },
};
</script>

<style>
.g-grow {
  width: 100%;
  height: 0.96rem;
  padding: 0 0.4rem;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  zoom: 1;
}
.g-grow > li {
  flex: 1;
}
.g-grow > li > a {
  display: inline-block;
  vertical-align: middle;
  height: 0.42667rem;
}
.u-icon {
  display: inline-block;
  vertical-align: middle;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 0.42667rem;
  height: 0.42667rem;
}
.g-grow :nth-child(1) i {
  background-image: url("http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png");
}
.g-grow :nth-child(2) i {
  background-image: url("http://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png");
}
.g-grow :nth-child(3) i {
  background-image: url("http://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png");
}
.g-grow span {
  font-size: 0.32rem;
  color: #333;
  margin-left: 0.10667rem;
  line-height: 0.42667rem;
  display: inline-block;
  vertical-align: middle;
}
.m-indexServicePolicy {
  background: #fff;
}

.m-freshmanModule {
  background-color: #fff;
  margin-bottom: 0.26667rem;
  margin-top: 0.26667rem;
  padding-bottom: 0.4rem;
}
.moduleTitle {
  height: 1.2rem;
  width: 100%;
  line-height: 1.2rem;
  text-align: center;
  font-family: PingFangSC-Regular;
  font-size: 0.35rem;
}
.moduleTitle > span::before {
  left: -0.53333rem;
}
.moduleTitle > span::after {
  right: -0.53333rem;
}
.moduleTitle > span::before,
.moduleTitle > span::after {
  content: "";
  position: absolute;
  top: 0.6rem;
  width: 0.32rem;
  height: 0.04rem;
  background: #333;
}
.moduleTitle > span {
  display: inline-block;
  position: relative;
}
.m-freshmanModule .content {
  padding-left: 0.4rem;
  overflow: hidden;
}
.m-freshmanModule .left {
  display: block;
  width: 4.37333rem;
  height: 5.74667rem;
  background: #f9e9cf;
  border-radius: 0.05333rem;
  margin-right: 0.05333rem;
  float: left;
  color: #333;
}
.m-freshmanModule .left .name {
  font-family: PingFangSC-Medium;
  font-size: 0.35rem;
  padding: 0.4rem 0 0 0.4rem;
}
.m-freshmanModule .left .imgWrap {
  margin: 0.49333rem auto;
  width: 3.14rem;
  height: 3.42667rem;
  position: relative;
}
.m-freshmanModule .left .imgWrap .img {
  width: 3.14rem;
  height: 3.42667rem;
}
.m-freshmanModule .left .imgWrap .img img {
  height: 100%;
  display: inline;
}
.m-freshmanModule .right {
  float: left;
}
.m-freshmanModule .right .module1 {
  background: #fbe2d3;
  border-radius: 4px;
  width: 4.57333rem;
  height: 2.86667rem;
  margin-bottom: 0.05333rem;
}
.m-activityItem {
  position: relative;
  display: block;
  color: #333;
  width: 4.57333rem;
  height: 2.56667rem;
  float: left;
  border-radius: 0.05333rem;
  margin: 0 0.05333rem 0.05333rem 0;
  font-size: 0.32rem;
  padding: 0.26667rem 0 0 0.4rem;
}
.m-activityItem .picWrap {
  position: absolute;
  right: 0.43rem;
  top: 0.2rem;
}
.m-activityItem .picWrap,
.m-activityItem .picWrap .pic {
  width: 2.66667rem;
  height: 2.66667rem;
}
.m-lazyload > img {
  width: 100%;
  height: auto;
  display: inline;
}
.m-activityItem .picWrap .discount {
  position: absolute;
  top: 0;
  right: 0.45rem;
  width: 1.06667rem;
  height: 0.9rem;
  opacity: 0.8;
  background: #f59524;
  border-radius: 50%;
  padding-top: 0.13333rem;
  color: #fff;
  text-align: center;
}
.m-activityItem .picWrap .discount .line1 {
  font-size: 0.32rem;
}
.m-activityItem .picWrap .discount .line2 {
  font-size: 0.26667rem;
  margin-top: -0.09333rem;
  text-decoration: line-through;
}
.m-activityItem .title {
  font-family: PingFangSC-Medium;
  font-size: 0.42667rem;
}
.m-activityItem .subTitle {
  color: #7f7f7f;
}
.m-activityItem,
.m-activityItem .cnt {
  position: relative;
}
.module2 {
  width: 4.57333rem;
  height: 2.86667rem;
}
.module2 > img {
  width: 4.57333rem;
  height: 2.86667rem;
  vertical-align: top;
}
</style>  
