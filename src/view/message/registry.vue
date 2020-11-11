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

           <template v-if="formData.smsMode===1">

            <Row>
              <Col span="12">
                <FormItem label="服务器地址">
                  <Input v-model="formData.smsSmppServerIp"></Input>
                </FormItem>
              </Col>
              <Col span="12">
                <FormItem label="服务器端口">
                  <Input v-model="formData.smsSmppServerPort"></Input>
                </FormItem>
              </Col>
            </Row>

            <Row>
              <Col span="12">
                <FormItem label="目的地址">
                  <Input v-model="formData.smsSmppDestAddr"></Input>
                </FormItem>
              </Col>
            </Row>

          </template>

          <template v-if="formData.smsMode===2">
            <Row>
              <Col span="12">
                <FormItem label="端口号">
                  <Input v-model="formData.smsServerPort"></Input>
                </FormItem>
              </Col>
            </Row>

          </template>

          <template v-if="formData.smsMode === 1 || formData.smsMode === 2">
            <Row>
              <Col span="12">
                <FormItem label="SMPP账号">
                  <Input v-model="formData.smsSmppUser"></Input>
                </FormItem>
              </Col>
              <Col span="12">
                <FormItem label="密码">
                  <Input v-model="formData.smsSmppPasswd"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="收量编码">
                  <Select transfer v-model="formData.smsSmppRecvCode">
                      <Option v-for="item in smppRecvCodeOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
                  </Select>
                </FormItem>
              </Col>
            </Row>

            <Row>
              <Col span="12">
                <FormItem label="报告编码">
                  <Select transfer v-model="formData.smsSmppReportCode">
                      <Option v-for="item in smppReportCodeOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
                  </Select>
                </FormItem>
              </Col>
            </Row>

            <Row>
              <Col span="12">
                <FormItem label="TON">
                  <Checkbox v-model="formData.smsSmppTon" :true-value="1" :false-value="0"></Checkbox>
                </FormItem>
              </Col>
            </Row>

            <Row>
              <Col span="12">
                <FormItem label="与服务器连接状态">
                  <span>{{formData.smsSmppLinkStatus}}</span>
                </FormItem>
              </Col>
            </Row>
          </template>

          <template v-if="formData.smsMode === 3">
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
                      <Option v-for="item in linkTypeOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
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

          </template>

          <FormItem style="margin-top: 15px;">
            <Button type="primary" @click="handleSubmit">确定</Button>
            <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
          </FormItem>

        </div>

      </Card>
      <Card title="号码替换表" class="card-content">
        <div class="button-wrapper">
            <Button type="primary" @click="add">添加数据</Button>
        </div>
        <Table :columns="tableColumns" :data="formData.numList">
          <template slot="calledPrefix" slot-scope="{row,index}">
            <Input v-if="editIndex === index" v-model="formData.numList[index].calledPrefix"></Input>
            <span v-else>{{row.calledPrefix}}</span>
          </template>
          <template slot="removePrefix" slot-scope="{row,index}">
            <Input v-if="editIndex === index" v-model="formData.numList[index].removePrefix"></Input>
            <span v-else>{{row.removePrefix}}</span>
          </template>
          <template slot="addPrefix" slot-scope="{row,index}">
            <Input v-if="editIndex === index" v-model="formData.numList[index].addPrefix"></Input>
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

import FormLabelToolTip from '@/components/formLabelToolTip'
import { genarateOptions } from '@/libs/genarateOptions'
import { eimsServerLinkOptions, smppModeOptions, smppRecvCodeOptions, smppReportCodeOptions } from './options'

export default {
  name: 'eims',
  components: {
    FormLabelToolTip
  },
  data () {
    return {
      editIndex: -1,
      formData: {
        smsMode: 0,
        smsSmppUser: 'root',
        smsSmppPasswd: '1234',
        smsSmppServerIp: '192.168.8.1',
        smsSmppServerPort: '8888',
        smsSmppRecvCode: 0,
        smsSmppReportCode: 0,
        smsSmppDestAddr: '13142567845',
        smsSmppTon: 0,
        smsSmppLinkStatus: 'IDEL',
        smsServerPort: '',

        eimsServerIp: '',
        eimsServerPort: '',
        eimsServerLink: 0,
        eimsServerUser: '',
        eimsServerPasswd: '',
        eimsRegisterStatu: 'registered',
        numList: []
      },
      smsModeOptions: genarateOptions(smppModeOptions),
      smppRecvCodeOptions: genarateOptions(smppRecvCodeOptions),
      smppReportCodeOptions: genarateOptions(smppReportCodeOptions),
      // serverTypeOptions: genarateOptions(eimsServerTypeOptions),
      linkTypeOptions: genarateOptions(eimsServerLinkOptions),
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
      this.formData.numList.push({
        calledPrefix: '',
        removePrefix: '',
        addPrefix: ''
      })
      this.editIndex = this.formData.numList.length - 1
    },
    save (index) {
      this.editIndex = -1
    },
    edit (index) {
      this.editIndex = index
    },
    remove (index) {
      this.formData.numList.splice(index, 1)
    },
    handleSubmit () {},
    handleCancel () {}
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/common';

</style>
