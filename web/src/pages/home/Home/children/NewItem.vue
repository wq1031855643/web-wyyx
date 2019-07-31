<template>
  <div class="m-newItemModule">
    <div class="moduleTitle" style="padding: 0 .4rem;box-sizing: border-box">
      <div class="left">
        <span>新品首发</span>
      </div>
      <a href="#" class="right">
        <span>更多</span>
        <i class="icon"></i>
      </a>
    </div>
    <ul class="list">
      <li class="item" v-for="(item, index) in items.slice(0,6)" :key="index">
        <a class="good" href>
          <div class="wraper">
            <img v-lazy="item.primaryPicUrl" alt />
          </div>
          <div class="name">
            <span>{{item.name}}</span>
            <span class="dynamicPrice">¥{{item.retailPrice}}</span>
          </div>
          <div class="tagWraper">
            <p class="gradientPrice" v-show="item.promTag">{{item.promTag}}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      items: state => state.home.newItemData
    })
  }
};
</script>

<style>
.m-newItemModule {
  padding-bottom: 0.34667rem;
  background-color: #fff;
  margin-bottom: .4rem
}

.m-newItemModule .list {
  position: relative;
  z-index: 0;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box
}
.m-newItemModule .list .item {
  float: left;
  position: relative;
  overflow: hidden;
  background-color: #fff;
  padding: 0 0 0.17333rem !important;
  margin-left: 0.26667rem;
  width: 2.88rem;
}
.m-newItemModule .list .item .good {
  display: block;
  width: 100%;
}
.m-newItemModule .list .item .good .wraper {
  background-color: #f5f5f5;
  margin-bottom: 0.16rem;
}
.m-newItemModule .list .item .good .wraper img {
  background-color: #f5f5f5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.m-newItemModule .list .item .good .name {
  margin-top: 0;
  margin-bottom: 0.05333rem;
  padding: 0;
  font-size: 0.32rem;
  overflow: visible;
  white-space: normal;
  line-height: 0.48rem;
}
.m-newItemModule .list .item .dynamicPrice {
  color: #b4282d;
  font-family: PingFangSC-Medium;
}
.m-newItemModule .list .item .tagWraper {
  width: 100%;
  z-index: 1;
  margin: 0 0 0.05333rem 0;
  height: 0.5rem;
  overflow: hidden;
}
.m-newItemModule .list .item .gradientPrice {
  margin-bottom: 0.06667rem;
  padding: 0 0.16rem;
  line-height: 0.42667rem;
  height: 0.42667rem;
  text-align: center;
  color: #ce2424;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #ce2424;
  font-size: 0.26667rem;
  border-radius: 0.18667rem;
  display: inline-block;
  vertical-align: middle;
}
</style>
