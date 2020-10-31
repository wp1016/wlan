<template>
  <div class="page-content">
    <h1 class="page-title">呼叫时长限制</h1>
      <Form :model="formData" :label-width="180">
        <Card class="card-content" title="呼叫时长设置">
          <Row>
            <Col span="12">
              <FormItem label="呼叫时长数据源">
                <Select v-model="formData.callDurationDataSource">
                  <Option v-for="item in callDurationDataSourceOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
                </Select>
              </FormItem>
            </Col>
            <Col span="12"><span class="form-tips">*修改该配置需要重启设备</span></Col>
          </Row>
          <template v-if="formData.callDurationDataSource===1">
            <Row>
              <Col span="12">
                <FormItem label="使用全局设置">
                  <FormLabelTooltip slot="label" label="使用全局设置">
                    <template slot="content">
                      <p><strong>启用</strong>网关各个通道全部使用统一呼叫时长</p>
                      <p><strong>禁用</strong>网关各个通道可分离，设置不同的呼叫时长</p>
                    </template>
                  </FormLabelTooltip>
                  <i-switch v-model="formData.useGlobalSetting" size="large" :true-value="1" :false-value="0">
                    <span slot="open">启用</span>
                    <span slot="close">禁用</span>
                  </i-switch>
                </FormItem>
              </Col>
              <Col span="12"><span class="form-tips">* 所有的端口使用相同的呼叫时长限制</span></Col>
            </Row>

            <Row>
              <Col span="12">
                <FormItem label="累计最大时长">
                  <FormLabelTooltip slot="label" label="累计最大时长" content="每张卡的最大呼叫时长，达到这个阈值，SIM卡将被锁定，只有点击复位才能恢复"/>
                  <Input type="number" v-model="formData.cumulativeMaxDuration">
                    <span slot="append">分钟</span>
                  </Input>
                </FormItem>
              </Col>
            </Row>

             <Row>
              <Col span="12">
                <FormItem label="单日最大时长">
                  <FormLabelTooltip slot="label" label="单日最大时长" content="每张卡每天的最大呼叫时长，达到这个阈值，SIM卡将被锁定，只有点击复位才能恢复"/>
                  <Input type="number" v-model="formData.oneDayMaxDuration">
                    <span slot="append">分钟</span>
                  </Input>
                </FormItem>
              </Col>
              <Col span="12">
                <span class="form-tips">使用该功能，请设置网络时间服务器</span>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="单月最大时长">
                  <Input type="number" v-model="formData.oneMonthMaxDuration">
                    <span slot="append">分钟</span>
                  </Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="计时开始日">
                  <Input type="number" v-model="formData.timStartDay"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="最小计量单位">
                  <FormLabelTooltip slot="label" label="最小计量单位" content="比如中国移动通话1秒按照1分钟计费，59秒也是按照1分钟计费，此时最小计量单位即为60"/>

                  <Input type="number" v-model="formData.minMeasureUnit">
                    <span slot="append">秒</span>
                  </Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="显示单位">
                  <FormLabelTooltip slot="label" label="最小计量单位" content="数据列表中每分钟包含的秒数，如果值为10秒，计费秒数为72秒，那么显示分钟数为8分钟"/>

                  <Input type="number" v-model="formData.displayUnit">
                    <span slot="append">秒</span>
                  </Input>
                </FormItem>
              </Col>
            </Row>

            <Row>
              <Col span="12">
                <FormItem label="计时误差">
                  <Input type="number" v-model="formData.timError">
                    <span slot="append">秒</span>
                  </Input>
                </FormItem>
              </Col>
            </Row>

            <Row>
              <Col span="12">
                <FormItem label="立即挂机">
                  <FormLabelTooltip slot="label" label="立即挂机">
                    <template slot="content">
                      <p><strong>启用：</strong>一旦达到最大呼叫时长将立即挂机并锁定SIM卡</p>
                      <p><strong>禁用：</strong>达到最大呼叫时长时不会立即挂机，直到最后一通电话结束后才锁定SIM卡</p>
                    </template>
                  </FormLabelTooltip>
                  <i-switch v-model="formData.hangUpNow">
                    <span slot="open">启用</span>
                    <span slot="close">禁用</span>
                  </i-switch>
                </FormItem>
              </Col>
              <Col span="12"><span class="form-tips">* 最大呼叫时长用完后立即挂机</span></Col>
            </Row>
          </template>
          <FormItem style="margin-top: 15px;">
            <Button type="primary" @click="handleSubmit">确定</Button>
            <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
          </FormItem>
        </Card>

        <Card class="card-content" title="呼叫时长统计">
          <p slot="title">
            <Tooltip  transfer placement="top" max-width="350">
              呼叫时长统计<Icon type="ios-information-circle-outline" size="12" color="#2d8cf0"/>
              <p slot="content">
                红色<span style="color: #f00">N/A</span>：读取数据错误
              </p>
            </Tooltip>
            <Table :columns="tableColumns" :data="formData.callDurationStatistics"></Table>
          </p>
        </Card>
      </Form>
  </div>
</template>

<script>
import FormLabelTooltip from '@/components/formLabelToolTip'

import { genarateOptions } from '@/libs/genarateOptions'
import { callDurationDataSourceOptions } from './options'

export default {
  name: 'callDurationSetting',
  components: {
    FormLabelTooltip
  },
  data () {
    return {
      formData: {
        callDurationDataSource: 0,
        useGlobalSetting: 0,
        cumulativeMaxDuration: 0,
        oneDayMaxDuration: 0,
        oneMonthMaxDuration: 0,
        timStartDay: 1,
        minMeasureUnit: 60,
        displayUnit: 60,
        timError: 0,
        hangUpNow: 0,
        callDurationStatistics: [
          {
            port: '1A',
            status: 'IDLE',
            cumulCall_Remain: '',
            dayCall_Remain: '',
            monthCall_Remain: ''
          }
        ]
      },
      callDurationDataSourceOptions: genarateOptions(callDurationDataSourceOptions),
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
          key: 'cumulCall',
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
<style lang="less">
@import '../../assets/css/common';

</style>
