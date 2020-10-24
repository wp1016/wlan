<template>
  <div class="page-content">
    <h1 class="page-title">SIM卡号码设置</h1>
    <Form :model="formData" :label-width="180">

    </Form>
  </div>
</template>

<script>
export default {
  name: 'at',
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
