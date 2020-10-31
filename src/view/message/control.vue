<template>
  <div class="page-content">
    <h1 class="page-title">短信控制</h1>
    <Form :model="formData" :label-width="180">
      <Card title="基本设置" class="card-content">
        <Row>
          <Col span="12">
            <FormItem label="SMS控制模式">
              <Select v-model="formData.smsControlMode">
                <Option v-for="item in modeOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>

        <template v-if="formData.smsControlMode === 1">
          <Row>
            <Col span="12">
              <FormItem label="短信用尽切卡">
                <i-switch v-model="formData.smsExhausetChangeCard" :true-value="1" :false-value="0"></i-switch>
              </FormItem>
            </Col>
            <Col span="12">
              <span class="form-tips">*发送的短信数达到设置的上限时切卡</span>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="只统计成功短信">
                <i-switch v-model="formData.onlyStatisticSuccSms" :true-value="1" :false-value="0"></i-switch>
              </FormItem>
            </Col>
            <Col span="12">
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="分端口设置">
                <i-switch v-model="formData.subPortSetting" :true-value="1" :false-value="0"></i-switch>
              </FormItem>
            </Col>
            <Col span="12">
              <span class="form-tips">*各个端口使用不同的限制</span>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="累计最大短信数">
                <Input v-model="formData.controlCumulMaxSmsNum" placeholder="0 表示不启用"></Input>
              </FormItem>
            </Col>
            <Col span="12">
              <span class="form-tips">*使用该功能，请设置网络时间服务器</span>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="单日最大短信数">
                <Input v-model="formData.controlOneDayMaxSmsNum" placeholder="0 表示不启用"></Input>
              </FormItem>
            </Col>
            <Col span="12">
              <span class="form-tips">*使用该功能，请设置网络时间服务器</span>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="单月最大短信数">
                <Input v-model="formData.controlOneMonthMaxSmsNum" placeholder="0 表示不启用"></Input>
              </FormItem>
            </Col>
            <Col span="12">
              <span class="form-tips">*使用该功能，请设置网络时间服务器</span>
            </Col>
          </Row>

        </template>
        <FormItem style="margin-top: 15px;">
          <Button type="primary" @click="handleSubmit">确定</Button>
          <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
        </FormItem>
      </Card>

      <template v-if="formData.smsControlMode === 1">
        <Card title="短信统计" class="card-content">
          <Table :columns="tableColumns" :data="formData.smsControl_SmsStatistics">
            <template slot="operation" slot-scope="{ row,index }">
              <!-- TODO 操作 -->
            </template>
          </Table>
        </Card>
      </template>
    </Form>
  </div>
</template>

<script>
import { genarateOptions, genaratePorts } from '@/libs/genarateOptions'
import { modeOptions } from './options'

export default {
  name: 'control',
  data () {
    return {
      formData: {
        smsControlMode: 0,
        smsExhausetChangeCard: 0,
        onlyStatisticSuccSms: 0,
        subPortSetting: 0,
        controlCumulMaxSmsNum: 0,
        controlOneDayMaxSmsNum: 0,
        controlOneMonthMaxSmsNum: 0,
        smsControl_SmsStatistics: genaratePorts(32, { status: '', cumulSms: '', cumulRemain: '', daySms: '', dayRemain: '', monthSms: '', MonthRemain: '' })
      },
      modeOptions: genarateOptions(modeOptions),
      tableColumns: [
        {
          type: 'selection',
          align: 'center',
          width: 60
        },
        {
          key: 'port',
          title: '端口',
          align: 'center'
        },
        {
          key: 'status',
          title: '状态',
          align: 'center'
        },
        {
          key: 'cumulSms',
          title: '累计短信',
          align: 'center'
        },
        {
          key: 'cumulRemain',
          title: '累计剩余',
          align: 'center'
        },
        {
          key: 'daySms',
          title: '当日短信',
          align: 'center'
        },
        {
          key: 'dayRemain',
          title: '当日剩余',
          align: 'center'
        },
        {
          key: 'monthSms',
          title: '当月短信',
          align: 'center'
        },
        {
          key: 'monthRemain',
          title: '当月剩余',
          align: 'center'
        },
        {
          key: 'operation',
          title: '操作',
          slot: 'operation'
        }
      ]
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
