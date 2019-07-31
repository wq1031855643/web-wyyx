<template>
  <div class="head">
    <a href="/"></a>
    <div class="ipt" @click="searchAction">
      <i class="icon"></i>
      <span class="placeholder">搜索商品, 共21545款好物</span>
    </div>
    <div class="loginBtn">登录</div>
  </div>
</template>

<script>
export default {
  methods: {
    searchAction() {
        this.$router.push('/search');
    }
  },
};
</script>

<style>
.head {
  box-sizing: border-box;
  height: 1.125rem;
  padding: .15rem .3rem;
  background: #ffffff;
  position: relative;
  z-index: 2;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
.head > a {
  background-image: url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png");
  width: 23%;
  height: .52rem;
  display: inline-block;
  margin-right: .315rem;
  margin-left: .125rem;
  background-size: cover;
  background-position: center;
}
.ipt {
  width: 70%;
  height: .75rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  font-size: .35rem;
  background: #ededed;
  border-radius: 4px;
}
.ipt .icon {
  display: inline-block;
  vertical-align: middle;
  background-image: url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: .375rem;
  height: .375rem;
  margin-right: .15rem;
}
.ipt .placeholder {
  color: #666;
  font-size: .375rem;
}
.head .loginBtn {
  width: 1.2rem;
  height: .45rem;
  line-height: .45rem;
  text-align: center;
  color: #b4282d;
  border: 1px solid #b4282d;
  border-radius: 4px;
  margin-left: .375rem;
  font-size: .35rem;
}
</style>
