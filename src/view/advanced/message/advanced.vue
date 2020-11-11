<template>
  <Form :model="formData" :label-width="180">
    <Card title="高级设置" class="card-content">
      <div class="card-wrapper">
        <Row>
          <Col span="12">
            <FormItem label="转发短信">
              <i-switch size="large" v-model="formData.forwardSms" :true-value="1" :false-value="0">
                <span slot="open">启用</span>
                <span slot="close">禁用</span>
              </i-switch>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="报告消息类型">
              <Select transfer v-model="formData.reportSmsType">
                <Option v-for="item in reportSmsTypeOptions" :value="item.value" :key="item.value">{{item.label}}</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="提交响应">
              <Select transfer v-model="formData.submitResponse">
                <Option v-for="item in submitResponseOptions" :value="item.value" :key="item.value">{{item.label}}</Option>
              </Select>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="提交超时">
              <Input type="number" v-model="formData.submitTimout"><span slot="append">分钟</span></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="报告响应">
              <Select transfer v-model="formData.reportResponse">
                <Option v-for="item in reportResponseOptions" :value="item.value" :key="item.value">{{item.label}}</Option>
              </Select>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="报告超时">
              <Input type="number" v-model="formData.reportTimout"><span slot="append">分钟</span></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="路由记忆">
              <i-switch size="large" v-model="formData.routeMemory" :true-value="1" :false-value="0">
                <span slot="open">启用</span>
                <span slot="close">禁用</span>
              </i-switch>
            </FormItem>
          </Col>
        </Row>
      </div>
      <FormItem style="margin-top: 15px;">
        <Button type="primary" @click="handleSubmit">确定</Button>
        <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
      </FormItem>
    </Card>
  </Form>
</template>

<script>
import mixins from '@/mixins'

import { genarateOptions } from '@/libs/genarateOptions'
import { submitResponseOptions, reportSmsTypeOptions, reportResponseOptions } from './options'
export default {
  name: 'auto',
  mixins: [mixins],

  data () {
    return {
      formData: {
        forwardSms: 0,
        reportSmsType: 0,
        submitResponse: 0,
        submitTimout: 0,
        reportResponse: 0,
        reportTimout: 0,
        routeMemory: 0
      },
      reportSmsTypeOptions: genarateOptions(reportSmsTypeOptions),
      submitResponseOptions: genarateOptions(submitResponseOptions),
      reportResponseOptions: genarateOptions(reportResponseOptions)
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../../assets/css/common';

</style>
