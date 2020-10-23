
<template>
  <div class="page-content">
    <h1 class="page-title">PIN设置</h1>
    <Form :model="formData" :label-width="180">
        <Card class="card-content" title="基本设置">
        <Row>
          <Col span="12">
            <FormItem label="立即挂机">
              <i-switch v-model="formData.hangUpNow" size="large">
                <span slot="open">启用</span>
                <span slot="close">禁用</span>
              </i-switch>
            </FormItem>
          </Col>
        </Row>
         <FormItem>
          <Button type="primary" @click="handleSubmit">确定</Button>
          <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
        </FormItem>
      </Card>

    </Form>
  </div>
</template>

<script>

export default {
  name: 'sim',
  data () {
    return {
      formData: {
        hangUpNow: false
      }
    }
  },
  methods: {
    handleSubmit () {},
    handleCancel () {}
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/common';

</style>
