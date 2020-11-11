<template>
  <Form :model="formData" :label-width="180">
    <Card class="card-content" title="音频属性">
      <Divider>音量</Divider>
      <Row>
        <Col span="12">
          <FormItem label="电话口输入音量">
            <FormLabelTooltip slot="label" label="电话口输入音量" content="IP侧的音量，即主叫听到的音量，可调节，范围为10-40" />
            <Slider v-model="formData.telepInput" :min="volumnMin" :max="volumnMax" show-input/>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="电话口输出音量">
            <FormLabelTooltip slot="label" label="电话口输入音量" content="GSM侧的音量，即被叫听到的音量，可调节，范围为10-40" />
            <Slider v-model="formData.telepOutput" :min="volumnMin" :max="volumnMax" show-input/>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="DTMF">
            <Slider v-model="formData.dtmfVolume" :min="volumnMin" :max="volumnMax" show-input/>
          </FormItem>
        </Col>
      </Row>
      <Divider>拨号音</Divider>
      <Row>
        <Col span="12">
          <FormItem label="最高频率">
            <Input v-model="formData.maxFrequencyDial"></Input>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="最低频率">
            <Input v-model="formData.minFrequencyDial"></Input>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="通持续时间">
            <Input v-model="formData.passDurationDial"></Input>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="断持续时间">
            <Input v-model="formData.interrupturationDial"></Input>
          </FormItem>
        </Col>
      </Row>
      <Divider>回铃音</Divider>
      <Row>
        <Col span="12">
          <FormItem label="最高频率">
            <Input v-model="formData.maxFrequencyBack"></Input>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="最低频率">
            <Input v-model="formData.minFrequencyBack"></Input>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="通持续时间">
            <Input v-model="formData.passDurationBack"></Input>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="断持续时间">
            <Input v-model="formData.interrupturationBack"></Input>
          </FormItem>
        </Col>
      </Row>

      <Divider>忙音</Divider>

      <Row>
        <Col span="12">
          <FormItem label="最高频率">
            <Input v-model="formData.maxFrequencyBusy"></Input>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="最低频率">
            <Input v-model="formData.minFrequencyBusy"></Input>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="通持续时间">
            <Input v-model="formData.passDurationBusy"></Input>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="断持续时间">
            <Input v-model="formData.interrupturationBusy"></Input>
          </FormItem>
        </Col>
      </Row>
    </Card>
  </Form>
</template>

<script>
import FormLabelTooltip from '@/components/formLabelToolTip'
export default {
  name: 'voice',
  components: {
    FormLabelTooltip
  },
  data () {
    return {
      volumnMin: 10,
      volumnMax: 40,
      formData: {
        telepInput: 10,
        telepOutput: 10,
        dtmfVolume: 10,
        maxFrequencyDial: 0,
        minFrequencyDial: 450,
        passDurationDial: 5000,
        interrupturationDial: 0,
        maxFrequencyBack: 0,
        minFrequencyBack: 450,
        passDurationBack: 5000,
        interrupturationBack: 0,
        maxFrequencyBusy: 0,
        minFrequencyBusy: 450,
        passDurationBusy: 5000,
        interrupturationBusy: 0
      }
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../../assets/css/common.less';

</style>
