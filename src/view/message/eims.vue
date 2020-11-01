<template>
  <div class="page-content">
    <h1 class="page-title">EIMS设置</h1>
    <Form :model="formData" :label-width="180">
      <Card title="基本设置" class="card-content">
        <Row>
          <Col span="12">
            <FormItem label="服务器类型">
              <FormLabelToolTip slot="label" label="服务器类型" content="状态报告是——正为用户提供的状态消息报告接口，用户可以通过该接口得到SIP注册消息、SIM卡状态消息、CDR消息等，方便用户管理及监控设备状态，用户还可以在此处做与一正反应服务器对接设置" />
              <Select v-model="formData.smsEimsServerType">
                <Option v-for="item in serverTypeOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        <template v-if="formData.smsEimsServerType !== 0">
          <Row>
            <Col span="12">
              <FormItem label="服务器地址">
                <Input v-model="formData.eimsServerIp"></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="服务器端口">
                <Input v-model="formData.eimsServerPort"></Input>
              </FormItem>
            </Col>
          </Row>

          <Row v-if="formData.smsEimsServerType === 1">
            <Col span="12">
              <FormItem label="服务器端口">
                <Input v-model="formData.eimsServerPort"></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="用户名">
                <Input v-model="formData.eimsServerUser"></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="密码">
                <Input v-model="formData.eimsServerPasswd"></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="注册状态">
                <span>{{formData.eimsRegisterStatu}}</span>
              </FormItem>
            </Col>
          </Row>
          <FormItem style="margin-top: 15px;">
            <Button type="primary" @click="handleSubmit">确定</Button>
            <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
          </FormItem>

        </template>

      </Card>
    </Form>
  </div>
</template>

<script>

import FormLabelToolTip from '@/components/formLabelToolTip'
import { genarateOptions } from '@/libs/genarateOptions'
import { eimsServerTypeOptions, eimsServerLinkOptions } from './options'

export default {
  name: 'eims',
  components: {
    FormLabelToolTip
  },
  data () {
    return {
      formData: {
        smsEimsServerType: 0,
        eimsServerIp: '',
        eimsServerPort: '',
        eimsServerLink: 0,
        eimsServerUser: '',
        eimsServerPasswd: '',
        eimsRegisterStatu: ''
      },
      serverTypeOptions: genarateOptions(eimsServerTypeOptions),
      linkTypeOptions: genarateOptions(eimsServerLinkOptions)
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
