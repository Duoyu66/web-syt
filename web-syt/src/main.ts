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


app.component('HospitalTop',HospitalTop)
app.component('HospitalBottom',HospitalBottom)




app.use(router)
//国际化文件

app.use(ElementPlus,{
    locale:zhCn
})
app.mount('#app')
