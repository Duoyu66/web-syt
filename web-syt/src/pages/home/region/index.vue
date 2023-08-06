<template>
  <div class="region">
    <div class="content">
      <div class="left">地区</div>
      <ul class="right">
        <li :class="{active:activeFlag.value==''}">全部</li>
        <li v-for="(item,index) in regionArr" :key="item.id" :class="{active:activeFlag===item.value}" @click="changeRegion(item.value)">{{item.name}}</li>

      </ul>

    </div>

  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {reqHospitalLevelAndRegion} from "@/api/home/index.ts";

defineOptions({
  name: 'region'
})
//定义是否高亮的变量
let activeFlag = ref('')
//存储地区的数组
let regionArr = ref([])
onMounted(()=>{
getRegionArr()
})
const getRegionArr= async ()=>{
  let result = await reqHospitalLevelAndRegion("beijin")
  if(result.code ===200){
    regionArr.value =result.data
  }
}
const changeRegion=(regionValue)=>{
  console.log(regionValue)
  activeFlag.value = regionValue
  console.log("此时的:",regionValue.value,regionValue,regionValue.value===regionValue)
}
</script>

<style scoped lang="scss">
.region {
  color: #7f7f7f;
  margin-top: 10px;

  .content {
    display: flex;

    .left {
      margin-right: 10px;
      //width: 50px;
    }

    ul {
      display: flex;
      flex-wrap: wrap;

      li {
        margin-right: 5px;
        margin-bottom: 10px;
        &.active{
          color: #55a6fe;
        }
      }
      li:hover{
        color: #55a6fe;
        cursor:pointer;
      }
    }
  }
}
</style>
