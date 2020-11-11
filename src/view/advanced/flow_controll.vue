<template>
  <div class="page-content">
    <h1 class="page-title">呼叫流量控制</h1>
    <Form :model="formData" :label-width="180">
      <Card title="基本设置" class="card-content">
        <div class="button-wrapper">
          <Button type="primary" @click="add">添加</Button>
        </div>
        <Table :columns="tableColumns" :data="formData.callFlowControl">
          <template slot="controlType" slot-scope="{index}">
            <Select transfer v-model="formData.callFlowControl[index].controlType">
              <Option v-for="item in controlTypeOptions" :value="item.value" :key="item.value">{{item.label}}</Option>
            </Select>
          </template>
          <template slot="controlCycle" slot-scope="{index}">
            <Input type="number" v-model="formData.callFlowControl[index].controlCycle"></Input>
          </template>
          <template slot="maxValue" slot-scope="{index}">
            <Input type="number" v-model="formData.callFlowControl[index].maxValue"></Input>
          </template>
          <template slot="operation" slot-scope="{index}">
            <Button type="primary" @click="remove(index)">删除</Button>
          </template>
        </Table>
        <FormItem style="margin-top:10px;">
          <Button type="primary" @click="handleSubmit">确定</Button>
          <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
        </FormItem>
      </Card>
    </Form>
  </div>
</template>

<script>
import mixins from '@/mixins'

import { genarateOptions } from '@/libs/genarateOptions'
import { controlTypeOptions } from './options'
export default {
  name: 'calling_gprs',
  mixins: [mixins],

  data () {
    return {
      formData: {
        callFlowControl: []
      },
      tableColumns: [
        {
          key: 'controlType',
          title: '控制类型',
          slot: 'controlType'
        },
        {
          key: 'controlCycle',
          title: '控制周期',
          slot: 'controlCycle'
        },
        {
          key: 'maxValue',
          title: '最大值',
          slot: 'maxValue'
        },
        {
          key: 'operation',
          title: '操作',
          slot: 'operation'
        }
      ],
      controlTypeOptions: genarateOptions(controlTypeOptions)
    }
  },
  methods: {
    add () {
      this.formData.callFlowControl.push({
        controlType: 0,
        controlCycle: 0,
        maxValue: 0
      })
    },
    remove (index) {
      this.formData.callFlowControl.splice(index, 1)
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/common';

</style>
