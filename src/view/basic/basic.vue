
<template>
  <div class="page-content">
    <h1 class="page-title">基本设置</h1>
    <Form :model="formData" :label-width="180">
      <Card class="card-content" title="WAN口设置">
        <Row>
          <Col span="12">
            <FormItem label="WAN口连接类型">
              <Select v-model="formData.wanType">
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
      </Card>

      <Card class="card-content" title="SIP服务及账号">

        <Row>
          <Col span="12">
            <FormItem label="协议模式">
              <FormLabelToolTip slot="label" label="协议模式" content="注册模式下时需要SIP服务器提供账号和密码，点对点模式下无需SIP服务器提供账号和密码，需要保证网关和SIP服务器在同一个局域网下面或二者都具有公网IP" />
              <Select v-model="formData.sipProtocolMode">
                <Option v-for="item in sipProtocolOptions" :value="item.value" :key="item.value">{{item.label}}</Option>
              </Select>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="加密方式">
              <FormLabelToolTip slot="label" label="加密方式" content="无特殊情况下选择默认的NONE，若有网络封堵，注册不上SIP服务器，一般选择EJSON，这种情况下需配合代理服务器使用，并配上代理端口（默认为25600）"/>
              <Select v-model="formData.sipEncrtTion">
                <Option v-for="item in encrtOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>

        <Row>
          <Col span="12">
            <FormItem label="SIP服务器">
              <FormLabelToolTip slot="label" label="SIP服务器" content="软交换系统的IP地址或域名。例如VOS，IPPBX，VPS，Asterisk等系统" />
              <Input v-model="formData.sipServer"></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="服务器端口">
              <FormLabelToolTip slot="label" label="服务器端口" content="软交换系统的SIP端口，默认为5060" />
              <Input v-model="formData.sipServerPort"></Input>
            </FormItem>
          </Col>
        </Row>

        <Row>
          <Col span="12">
            <FormItem label="电话号码">
              <FormLabelToolTip slot="label" label="电话号码" content="SIP的username,一般不填，点对点使用时，一般填为对应端口的电话号码或者用于主叫选线时使用" />
              <Input v-model="formData.sipTelephone"></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="账号">
              <FormLabelToolTip slot="label" label="账号" content="SIP的UserID，由软交换系统创建，如VOS的落地网关ID" />
              <Input v-model="formData.sipAmount"></Input>
            </FormItem>
          </Col>
        </Row>

        <Row>
          <Col span="12">
            <FormItem label="密码">
              <FormLabelToolTip slot="label" label="密码" content="SIP账号对应的密码"/>
              <Input v-model="formData.sipPasswd"></Input>
            </FormItem>
          </Col>
        </Row>

        <FormItem style="margin-top:10px;">
          <Button type="primary" @click="handleSubmit">确定</Button>
          <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
        </FormItem>
      </Card>
    </Form>
  </div>
</template>

<script>
import FormLabelToolTip from '@/components/formLabelToolTip'
import { genarateOptions } from '@/libs/genarateOptions'
import { wanTypeOptions, sipProtocolOptions, encrtOptions } from './options'

export default {
  name: 'basic',
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
  },
  methods: {
    handleSubmit () {

    },
    handleCancel () {

    }
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/common';
</style>
