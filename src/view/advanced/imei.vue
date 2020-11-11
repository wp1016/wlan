<template>
  <div class="page-content">
    <h1 class="page-title">IMEI设置</h1>
    <Form :model="formData" :label-width="180">
      <Card class="card-content" title="IMEI设置">
        <div class="card-wrapper">
          <Row>
            <Col span="12">
              <FormItem label="IMEI修改模式">
                <Select transfer v-model="formData.imeiRevise">
                  <Option v-for="item in reviseOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>
        </div>
      </Card>

      <Card class="card-content" title="动态IMEI列表" v-if="formData.imeiRevise===1">
        <div class="button-wrapper">
            <Button type="primary" @click="add">添加数据</Button>
        </div>
        </Row>
        <Table :columns="dTableColumns" :data="formData.dynamicImeiList">
          <template slot="imeiFirstValue" slot-scope="{ row, index }">
            <Input v-model="formData.dynamicImeiList[index].imeiFirstValue" v-if="index === editIndex"></Input>
            <span v-else>{{row.imeiFirstValue}}</span>
          </template>

          <template slot="imeiNumber" slot-scope="{ row, index }">
            <Input v-model="formData.dynamicImeiList[index].imeiNumber" v-if="index === editIndex"></Input>
            <span v-else>{{row.imeiNumber}}</span>
          </template>

          <template slot-scope="{row, index}" slot="operation">
            <template v-if="editIndex === index">
              <Button type="primary" size="small" style="margin-right: 5px" @click="save(index)">保存</Button>
            </template>
            <template v-else>
              <Button type="primary" size="small" style="margin-right: 5px" @click="edit(index)">编辑</Button>
              <Button size="small" @click="remove(index)">删除</Button>
            </template>

          </template>
        </Table>
        <FormItem style="margin-top:10px;">
          <Button type="primary" @click="handleSubmit">确定</Button>
          <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
        </FormItem>
      </Card>

      <Card class="card-content" title="基本设置" v-if="formData.imeiRevise===2">
        <div class="card-wrapper">
          <Row>
            <Col span="12">
              <FormItem label="服务器地址">
                <Input v-model="formData.espsGetImeiServIp"></Input>
              </FormItem>
            </Col>
            <Col span="12">
              <span class="form-tips">*如要指定端口，请加 端口</span>
            </Col>
          </Row>
          <FormItem label="状态">
            {{formData.espsGetImeiServStatu}}
          </FormItem>
        </div>
      </Card>

      <Card class="card-content" title="IMEI切换">
        <Row>
          <Col span="6">
            <FormItem label="当切换SIM卡时" :label-width="120">
              <i-switch v-model="formData.whenChangeSimCard" size="large" :true-value="1" :false-value="0">
                <span slot="open">启用</span>
                <span slot="close">禁用</span>
              </i-switch>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="6">
            <FormItem label="连续呼叫失败" :label-width="120">
              <Checkbox v-model="formData.continuousCallFailure" :true-value="1" :false-value="0">启用</Checkbox>
            </FormItem>
          </Col>
          <Col span="9">
            <FormItem label="连续呼叫失败次数">
              <Input v-model="formData.failedNum" :readonly="!formData.continuousCallFailure"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="6">
            <FormItem label="在线时长" :label-width="120">
              <Checkbox v-model="formData.imeiOnlineDuration" :true-value="1" :false-value="0">启用</Checkbox>
            </FormItem>
          </Col>
          <Col span="9">
            <FormItem label="在线时长（分钟）">
              <Input v-model="formData.onlineDuration" :readonly="!formData.imeiOnlineDuration"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="6">
            <FormItem label="呼叫数" :label-width="120">
              <Checkbox v-model="formData.imeiCallNumbers" :true-value="1" :false-value="0">启用</Checkbox>
            </FormItem>
          </Col>
          <Col span="9">
            <FormItem label="呼叫数">
              <Input v-model="formData.callNum" :readonly="!formData.imeiCallNumbers"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="6">
            <FormItem label="通话数" :label-width="120">
              <Checkbox v-model="formData.imeiConversationNum" :true-value="1" :false-value="0">启用</Checkbox>
            </FormItem>
          </Col>
          <Col span="9">
            <FormItem label="通话数">
              <Input v-model="formData.conversationNum" :readonly="!formData.imeiConversationNum"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="6">
            <FormItem label="呼叫时长" :label-width="120">
              <Checkbox v-model="formData.imeiCallDuration" :true-value="1" :false-value="0">启用</Checkbox>
            </FormItem>
          </Col>
          <Col span="9">
            <FormItem label="呼叫时长">
              <Input v-model="formData.callDuration" :readonly="!formData.imeiCallDuration">
                <span slot="append">分钟</span>
              </Input>
            </FormItem>
          </Col>
          <Col span="9">
            <FormItem label="最小单位">
              <Input v-model="formData.callMinUnit" :readonly="!formData.imeiCallDuration">
                <span slot="append">秒</span>
              </Input>
            </FormItem>
          </Col>
        </Row>
        <FormItem style="margin-top:10px;">
          <Button type="primary" @click="handleSubmit">确定</Button>
          <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
        </FormItem>
      </Card>

      <Card class="card-content" title="端口IMEI">
        <Table :columns="tableColumns" :data="formData.portImei">
          <div class="flex-box" slot="aCode" slot-scope="{row, index}">
            <span>A</span> <Input v-model="formData.portImei[index].aCode"></Input>
          </div>

          <div class="flex-box" slot="bCode" slot-scope="{row, index}">
            <span>B</span> <Input v-model="formData.portImei[index].bCode"></Input>
          </div>

          <div class="flex-box" slot="cCode" slot-scope="{row, index}">
            <span>C</span> <Input v-model="formData.portImei[index].cCode"></Input>
          </div>

          <div class="flex-box" slot="dCode" slot-scope="{row, index}">
            <span>D</span> <Input v-model="formData.portImei[index].dCode"></Input>
          </div>
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

import { genarateOptions, genaratePorts } from '@/libs/genarateOptions'
import { reviseOptions } from './options'

export default {
  name: 'imei',
  mixins: [mixins],

  data () {
    return {
      formData: {
        imeiRevise: 0,
        dynamicImeiList: [],
        whenChangeSimCard: 0,
        continuousCallFailure: 0,
        failedNum: 0,
        imeiOnlineDuration: 0,
        onlineDuration: 0,
        imeiCallNumbers: 0,
        callNum: 0,
        imeiConversationNum: 0,
        conversationNum: 0,
        imeiCallDuration: 0,
        callDuration: 0,
        callMinUnit: 0,
        portImei: genaratePorts(32, { imei: '864480040990987',
          aCode: '',
          bCode: '',
          cCode: '',
          dCode: '' }),
        espsGetImeiServIp: '',
        espsGetImeiServStatu: 'IDLE',
        etmsGetImeiStatus: 'IDLE'
      },
      reviseOptions: genarateOptions(reviseOptions),
      editIndex: -1,
      tableColumns: [
        {
          key: 'port',
          title: '端口'
        },
        {
          key: 'imei',
          title: 'IMEI号'
        },
        {
          key: 'aCode',
          title: '',
          slot: 'aCode'
        },
        {
          key: 'bCode',
          title: '',
          slot: 'bCode'
        },
        {
          key: 'cCode',
          title: '',
          slot: 'cCode'
        },
        {
          key: 'dCode',
          title: '',
          slot: 'dCode'
        }
      ],
      dTableColumns: [
        {
          key: 'imeiFirstValue',
          title: 'IMEI初始值',
          slot: 'imeiFirstValue'
        },
        {
          key: 'imeiNumber',
          title: 'IMEI数量',
          slot: 'imeiNumber'
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
    add () {
      this.formData.dynamicImeiList.push({
        imeiFirstValue: 0,
        imeiNumber: 0
      })
      this.editIndex = this.formData.dynamicImeiList.length - 1
    },
    edit (index) {
      this.editIndex = index
    },
    remove (index) {
      this.formData.dynamicImeiList.splice(index, 1)
    },
    save (index) {
      this.editIndex = -1
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/common';
.flex-box{
  display: flex;
  align-items: center;
  span {
    margin-right: 5px;
  }
}
.button-wrapper {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}
</style>
