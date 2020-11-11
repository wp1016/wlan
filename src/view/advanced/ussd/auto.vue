<template>
  <Form :model="formData" :label-width="180">
    <Card class="card-content" title="USSD自动发送">
      <Row>
        <Col span="2">
          <FormItem :label-width="10">
            <Checkbox :true-value="1" :false-value="0" v-model="formData.useCycleSend">周期发送</Checkbox>
          </FormItem>
        </Col>
        <Col span="6">
          <FormItem label="最小分钟" :label-width="120">
            <Input type="number" :disabled="!formData.useCycleSend" v-model="formData.cycleSendMinMinutes"></Input>
          </FormItem>
        </Col>
        <Col span="6">
          <FormItem label="最大分钟" :label-width="120">
            <Input type="number" :disabled="!formData.useCycleSend" v-model="formData.cycleSendMaxMinutes"></Input>
          </FormItem>
        </Col>
        <Col span="8">
          <FormItem label="USSD" :label-width="120">
            <Input :disabled="!formData.useCycleSend" v-model="formData.cycleSendUssdCmd"></Input>
          </FormItem>
        </Col>
        <Col span="2"></Col>
      </Row>

      <Row>
        <Col span="2">
          <FormItem :label-width="10">
            <Checkbox :true-value="1" :false-value="0" v-model="formData.useCallDuration">呼叫时长</Checkbox>
          </FormItem>
        </Col>
        <Col span="6">
          <FormItem label="时长分钟" :label-width="120">
            <Input type="number" :disabled="!formData.useCallDuration" v-model="formData.callDurationMinute"></Input>
          </FormItem>
        </Col>
        <Col span="6">
          <FormItem label="计费周期（秒）" :label-width="120">
            <FormLabelTooltip slot="label" label="计费周期（秒）" content="比如中国移动通话1秒按照1分钟计费，59秒也是按照1分钟计费，此时最小计量单位即为60"/>
            <Input type="number" :disabled="!formData.useCallDuration" v-model="formData.callDurationBillingCycle"></Input>
          </FormItem>
        </Col>
        <Col span="8">
          <FormItem label="USSD" :label-width="120">
            <Input :disabled="!formData.useCallDuration" v-model="formData.callDurationUssdCmd"></Input>
          </FormItem>
        </Col>
        <Col span="2">
          <FormItem :label-width="20">
            <Checkbox :true-value="1" :false-value="0" v-model="formData.callDurationHangUp">强制挂机</Checkbox>
          </FormItem>
        </Col>
      </Row>

      <Row>
        <Col span="2">
          <FormItem :label-width="10">
            <Checkbox :true-value="1" :false-value="0" v-model="formData.useTimingSend1">定时发送1</Checkbox>
          </FormItem>
        </Col>
        <Col span="6">
          <FormItem label="开始时间" :label-width="120">
            <Input :disabled="!formData.useTimingSend1" v-model="formData.timingSend1StartTime"></Input>
          </FormItem>
        </Col>
        <Col span="6">
          <FormItem label="结束时间" :label-width="120">
            <Input :disabled="!formData.useTimingSend1" v-model="formData.timingSend1EndTime"></Input>
          </FormItem>
        </Col>
        <Col span="8">
          <FormItem label="USSD" :label-width="120">
            <Input :disabled="!formData.useTimingSend1" v-model="formData.timingSend1UssdCmd"></Input>
          </FormItem>
        </Col>
        <Col span="2">
          <FormItem :label-width="20">
            <Checkbox :true-value="1" :false-value="0" v-model="formData.timingSend1HangUp">强制挂机</Checkbox>
          </FormItem>
        </Col>
      </Row>

      <Row>
        <Col span="2">
          <FormItem :label-width="10">
            <Checkbox :true-value="1" :false-value="0" v-model="formData.useTimingSend2">定时发送2</Checkbox>
          </FormItem>
        </Col>
        <Col span="6">
          <FormItem label="开始时间" :label-width="120">
            <Input :disabled="!formData.useTimingSend2" v-model="formData.timingSend2StartTime"></Input>
          </FormItem>
        </Col>
        <Col span="6">
          <FormItem label="结束时间" :label-width="120">
            <Input :disabled="!formData.useTimingSend2" v-model="formData.timingSend2EndTime"></Input>
          </FormItem>
        </Col>
        <Col span="8">
          <FormItem label="USSD" :label-width="120">
            <Input :disabled="!formData.useTimingSend2" v-model="formData.timingSend2UssdCmd"></Input>
          </FormItem>
        </Col>
        <Col span="2">
          <FormItem :label-width="20">
            <Checkbox :true-value="1" :false-value="0" v-model="formData.timingSend2HangUp">强制挂机</Checkbox>
          </FormItem>
        </Col>
      </Row>

      <Row>
        <Col span="2">
          <FormItem :label-width="10">
            <Checkbox :true-value="1" :false-value="0" v-model="formData.useTimingSend3">定时发送3</Checkbox>
          </FormItem>
        </Col>
        <Col span="6">
          <FormItem label="开始时间" :label-width="120">
            <Input :disabled="!formData.useTimingSend3" v-model="formData.timingSend3StartTime"></Input>
          </FormItem>
        </Col>
        <Col span="6">
          <FormItem label="结束时间" :label-width="120">
            <Input :disabled="!formData.useTimingSend3" v-model="formData.timingSend3EndTime"></Input>
          </FormItem>
        </Col>
        <Col span="8">
          <FormItem label="USSD" :label-width="120">
            <Input :disabled="!formData.useTimingSend3" v-model="formData.timingSend3UssdCmd"></Input>
          </FormItem>
        </Col>
        <Col span="2">
          <FormItem :label-width="20">
            <Checkbox :true-value="1" :false-value="0" v-model="formData.timingSend3HangUp">强制挂机</Checkbox>
          </FormItem>
        </Col>
      </Row>

      <FormItem>
        <Button type="primary" @click="handleSubmit">确定</Button>
        <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
      </FormItem>
    </Card>
  </Form>
</template>

<script>
import mixins from '@/mixins'

import FormLabelTooltip from '@/components/formLabelToolTip'

export default {
  name: 'auto',
  mixins: [mixins],

  components: {
    FormLabelTooltip
  },
  data () {
    return {
      formData: {
        useCycleSend: 0,
        cycleSendMinMinutes: 0,
        cycleSendMaxMinutes: 0,
        cycleSendUssdCmd: '',

        useCallDuration: 0,
        callDurationMinute: 0,
        callDurationBillingCycle: 0,
        callDurationUssdCmd: '',
        callDurationHangUp: 0,

        useTimingSend1: 0,
        timingSend1StartTime: 0,
        timingSend1EndTime: 0,
        timingSend1UssdCmd: '',
        timingSend1HangUp: 0,

        useTimingSend2: 0,
        timingSend2StartTime: 0,
        timingSend2EndTime: 0,
        timingSend2UssdCmd: '',
        timingSend2HangUp: 0,

        useTimingSend3: 0,
        timingSend3StartTime: 0,
        timingSend3EndTime: 0,
        timingSend3UssdCmd: '',
        timingSend3HangUp: 0

      }
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../../assets/css/common';

</style>
