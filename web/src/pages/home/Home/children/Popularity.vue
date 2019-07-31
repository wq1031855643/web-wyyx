<template>
  <div class="m-popularItemModule">
    <div class="moduleTitle" style="padding: 0 .4rem;box-sizing: border-box">
      <div class="left">
        <span>人气推荐</span>
      </div>
      <a href="#" class="right">
        <span>更多</span>
        <i class="icon"></i>
      </a>
    </div>

    <a href="#" class="spItem" v-for="(item, index) in popList.slice(0, 1)" :key="index">
      <div class="wreper">
        <img
          :src="item.primaryPicUrl"
          alt
        />
      </div>
      <div>
        <div class="tagWraper" v-show="item.promTag">
          <span class="tag-status-new">{{item.promTag}}</span>
        </div>
        <div class="name">{{item.name}}</div>
        <div class="desc">{{item.simpleDesc}}</div>
        <div class="price">
          <span>¥{{item.retailPrice}}</span>
        </div>
      </div>
    </a>

    <div class="m-goodGrid">
      <ul class="list">
        <li class="item" v-for="(item, index) in popList.slice(1)" :key="index">
          <a href="#" class="good">
            <div class="wraper">
              <img
                v-lazy="item.primaryPicUrl"
                alt
              />
            </div>
            <div class="name">
              <span>{{item.name}}</span>
              <span class="dynamicPrice">¥{{item.retailPrice}}</span>
            </div>
            <div v-show="item.promTag" class="tagWraper">
              <p class="gradientPrice">{{item.promTag}}</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed: {
    ...mapState({
      popList: state => state.home.popData
    })
  }
};
</script>

<style>
.m-popularItemModule {
  padding-bottom: .4rem;
  margin-bottom: .2666667rem;
  background-color: #fff;
}
.m-popularItemModule .spItem {
  color: #333;
  width: 9.2rem;
  height: 3.73333rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  background: #fef0df;
  border-radius: 0.05333rem;
  margin: 0 0.4rem 0.26667rem;
}
.m-popularItemModule .spItem .wreper {
  width: 3.73333rem;
  height: 3.73333rem;
  background: url("http://yanxuan.nosdn.127.net/3235bc71e70f134b5499316fc74337d4.png");
  background-size: 100% 100%;
  margin-right: 0.4rem;
}
.wreper > img {
  width: 100%;
  height: auto;
}
.tagWraper {
  width: 4.66667rem;
  z-index: 1;
  margin: 0 0 0.16rem;
  height: 0.44rem;
}
.tag-status-new {
  margin-bottom: 0.06667rem;
  padding: 0 0.10667rem;
  line-height: 0.37333rem;
  color: #b4282d;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #b4282d;
  border-radius: 0.02667rem;
  margin-left: 0.13333rem;
  vertical-align: top;
}
.m-popularItemModule .spItem .name {
  font-family: PingFangSC-Regular;
  font-size: 0.37333rem;
  width: 4.66667rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.m-popularItemModule .spItem .desc {
  font-size: 0.32rem;
  color: #7f7f7f;
  width: 4.66667rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.m-popularItemModule .spItem .price {
  font-size: 0.37333rem;
  color: #b4282d;
}
.m-goodGrid {
  background-color: #fff;
  padding-left: 0.13333rem;
}
.m-goodGrid .list {
  position: relative;
  z-index: 0;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
}
.m-popularItemModule .m-goodGrid .list .item {
  float: left;
  position: relative;
  overflow: hidden;
  background-color: #fff;
  padding: 0 0 0.17333rem !important;
  margin-left: 0.26667rem;
  width: 2.88rem;
}
.m-goodGrid .list .item:nth-child(1){
  margin-left: 0
}
.m-goodGrid .list .item .good {
    width: 100%;
}
.m-indexItem .list .item .good {
    display: block;
}
.m-goodGrid .list .item .good .wraper {
    position: relative;
    background-color: #f5f5f5;
    margin-bottom: .16rem;
}
.m-indexItem .list .item .good .name {
    margin-top: 0;
    margin-bottom: .05333rem;
    padding: 0;
    font-size: .32rem;
    overflow: visible;
    white-space: normal;
    line-height: .48rem;
}
.m-goodGrid .list .item .dynamicPrice {
    color: #b4282d;
    font-family: PingFangSC-Medium;
}
.m-indexItem .list .item .tagWraper {
    width: 100%;
    z-index: 1;
    margin: 0 0 .05333rem -.16rem;
    height: .44rem;
    overflow: hidden;
    padding-left: 0;
}
.m-goodGrid .list .item .gradientPrice {
    margin-bottom: .06667rem;
    padding: 0 .16rem;
    line-height: .42667rem;
    height: .42667rem;
    text-align: center;
    color: #CE2424;
    background: rgba(255,255,255,.9);
    border: 1px solid #CE2424;
    font-size: .26667rem;
    border-radius: .18667rem;
    display: inline-block;
    vertical-align: middle;
}
.m-goodGrid .list .item .good .wraper img {
    background-color: #f5f5f5;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.tagWraper .gradientPrice:nth-child(2){
    margin-left: .125rem
}
</style>
