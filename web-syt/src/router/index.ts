import {createRouter, createWebHistory} from "vue-router";



// const router  = createRouter({
//     history:createWebHistory(),
// })
// export default router

export default createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/home',
            name:'home',
            component:()=>import('@/pages/home/index.vue')
        },
        {
            path:'/hospital',
            name:'hospital',
            component:()=>import('@/pages/hospital/index.vue')
        },
        {
            path:'/',
            redirect:'/home'
        }
    ],
    // 滚动行为
    scrollBehavior(){
        return{
            left:0,
            top:0
        }
    }}
)