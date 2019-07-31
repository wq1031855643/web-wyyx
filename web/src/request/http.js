import axios from 'axios';

export const get = async (url, parms = {}) => {
    try {
        let response = await axios.get(url, parms, {
            baseURL: 'http://localhost:8080'
        });
        if (response.status == 200 && response.data.status == 0) {
            return response.data;
        }else {
            throw new Error();
        }
    } catch (error) {
        console.log(error);
        console.log('请求失败');
    }
}

export const post = async (url, parms = {}) => {
    try {
        let response = await axios.post(url, parms, {
            baseURL: 'http://localhost:8080'
        });
        if (response.status == 200 && response.data.code == 0) {
            return response.data;
        }else {
            throw new Error();
        }
    } catch (error) {
        console.log('请求失败');
    }
}