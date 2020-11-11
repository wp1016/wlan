<template>
  <div class="page-content">
    <h1 class="page-title">短信注册</h1>
    <Form :model="formData" :label-width="180">
      <Card title="短信注册方式选择" class="card-content">
        <div class="card-wrapper">
          <Row>
            <Col span="12">
              <FormItem label="SMPP注册方式选择">
                <Select transfer v-model="formData.smsMode">
                  <Option v-for="item in smsModeOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>
        </div>
        <template v-if="formData.smsMode===1">
          <SmppComponent :list.sync="formData.smppClientList"/>
        </template>

        <template v-if="formData.smsMode===2">
          <Row class="card-wrapper">
            <Col span="12">
              <FormItem label="端口号">
                <Input v-model="formData.smsServerPort"></Input>
              </FormItem>
            </Col>
          </Row>
          <ServerComponent :list.sync="formData.smppServerList"/>
        </template>

        <template v-if="formData.smsMode === 3">
          <div class="card-wrapper">

            <Row>
              <Col span="12">
                <FormItem label="服务器地址">
                  <Input v-model="formData.eimsServerIp"></Input>
                </FormItem>
              </Col>
              <Col span="12">
                <FormItem label="服务器端口号">
                  <Input v-model="formData.eimsServerPort"></Input>
                </FormItem>
              </Col>
            </Row>

            <Row>
              <Col span="12">
                <FormItem label="协议方式">
                  <Select transfer v-model="formData.eimsServerLink">
                      <Option v-for="item in eimsServerLinkOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
                  </Select>
                </FormItem>
              </Col>
            </Row>

            <Row>
              <Col span="12">
                <FormItem label="用户名">
                  <Input v-model="formData.eimsServerUser"></Input>
                </FormItem>
              </Col>
              <Col span="12">
                <FormItem label="密码">
                  <Input v-model="formData.eimsServerPasswd"></Input>
                </FormItem>
              </Col>
            </Row>

            <Row>
              <Col span="12">
                <FormItem label="注册状态(显示)">
                  <span>{{formData.eimsRegisterStatu}}</span>
                </FormItem>
              </Col>
            </Row>
          </div>

        </template>

        <FormItem style="margin-top: 15px;">
          <Button type="primary" @click="handleSubmit">确定</Button>
          <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
        </FormItem>

      </Card>
      <Card title="号码替换表" class="card-content">
        <div class="button-wrapper">
            <Button type="primary" @click="add">添加数据</Button>
        </div>
        <Table :columns="tableColumns" :data="formData.numberInsteadList">
          <template slot="calledPrefix" slot-scope="{row,index}">
            <Input v-if="editIndex === index" v-model="formData.numberInsteadList[index].calledPrefix"></Input>
            <span v-else>{{row.calledPrefix}}</span>
          </template>
          <template slot="removePrefix" slot-scope="{row,index}">
            <Input v-if="editIndex === index" v-model="formData.numberInsteadList[index].removePrefix"></Input>
            <span v-else>{{row.removePrefix}}</span>
          </template>
          <template slot="addPrefix" slot-scope="{row,index}">
            <Input v-if="editIndex === index" v-model="formData.numberInsteadList[index].addPrefix"></Input>
            <span v-else>{{row.addPrefix}}</span>
          </template>
          <template slot="operation" slot-scope="{row, index}">
            <template v-if="editIndex === index">
              <Button type="primary" size="small" @click="save(index)">保存</Button>
            </template>
            <template v-else>
              <Button type="primary" size="small" @click="edit(index)">编辑</Button>
              <Button size="small" @click="remove(index)" style="margin-left:8px;">删除</Button>
            </template>
          </template>
        </Table>
      </Card>
    </Form>
  </div>
</template>

<script>
import mixins from '@/mixins'

import FormLabelToolTip from '@/components/formLabelToolTip'
import SmppComponent from './registry/smpp'
import ServerComponent from './registry/server'
import { genarateOptions } from '@/libs/genarateOptions'
import { smppModeOptions, eimsServerLinkOptions } from './options'

export default {
  name: 'registry',
  mixins: [mixins],
  components: {
    FormLabelToolTip,
    SmppComponent,
    ServerComponent
  },
  data () {
    return {
      editIndex: -1,
      formData: {
        smsMode: 0,
        smppClientList: [],
        smppServerList: [],
        smsServerPort: '',
        eimsServerIp: '',
        eimsServerPort: '',
        eimsServerLink: 0,
        eimsServerUser: '',
        eimsServerPasswd: '',
        eimsRegisterStatu: 'registered',
        numberInsteadList: []
      },
      smsModeOptions: genarateOptions(smppModeOptions),

      eimsServerLinkOptions: genarateOptions(eimsServerLinkOptions),

      tableColumns: [
        {
          key: 'calledPrefix',
          title: '被叫前缀',
          slot: 'calledPrefix'
        },
        {
          key: 'removePrefix',
          title: '去掉前缀(位数)',
          slot: 'removePrefix'
        },
        {
          key: 'addPrefix',
          title: '增加前缀',
          slot: 'addPrefix'
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
      this.formData.numberInsteadList.push({
        calledPrefix: '',
        removePrefix: '',
        addPrefix: ''
      })
      this.editIndex = this.formData.numberInsteadList.length - 1
    },
    save (index) {
      this.editIndex = -1
    },
    edit (index) {
      this.editIndex = index
    },
    remove (index) {
      this.formData.numberInsteadList.splice(index, 1)
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/common';

</style>
