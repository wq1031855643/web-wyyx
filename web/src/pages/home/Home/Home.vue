<template>
  <div class="main">
    <Header />
    <HeadTabs @cut-tab="cutTab" />
    <div class="page">
      <!-- 动态切换组件 -->
      <keep-alive>
        <component :is="comVal"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Header from "../../../components/Header";
import HeadTabs from "./children/HeadTabs";
import Recommend from "./tab/Recommend";
import HeadTabList from "./tab/HeadTabList";

export default {
  components: {
    Header,
    HeadTabs,
    Recommend,
    HeadTabList,
  },
  data() {
    return {
      selectIndex: 0
    };
  },
  computed: {
    comVal() {
      switch (this.selectIndex) {
        case 0:
          return "Recommend";
        case 1:
          //居家生活数据
          this.$store.dispatch("home/requestHomeMainData", { id: 2 });
          return "HeadTabList";
        case 2:
          //服饰鞋包数据
          this.$store.dispatch("home/requestHomeMainData", { id: 3 });
          return "HeadTabList";
        case 3:
          //美食酒水数据
          this.$store.dispatch("home/requestHomeMainData", { id: 4 });
          return "HeadTabList";
        case 4:
          //个护清洁数据
          this.$store.dispatch("home/requestHomeMainData", { id: 5 });
          return "HeadTabList";
        case 5:
          //母婴亲子数据
          this.$store.dispatch("home/requestHomeMainData", { id: 6 });
          return "HeadTabList";
        case 6:
          //运动旅行数据
          this.$store.dispatch("home/requestHomeMainData", { id: 7 });
          return "HeadTabList";
        case 7:
          //数码家电数据
          this.$store.dispatch("home/requestHomeMainData", { id: 8 });
          return "HeadTabList";
        case 8:
          //全球特色数据
          this.$store.dispatch("home/requestHomeMainData", { id: 9 });
          return "HeadTabList";
      }
    }
  },
  created() {
    //获得页面数据
    this.getHomeInitData();
  },
  methods: {
    cutTab(index) {
      this.selectIndex = index;
    },
    //请求首页的初始化数据
    getHomeInitData() {
      //导航
      this.$store.dispatch("home/requestHomeNavData");
      //轮播图
      this.$store.dispatch("home/requestHomeBannerData");
      //商品分类列表
      this.$store.dispatch("home/requestHomeGoodsData");
      //品牌制造商列表
      this.$store.dispatch("home/requestHomeBrandData");
      //类目热销榜列表
      this.$store.dispatch("home/requestHomeHotSellData");
      //人气推荐列表
      this.$store.dispatch("home/requestHomePopData");
      //限时购列表
      this.$store.dispatch("home/requestHomeSaleData");
      //新品首发列表
      this.$store.dispatch("home/requestHomeNewItemData");
      //购物指南列表
      this.$store.dispatch("home/requestHomeShopGuideData");
      //推荐商品列表
      this.$store.dispatch("home/requestHomeRmData");
    }
  }
};
</script>

<style>
.page {
  width: 100%;
  position: absolute;
  top: 2rem;
  left: 0;
  bottom: 1.215rem;
  overflow: auto;
  background: #eee;
}
</style>
