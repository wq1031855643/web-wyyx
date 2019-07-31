<template>
  <ul class="nav-bottom">
    <li @click="selectMenu(index)" v-for="(item, index) in menus" :key="index">
      <router-link :class="{'active': selectIndex == index}" :to="item.path">
        <span></span>
        <span>{{item.title}}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        { id: 1, title: "首页", path: "/home" },
        { id: 2, title: "分类", path: "/classify" },
        { id: 3, title: "识物", path: "/matter" },
        { id: 4, title: "购物车", path: "/cart" },
        { id: 5, title: "个人", path: "/mine" }
      ],
      selectIndex: 0
    };
  },
  methods: {
    selectMenu(index) {
      this.selectIndex = index;
    }
  }
};
</script>

<style>
.nav-bottom {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  background: #fff;
  height: 49px;
  border-top: 1px solid #ededed;
}
.nav-bottom > li {
  flex: 1;
  text-align: center;
}
.nav-bottom > li > a {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.nav-bottom > li span:nth-child(1) {
  width: 0.6rem;
  height: 0.6rem;
  background-image: url("../assets/tabBar.png");
  background-size: 100%;
  margin: 0.1rem auto 0;
}

.nav-bottom > li:nth-child(1)>a>span:nth-child(1) {
  background-position: 0 -110px
}

.nav-bottom > li:nth-child(2)>a>span:nth-child(1) {
  background-position: 0 -82px
}

.nav-bottom > li:nth-child(3)>a>span:nth-child(1) {
  background-position: 0 80px
}

.nav-bottom > li:nth-child(4)>a>span:nth-child(1) {
  background-position: 0 249px
}

.nav-bottom > li:nth-child(5)>a>span:nth-child(1) {
  background-position: 0 299px
}

.active {
  color: red;
}
</style>
