
axios.defaults.baseURL = "http://127.0.0.1:8888";  // 配置请求的基本路径

axios.defaults.withCredentials =true;  //配置为true,后台请求的时候会带上cookie

//配置以表单的形式扔给服务器
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';

//还是以表单的形式扔给服务器 name=z3&age=4
axios.defaults.transformRequest = function (data) {
    if (!data) return data;
    let result = ``;
    for (let attr in data) {
        if (!data.hasOwnProperty(attr)) break;
        result += `&${attr}=${data[attr]}`;
    }
    return result.substring(1);
};

//可不写
//配置请求拦截器
axios.interceptors.request.use(config => {
    return config;
})
//配置响应拦截器
axios.interceptors.response.use(response => {
    return response.data;
}, reason => {
    //如果路径出错了，通过的时候，会返回404
    // console.log("--------");
    // console.log(reson);
    if (reason.response) {
        switch (String(reason.response.status)) {
            case "404":
                alert("当前请求的地址不存在！")
                break;
            default:
                break;
        }
    }
    return Promise.reject(reson);  //失败就返回一个失败的Promise
})