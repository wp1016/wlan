<template>
  <div class="page-content">
    <h1 class="page-title">电话簿</h1>
    <Form :model="formData" :label-width="180">
      <Card title="电话簿信息" class="card-content">
        <p slot="title">
          电话簿信息
          <Tooltip transfer placement="top" max-width="350">
            <Icon type="ios-information-circle-outline" size="12" color="#2d8cf0"/>
            <p slot="content">电话簿是为方便点对点</p>
          </Tooltip>
        </p>
      </Card>
    </Form>
  </div>
</template>

<script>
export default {
  name: 'telephone_directory',
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
