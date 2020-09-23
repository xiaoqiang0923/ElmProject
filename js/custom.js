

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
    template:'#searchtemp'
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

//vue组件
const vm=new Vue({
    el:"#app",
    data:{

    }
});