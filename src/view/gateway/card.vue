<template>
  <div class="page-content">
    <h1 class="page-title">切卡设置</h1>
    <Form :model="formData" :label-width="180">
      <Card class="card-content" title="基本设置">
        <Row>
          <Col span="12">
            <FormItem label="短信告警">
              <FormatLabelTooltip slot="label" label="短信告警" content="如果启用短信告警，当SIM卡被锁定后，将发送短信至告警号码提示用户该卡已被锁定"/>
              <i-switch v-model="formData.messageWarning">
                <span slot="open">启用</span>
                <span slot="close">禁用</span>
              </i-switch>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="短信告警号码">
              <Input v-model="formData.messageWarningNum"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="重启保存当前卡">
              <FormatLabelTooltip slot="label" label="重启保存当前卡" content="重启时是否保存各端口当前卡，以便重启后继续使用"/>
              <i-switch v-model="formData.restartAndSaveCurrentCard">
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
      <Card class="card-content" title="锁卡条件">

      </Card>
    </Form>
  </div>
</template>

<script>
import FormatLabelTooltip from '@/components/formLabelToolTip'

export default {
  name: 'card',
  components: {
    FormatLabelTooltip
  },
  data () {
    return {
      formData: {
        messageWarning: false,
        messageWarningNum: '',
        restartAndSaveCurrentCard: false
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
