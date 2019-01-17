import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

// HTTP相关
Vue.http.options.emulateJSON = true
Vue.http.options.crossOrigin = true

function ajax(url, options) {
    // if (/post/i.test(options.method)) {
    //     let { data } = options;
    //     let body = null;
    //     if (typeof data === 'string') {
    //         body = data;
    //     } else {
    //         body = JSON.stringify(data);
    //     }
    //     options.body = body;
    //     delete options.data;
    // }
    // let headers = {};
    // headers['Content-Type'] = 'application/json';
    // options.headers = headers;

    // const result = new Promise((resolve, reject) => {
    //     Vue.http[options.method](url,options.data).then(res => {
    //         console.log(res)
    //         if (res.status === 200) {
    //             return res.json();
    //         } else {
    //             reject(res);
    //         }
    //     }).then(resp => {
    //         resolve(resp);
    //     },(res) => {

    //     })
    // })

    // 使用 aysnc await 
    const result = Vue.http[options.method](url,options.data).then(res => {
        return res.json();
    }).then(resp => {
        return resp;
    });
    // console.log(result.then(resp => {
    //     console.log(resp)
    // }))
    // console.log(resp);
    return result;
}

export default ajax;