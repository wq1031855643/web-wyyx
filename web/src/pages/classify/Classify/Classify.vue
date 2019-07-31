<template>
  <div class="p-cateList">
    <div class="m-itemCateListHd">
      <div class="m-topSearchIpt">
        <i class="icon"></i>
        <span class="placeholder">搜索商品, 共21543款好物</span>
      </div>
    </div>

    <div class="m-cateNavVertWrap">
        <ul class="m-cateNavVert">
            <li class="item">
                <a class="txt" href="#"></a>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.m-itemCateListHd {
  display: flex;
  align-items: center;
  height: 1.17333rem;
  padding: 0 0.4rem;
  background-color: #fff;
  position: relative;
}
.m-topSearchIpt .icon {
  display: inline-block;
  vertical-align: middle;
  background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 0.37333rem;
  height: 0.37333rem;
  margin-right: 0.13333rem;
}
.m-topSearchIpt {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  height: 0.74667rem;
  font-size: 0.37333rem;
  background-color: #ededed;
  border-radius: 0.10667rem;
  width: 100%;
}
.m-topSearchIpt .placeholder {
  color: #666;
}
.p-cateList .m-cateNavVertWrap {
    float: left;
    width: 2.16rem;
    height: 100%;
    background-color: #fff;
}
.m-cateNavVert {
    padding: .53333rem 0;
}
.m-cateNavVert .item {
    width: 100%;
    height: .66667rem;
    text-align: center;
    border: none;
}
.m-cateNavVert .item+.item {
    margin-top: .53333rem;
}
.m-cateNavVert .item .txt {
    display: block;
    color: #333;
    line-height: .66667rem;
}
</style>
