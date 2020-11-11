<template>
    <Form :model="formData" :label-width="180">
      <Card title="短信设置" class="card-content">
        <div class="card-wrapper">

          <Row>
            <Col span="12">
              <FormItem label="发送间隔">
                <Input v-model="formData.sendInterval">
                  <span slot="append">秒</span>
                </Input>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="12">
            <FormItem label="短信格式">
              <Select transfer v-model="formData.smsFormat">
                <Option v-for="item in smsFormatOptions" :value="item.value" :key="item.value">{{item.label}}</Option>
              </Select>
            </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="送达报告">
                <i-switch size="large" v-model="formData.deliveryReport" :true-value="1" :false-value="0">
                  <span slot="open">启用</span>
                  <span slot="close">禁用</span>
                </i-switch>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="长短信最大长度">
                <Input v-model="formData.longSmsMaxLength"></Input>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="长短信最大条数">
                <Input v-model="formData.longSmsMaxNum"></Input>
              </FormItem>
            </Col>
          </Row>

           <Row>
            <Col span="12">
              <FormItem label="长度溢出处理">
                <Select transfer v-model="formData.lengthOverDeal">
                  <Option v-for="item in lengthOverDealOptions" :value="item.value" :key="item.value">{{item.label}}</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>

           <Row>
            <Col span="12">
              <FormItem label="计数规则">
                <FormLabelToolTip slot="label" label="计数规则">
                  <div slot="content">
                    <p>一串4个数的字符串，分隔符为-  例如：'0-0-140-6'</p>
                    <p>第一位：计数类型 ；0: 字节  1字符；</p>
                    <p>第二位： 编码算法；0：支持7bit  1：不支持7bit；</p>
                    <p>第三位：单条限制，最大字节数或最大个数；</p>
                    <p>第四位：多条头长度；字节：6  字符：6</p>
                  </div>
                </FormLabelToolTip>
                <Input v-model="formData.countRule"></Input>
              </FormItem>
            </Col>

          </Row>

          <Row>
            <Col span="12">
              <FormItem label="转发协议">
                <Select transfer v-model="formData.forwardProtocol">
                  <Option v-for="item in forwardProtocolOptions" :value="item.value" :key="item.value">{{item.label}}</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>
          <FormItem style="margin-top: 15px;">
            <Button type="primary" @click="handleSubmit">确定</Button>
            <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
          </FormItem>
        </div>
      </Card>
    </Form>
</template>

<script>
import FormLabelToolTip from '@/components/formLabelToolTip'

import { genarateOptions } from '@/libs/genarateOptions'

import {
  lengthOverDealOptions,
  smsFormatOptions,
  forwardProtocolOptions
} from './options'
export default {
  name: 'send',
  components: {
    FormLabelToolTip
  },
  data () {
    return {
      formData: {
        sendInterval: 0,
        smsFormat: 0,
        deliveryReport: 0,
        longSmsMaxLength: 0,
        longSmsMaxNum: 0,
        lengthOverDeal: 0,
        countRule: '',
        forwardProtocol: 0
      },
      smsFormatOptions: genarateOptions(smsFormatOptions),
      lengthOverDealOptions: genarateOptions(lengthOverDealOptions),
      forwardProtocolOptions: genarateOptions(forwardProtocolOptions)
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
