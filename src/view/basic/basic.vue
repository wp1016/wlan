
<template>
  <div class="page-content">
    <h1 class="page-title">基本设置</h1>
    <Form :model="formData" :label-width="180">
      <Card class="card-content" title="WAN口设置">
        <div class="card-wrapper">
          <Row>
            <Col span="12">
              <FormItem label="WAN口连接类型">
                <Select transfer v-model="formData.wanType">
                  <Option v-for="item in connectionTypes" :value="item.value" :key="item.value">{{item.label}}</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>
          <template v-if="formData.wanType===0">
            <Row>
              <Col span="12">
                <FormItem label="IP地址">
                  <Input v-model="formData.deviceIp"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="子网掩码">
                  <Input v-model="formData.deviceNetmask"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="默认网关">
                  <Input v-model="formData.deviceGatway"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="DNS服务器">
                  <Input v-model="formData.deviceDns"></Input>
                </FormItem>
              </Col>
            </Row>
          </template>

          <template v-if="formData.wanType === 2">
            <Row>
              <Col span="12">
                <FormItem label="用户名">
                  <Input v-model="formData.pppoeUser"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="密码">
                  <Input type="password" v-model="formData.pppoePasswd"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="MTU">
                  <Input type="number" v-model="formData.pppoeMtu"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="心跳失败次数">
                  <Input type="number" v-model="formData.pppoeHeartNum"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="心跳间隔时间">
                  <Input v-model="formData.pppoeHeartTime">
                    <span slot="append">秒</span>
                  </Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="IP地址">
                  <span>0.0.0.0</span>
                </FormItem>
              </Col>
            </Row>
          </template>

          <FormItem style="margin-top: 10px;">
            <Button type="primary" @click="handleSubmit">确定</Button>
            <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
          </FormItem>
        </div>
      </Card>

    </Form>
  </div>
</template>

<script>
import mixins from '@/mixins'
import FormLabelToolTip from '@/components/formLabelToolTip'
import { genarateOptions } from '@/libs/genarateOptions'
import { wanTypeOptions, sipProtocolOptions, encrtOptions } from './options'

export default {
  name: 'basic',
  mixins: [mixins],
  components: {
    FormLabelToolTip
  },
  data () {
    return {
      formData: {
        wanType: 0,
        deviceIp: '192.168.0.1',
        deviceNetmask: '192.168.0.1',
        deviceGatway: '192.168.0.1',
        deviceDns: '192.168.0.1',
        pppoeUser: 'root',
        pppoePasswd: '',
        pppoeMtu: 1492,
        pppoeHeartNum: 4,
        pppoeHeartTime: 30,
        pppoeDns: '8.8.8.8',
        sipProtocolMode: 0,
        sipEncrtTion: 0,
        sipServer: '',
        sipServerPort: '',
        sipTelephone: '',
        sipAmount: '',
        sipPasswd: ''
      },
      connectionTypes: genarateOptions(wanTypeOptions),
      sipProtocolOptions: genarateOptions(sipProtocolOptions),
      encrtOptions: genarateOptions(encrtOptions)
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/common';
</style>
