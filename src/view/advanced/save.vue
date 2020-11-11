<template>
  <div class="page-content">
    <h1 class="page-title">保存重启</h1>
    <Form :model="formData" :label-width="180">
      <Card title="操作" class="card-content">
        <FormItem label='请选择'>
          <Button type="primary" @click="save">保存</Button>
          <Button type="error" style="margin-left: 10px;" @click="restart">重启</Button>
        </FormItem>
      </Card>
    </Form>
  </div>
</template>

<script>
export default {
  name: 'save',
  data () {
    return {
      formData: {
        saveRestart: -1
      }
    }
  },
  methods: {
    save () {
      this.formData.saveRestart = 0
    },
    restart () {
      this.formData.saveRestart = 1
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/common';

</style>
