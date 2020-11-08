<template>
  <div class="page-content">
    <h1 class="page-title">设备管理</h1>
    <Form :model="formData" :label-width="180">
      <Card title="基本设置" class="card-content">
        <Row>
          <Col span="12">
            <FormItem label="设备别名">
              <Input v-model="formData.deviceAlias"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="国家码">
              <Input v-model="formData.countryCode"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="自动重启">
              <Input type="number" v-model="formData.autoRestart"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="定时重启">
              <Select v-model="formData.autoRestart">
                <Option v-for="item in timeRangeOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        <FormItem style="margin-top: 15px;">
          <Button type="primary" @click="handleSubmit">确定</Button>
          <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
        </FormItem>
      </Card>

      <Card title="日期和时间" class="card-content">
        <Row>
          <Col span="12">
            <FormItem label="设备时区">
              <Input v-model="formData.deviceTimeZone"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="获取时间方式">
              <Select v-model="formData.getTimeWay">
                <Option v-for="item in timeWayOptions" :value="item.value" :key="item.value">{{item.label}}</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="获取时间方式">
              <Input v-model="formData.ntpTimeServer"></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <span class="form-tips">*NTP时间服务器域名或IP地址</span>
          </Col>
        </Row>
        <FormItem style="margin-top: 15px;">
          <Button type="primary" @click="handleSubmit">确定</Button>
          <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
        </FormItem>
      </Card>

      <Card title="设备网管">
        <p slot="title">
          <span>设备网管</span>
          <Tooltip transfer placement="top" max-width="350" content="启用并注册网管服务器后，可通过服务器访问此设备的Web界面和Telnet接口">
            <Icon type="ios-information-circle-outline" size="12" color="#2d8cf0"/>
          </Tooltip>
        </p>
        <Row>
          <Col span="12">
            <FormItem label="服务器类型">
              <Select v-model="formData.deviceNetManage">
                <Option v-for="item in netOptions" :key="item.key" :value="item.value">{{item.label}}</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>

        <template v-if="formData.deviceNetManage > 0">
          <Row>
            <Col span="12">
              <FormItem label="服务器IP地址">
                <Input v-model="formData.deviceNetManageServIp"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="网管端口">
                <Input v-model="formData.deviceNetManagePort"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="账号">
                <Input v-model="formData.deviceNetManageUser"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="密码">
                <Input type="password" v-model="formData.deviceNetManagePasswd"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="状态">
                {{formData.deviceNetManageStatus}}
              </FormItem>
            </Col>
          </Row>
        </template>

        <FormItem style="margin-top: 15px;">
          <Button type="primary" @click="handleSubmit">确定</Button>
          <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
        </FormItem>
      </Card>
    </Form>
  </div>
</template>

<script>
import { genarateOptions } from '@/libs/genarateOptions'
import { timeRangeOptions, timeWayOptions, netOptions } from './options'
export default {
  name: 'device',
  data () {
    return {
      formData: {
        deviceAlias: '',
        countryCode: '',
        autoRestart: 0,
        timingRestart: 0,
        deviceTimeZone: '',
        getTimeWay: 0,
        ntpTimeServer: '',
        systemTime: '',
        deviceNetManage: 0,
        deviceNetManageServIp: '',
        deviceNetManagePort: 5000,
        deviceNetManageUser: '',
        deviceNetManagePasswd: '',
        deviceNetManageStatus: '',
        deviceNetManageRegist: 0
      },
      timeRangeOptions: genarateOptions(timeRangeOptions),
      timeWayOptions: genarateOptions(timeWayOptions),
      netOptions: genarateOptions(netOptions)
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
