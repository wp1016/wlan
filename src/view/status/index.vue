<template>
  <div class="page-content">
    <h1 class="page-title">设备状态</h1>
    <Form :model="formData" :label-width="180">

    </Form>
  </div>
</template>

<script>
export default {
  name: 'index',
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
