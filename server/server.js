const express = require('express');

const server = express();

// 首页头部分类的数据
server.get('/api/home/nav/category', (req, res) => {
    res.json({
        code: 0,
        message: '请求成功',
        data: require('./data/home_cate.json')
    })
})

// 首页的轮播图
server.get('/api/home/banner', (req, res) => {
    res.json({
        code: 0,
        message: '请求成功',
        data: require('./data/home_banner.json')
    })
})

// 商品列表数据
server.get('/api/home/goodsList', (req, res) => {
    res.json({
        code: 0,
        message: '请求成功',
        data: require('./data/home_goods.json')
    })
})

// 品牌制造商直供数据
server.get('/api/home/tagList', (req, res) => {
    res.json({
        code: 0,
        message: '请求成功',
        data: require('./data/home_tagList.json')
    })
})

// 类目热销榜数据
server.get('/api/home/hot', (req, res) => {
    res.json({
        code: 0,
        message: '请求成功',
        data: require('./data/home_hot.json')
    })
})

// 首页菜单数据
server.get('/ajax/home/main2', (req, res) => {
    let query = req.query;
    if (query.id == undefined) {
        res.json({
            status: -1,
            message: '参数不正确'
        });
    } else {
        let response = {
            status: 0,
            message: '请求成功',
        }
        switch (query.id) {
            case '2':
                response.data = require("./data/home_main2.json");
                break;
            case '3':
                response.data = require("./data/home_main3.json");
                break;
            case '4':
                response.data = require("./data/home_main4.json");
                break;
            case '5':
                response.data = require("./data/home_main5.json");
                break;
            case '6':
                response.data = require("./data/home_main6.json");
                break;
            case '7':
                response.data = require("./data/home_main7.json");
                break;
            case '8':
                response.data = require("./data/home_main8.json");
                break;
            case '9':
                response.data = require("./data/home_main9.json");
                break;
        }
        res.json(response);
    }
})


server.listen(3000, (err) => {
    !err && console.log('启动成功');
})