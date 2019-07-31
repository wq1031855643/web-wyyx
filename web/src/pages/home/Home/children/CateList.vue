<template>
  <div class="m-categoryModule">
    <div class="categoryItem" v-for="(item, index) in items" :key="index">
      <a href="#" class="bannder" :style="{backgroundImage: 'url('+ item.titlePicUrl +')'}"></a>
      <div class="m-goodGrid">
        <ul class="list" style="width: 280%">
          <li class="item" v-for="(element, index) in item.itemList" :key="index">
            <a href="#" class="good">
              <div class="wraper">
                <img v-lazy="element.primaryPicUrl" alt />
              </div>
              <div class="name">{{element.name}}</div>
              <div class="price">
                ¥{{element.retailPrice}}
                <span v-show="element.retailPrice !== element.counterPrice" class="counterPrice">¥{{element.counterPrice}}</span>
              </div>
              <div class="tagWraper">
                <span v-show="element.promTag" class="status">{{element.promTag}}</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import BScroll from "better-scroll";

export default {
  props: ["items"],
  // mounted() {
  //   this.$nextTick(() => {
  //     new BScroll('.m-goodGrid', {
  //        click: true,
  //       tap: true,
  //       scrollX: true,
  //       scrollY: false,
       
  //     });
  //   });
  // },
};
</script>

<style>
.m-categoryModule .categoryItem {
  background: #fff;
  margin-bottom: 0.26667rem;
}
.m-categoryModule .categoryItem .bannder {
  display: block;
  width: 100%;
  height: 4.93333rem;
  margin-bottom: 0.26667rem;
  background-size: 100% 100%;
}
.m-goodGrid {
  overflow: scroll;
  z-index: 1;
  padding: 0 0.4rem 0.4rem;
}
.m-categoryModule .m-goodGrid .list .item {
  padding: 0 !important;
  margin-right: 0.26667rem;
  width: 2.66667rem;
  height: auto;
  background-color: #fff;
}
.m-categoryModule .list .item .good .wraper {
    background-color: #f4f4f4;
    margin-bottom: .16rem;
}
.m-goodGrid .list .item .good .name {
  padding-left: 0;
  font-size: 0.32rem;
  margin-top: 0;
  line-height: 0.48rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
}
.m-goodGrid .list .item .good .price {
  margin-bottom: 0.05333rem;
  padding-left: 0;
  font-size: 0.32rem;
  line-height: 0.48rem;
  color: #b4282d;
}
.m-goodGrid .list .item .good .counterPrice {
  margin-left: 0.10667rem;
  font-size: 0.32rem;
  line-height: 0.48rem;
  color: #999;
  text-decoration: line-through;
}
.m-goodGrid .list .item .tagWraper {
  width: 100%;
  z-index: 1;
  margin: 0 0 0.05333rem;
  height: 0.44rem;
  padding-left: 0;
  text-align: left;
}
.m-goodGrid .list .item .status {
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
