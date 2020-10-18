<template>
  <div class="page-content">
    <h1 class="page-title">线路设置</h1>
    <Card class="card-content" title="SIP账号">
      <Form v-model="formData" :label-width="180">
        <Row>
          <Col span="12">
            <FormItem label="多端口注册">
              <FormLabelTooltip slot="label" label="多端口注册" content="开启后，每个端口可分别注册到不同服务器，或者使用不同的本地端口，账号注册到同一服务器"/>
              <i-switch v-model="formData.mutipleRegist" size="large">
                <span slot="open">启用</span>
                <span slot="close">禁用</span>
              </i-switch>
            </FormItem>
          </Col>
          <Col span="12">
            <span class="form-tips">*启用后，每个SIP账号使用不同的协议端口来注册</span>
          </Col>
          <Col span="24">
            <FormItem label="只选择最优匹配路线">
              <FormLabelTooltip slot="label" label="只选择最优匹配路线" content="当配置了线路前缀时，服务器过来的通话只选最长直接前缀的端口出局，如无可用端口，则终止该通话"/>

              <i-switch v-model="formData.onlyBestWiring" size="large">
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
      </Form>
      <!-- <Table></Table> -->
    </Card>
  </div>
</template>

<script>
import FormLabelTooltip from '@/components/formLabelToolTip'

export default {
  name: 'wiring',
  components: {
    FormLabelTooltip
  },
  data () {
    return {
      formData: {
        mutipleRegist: false,
        onlyBestWiring: false
      },
      tableConfig: {}
    }
  },
   methods: {
    handleSubmit() {},
    handleCancel() {},
  },
}
</script>
<style lang="less" scoped>
@import '../../assets/css/common';
</style>
