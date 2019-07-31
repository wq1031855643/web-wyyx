import {get} from '../../request/http'
import api from '../../request/api'
export default {
    namespaced: true,
    state: {
        navData: [],
        bannerData: [],
        goodsData: [],
        brandData: [],
        hotSellData: [],
        popData: [],
        saleData: [],
        newItemData: [],
        shopGuideData: [],
        rmData: [],
        mainData: []
    },
    mutations: {
        setHomeNavData(state, params){
            state.navData = params;
        },
        setHomeBannerData(state, params){
            state.bannerData = params;
        },
        setHomeGoodsData(state, params){
            state.goodsData = params;
        },
        setHomeBrandData(state, params){
            state.brandData = params;
        },
        setHomeHotSellData(state, params){
            state.hotSellData = params;
        },
        setHomePopData(state, params){
            state.popData = params;
        },
        setHomeSaleData(state, params){
            state.saleData = params;
        },
        setHomeNewItemData(state, params){
            state.newItemData = params;
        },
        setHomeShopGuideData(state, params){
            state.shopGuideData = params;
        },
        setHomeRmData(state, params){
            state.rmData = params;
        },
        setHomeMainData(state, params){
            state.mainData = params;
        }
    },
    actions: {
        // 请求首页导航数据
        async requestHomeNavData(context){
            let data = await get(api.HOME_CATE_URL);
            let newData = data.data.map(({id, name})=>({id, name}));
            newData.splice(0, 0, {id: -1, name: '推荐'});
            context.commit('setHomeNavData', newData);
        },
        // 请求首页轮播图数据
        async requestHomeBannerData(context){
            let data = await get(api.HOME_BANNER_URL);
            let newData = data.data.map(({id, picUrl})=>({id, picUrl}));
            context.commit('setHomeBannerData', newData);
        },
        // 请求分类商品数据
        async requestHomeGoodsData(context){
            let data = await get(api.HOME_GOODS_URL);
            context.commit('setHomeGoodsData', data.data.kingKongList);
        },
        // 请求品牌制造商数据
        async requestHomeBrandData(context){
            let data = await get(api.HOME_BRAND_URL);
            let newData = data.data.map(({id, picUrl, name, floorPrice})=>({id, picUrl, name, floorPrice}));
            context.commit('setHomeBrandData', newData);
        },
        // 请求类目热销榜数据
        async requestHomeHotSellData(context){
            let data = await get(api.HOME_HOT_URL);
            let newData = data.data.categoryList.map(({picUrl, categoryName, targetUrl})=>({picUrl, categoryName, targetUrl}));
            context.commit('setHomeHotSellData', newData);
        },
        // 请求人气推荐数据
        async requestHomePopData(context){
            let data = await get(api.HOME_POP_URL);
            let newData = data.data.map(({primaryPicUrl, promTag, name, simpleDesc, retailPrice})=>({primaryPicUrl, promTag, name, simpleDesc, retailPrice}));
            context.commit('setHomePopData', newData);
        },
         // 请求限时购数据
         async requestHomeSaleData(context){
            let data = await get(api.HOME_SALE_URL);
            let newData = data.data.itemList.map(({picUrl, activityPrice, originPrice})=>({picUrl, activityPrice, originPrice}));
            context.commit('setHomeSaleData', newData);
        },
        // 新品首发数据
        async requestHomeNewItemData(context){
            let data = await get(api.HOME_NewItem_URL);
            let newData = data.data.map(({name, primaryPicUrl, retailPrice, promTag})=>({name, primaryPicUrl, retailPrice, promTag}));
            context.commit('setHomeNewItemData', newData);
        },
         // 购物指南数据
         async requestHomeShopGuideData(context){
            let data = await get(api.HOME_SHOPGUIDE_URL);
            let newData1 = [];
            data.data.forEach(element => {
                newData1.push(element.styleItem);
            });
            let newData2 = newData1.map(({title, desc, picUrlList})=>({title, desc, picUrlList}));
            context.commit('setHomeShopGuideData', newData2);
        },
        // 推荐商品数据
        async requestHomeRmData(context){
            let data = await get(api.HOME_RM_URL);
            let newData1 = data.data.map(({titlePicUrl, itemList}) => ({titlePicUrl, itemList}));
            let newData2 = [];
            
            for (let i = 0; i < newData1.length; i++) {
                let item = newData1[i].itemList;
                newData2.push(item.map(({primaryPicUrl, name, counterPrice, retailPrice, promTag}) => ({primaryPicUrl, name, counterPrice, retailPrice, promTag})));
                delete newData1[i].itemList
            }
            
            newData1.forEach((element, index) => {
                element.itemList = newData2[index];
            })
            context.commit('setHomeRmData', newData1);
        },
        // 请求首页菜单主数据
        async requestHomeMainData(context, params){
            let data = await get(api.HOME_MAIN2_URL,{params});
            let newData1 = data.data;
            let newData2 = [];
            for (let i = 1; i < newData1.length; i++) {
                let item = newData1[i].itemList;
                newData2.push(item.map(({simpleDesc, listPicUrl, name, retailPrice, counterPrice, promTag})=>({simpleDesc, listPicUrl, name, retailPrice, counterPrice, promTag})));
                delete newData1[i].itemList;
            }
            
            newData1.forEach((element, index) => {
                element.itemList = newData2[index];
            })
            context.commit('setHomeMainData', newData1);
        },
    }
}