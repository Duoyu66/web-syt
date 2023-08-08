<template>
<div class="hospital">
<!--左侧导航区-->
  <div class="menu">
    <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
    >

      <el-menu-item  index="/hospital/register" @click="changeActive('/hospital/register')">
        <el-icon><icon-menu /></el-icon>
        <span>预约挂号</span>
      </el-menu-item>
      <el-menu-item index="/hospital/detail" @click="changeActive('/hospital/detail')">
        <el-icon><document /></el-icon>
        <span>医院详情</span>
      </el-menu-item>
      <el-menu-item index="/hospital/notice" @click="changeActive('/hospital/notice')">
        <el-icon><setting /></el-icon>
        <span>预约通知</span>
      </el-menu-item>
      <el-menu-item index="/hospital/close" @click="changeActive('/hospital/close')">
        <el-icon><setting /></el-icon>
        <span>停诊信息</span>
      </el-menu-item>
      <el-menu-item index="/hospital/search" @click="changeActive('/hospital/search')">
        <el-icon><setting /></el-icon>
        <span>查询/取消</span>
      </el-menu-item>
    </el-menu>
  </div>
<!--  右侧路由区-->
  <div class="content">
<router-view></router-view>
  </div>
</div>

</template>

<script setup lang="ts">
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import {useRouter,useRoute} from "vue-router";
import {onMounted} from "vue";
import useDetailStore from "@/store/modules/hopistalDetails.ts";
let detailStore = useDetailStore();
let $router = useRouter()
let $route = useRoute()
const handleOpen = (key , keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
const changeActive=(path)=>{
  $router.push({
    path:path
  })
}
onMounted(()=>{
  detailStore.getHospital($route.query.hoscode)
})
</script>

<style scoped>
.hospital{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .menu{
    width: 20%;
  }
  .content{
    width: 80%;
  }
}
</style>
