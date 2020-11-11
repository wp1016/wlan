<template>
  <div class="page-content">
    <h1 class="page-title">当前基站</h1>
    <Form :model="formData" :label-width="180">
      <Card title="基本设置" class="card-content">
        <div class="card-wrapper">
          <Row>
            <Col span="12">
              <FormItem label="最大基站数">
                <Input v-model="formData.baseStationMaxNum" type="number"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="最低有效信">
                <Input v-model="formData.effectMin" type="number"><span slot="append">dbm</span></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="切换周期">
                <Input v-model="formData.changeCycle" type="number"><span slot="append">分钟</span></Input>
              </FormItem>
            </Col>
          </Row>
          <FormItem>
            <Button type="primary" @click="handleSubmit">确定</Button>
            <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
          </FormItem>
        </div>
      </Card>

      <Card title="基站设置&amp;操作" class="card-content">
        <Table :columns="tableColumns" :data="formData.baseStationSetting">
          <template slot="baseStationSelect" slot-scope="{ row, index }">
            <Select transfer v-model="formData.baseStationSetting[index].baseStationSelect">
              <Option v-for="item in baseStationSelectOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
            </Select>
          </template>
          <template slot="whiteNameList" slot-scope="{ row, index }">
            <Input type="textarea" :autosize="{maxRows: 4}" v-model="formData.baseStationSetting[index].whiteNameList"></Input>
          </template>
          <template slot="blackNameList" slot-scope="{ row, index }">
            <Input type="textarea" :autosize="{maxRows: 4}" v-model="formData.baseStationSetting[index].blackNameList"></Input>
          </template>
          <template slot="operation" slot-scope="{ row, index }">
            <Button type="primary">刷新</Button>
          </template>
        </Table>
        <FormItem style="margin-top: 15px;">
          <Button type="primary" @click="handleSubmit">确定</Button>
          <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
        </FormItem>
      </Card>
    </Form>
  </div>
</template>

<script>
import mixins from '@/mixins'

import { genaratePorts, genarateOptions } from '@/libs/genarateOptions'
import { baseStationSelectOptions } from './options'
export default {
  name: 'current_base_station',
  mixins: [mixins],

  data () {
    return {
      editIndex: -1,
      formData: {
        baseStationMaxNum: 5,
        effectMin: 10,
        changeCycle: 5,
        baseStationSetting: genaratePorts(32, { baseStationSelect: 0, currentBaseStation: '', whiteNameList: '', blackNameList: '' })
      },
      baseStationSelectOptions: genarateOptions(baseStationSelectOptions),
      tableColumns: [
        {
          key: 'port',
          title: '端口号'
        },
        {
          key: 'baseStationSelect',
          title: '基站选择',
          slot: 'baseStationSelect'
        },
        {
          key: 'currentBaseStation',
          title: '当前基站'
        },
        {
          key: 'whiteNameList',
          title: '白名单列表',
          slot: 'whiteNameList'
        },
        {
          key: 'blackNameList',
          title: '黑名单列表',
          slot: 'blackNameList'
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
    save (index) {
      this.editIndex = -1
    },
    edit (index) {
      this.editIndex = index
    },
    remove (index) {
      this.formData.baseStationSetting.splice(index, 1)
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/common';

</style>
