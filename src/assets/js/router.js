// 引入包
import VueRouter from 'vue-router'

// import 自己命名 from 路径/如果是文件包，直接书写文件名字
import index from '../../components/index.vue'
import my from '../../components/my.vue'
import buy from '../../components/buy.vue'
import ranking from '../../components/ranking.vue'
import login from '../../components/login.vue'
import register from '../../components/register.vue'
import help from '../../components/help.vue'
import details from '../../components/details.vue'

export default new VueRouter({
    routes:[
        {
            path:'/index',
            component:index,
        },
        {
            path:'/details',
            component:details
        },
        {
            path:'/login',
            component:login
        },
        {
            path:'/register',
            component:register
        },
        {
            path:'/buy',
            component:buy
        },
        {
            path:'/my',
            component:my
        },
        {
            path:'/ranking',
            component:ranking
        },
        {
            path:'/help',
            component:help
        },
        {
            path:'/*',
            redirect:'/index'
        },
    ]
})