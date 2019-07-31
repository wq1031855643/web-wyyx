<template>
  <div class="m-searchMoudle">
    <div class="g-bd">
      <div class="m-topBar">
        <div class="row">
          <form class="m-searchIptWrap">
            <div class="m-searchIpt">
              <input type="text" class="ipt" :placeholder="placeholder" v-model="searchVal" />
              <i v-show="searchVal" class="u-icon" @click="cleanValAction"></i>
            </div>
          </form>
          <span class="cancel" @click="backHome">取消</span>
        </div>
      </div>

      <div v-show="isShow" class="m-searchSuggestions">
        <header class="hd">
          <h3>热门搜索</h3>
        </header>
        <nav class="list">
          <a
            :class="{highlight: item.hot}"
            href="#"
            class="item"
            v-for="(item, index) in hotSearchList"
            :key="index"
          >{{item.title}}</a>
        </nav>
      </div>

      <ul v-show="!isShow" class="m-searchAutocomplete">
          <li class="item" v-for="(item, index) in keywordData" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import api from "../request/api";
export default {
  data() {
    return {
      searchVal: "",
      placeholder: "",
      keywordData: [],
      isShow: true,
      hotSearchList: [
        { title: "七夕礼物", hot: true },
        { title: "天然空调 水牛皮席" },
        { title: "9.9元超值专区", hot: true },
        { title: "冷感夏凉被" },
        { title: "风扇" },
        { title: "反季特惠" },
        { title: "耳机" },
        { title: "中秋月饼上新特惠" },
        { title: "伞" },
        { title: "男士内裤" },
        { title: "毛巾" },
        { title: "电动牙刷" }
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      axios
        .post(api.HOME_SEARCHiNIT_URL)
        .then(result => {
          this.placeholder = result.data.data.defaultKeyword.keyword;
        })
        .catch(err => {
          console.log(err);
        });
    });
  },
  methods: {
    cleanValAction() {
      this.searchVal = "";
    },
    backHome() {
        this.$router.push('/');
    }
  },
  watch: {
      searchVal(newValue, oldValue) {
          if (this.searchVal == '') {
              this.isShow = true;
              return;
          }
          let params = new URLSearchParams();
          params.append("keywordPrefix",this.searchVal) 
          axios
        .post(api.HOME_SEARCHKEYWORD, params)
        .then(result => {
            this.keywordData = result.data.data;
            this.isShow = false;
        })
        .catch(err => {
          console.log(err);
        });
      }
  },
};
</script>

<style>
.m-searchMoudle {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 99;
  top: 0;
  left: 0;
  background: #eee;
}
.g-bd {
  background: #fff;
}
.m-topBar .row {
  z-index: 1;
  width: 100%;
  box-sizing: border-box;
  height: 1.17333rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.4rem;
}
.m-topBar .row .cancel {
  margin-left: 0.4rem;
  font-size: 0.37333rem;
}
.m-topBar .row .m-searchIptWrap {
  flex: 1;
}
.m-searchIpt {
  padding-top: 0;
  padding-left: 0.26667rem;
  padding-bottom: 0;
  border: 0;
  background-color: #f4f4f4;
  height: 0.74667rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.m-searchIpt:before {
  content: " ";
  margin-right: 0.21333rem;
  display: inline-block;
  vertical-align: middle;
  background-image: url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 0.37333rem;
  height: 0.37333rem;
}
.m-searchIpt .ipt {
  flex: 1;
  font-size: 0.37333rem;
  border: none;
  color: rgba(0, 0, 0, 0.8);
  background-color: transparent;
  line-height: 0.53333rem;
  padding-left: 0.02667rem;
}
.m-searchIptWrap .u-icon {
  display: inline-block;
  width: 0.66667rem;
  height: 0.66667rem;
  background-size: 100%;
  background-repeat: no-repeat;
  vertical-align: middle;
  background-image: url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/clearIpt-0821f71561.png");
}
.m-searchSuggestions {
  padding: 0 0.4rem 0.4rem;
  overflow: hidden;
}
.m-searchSuggestions .hd {
  height: 1.2rem;
  font-size: 0.37333rem;
  color: #999;
  display: flex;
  align-items: center;
}
.m-searchSuggestions .list {
  margin-right: -0.4rem;
  margin-bottom: -0.42667rem;
  zoom: 1;
}
.m-searchSuggestions .list .item {
  float: left;
  padding: 0 0.2rem;
  margin-right: 0.42667rem;
  margin-bottom: 0.42667rem;
  line-height: 0.61333rem;
  border: 1px solid #999;
  border-radius: 4px;
  color: #333;
}
.m-searchSuggestions .list .item.highlight {
  border-color: #b4282d;
  color: #b4282d;
}
.m-searchAutocomplete {
    z-index: 1;
    position: relative;
        display: block;
    padding-left: .4rem;
}
.m-searchAutocomplete .item {
    height: 1.2rem;
    font-size: .37333rem;
    line-height: 1.2rem;
    border-bottom: 1px solid #ededee
}
</style>
