<template>
    <Form :model="formData" :label-width="180">
      <Card title="自动发送" class="card-content">
        <Row>
            <Col span="12">
              <FormItem label="内容">
                <Input type="textarea" placeholder="【提示】最大2400个英文字母或800个本地字符" v-model="formData.autoSendSmsContent"></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="收件人">
                <Input type="textarea" placeholder="【提示】最大长度255（包括分号）！；多个联系人用分号隔开" v-model="formData.addresses"></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="4">
              <Checkbox v-model="formData.sendToLocalPhoneSim" :true-value="1" :false-value="0">
                发送至本机SIM卡
                <Tooltip transfer placement="top" max-width="350" content="启用该功能，首先得设置各端口SIM卡号码，当达到触发条件时，本机SIM之间将互发短信，此功能常用于SIM卡防封杀">
                  <Icon type="ios-information-circle-outline" size="12" color="#2d8cf0"/>
                </Tooltip>
              </Checkbox>
            </Col>
            <Col span="10">
            </Col>
            <Col span="10"></Col>
          </Row>

          <Row>
            <Col span="4">
              <Checkbox v-model="formData.timesendUse" :true-value="1" :false-value="0">
                定时发送
              </Checkbox>
            </Col>
            <Col span="10">
              <FormItem label="最小分钟">
                <Input v-model="formData.timesendMinMinute" :disabled="formData.timesendUse === 0" type="number"></Input>
              </FormItem>
            </Col>
            <Col span="10">
              <FormItem label="最大分钟">
                <Input v-model="formData.timesendMinMinute" :disabled="formData.timesendUse === 0" type="number"></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="4">
              <Checkbox v-model="formData.continuCallFailUse" :true-value="1" :false-value="0">
                连续呼叫失败发送
              </Checkbox>
            </Col>
            <Col span="10">
              <FormItem label="失败次数">
                <Input v-model="formData.continuCallFailNum" :disabled="formData.continuCallFailUse === 0" type="number"></Input>
              </FormItem>
            </Col>
            <Col span="10"></Col>
          </Row>

          <Row>
            <Col span="4">
              <Checkbox v-model="formData.continuCallNumUse" :true-value="1" :false-value="0">
                按连续呼叫次数
              </Checkbox>
            </Col>
            <Col span="10">
              <FormItem label="呼叫次数">
                <Input v-model="formData.continuCallNumber" :disabled="formData.continuCallNumUse === 0" type="number"></Input>
              </FormItem>
            </Col>
            <Col span="10"></Col>
          </Row>

          <Row>
            <Col span="4">
              <Checkbox v-model="formData.continuCallDuratUse" :true-value="1" :false-value="0">
                按呼叫时长发送
              </Checkbox>
            </Col>
            <Col span="10">
              <FormItem label="呼叫时长">
                <Input v-model="formData.continuCallDuration" :disabled="formData.continuCallDuratUse === 0" type="number">
                  <span slot="append">分钟</span>
                </Input>
              </FormItem>
            </Col>
            <Col span="10"></Col>
          </Row>

          <FormItem style="margin-top: 15px;">
            <Button type="primary" @click="handleSubmit">确定</Button>
            <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
          </FormItem>
      </Card>
    </Form>
</template>

<script>

export default {
  name: 'auto',
  data () {
    return {
      formData: {
        autoSendSmsContent: '',
        addresses: '',
        sendToLocalPhoneSim: 0,
        timesendUse: 0,
        timesendMinMinute: 0,
        timesendMaxMinute: 0,
        continuCallFailUse: 0,
        continuCallFailNum: 0,
        continuCallNumUse: 0,
        continuCallNumber: 0,
        continuCallDuratUse: 0,
        continuCallDuration: 0
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
