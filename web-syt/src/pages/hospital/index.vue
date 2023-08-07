<template>
<div class="hospital">
<!--左侧导航区-->
  <div class="menu">
    <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
    >

      <el-menu-item index="1">
        <el-icon><icon-menu /></el-icon>
        <span>预约挂号</span>
      </el-menu-item>
      <el-menu-item index="2" >
        <el-icon><document /></el-icon>
        <span>医院详情</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><setting /></el-icon>
        <span>预约通知</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <span>停诊信息</span>
      </el-menu-item>
      <el-menu-item index="5">
        <el-icon><setting /></el-icon>
        <span>查询/取消</span>
      </el-menu-item>
    </el-menu>
  </div>
<!--  右侧路由区-->
  <div class="content">
456
  </div>
</div>

</template>

<script>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key , keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
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
