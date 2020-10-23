
<template>
  <div class="page-content">
    <h1 class="page-title">SIM卡号码设置</h1>
    <Form :model="formData" :label-width="180">
        <Card class="card-content" title="基本设置">
        <Row>
          <Col span="12">
            <FormItem label="号码存储">
              <i-switch v-model="formData.simNumberStorage" size="large">
                <span slot="open">启用</span>
                <span slot="close">禁用</span>
              </i-switch>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="号码来源">
              <Select v-model="formData.simNumberSource">
                <Option v-for="item in simNumberSourceOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        <FormItem>
          <Button type="primary" @click="handleSubmit">确定</Button>
          <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
        </FormItem>
      </Card>

      <Card class="card-content" title="自动查询号码">
        <div class="button-wrapper">
          <Button type="primary">添加号码</Button>
        </div>
        <Table :columns="tableColumns" :data="formData.autoQueryNumber"></Table>
        <FormItem>
          <Button type="primary" @click="handleSubmit">确定</Button>
          <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
        </FormItem>
      </Card>

      <Card class="card-content" title="SIM卡号码">

      </Card>
    </Form>
  </div>
</template>

<script>
import { genarateOptions } from '@/libs/genarateOptions'
import { simNumberSourceOptions } from './options'

export default {
  name: 'number',
  data () {
    return {
      formData: {
        simNumberStorage: false,
        simNumberSource: 0,
        autoQueryNumber: [
          {
            operatorsId: '222',
            methods: 'auto',
            content: '',
            key: '',
            serviceNum: '',
            recvNum: '',
            numPrefixReplace: ''
          }
        ]
      },
      simNumberSourceOptions: genarateOptions(simNumberSourceOptions),
      tableColumns: [
        {
          key: 'operatorsId',
          title: '运营商ID'
        },
        {
          key: 'method',
          title: '方法'
        },
        {
          key: 'content',
          title: '内容'
        },
        {
          key: 'key',
          title: '关键字'
        },
        {
          key: 'serviceNum',
          title: '服务号码'
        },
        {
          key: 'recvNum',
          title: '接收号码'
        },
        {
          key: 'numPrefixReplace',
          title: '号码前缀替换'
        }
      ],
      bTableColumns: [],
      cTableColumns: []
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
.button-wrapper{
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}
</style>
