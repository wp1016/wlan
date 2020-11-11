<template>
  <Form :model="formData" :label-width="180">
    <Card title="短信转发" class="card-content">
      <div class="card-wrapper">
        <Row>
          <Col span="12">
            <FormItem label="转发协议">
              <Select transfer v-model="formData.forwardProtocol">
                <Option v-for="item in forwardProtocolOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
      </div>
      <template v-if="formData.forwardProtocol===0">
        <Table :columns="tableColumns" :data="formData.portServiceCharact">
          <template slot="forwardNum" slot-scope="{ row, index }">
            <Input v-if="editIndex === index" v-model="formData.portServiceCharact[index].forwardNum"></Input>
            <span v-else>{{row.forwardNum}}</span>
          </template>
          <template slot="smsCenter" slot-scope="{ row, index }">
            <Input v-if="editIndex === index" v-model="formData.portServiceCharact[index].smsCenter"></Input>
            <span v-else>{{row.smsCenter}}</span>
          </template>
          <template slot="operation" slot-scope="{ row, index }">
            <template v-if="editIndex === index">
              <Button type="primary" size="small" @click="save(index)">保存</Button>
            </template>
            <template v-else>
              <Button type="primary" size="small" @click="edit(index)">编辑</Button>
              <Button size="small" @click="remove(index)" style="margin-left:8px;">删除</Button>
            </template>
          </template>
        </Table>
      </template>

      <template v-if="formData.forwardProtocol === 1">
        <div class="card-wrapper">
          <Row>
            <Col span="12">
              <FormItem label="服务器IP地址">
                <Input v-model="formData.forwardServerIp"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="消息内容类型">
                <Input readonly v-model="formData.msgContentType"></Input>
              </FormItem>
            </Col>
          </Row>
           <Row>
          <Col span="12">
            <FormItem label="转发协议">
              <Select transfer v-model="formData.msgContentCode">
                <Option v-for="item in msgContentCodeOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        </div>
      </template>

      <template v-if="formData.forwardProtocol === 2">
        <div class="card-wrapper">
          <Row>
            <Col span="12">
              <FormItem label="URL">
                <Input v-model="formData.forwardUrl"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="用户名">
                <Input v-model="formData.forwardUseName"></Input>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="密码">
                <Input v-model="formData.forwardPasswd"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="发送者">
                <Input v-model="formData.forwardSender"></Input>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="接收者">
                <Input v-model="formData.forwardRecver"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="端口">
                <Input type="number" v-model="formData.forwardPort"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="编码集">
                <Select transfer v-model="formData.forwardCodeSet">
                  <Option v-for="item in forwardCodeSetOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>
        </div>
      </template>

      <template v-if="formData.forwardProtocol === 3">
        <Row>
          <Col span="12">
            <FormItem label="发送者">
              <Input v-model="formData.emailSender"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="密码">
              <Input v-model="formData.emailPasswd"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="收件人">
              <Input v-model="formData.emailRecver"></Input>
            </FormItem>
          </Col>
        </Row>
      </template>

      <FormItem style="margin-top: 15px;">
        <Button type="primary" @click="handleSubmit">确定</Button>
        <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
      </FormItem>
    </Card>
  </Form>
</template>

<script>
import mixins from '@/mixins'

import { genarateOptions, genaratePorts } from '@/libs/genarateOptions'
import { forwardProtocolOptions, forwardCodeSetOptions } from './options'
export default {
  name: 'auto',
  mixins: [mixins],

  data () {
    return {
      editIndex: -1,
      formData: {
        forwardProtocol: 0,
        portServiceCharact: genaratePorts(32, { forwardNum: '', smsCenter: '' }),

        forwardServerIp: '',
        msgContentType: 'text/plain',
        msgContentCode: 0,

        forwardUrl: '',
        forwardUseName: '',
        forwardPasswd: '',
        forwardSender: '',
        forwardRecver: '',
        forwardPort: '',
        forwardCodeSet: 0,

        emailSender: '',
        emailPasswd: '',
        emailRecver: ''

      },
      forwardProtocolOptions: genarateOptions(forwardProtocolOptions),
      forwardCodeSetOptions: genarateOptions(forwardCodeSetOptions),
      msgContentCodeOptions: genarateOptions(forwardCodeSetOptions).filter(item => item.value !== 2),
      tableColumns: [
        {
          key: 'port',
          title: '端口',
          align: 'center'
        },
        {
          key: 'forwardNum',
          title: '转发号码',
          align: 'center',
          slot: 'forwardNum'
        },
        {
          key: 'smsCenter',
          title: '短信中心',
          align: 'center',
          slot: 'smsCenter'
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
      this.$set(this.formData.portServiceCharact, index, {
        port: this.formData.portServiceCharact[index].port,
        forwardNum: '',
        smsCenter: ''
      })
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../../assets/css/common';

</style>
