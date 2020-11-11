<template>
  <Form :model="formData" :label-width="180">
    <Card title="LAN口设置" class="card-content">
      <div class="card-wrapper">
        <Row>
          <Col span="12">
            <FormItem label="网口工作模式">
              <Select transfer v-model="formData.wanWorkMode">
                <Option v-for="item in wanWorkModeOptions" :value="item.value" :key="item.value">{{item.label}}</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>

        <template v-if="formData.wanWorkMode === 0">
          <Divider>LAN口设置</Divider>
          <Row>
            <Col span="12">
              <FormItem label="IP地址">
                <Input v-model="formData.routeIpAddr"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="子网掩码">
                <Input v-model="formData.routeMask"></Input>
              </FormItem>
            </Col>
          </Row>
          <Divider>DHCP服务器设置</Divider>
          <Row>
            <Col span="12">
              <FormItem label="DHCP功能">
                <i-switch size="large" v-model="formData.dhcpFunc" :true-value="1" :false-calue="0">
                  <span slot="open">启用</span>
                  <span slot="close">禁用</span>
                </i-switch>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="地址池开始地址">
                <Input v-model="formData.addrStart"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="地址池结束地址">
                <Input v-model="formData.addrEnd"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="子网掩码">
                <Input v-model="formData.dhcpMask"></Input>
              </FormItem>
            </Col>
          </Row>
          <Divider>网管设置</Divider>
          <Row>
            <Col span="12">
              <FormItem label="Web后台端口">
                <Input v-model="formData.webBehPort"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="Telnet后台端口">
                <Input v-model="formData.telnetBehPort"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="系统Telnet端口">
                <Input v-model="formData.sysTelnetPort"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="HTTP AP端口">
                <Input v-model="formData.httpApPort"></Input>
              </FormItem>
            </Col>
          </Row>
        </template>

        <template v-if="formData.wanWorkMode === 1">
          <Divider>网管设置</Divider>
          <Row>
            <Col span="12">
              <FormItem label="Web后台端口">
                <Input v-model="formData.WebBehPortHub"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="Telnet后台端口">
                <Input v-model="formData.telnetBehPortHub"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="系统Telnet端口">
                <Input v-model="formData.sysTelnetPortHub"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="HTTP AP端口">
                <Input v-model="formData.httpApPortHub"></Input>
              </FormItem>
            </Col>
          </Row>
        </template>
        <template v-if="formData.wanWorkMode === 2">
          <Divider>LAN口设置</Divider>
          <Row>
            <Col span="12">
              <FormItem label="IP地址">
                <Input v-model="formData.routeIpAddrDisa"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="子网掩码">
                <Input v-model="formData.routeMaskDisa"></Input>
              </FormItem>
            </Col>
          </Row>
          <Divider>DHCP服务器设置</Divider>
          <Row>
            <Col span="12">
              <i-switch size="large" v-model="formData.dhcpFuncDisa" :true-value="1" :false-calue="0">
                <span slot="open">启用</span>
                <span slot="close">禁用</span>
              </i-switch>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="地址池开始地址">
                <Input v-model="formData.addrStartDisa"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="地址池结束地址">
                <Input v-model="formData.addrEndDisa"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="子网掩码">
                <Input v-model="formData.dhcpMaskDisa"></Input>
              </FormItem>
            </Col>
          </Row>
          <Divider>网管设置</Divider>
          <Row>
            <Col span="12">
              <FormItem label="Web后台端口">
                <Input v-model="formData.webBehPortDisa"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="Telnet后台端口">
                <Input v-model="formData.telnetBehPortDisa"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="系统Telnet端口">
                <Input v-model="formData.sysTelnetPortDisa"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="HTTP AP端口">
                <Input v-model="formData.httpApPortDisa"></Input>
              </FormItem>
            </Col>
          </Row>
        </template>

      </div>
      <FormItem style="margin-top: 15px;">
        <Button type="primary" @click="handleSubmit">确定</Button>
        <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
      </FormItem>
    </Card>
  </Form>
</template>

<script>
import mixins from '@/mixins'

import { genarateOptions } from '@/libs/genarateOptions'
import { wanWorkModeOptions } from './options'
export default {
  name: 'lan',
  mixins: [mixins],

  data () {
    return {
      formData: {
        wanWorkMode: 0,

        routeIpAddr: '',
        routeMask: '',
        dhcpFunc: 0,
        addrStart: '',
        addrEnd: '',
        dhcpMask: '',

        webBehPort: 80,
        telnetBehPort: 0,
        sysTelnetPort: 0,
        httpApPort: 80,

        WebBehPortHub: 80,
        telnetBehPortHub: 0,
        sysTelnetPortHub: 0,
        httpApPortHub: 80,

        routeIpAddrDisa: '',
        routeMaskDisa: '',
        dhcpFuncDisa: 0,
        addrStartDisa: '',
        addrEndDisa: '',
        dhcpMaskDisa: '',
        webBehPortDisa: 80,
        telnetBehPortDisa: 0,
        sysTelnetPortDisa: 0,
        httpApPortDisa: 80
      },
      wanWorkModeOptions: genarateOptions(wanWorkModeOptions)
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../../assets/css/common';
</style>
