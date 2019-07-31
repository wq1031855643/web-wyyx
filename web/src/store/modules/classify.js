import {get} from '../../request/http'
import api from '../../request/api'
export default {
    namespaced: true,
    state: {
        navData: [],
    },
    mutations: {
        setHomeNavData(state, params){
            state.navData = params;
        },
    },
    actions: {
        // 请求首页导航数据
        async requestHomeNavData(context){
            let data = await get(api.HOME_CATEGORY_URL);
            console.log(data)
            // let newData = data.data.map(({id, name})=>({id, name}));
            // context.commit('setHomeNavData', newData);
        },
    }
}