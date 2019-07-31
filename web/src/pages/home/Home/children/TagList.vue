<template>
  <div class="m-indexManufacturersSupplying">
    <div class="moduleTitle" style="padding: 0 .4rem;box-sizing: border-box">
      <div class="left">
        <span>品牌制造商直供</span>
      </div>
      <a href="#" class="right">
        <span>更多</span>
        <i class="icon"></i>
      </a>
    </div>
    <ul class="list">
      <a
        class="item"
        href="#"
        v-for="item in tagList"
        :key="item.id"
        :style="{backgroundImage: 'url('+(item.picUrl)+')'}"
      >
        <div class="cnt">
          <h4 class="title">{{item.name}}</h4>
          <span>{{item.floorPrice}}元起</span>
        </div>
      </a>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      tagList: state => state.home.brandData
    })
  }
};
</script>

<style>
.m-indexManufacturersSupplying {
  margin-bottom: 0.26667rem;
  background: #fff;
}
.moduleTitle .left {
  float: left;
  font-size: 0.4rem;
  font-family: PingFangSC-Regular;
}
.moduleTitle .right {
  display: block;
  font-size: 0.35rem;
  float: right;
  color: #333;
  line-height: 1.33333rem;
}
.moduleTitle .right .icon {
  display: inline-block;
  vertical-align: middle;
  background-image: url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/index-titleArrow-193a1a730c.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 0.17333rem;
  height: 0.30667rem;
  margin: -0.06667rem 0 0 0.10667rem;
}
.m-indexManufacturersSupplying .list {
  overflow: hidden;
  background: #fff;
  margin-bottom: 0.26667rem;
  padding: 0 0.34667rem 0.4rem 0.34667rem;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
}
.m-indexManufacturersSupplying .list .item {
  margin: 0 0.05333rem 0.05333rem 0;
  width: 4.57333rem;
  height: 3.46667rem;
  overflow: hidden;
  background-color: #eee;
  border-radius: 0.05333rem;
  background-size: 100% 100%;
}
.m-indexManufacturersSupplying .list .item .cnt {
  padding-top: 0.30667rem;
  width: 100%;
  z-index: 4;
  text-align: center;
}
.m-indexManufacturersSupplying .list .item .cnt .title {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #333;
  font-family: PingFangSC-Medium;
  font-size: 0.37333rem;
  line-height: 0.45333rem;
  margin-bottom: 0.04rem;
}
</style>
