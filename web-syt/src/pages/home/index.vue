<template>
  <div>
    <!--首页轮播图-->
    <Carousel/>
    <!--    搜索表单-->
    <Search/>
    <!--    底部展示医院的结构-->
    <el-row gutter="20">
      <el-col :span="20">
        <!--        等级子组件-->
       <Level @getLevel="getLevel"/>
        <!--        地区-->
        <Region @getRegion="getRegion"/>
        <!--        医院卡片信息-->
        <div class="hospital" v-if="hasHospitalArr.length>0">
          <Card
              class="item"
              v-for="(item,index) in hasHospitalArr" :key="index" :hospitalInfo="item"></Card>
        </div>
        <el-empty v-else description="暂无数据"></el-empty>
        <!--        分页器-->
        <div class="demo-pagination-block">
          <el-pagination
              v-model:current-page="pageNo"
              v-model:page-size="pageSize"
              :page-sizes="[10, 20, 30, 40]"
              :background="true"
              @current-change="currentChange"
              layout="prev, pager, next, jumper,->,sizes,total"
              :total="total"
              @size-change="sizeChange"
          />
        </div>
      </el-col>
      <el-col :span="4"><tip/></el-col>

    </el-row>
  </div>
</template>

<script setup>
import Carousel from "./carousel/index.vue";
import Search from "./search/index.vue"
import Level from "./level/index.vue"
import Region from "./region/index.vue"
import Card from "./card/index.vue"
import Tip from "./tip/index.vue"
import {onMounted, reactive, ref, watch} from "vue";
import {reqHospital} from "../../api/home";
defineOptions({
  name: 'home'
})
let pageNo = ref(1)
//分页器一页展示多少条数据
let pageSize = ref(10)
//医院元素的总个数
let total = ref(0)

//存储已有的医院的数组
let hasHospitalArr = ref([])
//存储医院等级的变量
let hostype = ref('')
//存储医院地区代码的变量
let districtCode = ref('')
//组件挂载完毕先发请求
onMounted(() => {
  getHsopitalInfo();
})
//获取已有的医院的数据
const getHsopitalInfo =async () => {
  //获取已有的医院的数据:默认获取第一页、一页十个医院的数据
  let result = await reqHospital(
      pageNo.value,
      pageSize.value,
      hostype.value,
      districtCode.value
  )
  // reqHospital(pageNo.value, pageSize.value).then(res => {
  //   result = res;
  // })
  console.log("result的code是:", result.code)
  if (result.code === 200) {
    //存储已有的医院的数组
    hasHospitalArr.value = result.data.content;
    total.value =result.data.totalElements
    console.log("数组的值是：：：", hasHospitalArr.value)
  }
}
//分页器页码发生变化时候回调
const currentChange =()=>{
  console.log("123")
  getHsopitalInfo();
}
//分页器下拉菜单发生变化的时候会触发
const sizeChange = () => {
  //当前页码归第一页
  pageNo.value = 1;
  //再次发请求获取医院的数据
  getHsopitalInfo();
};
//获取子组件的等级代码(组件自定义事件)
const getLevel=(level)=>{
  hostype.value = level
  getHsopitalInfo()
  console.log("父亲获得的信息是:",level)
}
//获取子组件地区代码
const getRegion=(regionValue)=>{
  districtCode.value = regionValue
  getHsopitalInfo()
}

</script>

<style scoped lang="scss">
.hospital {
  display: flex;
  justify-content: space-between;

  .item {
    width: 48%;
  }

  flex-wrap: wrap;
}

</style>
