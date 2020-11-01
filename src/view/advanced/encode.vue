<template>
  <div class="page-content">
    <h1 class="page-title">音频编码</h1>
    <Form :model="formData" :label-width="180">
      <Card class="card-content" title="音频属性">
        <h3>音量</h3>
        <Row>
          <Col span="12">
            <FormItem label="电话口输入音量">
              <FormLabelTooltip slot="label" label="电话口输入音量" content="IP侧的音量，即主叫听到的音量，可调节，范围为10-40" />
              <Slider v-model="formData.volume[0].telepInput" :min="volumnMin" :max="volumnMax" show-input/>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="电话口输出音量">
              <FormLabelTooltip slot="label" label="电话口输入音量" content="GSM侧的音量，即被叫听到的音量，可调节，范围为10-40" />
              <Slider v-model="formData.volume[0].telepOutput" :min="volumnMin" :max="volumnMax" show-input/>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="DTMF">
              <Slider v-model="formData.volume[0].dtmfVolume" :min="volumnMin" :max="volumnMax" show-input/>
            </FormItem>
          </Col>
        </Row>
        <Divider/>
        <h3>拨号音</h3>
        <Row>
          <Col span="12">
            <FormItem label="最高频率">
              <Input v-model="formData.dialTone[0].maxFrequency"></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="最低频率">
              <Input v-model="formData.dialTone[0].minFrequency"></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="通持续时间">
              <Input v-model="formData.dialTone[0].passDuration"></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="断持续时间">
              <Input v-model="formData.dialTone[0].interrupturation"></Input>
            </FormItem>
          </Col>
        </Row>
        <Divider/>
        <h3>回铃音</h3>
        <Row>
          <Col span="12">
            <FormItem label="最高频率">
              <Input v-model="formData.ringingTone[0].maxFrequency"></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="最低频率">
              <Input v-model="formData.ringingTone[0].minFrequency"></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="通持续时间">
              <Input v-model="formData.ringingTone[0].passDuration"></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="断持续时间">
              <Input v-model="formData.ringingTone[0].interrupturation"></Input>
            </FormItem>
          </Col>
        </Row>
        <Devider/>
        <h3>忙音</h3>
        <Row>
          <Col span="12">
            <FormItem label="最高频率">
              <Input v-model="formData.busyTone[0].maxFrequency"></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="最低频率">
              <Input v-model="formData.busyTone[0].minFrequency"></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="通持续时间">
              <Input v-model="formData.busyTone[0].passDuration"></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="断持续时间">
              <Input v-model="formData.busyTone[0].interrupturation"></Input>
            </FormItem>
          </Col>
        </Row>
        <Devider/>
      </Card>
      <Card title="语音编码" class="card-content">
        <p slot="title">
          语音编码
          <Tooltip transfer placement="top" max-width="350" content="此为默认编码优先级，可拖拽修改，越上面的优先级越高">
            <Icon type="ios-information-circle-outline" size="12" color="#2d8cf0"/>
          </Tooltip>
        </p>

      </Card>
    </Form>
  </div>
</template>

<script>
import FormLabelTooltip from '@/components/formLabelToolTip'
export default {
  name: 'encode',
  components: {
    FormLabelTooltip
  },
  data () {
    return {
      volumnMin: 10,
      volumnMax: 40,
      formData: {
        volume: [
          {
            telepInput: 10,
            telepOutput: 10,
            dtmfVolume: 10
          }
        ],
        dialTone: [
          {
            maxFrequency: 0,
            minFrequency: 450,
            passDuration: 5000,
            interrupturation: 0
          }
        ],
        ringingTone: [
          {
            maxFrequency: 0,
            minFrequency: 450,
            passDuration: 5000,
            interrupturation: 0
          }
        ],
        busyTone: [
          {
            maxFrequency: 0,
            minFrequency: 450,
            passDuration: 5000,
            interrupturation: 0
          }
        ]
      }
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/common';

</style>
