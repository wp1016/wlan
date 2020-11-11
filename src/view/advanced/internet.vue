<template>
  <div class="page-content">
    <h1 class="page-title">网络设置</h1>
    <Form :model="formData" :label-width="180">
      <Card title="VPN设置" class="card-content">
        <Row>
          <Col span="12">
            <FormItem label="VPN支持">
              <FormLabelTooltip slot="label" label="VPN支持" content="启用VPN后，会修改默认出口为VPN接口"></FormLabelTooltip>
              <Select transfer v-model="formData.vpnType">
                <Option v-for="item in vpnTypeOptions" :value="item.value" :key="item.value">{{item.label}}</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        <!-- pptp -->
        <template v-if="formData.vpnType === 1">
          <Row>
            <Col span="12">
              <FormItem label="服务器地址">
                <Input v-model="formData.pptpServerIp"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="用户名">
                <Input v-model="formData.pptpUser"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="密码">
                <Input type="password" v-model="formData.pptpPasswd"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="CHAP">
                <Select transfer v-model="formData.pptpChap">
                  <Option v-for="item in chapOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="MPPE">
                <Select transfer v-model="formData.pptpMppe">
                  <Option v-for="item in mppeOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="本地IP">
                {{formData.pptpLocalIp}}
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="远端IP">
                {{formData.pptpDistal}}
              </FormItem>
            </Col>
          </Row>
        </template>
        <!-- openVPN -->
        <template v-if="formData.vpnType === 2">
          <Row>
            <Col span="12">
              <FormItem label="验证模式">
                <FormLabelTooltip slot="label" label="验证模式">
                  <template slot="content">
                    <p><strong>口令</strong>需要用户名密码，有些情况下需要根证书</p>
                    <p><strong>证书</strong>证书中已经包含服务器地址和协议等配置，请使用该模式</p>
                    <p><strong>证书和配置</strong>证书中没有配置信息，需要在设备上配置，请使用该模式</p>
                  </template>
                  <Select transfer v-model="formData.openvpnConfirmMode">
                    <Option v-for="item in VPNmodeOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
                  </Select>
                </FormLabelTooltip>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="服务器地址">
                <Input v-model="formData.openvpnServer"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="用户名">
                <Input v-model="formData.openvpnUser"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="密码">
                <Input type="password" v-model="formData.openvpnPasswd"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="协议">
                <Select transfer v-model="formData.openvpnLink">
                  <Option v-for="item in linkOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="本地IP">
                {{formData.openvpnLocalIp}}
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="远端IP">
                {{formData.openvpnRemoveIp}}
              </FormItem>
            </Col>
          </Row>
        </template>
        <FormItem style="margin-top:10px;">
          <Button type="primary" @click="handleSubmit">确定</Button>
          <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
        </FormItem>
      </Card>

    </Form>
  </div>
</template>

<script>
import mixins from '@/mixins'

import FormLabelTooltip from '@/components/formLabelToolTip'
import { genarateOptions } from '@/libs/genarateOptions'
import { vpnTypeOptions, chapOptions, mppeOptions, VPNmodeOptions, linkOptions } from './options'

export default {
  name: 'internet',
  mixins: [mixins],

  components: {
    FormLabelTooltip
  },
  data () {
    return {
      formData: {
        vpnType: 0,
        pptpServerIp: '',
        pptpUser: '',
        pptpPasswd: '',
        pptpChap: 0,
        pptpMppe: 1,
        pptpLocalIp: '0.0.0.0',
        pptpDistal: '0.0.0.0',
        openvpnConfirmMode: 0,
        openvpnLocalIp: '192.168.0.1',
        openvpnRemoveIp: '192.168.0.1',
        openvpnUser: '',
        openvpnPasswd: '',
        openvpnLink: 0,
        openvpnServer: ''
      },
      vpnTypeOptions: genarateOptions(vpnTypeOptions),
      chapOptions: genarateOptions(chapOptions),
      mppeOptions: genarateOptions(mppeOptions),
      VPNmodeOptions: genarateOptions(VPNmodeOptions),
      linkOptions: genarateOptions(linkOptions)
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
