<template>
  <div class="page-content">
    <h1 class="page-title">端口设置</h1>
    <Form :model="formData" :label-width="180">
      <Card class="card-content" title="基本设置">
        <Row>
          <Col span="12">
            <FormItem label="频段选择">
              <Select transfer v-model="formData.frequencyBandSelect">
                <Option v-for="item in bandOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="网络类型">
              <Select transfer v-model="formData.netWorkType">
                <Option v-for="item in netTypeOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="注册类型">
              <Select transfer v-model="formData.registerType">
                <Option v-for="item in registerTypeOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        <FormItem label="VoLTE">
          <i-switch v-model="formData.volte" :true-value="1" :false-value="0" size="large">
            <span slot="open">启用</span>
            <span slot="close">禁用</span>
          </i-switch>
        </FormItem>
        <FormItem label="不规则卡支持">
          <i-switch v-model="formData.irregularCardSupport" :true-value="1" :false-value="0" size="large">
            <span slot="open">启用</span>
            <span slot="close">禁用</span>
          </i-switch>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit">确定</Button>
          <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
        </FormItem>
      </Card>

       <Card class="card-content" title="端口硬件参数">
        <Table :columns="tableColumns" :data="formData.portHardWareParamList">
          <template slot-scope="{ row, index }" slot="simCardAppoint">
            <CheckboxGroup v-model="formData.portHardWareParamList[index].simCardAppoint">
              <Checkbox v-for="item in CheckBoxOptions" :key="item.value" :label="item.value">{{item.label}}</Checkbox>
            </CheckboxGroup>
          </template>

          <template slot-scope="{ row, index }" slot="lockOperators">
            <Input v-model="formData.portHardWareParamList[index].lockOperators"></Input>
          </template>

          <template slot-scope="{ row, index }" slot="inputVolume">
            <Input v-model="formData.portHardWareParamList[index].inputVolume"></Input>
          </template>

          <template slot-scope="{ row, index }" slot="outputVolume">
            <Input v-model="formData.portHardWareParamList[index].outputVolume"></Input>
          </template>

          <template slot="operation" slot-scope="{row,index}">
            <Button type="primary" size="small">重启</Button>
            <Button size="small" style="margin-left:8px;">更多</Button>
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
import {
  genarateOptions,
  genaratePorts
} from '@/libs/genarateOptions'
import { feqBandOptions, netTypeOptions, registryTypeOptions } from './options'

export default {
  name: 'port',
  data () {
    return {
      editIndex: -1,
      formData: {
        frequencyBandSelect: 0,
        netWorkType: 0,
        registerType: 0,
        volte: 0,
        irregularCardSupport: 0,
        portHardWareParamList: genaratePorts(32, {
          portType: 'GSM',
          simCardAppoint: [],
          lockOperators: 0,
          inputVolume: 0,
          outputVolume: 12,
          Balance: 0
        })
      },
      bandOptions: genarateOptions(feqBandOptions),
      netTypeOptions: genarateOptions(netTypeOptions),
      registerTypeOptions: genarateOptions(registryTypeOptions),
      CheckBoxOptions: [
        {
          value: 0,
          label: 'A'
        },
        {
          value: 1,
          label: 'B'
        },
        {
          value: 2,
          label: 'C'
        },
        {
          value: 3,
          label: 'D'
        }
      ],
      tableColumns: [
        {
          type: 'selection',
          width: 80
        },
        {
          key: 'port',
          title: '端口'
        },
        {
          key: 'simCardAppoint',
          title: 'SIM卡指定',
          slot: 'simCardAppoint',
          width: 200
        },
        {
          title: '锁定运营商',
          key: 'lockOperators',
          width: 100,
          slot: 'lockOperators'
        },
        {
          title: '输入音量',
          key: 'inputVolume',
          slot: 'inputVolume'
        },
        {
          title: '输出音量',
          key: 'outputVolume',
          slot: 'outputVolume'
        },
        {
          title: '余额',
          key: 'Balance'
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
