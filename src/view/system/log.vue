<template>
  <div class="page-content">
    <h1 class="page-title">日志管理</h1>
    <Form :model="formData" :label-width="180">

    </Form>
  </div>
</template>

<script>
export default {
  name: 'log',
  data () {
    return {
      formData: {

      }
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/common';

</style>
