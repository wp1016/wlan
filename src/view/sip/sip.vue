
<template>
  <div class="page-content">
    <Card class="card-content">
      <h2 slot="title">基本设置</h2>
      <div class="form-content">
        <h3>运行参数</h3>
        <Form :model="basicForm" :label-width="180">
          <FormItem label="协议模式">
            <Select v-model="basicForm.mode">
              <Option :value="1">注册</Option>
              <Option :value="2">点对点</Option>
            </Select>
          </FormItem>
          <FormItem label="SIP服务器">
            <Input v-model="basicForm.sip" readonly placeholder="SIP服务器"></Input>
          </FormItem>
          <FormItem label="代理服务器">
            <Input v-model="basicForm.agency" readonly placeholder="代理服务器"></Input>
          </FormItem>
          <FormItem label="备用代理服务器">
            <Input v-model="basicForm.standbyAgency" readonly placeholder="备用代理服务器"></Input>
          </FormItem>
          <FormItem label="注册周期">

          </FormItem>
        </Form>
      </div>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'sip',
  data () {
    return {
      basicForm: {
        mode: 1,
        sip: '',
        agency: '',
        standbyAgency: ''
      }
    }
  }
}
</script>
<style lang="less" scoped>
.card-content{
  margin-top: 10px;
}
.form-content {
  max-width: 800px;
}
</style>
