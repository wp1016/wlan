<template>
  <Form :model="formData" :label-width="180">
    <Card title="计费设置" class="card-content">
      <div class="card-wrapper">
        <Row>
          <Col span="12">
            <FormItem label="模拟计费">
              <i-switch v-model="formData.analogBilling" size="large" :true-value="1" :false-value="0">
                <span slot="open">启用</span>
                <span slot="close">禁用</span>
              </i-switch>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="无余额时挂机">
              <i-switch v-model="formData.noBalanceHangUp" size="large" :true-value="1" :false-value="0">
                <span slot="open">启用</span>
                <span slot="close">禁用</span>
              </i-switch>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="运营商来源">
              <Select transfer v-model="formData.operatorsSource">
                <Option v-for="item in operatorsSourceOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="周期查询余额">
              <Input v-model="formData.cycleQueryBalance" type="number"><span slot="append">分钟</span></Input>
            </FormItem>
          </Col>
        </Row>

        <FormItem>
          <Button type="primary" @click="handleSubmit">确定</Button>
          <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
        </FormItem>
      </div>
    </Card>
  </Form>
</template>

<script>
import mixins from '@/mixins'

import { genarateOptions } from '@/libs/genarateOptions'
import { operatorsSourceOptions } from './options'
export default {
  name: 'price',
  mixins: [mixins],

  data () {
    return {
      formData: {
        analogBilling: 0,
        noBalanceHangUp: 0,
        operatorsSource: 0,
        cycleQueryBalance: 0,
        queryBalanceInsufficientCd: 0,
        useLastBalance: 0,
        balanceWaringSendSmsUse: 0,
        balanceWarnSendSmsdstNum: ''
      },
      operatorsSourceOptions: genarateOptions(operatorsSourceOptions)
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../../assets/css/common';

</style>
