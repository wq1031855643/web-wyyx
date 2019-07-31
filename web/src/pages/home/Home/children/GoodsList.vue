<template>
  <div class="goodsModule">
      <a :href="item.schemeUrl" v-for="(item, index) in goods" :key="index">
          <div class="icon">
              <img class="img" v-lazy="item.picUrl" alt="" />
              <div class="txt">{{item.text}}</div>
          </div>
      </a>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import Api from '../../../../request/api';
import {get} from '../../../../request/http';
export default {
    computed: {
        ...mapState({
            goods: state => state.home.goodsData
        })
    },
};
</script>

<style>
.goodsModule {
  width: 100%;
  height: 4.96rem;
  background: #fff;
}
.goodsModule>a{
    display: block;
    width: 1.46667rem;
    height: 2.08rem;
    float: left;
    margin: .13333rem .26667rem .12rem .26667rem ;
}
.icon .img{
    width: 1.46667rem;
    height: 1.46667rem;
}
.txt{
    margin-top: .13333rem;
    text-align: center;
    font-size: .32rem;
    color: #333333;
    line-height: .48rem;
    white-space: nowrap;
}
</style>
