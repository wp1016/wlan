<template>
  <Form :model="formData" :label-width="180">
    <Card title="USSD操作" class="card-content">
      <div class="card-wrapper">
        <Row>
          <Col span="20">
            <FormItem class="form-item-center" label="请选择端口">
              <CheckallList v-model="formData.selectPort"/>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="模块指令操作">
              <Input type="textarea" v-model="formData.ussdCmdOperat"></Input>
            </FormItem>
          </Col>
          <Col span="12" style="text-align: left; padding-left: 18px;">
            <Button type="primary">发送</Button>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="USSD指令操作">
              <Input type="textarea" v-model="formData.moduleCmdOperat"></Input>
            </FormItem>
          </Col>
          <Col span="12" style="text-align: left; padding-left: 18px;">
            <Button type="primary">发送</Button>
            <Button style="margin-left: 10px;" >查询所有卡</Button>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="定时查询时间">
              <Input v-model="formData.timeQuery"></Input>
            </FormItem>
          </Col>
          <Col span="12" style="text-align: left; padding-left: 18px;">
            <Button type="primary">保存</Button>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="手动呼叫">
              <Input v-model="formData.handCall"></Input>
            </FormItem>
          </Col>
          <Col span="12" style="text-align: left; padding-left: 18px;">
            <Button type="primary">启动</Button>
          </Col>
        </Row>
      </div>
      <Table :columns="tableColumns" :data="formData.operationData"></Table>

      <FormItem style="margin-top: 15px;">
        <Button type="primary" @click="handleSubmit">确定</Button>
        <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
      </FormItem>
    </Card>
  </Form>
</template>

<script>
import mixins from '@/mixins'

import CheckallList from '@/components/checkallList'
export default {
  name: 'setting',
  mixins: [mixins],

  components: {
    CheckallList
  },
  data () {
    return {
      formData: {
        selectPort: [],
        moduleCmdOperat: 1,
        ussdCmdOperat: 0,
        timeQuery: 1,
        handCall: 1,
        operationData: []
      },
      checkAll: false,
      indeterminate: false,
      tableColumns: [
        {
          key: 'port',
          title: '端口'
        },
        {
          key: 'Status',
          title: '状态'
        },
        {
          key: 'Context',
          title: '内容'
        },
        {
          key: 'Operation',
          title: '操作'
        }
      ]
    }
  },
  methods: {
    selectAll () {
      if (this.checkAll) {
        this.checkAll = false
        this.formData.selectPort = []
      } else {
        this.formData.selectPort = new Array(32).fill(0).map((item, index) => index + 1)
        this.checkAll = true
      }
      this.indeterminate = false
    },
    selectPort () {
      if (this.formData.selectPort.length === 32) {
        this.checkAll = true
        this.indeterminate = false
      } else if (this.formData.selectPort.length === 0) {
        this.indeterminate = false
        this.checkAll = false
      } else {
        this.checkAll = false
        this.indeterminate = true
      }
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../../assets/css/common';

</style>
