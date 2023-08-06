<template>

  <div class="container">
    <hosptialTop></hosptialTop>
    <div class="content">
      <router-view></router-view>
    </div>
    <hospitalBottom></hospitalBottom>
  </div>







</template>
<script setup lang="ts">
defineOptions({   //-----------------------
  name: 'app'
})
import hosptialTop from '@/components/hospital_top/index.vue'
import hospitalBottom from '@/components/hospital_bottom/index.vue'
import {onMounted} from "vue";
import request from "@/utils/request";
onMounted(()=>{
  request.get('/api/hosp/hospital/1/2').then((res)=>{
    console.log("返回的数据是",res)
  })
})
</script>

<style scoped lang="scss">
.clear{
  clear:both;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
.content {
  margin-top: 70px;
  width: 1200px;
  min-height: 700px;
}
}
</style>