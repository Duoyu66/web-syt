import { createApp } from 'vue'
const app = createApp(App);
import './style.css'
// import 'normalize.css'
import '@/style/reset.scss'
import App from './App.vue'
import router from './router/index.ts'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import HospitalTop from './components/hospital_top/index.vue'
import HospitalBottom from './components/hospital_bottom/index.vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import {createPinia} from "pinia";
import {reqHospitalDeparment} from "@/api/hospital";
const pinia =createPinia();

app.component('HospitalTop',HospitalTop)
app.component('HospitalBottom',HospitalBottom)


import {reqHospitalDeparment} from "@/api/hospital/index.ts"
reqHospitalDeparment('1000_15')
app.use(router)
//国际化文件
app.use(pinia)
app.use(ElementPlus,{
    locale:zhCn
})
app.mount('#app')
