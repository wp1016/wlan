<template>
  <div class="page-content">
    <h1 class="page-title">线路设置</h1>
    <Card title="STUN">
      <Form :model="formData" :label-width="180">
        <Row>
          <Col span="24">
            <FormItem label="STUN支持">
              <i-switch :true-value="1" :false-value="0" v-model="formData.stun" size="large">
                <span slot="open">启用</span>
                <span slot="close">禁用</span>
              </i-switch>
              <span class="form-tips">*启用后，支持非对称类型的NAT的媒体穿透</span>
            </FormItem>
          </Col>
        </Row>

        <template v-if="formData.stun">
          <Row>
            <Col span="12">
              <FormItem label="STUN 服务器">
                <Input v-model="formData.stunServer"></Input>
              </FormItem>
            </Col>
            <Col span="12">
              <span class="form-tips">*如果你又自己的STUN服务器，在这里填写其IP地址</span>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="服务器端口">
                <Input v-model="formData.stunServerPort"></Input>
              </FormItem>
            </Col>
            <Col span="12">
              <span class="form-tips">*服务器缺省端口为3478</span>
            </Col>
          </Row>
        </template>

        <FormItem>
          <Button type="primary" @click="handleSubmit">确定</Button>
          <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>

<script>

export default {
  name: 'stun',
  data () {
    return {
      formData: {
        stun: 0,
        stunServer: '',
        stunServerPort: ''
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
