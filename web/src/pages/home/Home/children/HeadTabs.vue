<template>
  <div class="wrapper">
    <div class="list-wrap" ref="wrapper">
      <ul class="content">
        <div
          :id='item.id'
          @click="selectTab(index)"
          :class="{'tab-active': selectIndex == index}"
          class="tab"
          v-for="(item, index) in menus"
          :key="index"
        >
          <li>{{item.name}}</li>
        </div>
      </ul>
    </div>

    <div class="arrow" @click="changeAction" :class="{'arrow-active': isShow}">
      <img src="../../../../assets/arrow.png" alt />
    </div>

    <transition enter-active-class="slideInDown" leave-active-class="slideOutUp">
      <div class="table-wrap" v-show="isShow">
        <!-- <div class="cover"></div> -->
        <h3>全部频道</h3>
        <ul class="table-list">
          <div @click="selectTab(index)" class="tab" v-for="(item, index) in menus" :key="index">
            <li :class="{'box-active': selectIndex == index}">{{item.name}}</li>
          </div>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Api from '../../../../request/api';
import {get} from '../../../../request/http';
import BScroll from "better-scroll";

export default {
  data() {
    return {
      selectIndex: 0,
      isShow: false,
      bs: ''
    };
  },
  computed: {
    ...mapState({
      menus: state=>state.home.navData
    })
  },
  mounted() {
    this.$nextTick(() => {
      this.bs = new BScroll(this.$refs.wrapper, {
        scrollX: true,
        scrollY: false,
        click: true,
        tap: true
      });
    });
  },
  methods: {
    selectTab(index) {
      this.selectIndex = index;
      this.$emit("cut-tab", index);
      this.isShow = false;
    },
    changeAction() {
      this.isShow = !this.isShow;
    }
  },
  watch: {
    selectIndex: function(){
      let id = this.menus[this.selectIndex].id;
      let el = document.getElementById(id);
      this.bs.scrollToElement(el, 2000, true);
    }
  },
};
</script>

<style>
.wrapper {
  position: absolute;
  top: 1.2rem;
  left: 0;
  width: 100%;
  height: 0.775rem;
  overflow: hidden;
  z-index: 9;
  box-sizing: border-box;
  padding-right: 1.25rem;
}
.list-wrap {
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
}
.wrapper .list-wrap .content {
  width: 225%;
  padding-left: 0.375rem;
}
.wrapper .list-wrap .content .tab {
  display: inline-block;
  height: 0.775rem;
  box-sizing: border-box;
}
.wrapper .list-wrap .content li {
  display: inline;
  line-height: 0.775rem;
  text-align: center;
  padding: 0 0.425rem;
  font-size: 0.35rem;
  color: #333;
}
.tab-active {
  color: #b4282d;
  border-bottom: 2px solid #b4282d;
}
.arrow {
  position: absolute;
  top: 0.2rem;
  right: 0.45rem;
  z-index: 49;
  transition: 100ms;
}
.arrow img {
  width: 0.375rem;
}
.table-wrap {
  position: fixed;
  top: 1.125rem;
  left: 0;
  width: 100%;
  background: #ffffff;
  z-index: 39;
}
.table-wrap > h3 {
  font-size: 16px;
  padding: 0.2rem 0 0.6rem 0.4rem;
}
.table-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.table-list > div {
  width: 2rem;
  height: 0.65rem;
  line-height: 0.65rem;
  text-align: center;
  margin-bottom: 0.53333rem;
  margin-left: 0.4rem;
  background: #fafafa;
  border: 1px solid #ccc;
  border-radius: 0.05333rem;
}
.cover {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
}
.arrow-active {
  transform: rotate(180deg);
  background: #ffffff;
}
.box-active {
  border: 1px solid #b4282d;
  color: #b4282d;
}
.slideInDown,
.slideOutUp {
  animation-duration: 200ms;
}
</style>
