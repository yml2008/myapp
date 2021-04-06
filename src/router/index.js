import Vue from 'vue' 
import VueRouter from 'vue-router';
import Goods from '../views/Goods.vue'
import Xiang from '../views/Xiang.vue'
import Home from '../views/Home.vue'
import Mian from '../views/Mian.vue'
import SheZhi from '../views/SheZhi.vue'
import Login from '../views/Login.vue'
import NotFound from '../views/NotFound.vue'
import Reg from '../views/Goods.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{
        path: '/home',
        component: Home
    }, {
        name: 'goods',
        path: '/goods/:id',
        component: Goods
    }, {
        path: '/notfound',
        component: NotFound
    },{
        path: '/mian',
        component: Mian
    },{
        path: '/shezhi',
        component: SheZhi
    },{
        path: '/xiang',
        component: Xiang
    },{
        path: '/reg',
        component: Reg
    },{
        path: '/login',
        component: Login
    }]
    
})

export default router