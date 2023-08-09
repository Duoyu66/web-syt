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
            component:()=>import('@/pages/hospital/index.vue'),
            children:[
                {
                    path:'register',
                    name:'register',
                    component:()=>import('@/pages/hospital/register/index.vue')
                },
                {
                    path:'detail',
                    name:'detail',
                    component:()=>import('@/pages/hospital/detail/index.vue')
                },
                {
                    path:'notice',
                    name:'notice',
                    component:()=>import('@/pages/hospital/notice/index.vue')
                },
                {
                    path:'close',
                    name:'close',
                    component:()=>import('@/pages/hospital/close/index.vue')
                },
                {
                    path:'search',
                    name:'search',
                    component:()=>import('@/pages/hospital/search/index.vue')
                },
                {
                    path: 'register_step1',
                    component: () => import('@/pages/hospital/register/register_step1.vue'),
                    meta:{
                        title:'预约第一步'
                    }
                },
                {
                    path: 'register_step2',
                    component: () => import('@/pages/hospital/register/register_step2.vue'),
                    meta:{
                        title:'预约第二步'
                    }
                }

            ]
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
