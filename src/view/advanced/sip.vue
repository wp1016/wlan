<template>
  <div class="page-content">
    <h1 class="page-title">SIP高级设置</h1>
    <Form :model="formData" :label-width="180">
      <Card class="card-content" title="设置">
        <div class="card-wrapper">
          <Row>
            <Col span="12">
              <FormItem label="来电显示">
                <i-switch size="large" v-model="formData.comingCallShow" :true-value="1" :false-value="0">
                  <span slot="open">启用</span>
                  <span slot="close">禁用</span>
                </i-switch>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="外线发号移除">
                <i-switch size="large" v-model="formData.externalLineNumRemove" :true-value="1" :false-value="0">
                  <span slot="open">启用</span>
                  <span slot="close">禁用</span>
                </i-switch>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="携带外线来电号码">
                <i-switch size="large" v-model="formData.BringExternalCallNum" :true-value="1" :false-value="0">
                  <span slot="open">启用</span>
                  <span slot="close">禁用</span>
                </i-switch>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="呼叫间隔类型">
                <Select transfer v-model="formData.callIntervalType">
                  <Option v-for="item in callIntervalTypeOptions" :value="item.value" :key="item.value">{{item.label}}</Option>
                </Select>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="呼叫间隔时间范围">
                <FormLabelTooltips slot="label" label="呼叫间隔时间范围" content="如配置1-3，此端口将在1-3范围内，模块再往运营商网络发送下一个通话"/>
                <Input v-model="formData.callIntervalRange">
                  <span slot="append">秒</span>
                </Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="首位拨号等待时间">
                <Input type="number" v-model="formData.firstDialWaitTime">
                  <span slot="append">秒</span>
                </Input>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="最大振铃时间">
                <Input type="number" v-model="formData.ringTimeMax">
                  <span slot="append">秒</span>
                </Input>
              </FormItem>
            </Col>

          </Row>
          <Row>
            <Col span="12">
              <FormItem label="最大回铃时间">
                <Input type="number" v-model="formData.echoToneTimeMax">
                  <span slot="append">秒</span>
                </Input>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="媒体检测时间">
                <Input type="number" v-model="formData.mediaDetectTime">
                  <span slot="append">秒</span>
                </Input>
              </FormItem>
            </Col>

          </Row>
          <Row>
            <Col span="12">
              <FormItem label="自动振铃时间范围">
                <Input type="number" v-model="formData.autoRingTimeRange">
                  <span slot="append">秒</span>
                </Input>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="自动振铃类型">
                <Select transfer v-model="formData.autoRingType">
                  <Option v-for="item in ringTypeOptions" :value="item.value" :key="item.value">{{item.label}}</Option>
                </Select>
              </FormItem>
            </Col>

          </Row>
          <Row>
            <Col span="12">
              <FormItem label="停止假振铃">
                <i-switch size="large" v-model="formData.stopFalseRing" :true-value="1" :false-value="0">
                  <span slot="open">启用</span>
                  <span slot="close">禁用</span>
                </i-switch>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="DTMF模式">
                <Select transfer v-model="formData.dtmfMode">
                  <Option v-for="item in dtmfModeOptions" :value="item.value" :key="item.value">{{item.label}}</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="RTP间隔时间">
                <Select transfer v-model="formData.rtpIntervalTime">
                  <Option v-for="item in rtpIntervalTimeOptions" :value="item.value" :key="item.value">{{item.label}}</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="RTP起始端口">
                <Input type="number" v-model="formData.rtpStartPort"></Input>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="RTP结束端口">
                <Input type="number" v-model="formData.rtpEndPort"></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="选线失败响应码">
                <Select transfer v-model="formData.lineSelectFailCode">
                  <Option v-for="item in lineSelectFailCodeOptions" :value="item.value" :key="item.value">{{item.label}}</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="网络兼容次数">
                <Input type="number" v-model="formData.netcompatibleNum"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="网络兼容时长">
                <Input type="number" v-model="formData.netcompatibleTime">
                  <span slot="append">秒</span>
                </Input>
              </FormItem>
            </Col>
          </Row>

          <FormItem style="margin-top:10px;">
            <Button type="primary" @click="handleSubmit">确定</Button>
            <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
          </FormItem>
        </div>
      </Card>
      <GSM2Ip/>
      <Ip2GSM/>
      <Encode/>
      <Voice/>
    </Form>
  </div>
</template>

<script>
import { genarateOptions } from '@/libs/genarateOptions'
import { ringTypeOptions, dtmfModeOptions, rtpIntervalTimeOptions, lineSelectFailCodeOptions, callIntervalTypeOptions } from './options'

import FormLabelTooltips from '@/components/formLabelToolTip'

import GSM2Ip from './sip/gsm2ip'
import Ip2GSM from './sip/ip2gsm'
import Encode from './sip/encode'
import Voice from './sip/voice'
export default {
  name: 'advanced_sip',
  components: {
    FormLabelTooltips,
    GSM2Ip,
    Ip2GSM,
    Voice,
    Encode
  },
  data () {
    return {
      formData: {
        comingCallShow: 0,
        externalLineNumRemove: 0,
        BringExternalCallNum: 0,
        // dtmfIdleTime: 1,
        dtmfEffectTime: 3,
        callIntervalType: 0,
        callIntervalRange: '1-3',
        firstDialWaitTime: 12,
        ringTimeMax: 120,
        echoToneTimeMax: 120,
        mediaDetectTime: 60,
        autoRingTimeRange: 0,
        autoRingType: 0,
        stopFalseRing: 0,
        dtmfMode: 0,
        rtpIntervalTime: 0,
        rtpStartPort: 16868,
        rtpEndPort: 16868,
        lineSelectFailCode: 0,
        netcompatibleNum: 2,
        netcompatibleTime: 180
      },
      callIntervalTypeOptions: genarateOptions(callIntervalTypeOptions),
      ringTypeOptions: genarateOptions(ringTypeOptions),
      dtmfModeOptions: genarateOptions(dtmfModeOptions),
      rtpIntervalTimeOptions: genarateOptions(rtpIntervalTimeOptions),
      lineSelectFailCodeOptions: genarateOptions(lineSelectFailCodeOptions)
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
