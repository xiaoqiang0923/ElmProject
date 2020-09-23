

//导航组件
let mainnavcpn=Vue.extend({
    template:'#mainnavtemp'
});
let mainnav=Vue.component('mainnav',mainnavcpn);

//顶部蓝色背景组件
let bluebackcpn=Vue.extend({
    template:'#bluebacktemp'
});
let blueback=Vue.component('blueback',bluebackcpn);

//创建商家列表组建
let mygoodslist=Vue.extend({
    template:'#goodsListTemp'

});
//注册商家列表组建
let goodslistcpn=Vue.component('goodslistcpn',mygoodslist);

//vue组件
const vm=new Vue({
    el:"#app",
    data:{

    }
});