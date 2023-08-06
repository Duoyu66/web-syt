<template>
  <div class="level">
    <h1>医院</h1>
    <div class="content">
      <div class="left">等级</div>
      <ul class="hospital" >
        <li :class="{active:activeFlag===''}">全部</li>
        <li v-for="item in levelArr" :key="item.id" :class="{active:activeFlag===item.value}" @click="changeLevel(item.value)">{{item.name}}</li>

      </ul>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'level'
})
import {reqHospitalLevelAndRegion} from "../../../api/home";
import {onMounted, ref} from "vue";
//定义一个数组存储医院等级数据
let levelArr = ref([])
onMounted(()=>{
  getLevel()
})
//获取医院等级的数组
const getLevel=async ()=>{
  let result = await reqHospitalLevelAndRegion('HosType')
  console.log("接口返回的数据是:::",result)
  if (result.code  ===200){
    levelArr.value = result.data
  }
  console.log()
}
//定义是否高亮的变量
let activeFlag =ref('')

const changeLevel=(levelValue)=>{
  console.log(levelValue)
  //高亮响应式数据存储leve数值
  activeFlag.value = levelValue;
}
</script>

<style scoped lang="scss">
.level {
  color: #7f7f7f;

  h1 {
    font-weight: 700;
    margin: 10px 0;
  }

  .content {
    display: flex;

    .left {
      margin-right: 10px;
    }

    .hospital {
      display: flex;
      li{
        margin-right: 10px;
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
