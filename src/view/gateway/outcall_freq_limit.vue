<template>
  <div class="page-content">
    <h1 class="page-title">呼叫频率限制</h1>
    <Form :model="formData" :label-width="180">
      <Card title="基本设置" class="card-content">
        <!-- <Table></Table> -->
      </Card>
    </Form>
  </div>
</template>

<script>
export default {
  name: 'outcall_freq_limit',
  data () {
    return {
      formData: {
        outcallFreqData: []
      }
    }
  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/common';

</style>
