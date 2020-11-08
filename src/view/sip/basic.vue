<template>
  <div class="page-content">
    <h1 class="page-title">基本设置</h1>
     <Card class="card-content" title="运行参数">
      <div class="form-content">
        <Form :model="formData" :label-width="180">
          <Row>
            <Col span="12">
              <FormItem label="协议模式">
                <Select v-model="formData.sipProtocolMode">
                    <Option v-for="item in modeOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
                </Select>
              </FormItem>
            </Col>

            <Col span="12">
              <FormItem label="加密方法">
                <Select v-model="formData.sipEncrtTion">
                    <Option v-for="item in securityOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
                </Select>
              </FormItem>
            </Col>

            <Col span="12">
              <FormItem label="SIP服务器">
                <Input v-model="formData.sipServer"></Input>
              </FormItem>
            </Col>

            <Col span="12">
              <FormItem label="服务器端口">
                <Input v-model="formData.sipServerPort"></Input>
              </FormItem>
            </Col>

            <Col span="12">
              <FormItem label="代理服务器">
                <FormLabelTooltip slot="label" label="代理服务器" content="装有一正esipxy软件的服务器，此为一正代理加密技术，应用于网络封堵的场景，需填代理服务器地址，加密方式EJSON以及代理端口25600才能生效。一般情况下无需使用"/>
                <Input v-model="formData.sipProxyServer"></Input>
              </FormItem>
            </Col>

            <Col span="12">
              <FormItem label="代理端口">
                <Input v-model="formData.sipProxyPort"></Input>
              </FormItem>
            </Col>

            <Col span="12">
              <FormItem label="备用代理服务器">
                <Input v-model="formData.sipSpareProxyServer"></Input>
              </FormItem>
            </Col>

            <Col span="12">
              <FormItem label="备用代理端口">
                <Input v-model="formData.standbyProxyPort"></Input>
              </FormItem>
            </Col>

            <Col span="12">
              <FormItem label="注册周期">
                <FormLabelTooltip slot="label" label="注册周期" content="注册间隔时间，默认为180秒"/>

                <Input v-model="formData.registTime" type="number">
                  <span slot="append">秒</span>
                </Input>
              </FormItem>
            </Col>

            <Col span="12">
              <FormItem label="本地端口">
                <Input v-model="formData.localPort"></Input>
              </FormItem>
            </Col>

            <Col span="24">
              <FormItem label="电话号码注册">
                <FormLabelTooltip slot="label" label="电话号码注册" content="SIP账号ID和名称不一致时，启用该选项，一般情况下请保持禁用"/>

                <i-switch :true-value="1" :false-value="0" v-model="formData.sipCallNumRegister" size="large">
                  <span slot="open">启用</span>
                  <span slot="close">禁用</span>
                </i-switch>
                <span class="form-tips">*SIP账号ID和名称不一致时，启用该选项</span>
              </FormItem>
            </Col>

            <Col span="24">
              <FormItem label="接受所有呼叫">
                <FormLabelTooltip slot="label" label="接受所有呼叫" content="启用后，设备将接受来自任何IP(同一局域网下或二者均具有公网IP)的电话量主要用于局域网下测试线路状态，一般情况下请保持禁用，设备暴露在公网若开启此按钮容易造成盗打"/>

                <i-switch :true-value="1" :false-value="0" v-model="formData.sipRecvAllCall" size="large">
                  <span slot="open">启用</span>
                  <span slot="close">禁用</span>
                </i-switch>
                <span class="form-tips">*启用后,点对点主叫的IP将不受限制</span>
              </FormItem>
            </Col>

            <Col span="24">
              <FormItem label="去除账号前缀">
                <FormLabelTooltip slot="label" label="去除账号前缀" content="启用后，将取出被叫号码中包含的账号前缀，一般情况下请保持禁用"/>

                <i-switch :true-value="1" :false-value="0" v-model="formData.sipRemovePreId" size="large">
                  <span slot="open">启用</span>
                  <span slot="close">禁用</span>
                </i-switch>
                <span class="form-tips">*启用后，去除被叫号码中包含的账号前缀</span>
              </FormItem>
            </Col>

            <Col span="24">
              <FormItem label="自动回复183">
                <i-switch :true-value="1" :false-value="0" v-model="formData.sipAuto183" size="large">
                  <span slot="open">启用</span>
                  <span slot="close">禁用</span>
                </i-switch>
                <span class="form-tips">*启用后，对接收到的呼叫立即回复183 Session Progress</span>
              </FormItem>
            </Col>

            <Col span="12">
              <FormItem label="根据主叫选线">
                <FormLabelTooltip slot="label" label="根据主叫选线" content="启用后，只接受主叫（From头域）和注册账号匹配的呼叫，网关各个通道可通过设置电话号码与SIP分机绑定，各通道只接受填在电话号码框的SIP分机的电话量，请慎重使用此功能，无需使用请保持禁止"/>

                <i-switch :true-value="1" :false-value="0" v-model="formData.sipAccordCallerSelect" size="large">
                  <span slot="open">启用</span>
                  <span slot="close">禁用</span>
                </i-switch>
              </FormItem>
            </Col>

            <Col span="12">
              <FormItem label="允许其他主叫">
                <i-switch :true-value="1" :false-value="0" v-model="formData.sipAcceptOtherCall" size="large">
                  <span slot="open">启用</span>
                  <span slot="close">禁用</span>
                </i-switch>
              </FormItem>
            </Col>

          </Row>

          <Row>
            <Col span="12" >
              <FormItem label="选线模式">
                <template slot="label">
                  <span>选线模式</span>
                  <Tooltip transfer placement="top" max-width="350">
                    <Icon type="ios-information-circle-outline" size="12" color="#2d8cf0"/>
                    <div slot="content">
                      <p><b>轮流:</b>优先选择最早挂机的端口</p>
                      <p><b>平衡:</b>优先选择呼叫数少的端口</p>
                      <p><b>顺序:</b>从上次选中的端口的下一个端口开始选线</p>
                      <p><b>随机:</b>随机选择满足条件的端口</p>
                    </div>
                  </Tooltip>
                </template>

                <Select v-model="formData.sipCallMode">
                  <Option v-for="item in sipCallModeOptions" :key="item .value" :value="item.value">{{item.label}}</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="24">
              <FormItem label="上报线路容量">
                <FormLabelTooltip slot="label" label="上报线路容量" content="此功能仅支持VOS 2.1.6.00（VOS2009,VOS3000）及以上版本"/>

                <i-switch :true-value="1" :false-value="0" v-model="formData.sipReportCapacity" size="large">
                  <span slot="open">启用</span>
                  <span slot="close">禁用</span>
                </i-switch>
              </FormItem>
            </Col>

          </Row>
          <Row>
            <Col span="12">
              <FormItem label="选线失败响应码">
                <FormLabelTooltip slot="label" label="选线失败响应码" content="当没有空闲线路时，设备将回复该SIP响应码到SIP服务器"/>

                <Select v-model="formData.sipSelectFailedId">
                  <Option v-for="item in responseCodeOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
                </Select>
              </FormItem>
            </Col>
            <Col span="12">
              <span class="form-tips">*没有空闲线路时回复这个SIP响应码</span>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="自定义UA标识">
                <Input v-model="formData.sipUserAgent"></Input>
              </FormItem>
            </Col>

            <Col span="12">
              <span class="form-tips">*SIP消息中的User-Agent</span>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="演示应答信号">
                <i-switch :true-value="1" :false-value="0" v-model="formData.sipDelayAnswer" size="large">
                  <span slot="open">启用</span>
                  <span slot="close">禁用</span>
                </i-switch>
              </FormItem>
            </Col>

            <Col span="12">
              <FormItem label="延时时间">
                <Input v-model="formData.delayTime" type="number">
                  <span slot="append">秒</span>
                </Input>
              </FormItem>
            </Col>

            <Col span="24">
              <FormItem label="忽略无振铃应答">
                <i-switch :true-value="1" :false-value="0" v-model="formData.sipIgnoreAnswer" size="large">
                  <span slot="open">启用</span>
                  <span slot="close">禁用</span>
                </i-switch>
              </FormItem>
            </Col>

            <Col span="24">
              <FormItem label="忽略contact">
                <i-switch :true-value="1" :false-value="0" v-model="formData.sipIgnoreContact" size="large">
                  <span slot="open">启用</span>
                  <span slot="close">禁用</span>
                </i-switch>
              </FormItem>
            </Col>

            <Col span="24">
              <FormItem label="忽略RTP源地址">
                <i-switch :true-value="1" :false-value="0" v-model="formData.sipIgnoreRtpDesc" size="large">
                  <span slot="open">启用</span>
                  <span slot="close">禁用</span>
                </i-switch>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="Contact 类型">
                <Select v-model="formData.sipContactType">
                  <Option v-for="item in contactOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
                </Select>
              </FormItem>
            </Col>

            <Col v-if="formData.sipContactType === '3'" span="12">
              <FormItem label="Contact 地址">
                <Input v-model="formData.contactAddress"></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="被叫号码来源">
                <Select v-model="formData.sipCalledSource">
                  <Option v-for="item in sourceOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
                </Select>
              </FormItem>
            </Col>

          </Row>

          <FormItem>
            <Button type="primary" @click="handleSubmit">确定</Button>
            <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
          </FormItem>
        </Form>
      </div>
     </Card>
  </div>
</template>

<script>
import FormLabelTooltip from '@/components/formLabelToolTip'

import { genarateOptions } from '@/libs/genarateOptions'
import { securityOptions, modeOptions, sipCallModeOptions, responseCodeOptions, contactTypeOptions, sourceOptions } from './options'

export default {
  name: 'basic_setting',
  components: {
    FormLabelTooltip
  },
  data () {
    return {
      formData: {
        sipProtocolMode: 0,
        sipEncrtTion: 0,
        sipServer: '',
        sipServerPort: 5060,
        sipProxyServer: '',
        sipProxyPort: 5060,
        sipSpareProxyServer: '',
        sipSpareProxyPort: 5060,
        sipLocalPort: 5060,
        registTime: 180,
        sipCallNumRegister: 0,
        sipRecvAllCall: 0,
        sipRemovePreId: 1,
        sipAuto183: 1,
        sipAccordCallerSelect: 0,
        sipAcceptOtherCall: 0,
        sipCallMode: 0,
        sipReportCapacity: 0,
        sipSelectFailedId: '503',
        sipUserAgent: '',
        sipDelayAnswer: 0,
        delayTime: 0,
        sipIgnoreAnswer: 0,
        sipIgnoreContact: 0,
        sipIgnoreRtpDesc: 0,
        sipContactType: 0,
        contactAddress: '',
        sipCalledSource: 0
      },
      modeOptions: genarateOptions(modeOptions),
      securityOptions: genarateOptions(securityOptions),
      sipCallModeOptions: genarateOptions(sipCallModeOptions),
      responseCodeOptions: genarateOptions(responseCodeOptions),
      contactOptions: genarateOptions(contactTypeOptions),
      sourceOptions: genarateOptions(sourceOptions)
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
