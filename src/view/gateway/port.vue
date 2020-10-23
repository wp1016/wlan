<template>
  <div class="page-content">
    <h1 class="page-title">端口设置</h1>
    <Form :model="formData" :label-width="180">
      <Card class="card-content" title="基本设置">
        <Row>
          <Col span="12">
            <FormItem label="频段选择">
              <Select v-model="formData.frequencyBandSelect">
                <Option v-for="item in bandOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="网络类型">
              <Select v-model="formData.netWorkType">
                <Option v-for="item in netTypeOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="注册类型">
              <Select v-model="formData.registerType">
                <Option v-for="item in registerTypeOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        <FormItem label="VoLTE">
          <i-switch v-model="formData.volte" size="large">
            <span slot="open">启用</span>
            <span slot="close">禁用</span>
          </i-switch>
        </FormItem>
        <FormItem label="不规则卡支持">
          <i-switch v-model="formData.irregularCardSupport" size="large">
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
        <Table :columns="tableColumns" :data="tableData">
          <template slot-scope="{ row }" slot="simCardAppoint">
            <CheckboxGroup v-model="row.simCardAppoint">
              <Checkbox v-for="item in CheckBoxOptions" :key="item.value" :label="item.value">{{item.label}}</Checkbox>
            </CheckboxGroup>
          </template>

          <template slot-scope="{ row }" slot="lockOperators">
            <Input v-model="row.lockOperators"></Input>
          </template>

          <template slot-scope="{ row }" slot="inputVolume">
            <Input v-model="row.inputVolume"></Input>
          </template>

          <template slot-scope="{ row }" slot="outputVolume">
            <Input v-model="row.outputVolume"></Input>
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
import { genarateOptions } from '@/libs/genarateOptions'
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
        volte: false,
        irregularCardSupport: false
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
          title: '基站',
          key: 'baseStation'
        },
        {
          title: '运营商',
          key: 'operators'
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
          title: 'IMEI',
          key: 'imei'
        }
      ],
      tableData: [
        {
          port: 1,
          simCardAppoint: [0, 1, 2, 3],
          lockOperators: 0,
          baseStation: 0,
          operators: 0,
          inputVolume: 0,
          outputVolume: 12,
          imei: '864480040110321'
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
