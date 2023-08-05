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
        <Level/>
        <!--        地区-->
        <Region/>
        <!--        医院卡片信息-->
        <div class="hospital">
          <Card
              class="item"
              v-for="item in 10" :key="10"></Card>
        </div>
<!--        分页器-->
        <div class="demo-pagination-block">
          <div class="demonstration">All combined</div>
          <el-pagination
              v-model:current-page="pageNo"
              v-model:page-size="pageSize"
              :page-sizes="[10, 20, 30, 40]"
              :small="small"
              :disabled="disabled"
              :background="background"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
          />
        </div>
      </el-col>
      <el-col :span="4">456</el-col>

    </el-row>
  </div>
</template>

<script setup>
import Carousel from "./carousel/index.vue";
import Search from "./search/index.vue"
import Level from "./level/index.vue"
import Region from "./region/index.vue"
import Card from "./card/index.vue"
import {ref} from "vue";

let pageNo = ref(1)
//分页器一页展示多少条数据
let pageSize =ref(10)
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