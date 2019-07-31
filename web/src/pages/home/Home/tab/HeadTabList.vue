<template>
  <div class="m-itemFloor">
    <Swiper :images="items[0]" />
    <ul class="list">
      <li v-for="(item, index) in items.slice(1)" :key="index" style="margin-bottom: 10px">
        <header class="hd">
          <p class="name">
            <span>{{item.category.name}}</span>
          </p>
          <p class="desc" data-reactid=".0.2.$0.0.0.1">{{item.category.frontDesc}}</p>
        </header>

        <div class="m-goodGrid">
          <ul class="list">
            <li class="item" v-for="(element, index) in item.itemList" :key="index">
              <div class="wraper">
                <img v-lazy="element.listPicUrl" alt />
                <div class="desc">
                  <span>{{ element.simpleDesc }}</span>
                </div>
              </div>
              <div class="name">
                <span>{{ element.name }}</span>
              </div>
              <div class="price">
                <span class="priceInner">
                  ¥{{ element.retailPrice }}
                  <span
                    class="counterPrice"
                    v-show="element.retailPrice !== element.counterPrice"
                  >¥{{ element.counterPrice }}</span>
                </span>
              </div>
              <div class="tagWraper" v-show="element.promTag">
                <p class="status">{{ element.promTag }}</p>
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>

    <!-- 回到顶部 -->
    <ToTop />
  </div>
</template>

<script>
import ToTop from '../../../../components/ToTop';
import Swiper from "../../../../components/Swiper";
import { mapState } from "vuex";
export default {
  components: {
    Swiper,
    ToTop
  },
  computed: {
    ...mapState({
      items: state => state.home.mainData
    })
  }
};
</script>

<style>
.m-itemFloor .hd {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 1.6rem;
  text-align: center;
  background-color: #fff;
}
.m-itemFloor .hd .name {
  font-size: 0.42667rem;
  line-height: 1;
  display: flex;
  align-items: center;
}
.m-itemFloor .m-goodGrid {
  padding: 0 0.2rem 0.2rem;
}
.m-itemFloor .hd .desc {
  margin-top: 0.21333rem;
  line-height: 1;
  color: #999;
  font-size: 0.32rem;
  display: flex;
  align-items: center;
}
.m-itemFloor .m-goodGrid .list .item {
  width: 48%;
  margin-bottom: 0.4rem;
  box-sizing: border-box;
}
.m-itemFloor .m-goodGrid .list .item .desc {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #f1ece2;
  border-radius: 0 0 0.05333rem 0.05333rem;
  font-size: 0.32rem;
  color: #9f8a60;
  letter-spacing: 0;
  line-height: 0.48rem;
  padding: 0.08rem 0.13333rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.m-itemFloor .m-goodGrid .list .item .name {
  margin-top: 0.21333rem;
  line-height: 0.53333rem;
  font-size: 0.37333rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #333;
}
.m-itemFloor .m-goodGrid .list .item .price {
  font-size: 0.42667rem;
  line-height: 0.64rem;
  color: #b4282d;
  text-align: left;
  font-family: PingFangSC-Regular;
}
.m-itemFloor .m-goodGrid .list .item .price .priceInner {
  display: flex;
  align-items: center;
}
.m-itemFloor .m-goodGrid .list .item .price .counterPrice {
  margin-left: 0.10667rem;
  font-size: 0.32rem;
  color: #999;
  line-height: 0.48rem;
  text-decoration: line-through;
  font-family: PingFangSC-Light;
}
.m-itemFloor .m-goodGrid .list .item .wraper img {
  width: 100%;
  background-color: #f4f4f4;
}
.m-itemFloor .m-goodGrid .list .item .wraper {
  position: relative;
  overflow: hidden;
}
.m-itemFloor .m-goodGrid .list .item:nth-child(even) {
  margin-left: 0.333rem;
}
</style>
