<template>
  <div class="page-content">
    <h1 class="page-title">设备管理</h1>
    <Form :model="formData" :label-width="180">
      <Card class="card-content" title="网关用户列表">
        <div class="button-wrapper">
            <Button type="primary" @click="add">添加用户</Button>
        </div>
        <Table :columns="tableColumns" :data="formData.gatewayUserList">
          <template slot="gatewayAccount" slot-scope="{row,index}">
            <Input v-if="editIndex === index" v-model="formData.gatewayUserList[index].gatewayAccount"></Input>
            <span v-else>{{row.gatewayAccount}}</span>
          </template>
          <template slot="gatewayPassd" slot-scope="{row,index}">
            <Input v-if="editIndex === index" v-model="formData.gatewayUserList[index].gatewayPassd"></Input>
            <span v-else>{{row.gatewayPassd}}</span>
          </template>
          <template slot="gatewayRole" slot-scope="{row,index}">
            <Select transfer v-if="editIndex === index" v-model="formData.gatewayUserList[index].gatewayRole">
              <Option v-for="item in roleTypeOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
            </Select>
            <span v-else>{{row.gatewayRole | roleType}}</span>
          </template>

          <template slot="operation" slot-scope="{row, index}">
            <template v-if="editIndex === index">
              <Button type="primary" size="small" @click="save(index)">保存</Button>
            </template>
            <template v-else>
              <Button type="primary" size="small" @click="edit(index)">编辑</Button>
              <Button size="small" @click="remove(index)" style="margin-left:8px;">删除</Button>
            </template>
          </template>
        </Table>
      </Card>

      <Card class="card-content" title="网页IP控制">
        <div class="card-wrapper">

          <Row>
            <Col span="12">
              <FormItem label="允许的IP地址">
                <Input v-model="formData.enableIpAddr"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="不允许的IP地址">
                <Input v-model="formData.disableIpAddr"></Input>
              </FormItem>
            </Col>
          </Row>
          <FormItem style="margin-top: 15px;">
            <Button type="primary" @click="handleSubmit">确定</Button>
            <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
          </FormItem>
        </div>
      </Card>

      <Card title="设备设置" class="card-content">
        <div class="card-wrapper">
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
              <Select transfer v-model="formData.autoRestart">
                <Option v-for="item in timeRangeOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
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

      <Card title="日期和时间" class="card-content">
        <div class="card-wrapper">
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
                <Select transfer v-model="formData.getTimeWay">
                  <Option v-for="item in timeWayOptions" :value="item.value" :key="item.value">{{item.label}}</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>
          <Row v-if="formData.getTimeWay===0">
            <Col span="12">
              <FormItem label="时间服务器地址">
                <Input v-model="formData.ntpTimeServer"></Input>
              </FormItem>
            </Col>
            <Col span="12">
              <span class="form-tips">*NTP时间服务器域名或IP地址</span>
            </Col>
          </Row>

          <Row v-if="formData.getTimeWay===2">
            <Col span="12">
              <FormItem label="系统时间">
                <DatePicker type="datetime" format="yyyy-MM-dd HH:mm:ss" v-model="formData.systemTime" placeholder="系统时间"></DatePicker>
              </FormItem>
            </Col>
          </Row>

          <FormItem style="margin-top: 15px;">
            <Button type="primary" @click="handleSubmit">确定</Button>
            <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
          </FormItem>
        </div>
      </Card>

      <Card title="温度设置" class="card-content">
        <div class="card-wrapper">
          <Row>
            <Col span="12">
              <FormItem label="风扇控制">
                <Slider v-model="formData.fanControl" :min="0" :max="100" show-input></Slider>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="告警温度">
                <Slider v-model="formData.waringTemp" :min="0" :max="100" show-input></Slider>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="通知周期">
                <Input type="number" v-model="formData.informCycle"></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="发送告警短信">
                <Checkbox v-model="formData.sendWaringSms" :true-value="1" :false-value="0"></Checkbox>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="发送通知短信">
                <Checkbox v-model="formData.sendInformSms" :true-value="1" :false-value="0"></Checkbox>
              </FormItem>
            </Col>
          </Row>
          <!-- v-if="formData.sendInformSms === 1 || formData.sendWaringSms === 1" -->
          <Row>
            <Col span="12">
              <FormItem label="短信接收号码">
                <Input v-model="formData.smsRecvNumber"></Input>
              </FormItem>
            </Col>
          </Row>

        </div>
      </Card>

      <Card title="设备网管" class="card-content">
        <p slot="title">
          <span>设备网管</span>
          <Tooltip transfer placement="top" max-width="350" content="启用并注册网管服务器后，可通过服务器访问此设备的Web界面和Telnet接口">
            <Icon type="ios-information-circle-outline" size="12" color="#2d8cf0"/>
          </Tooltip>
        </p>
        <div class="card-wrapper">

          <Row>
            <Col span="12">
              <FormItem label="服务器类型">
                <Select transfer v-model="formData.deviceNetManage">
                  <Option v-for="item in netOptions" :key="item.key" :value="item.value">{{item.label}}</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>

          <template v-if="formData.deviceNetManage === 1">
            <Row>
              <Col span="12">
                <FormItem label="服务器IP地址">
                  <Input v-model="formData.telnetServIp"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="网管端口">
                  <Input v-model="formData.dtelnetPort"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="账号">
                  <Input v-model="formData.telnetUser"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="密码">
                  <Input type="password" v-model="formData.telnetPasswd"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="状态">
                  {{formData.telnetStatus}}
                </FormItem>
              </Col>
            </Row>
          </template>

          <template v-if="formData.deviceNetManage === 2">
            <Row>
              <Col span="12">
                <FormItem label="服务器IP地址">
                  <Input v-model="formData.focusServIp"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="网管端口">
                  <Input v-model="formData.focusPort"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="账号">
                  <Input v-model="formData.focusUser"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="密码">
                  <Input type="password" v-model="formData.focusPasswd"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="状态">
                  {{formData.focusStatus}}
                </FormItem>
              </Col>
            </Row>
          </template>

          <FormItem style="margin-top: 15px;">
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

import { genarateOptions } from '@/libs/genarateOptions'
import { timeRangeOptions, timeWayOptions, netOptions, roleMap } from './options'
import * as dayjs from 'dayjs'

export default {
  name: 'device',
  mixins: [mixins],

  data () {
    return {
      editIndex: -1,
      formData: {
        gatewayUserList: [],
        enableIpAddr: '',
        disableIpAddr: '',

        deviceAlias: '',
        countryCode: '',
        autoRestart: 0,
        timingRestart: 0,
        deviceTimeZone: '',
        getTimeWay: 0,
        ntpTimeServer: '',
        systemTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),

        fanControl: 30,
        waringTemp: 30,
        informCycle: 0,
        sendWaringSms: 0,
        sendInformSms: 0,
        smsRecvNumber: '',

        deviceNetManage: 0,
        telnetServIp: '',
        dtelnetPort: 5000,
        telnetUser: '',
        telnetPasswd: '',
        telnetStatus: '',
        focusServIp: '',
        focusPort: 5000,
        focusUser: '',
        focusPasswd: '',
        focusStatus: ''
      },
      timeRangeOptions: genarateOptions(timeRangeOptions),
      timeWayOptions: genarateOptions(timeWayOptions),
      netOptions: genarateOptions(netOptions),
      roleTypeOptions: genarateOptions(roleMap),
      tableColumns: [
        {
          key: 'gatewayAccount',
          title: '账号',
          slot: 'gatewayAccount'
        },
        {
          key: 'gatewayPassd',
          title: '密码',
          slot: 'gatewayPassd'
        },
        {
          key: 'gatewayRole',
          title: '角色',
          slot: 'gatewayRole'
        },
        {
          key: 'operation',
          title: '操作',
          slot: 'operation'
        }
      ]
    }
  },
  filters: {
    roleType (val) {
      return roleMap[val]
    }
  },
  methods: {
    add () {
      this.formData.gatewayUserList.push({
        gatewayAccount: '',
        gatewayPassd: '',
        gatewayRole: 0
      })
      this.editIndex = this.formData.gatewayUserList.length - 1
    },
    save (index) {
      this.editIndex = -1
    },
    edit (index) {
      this.editIndex = index
    },
    remove (index) {
      this.formData.gatewayUserList.splice(index, 1)
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/common';

</style>
