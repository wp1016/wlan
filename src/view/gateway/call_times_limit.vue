<template>
  <div class="page-content">
    <h1 class="page-title">通话次数限制</h1>
    <Form :model="formData" :label-width="180">
      <Card class="card-content" title="基本设置">
        <Row>
          <Col span="12">
            <FormItem label="限制模式">
              <Select v-model="formData.conversationNumLimitMode">
                <Option v-for="item in conversationNumLimitModeOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        <template v-if="formData.conversationNumLimitMode === 1">
          <Row>
            <Col span="12">
              <FormItem label="计时开始日">
                <Input placeholder="1" v-model="formData.conversaNumLimit_TimStartDay" type="number"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="累计通话最大次数">
                <Input placeholder="0 表示不启用" v-model="formData.conversaNumLimit_CumulConversaMaxNum" type="number"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="单日通话最大次数">
                <Input placeholder="0 表示不启用" v-model="formData.conversaNumLimit_DayConversaMaxNum" type="number"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="单月通话最大次数">
                <Input placeholder="0 表示不启用" v-model="formData.conversaNumLimit_MonthConversaMaxNum" type="number"></Input>
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
        <Table :columns="tableColumns" :data="formData.conversaNumStatistics"></Table>
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
        conversationNumLimitMode: 0,
        conversaNumLimit_TimStartDay: 1,
        conversaNumLimit_CumulConversaMaxNum: 0,
        conversaNumLimit_DayConversaMaxNum: 0,
        conversaNumLimit_MonthConversaMaxNum: 0,
        conversaNumStatistics: [
          {
            port: '1A',
            status: 'IDLE',
            cumulConversa_Remain: '',
            dayConversa_Remain: '',
            monthConversa_Remain: ''
          }
        ]
      },
      conversationNumLimitModeOptions: genarateOptions(callDurationDataSourceOptions),
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
          key: 'cumulConversa_Remain',
          title: '累计通话/累计剩余'
        },
        {
          key: 'dayConversa_Remain',
          title: '当日通话/当日剩余'
        },
        {
          key: 'monthConversa_Remain',
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
