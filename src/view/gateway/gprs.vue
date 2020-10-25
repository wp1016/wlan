<template>
  <div class="page-content">
    <h1 class="page-title">流量上网设置</h1>
    <Form :model="formData" :label-width="180">

    </Form>
  </div>
</template>

<script>
export default {
  name: 'gprs',
  data () {
    return {
      formData: {
        flowTimSharingStrategy:[{
          start: 1,
          end: 24,
          consumeFlow: 0,
        }]
      },
      atableColumns: [
        {

        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/common';

</style>
