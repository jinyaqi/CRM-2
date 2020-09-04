$(function () {
    //登录功能
    $(".submit").click(async function (e) {   //用到了await，就要在await最近的函数前加上async
        let account = $(".userName").val().trim();
        let password = $(".userPass").val().trim();

        if (account === "" || password === "") {
            alert("账号和密码不能位空")
            return
        }
        password = md5(password);
        // console.log(account,password);

        //发起ajax的请求
        // axios.post("/user/login",{
        //     account,
        //     password
        // }).then(res=>{
        //     console.log(res);
        // }).catch(err=>{
        //     console.log(err);
        // })

        //使用async和await要想获取错误的结果，需要使用try catch。这样写也非常不方便，使用async和await时，不捕获错误的结果，只去获取正确的结果;
        // try {
        //     let res = await axios.post("/user/login", { account, password })
        // } catch (e) {
        //     console.log(e);
        // }
        let res = await axios.post("/user/login", { account, password })
        // console.log(res);
        if(parseInt(res.code)===0){
            alert("登录成功")
            window.location.href="index.html"
            return;
        }
        alert("用户和密码出错")
    })
})