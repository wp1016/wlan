<template>
  <div class="page-content">
    <h1 class="page-title">角色管理</h1>
    <Form :model="formData" :label-width="180">
      <Card class="card-content" title="角色列表">

      </Card>
    </Form>
  </div>
</template>

<script>
export default {
  name: 'role',
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
