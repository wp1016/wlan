<template>
  <div class="page-content">
    <h1 class="page-title">USSD命令</h1>
    <Form :model="formData" :label-width="180">
      <Card class="card-content" title="USSD自动发送">
        <Row>
          <Col span="2">
            <FormItem :label-width="10">
              <Checkbox :true-value="1" :false-value="0" v-model="formData.ussdAutoCycleSend[0].use">周期发送</Checkbox>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="最小分钟" :label-width="120">
              <Input type="number" :disabled="!formData.ussdAutoCycleSend[0].use" v-model="formData.ussdAutoCycleSend[0].minMinutes"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="最大分钟" :label-width="120">
              <Input type="number" :disabled="!formData.ussdAutoCycleSend[0].use" v-model="formData.ussdAutoCycleSend[0].maxMinutes"></Input>
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="USSD" :label-width="120">
              <Input :disabled="!formData.ussdAutoCycleSend[0].use" v-model="formData.ussdAutoCycleSend[0].ussd"></Input>
            </FormItem>
          </Col>
          <Col span="2"></Col>
        </Row>

        <Row>
          <Col span="2">
            <FormItem :label-width="10">
              <Checkbox :true-value="1" :false-value="0" v-model="formData.ussdAutoCallDuration[0].use">呼叫时长</Checkbox>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="时长分钟" :label-width="120">
              <Input type="number" :disabled="!formData.ussdAutoCallDuration[0].use" v-model="formData.ussdAutoCallDuration[0].durationMinute"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="计费周期（秒）" :label-width="120">
              <FormLabelTooltip slot="label" label="计费周期（秒）" content="比如中国移动通话1秒按照1分钟计费，59秒也是按照1分钟计费，此时最小计量单位即为60"/>
              <Input type="number" :disabled="!formData.ussdAutoCallDuration[0].use" v-model="formData.ussdAutoCallDuration[0].billingCycle"></Input>
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="USSD" :label-width="120">
              <Input :disabled="!formData.ussdAutoCallDuration[0].use" v-model="formData.ussdAutoCallDuration[0].ussd"></Input>
            </FormItem>
          </Col>
          <Col span="2">
            <FormItem :label-width="20">
              <Checkbox :true-value="1" :false-value="0" v-model="formData.ussdAutoCallDuration[0].hangUp">强制挂机</Checkbox>
            </FormItem>
          </Col>
        </Row>

        <Row>
          <Col span="2">
            <FormItem :label-width="10">
              <Checkbox :true-value="1" :false-value="0" v-model="formData.ussdAutoTimingSend1[0].use">定时发送1</Checkbox>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="开始时间" :label-width="120">
              <TimePicker format="HH:mm" :disabled="!formData.ussdAutoTimingSend1[0].use" v-model="formData.ussdAutoTimingSend1[0].startTime"></TimePicker>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="结束时间" :label-width="120">
              <TimePicker format="HH:mm" :disabled="!formData.ussdAutoTimingSend1[0].use" v-model="formData.ussdAutoTimingSend1[0].endTime"></TimePicker>
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="USSD" :label-width="120">
              <Input :disabled="!formData.ussdAutoTimingSend1[0].use" v-model="formData.ussdAutoTimingSend1[0].ussd"></Input>
            </FormItem>
          </Col>
          <Col span="2">
            <FormItem :label-width="20">
              <Checkbox :true-value="1" :false-value="0" v-model="formData.ussdAutoTimingSend1[0].hangUp">强制挂机</Checkbox>
            </FormItem>
          </Col>
        </Row>

        <Row>
          <Col span="2">
            <FormItem :label-width="10">
              <Checkbox :true-value="1" :false-value="0" v-model="formData.ussdAutoTimingSend2[0].use">定时发送2</Checkbox>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="开始时间" :label-width="120">
              <TimePicker format="HH:mm" :disabled="!formData.ussdAutoTimingSend2[0].use" v-model="formData.ussdAutoTimingSend2[0].startTime"></TimePicker>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="结束时间" :label-width="120">
              <TimePicker format="HH:mm" :disabled="!formData.ussdAutoTimingSend2[0].use" v-model="formData.ussdAutoTimingSend2[0].endTime"></TimePicker>
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="USSD" :label-width="120">
              <Input :disabled="!formData.ussdAutoTimingSend2[0].use" v-model="formData.ussdAutoTimingSend2[0].ussd"></Input>
            </FormItem>
          </Col>
          <Col span="2">
            <FormItem :label-width="20">
              <Checkbox :true-value="1" :false-value="0" v-model="formData.ussdAutoTimingSend2[0].hangUp">强制挂机</Checkbox>
            </FormItem>
          </Col>
        </Row>

        <Row>
          <Col span="2">
            <FormItem :label-width="10">
              <Checkbox :true-value="1" :false-value="0" v-model="formData.ussdAutoTimingSend3[0].use">定时发送3</Checkbox>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="开始时间" :label-width="120">
              <TimePicker format="HH:mm" :disabled="!formData.ussdAutoTimingSend3[0].use" v-model="formData.ussdAutoTimingSend3[0].startTime"></TimePicker>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="结束时间" :label-width="120">
              <TimePicker format="HH:mm" :disabled="!formData.ussdAutoTimingSend3[0].use" v-model="formData.ussdAutoTimingSend3[0].endTime"></TimePicker>
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="USSD" :label-width="120">
              <Input :disabled="!formData.ussdAutoTimingSend3[0].use" v-model="formData.ussdAutoTimingSend3[0].ussd"></Input>
            </FormItem>
          </Col>
          <Col span="2">
            <FormItem :label-width="20">
              <Checkbox :true-value="1" :false-value="0" v-model="formData.ussdAutoTimingSend3[0].hangUp">强制挂机</Checkbox>
            </FormItem>
          </Col>
        </Row>

        <FormItem>
          <Button type="primary" @click="handleSubmit">确定</Button>
          <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
        </FormItem>
      </Card>

      <Card class="card-content" title="USSD列表">
        <Row>
          <Col span="12">
            <FormItem label="USSD命令">
              <Input v-model="formData.ussdCmd[0].cmd"></Input>
            </FormItem>
          </Col>
        </Row>

        <Row>
          <Col span="12">
            <FormItem label="端口">
              <Input v-model="formData.ussdCmd[0].port"></Input>
            </FormItem>
          </Col>
          <Col span="12" style="text-align: right;">
            <Button type="primary">发送</Button>
          </Col>
        </Row>

        <Table :columns="tableColumn" :data="formData.ussdList">

        </Table>
      </Card>
    </Form>
  </div>
</template>

<script>
import FormLabelTooltip from '@/components/formLabelToolTip'

import { genaratePorts } from '@/libs/genarateOptions'

export default {
  name: 'ussd',
  components: {
    FormLabelTooltip
  },
  data () {
    return {
      formData: {
        ussdAutoCycleSend: [
          {
            use: 0,
            minMinutes: 0,
            maxMinutes: 0,
            ussdCmd: ''
          }
        ],
        ussdAutoCallDuration: [
          {
            use: 0,
            durationMinute: 0,
            billingCycle: 0,
            ussdCmd: '',
            hangUp: 0
          }
        ],
        ussdAutoTimingSend1: [
          {
            use: 0,
            startTime: '',
            endTime: '',
            ussdCmd: '',
            hangUp: 0
          }
        ],
        ussdAutoTimingSend2: [
          {
            use: 0,
            startTime: '',
            endTime: '',
            ussdCmd: '',
            hangUp: 0
          }
        ],
        ussdAutoTimingSend3: [
          {
            use: 0,
            startTime: '',
            endTime: '',
            ussdCmd: '',
            hangUp: 0
          }
        ],
        ussdCmd: [
          {
            cmd: '',
            sendCmd: 0,
            port: ''
          }
        ],
        ussdList: genaratePorts(32, { status: 'IDLE', cmd: '', response: '', operation: '' })
      },
      tableColumn: [
        {
          type: 'selection',
          width: 60
        },
        {
          key: 'port',
          title: '端口'
        },
        {
          key: 'status',
          title: '状态'
        },
        {
          key: 'cmd',
          title: '命令'
        },
        {
          key: 'response',
          title: '响应'
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
