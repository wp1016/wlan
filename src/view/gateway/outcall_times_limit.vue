<template>
  <div class="page-content">
    <h1 class="page-title">呼叫次数限制</h1>
    <Form :model="formData" :label-width="180">
      <Card class="card-content" title="基本设置">
        <Row>
          <Col span="12">
            <FormItem label="限制模式">
              <Select v-model="formData.callNumLimitMode">
                <Option v-for="item in callNumLimitModeOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        <template v-if="formData.callNumLimitMode === 1">
          <Row>
            <Col span="12">
              <FormItem label="计时开始日">
                <Input placeholder="1" v-model="formData.callNumLimit_TimStartDay" type="number"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="累计呼叫最大次数">
                <Input placeholder="0 表示不启用" v-model="formData.callNumLimit_CumulCallMaxNum" type="number"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="单日呼叫最大次数">
                <Input placeholder="0 表示不启用" v-model="formData.callNumLimit_DayCallMaxNum" type="number"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="单月呼叫最大次数">
                <Input placeholder="0 表示不启用" v-model="formData.callNumLimit_MonthCallMaxNum" type="number"></Input>
              </FormItem>
            </Col>
          </Row>
        </template>
        <FormItem style="margin-top: 15px;">
          <Button type="primary" @click="handleSubmit">确定</Button>
          <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
        </FormItem>
      </Card>

      <Card title="呼叫次数统计">
        <Table :columns="tableColumns" :data="formData.callNumStatistics"></Table>
      </Card>
    </Form>
  </div>
</template>

<script>
import FormLabelTooltip from '@/components/formLabelToolTip'

import { genarateOptions } from '@/libs/genarateOptions'
import { callDurationDataSourceOptions } from './options'
export default {
  name: 'outcall_times_limit',
  components: {
    FormLabelTooltip
  },
  data () {
    return {
      formData: {
        callNumLimitMode: 0,
        callNumLimit_TimStartDay: 1,
        callNumLimit_CumulCallMaxNum: 0,
        callNumLimit_DayCallMaxNum: 0,
        callNumLimit_MonthCallMaxNum: 0,
        callNumStatistics: [
          {
            port: '1A',
            status: 'IDLE',
            cumulCall_Remain: '',
            dayCall_Remain: '',
            monthCall_Remain: ''
          }
        ]
      },
      callNumLimitModeOptions: genarateOptions(callDurationDataSourceOptions),
      tableColumns: [
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
          key: 'cumulCall_Remain',
          title: '累计通话/累计剩余'
        },
        {
          key: 'dayCall_Remain',
          title: '当日通话/当日剩余'
        },
        {
          key: 'monthCall_Remain',
          title: '当月通话/当月剩余'
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
