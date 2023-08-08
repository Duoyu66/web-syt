<template>
  <div class="search">
    <el-autocomplete
        @select="goDetail"
        v-model="hosname"
        :fetch-suggestions="fetchData"
        placeholder="请输入医院名称"
        :trigger-on-focus="false"
    />
    <el-button type="primary" :icon="Search" size="default">搜索</el-button>
  </div>
</template>

<script setup lang="ts">
import {ref} from "@vue/runtime-core";

defineOptions({
  name: 'search'
})
let $router = useRouter()
import type {HospitalInfo,Content} from "@/api/home/types.ts";
//引入element-plus图标
import {Search} from "@element-plus/icons-vue"
//收集搜索的关键字
let hosname = ref('')
//顶部组件的回调
const fetchData=async (keyword,cd)=>{
  let result = await reqHospitalInfo(keyword)
  console.log("123",result)
  //整理数据,变成饿了么需要的数据 格式为  value:xxx
  let showData =  result.data.map(item=>{
    return {
      value:item.hosname,//展示医院的名字
      hoscode:item.hoscode//存储医院的编码
    }
  })

  cd(showData)
}
//引入请求方法
import {reqHospitalInfo} from "@/api/home";
import {useRouter} from "vue-router";
//点击搜索关键词跳转相关详情页
const goDetail=(item)=>{
  console.log("888",item)
  console.log("888",item.hoscode)
  $router.push({
    path:'/hospital/register'
  })

}
</script>

<style scoped lang="scss">
.search {
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  ::v-deep(.el-input__wrapper) {
    width: 600px;
    margin-right: 10px;
  }
}
</style>
