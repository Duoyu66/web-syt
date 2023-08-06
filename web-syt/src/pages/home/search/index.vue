<template>
  <div class="search">
    <el-autocomplete

        :fetch-suggestions="querySearchAsync"
        placeholder="请输入医院名称"

    />
    <el-button type="primary" :icon="Search" size="default">搜索</el-button>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'search'
})
//引入element-plus图标
import {Search} from "@element-plus/icons-vue"

</script>

<style scoped lang="scss">
.search {
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  ::v-deep(.el-input__wrapper){
    width: 600px;
    margin-right: 10px;
  }

}
</style>