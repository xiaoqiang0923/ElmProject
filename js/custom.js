//主页组件
let homepagecpn=Vue.extend({
    template:'#homepagetemp'
});
let homepage=Vue.component('homepage',homepagecpn);

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

//顶部搜索组件
let searchcpn=Vue.extend({
    template:'#searchtemp',
    data:function (){
        return {
            topDistance : 0
        };
    },
    mounted:function(){
        window.addEventListener('scroll',this.fixTopDistance);
        window.onload = function(){
            let search = document.getElementsByClassName('searchtemp');
            console.log(111)

            if(this.topDistance>80){
                search.style.position = 'fixed';
                search.style.left = '0';
                search.style.top = '0';
            }
            // else{
            //     search.style.position = 'static';
            // }
        }
    },
    methods: {
        fixTopDistance: function () {
            this.topDistance = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;},
        }
});
let searchinst=Vue.component('searchinst',searchcpn);

//分类列表组件
let classifycpn=Vue.extend({
    template:'#classifytemp',
    data:function(){
        return{
            classifylist:[],
        }
    },
    mounted:function(){
        this.getclassify();
    },
    methods:{
        getclassify:function(){
            this.$http.get("json/classifylist.json").then(
                function (res){
                    this.classifylist=res.body.dataZone.orderlists;
                }
            )
        }
    }
});
let classifyinst=Vue.component('classifyinst',classifycpn);

//广告部分组件
let bannercpn=Vue.extend({
    template:'#bannertemp'
});
let banner=Vue.component('banner',bannercpn);

//会员部分组件
let supermembercpn=Vue.extend({
    template:'#supermembertemp'
});
let supermember=Vue.component('supermember',supermembercpn);

//推荐商家部分组件
let recommendcpn=Vue.extend({
    template:'#recommendtemp'
});
let recommendinst=Vue.component('recommendinst',recommendcpn);

//推荐商家列表组件
let recommendshopcpn=Vue.extend({
    template:'#recommendshoptemp'
});
let recommendshop=Vue.component('recommendshop',recommendshopcpn);


//顶部信息组件
let topinfocpn=Vue.extend({
    template:'#topinfotemp'
});
let topinfo=Vue.component('topinfo',topinfocpn);

//创建商家列表组建
let myshopslist=Vue.extend({
    template:'#shopsListTemp',
});
let shopslistcpn=Vue.component('shopslistcpn',myshopslist);

//商家信息组建
let shopinfocpn=Vue.extend({
    template:'#shopinfoTemp',
    data:
        function(){
            return{
                goodlist: []
            }
        },
    mounted:function(){
        this.getgoodslists();
    },
    methods:{
        getgoodslists:function (){
            this.$http.get("json/shops.json").then(
                function (res){
                    this.goodlist=res.body.dataZone.shopslists[0].goodslist;
                }
            )
        }
    }
});
let shopinfo=Vue.component('shopinfo',shopinfocpn);

//底部结算组建
let settlementcpn=Vue.extend({
    template:'#settlementtemp',
});
let settlement=Vue.component('settlement',settlementcpn);

//配置路由
let routers = [
    {path:'/index',component:homepagecpn},
    {path:'/',component:homepagecpn},
    {path:'*',component:homepagecpn},
    {path:'/shoplist',component:myshopslist},
    {path: '/wanjiajiaozi',component:shopinfocpn}
];
//生成路由实例
let myrouter = new VueRouter({
    routes:routers
});
//价格过滤器
Vue.filter('moneyFmt',function (value){
    if(parseFloat(value)){
        return "￥"+parseFloat(value)
    }
});
//路程过滤器
Vue.filter('distanceFmt',function (value){
    if(parseFloat(value)){
        return parseFloat(value)+"km"
    }
});
//时间过滤器
Vue.filter('timeFmt',function (value){
    if(parseInt(value)){
        return parseInt(value)+"分钟"
    }
});
//vue组件
const vm=new Vue({
    el:"#app",
    data:{
        shopslists: [],
    },
    mounted:function (){
        this.$http.get("json/shops.json").then(
            function (res){
                this.shopslists=res.body.dataZone.shopslists;
            }
        )
    },
    router:myrouter
});