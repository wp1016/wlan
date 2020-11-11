<template>
  <div class="page-content">
    <h1 class="page-title">短信高级设置</h1>
    <Form :model="formData" :label-width="180">
      <Card title="端口设置" class="card-content">
        <div class="button-wrapper">
          <Button type="primary" @click="open">启用</Button>
          <Button @click="close" style="margin-left: 10px;">禁用</Button>
        </div>
        <Table :columns="atableColumns" :data="formData.smsPortSetting" @on-selection-change="selectionChange">
          <template slot="smsEnable" slot-scope="{row,index}">
              <Icon v-if="row.smsEnable === 1" size="20" color="#19be6b" type="md-checkmark" />
              <Icon v-else size="20" color="#ed4014" type="md-close" />
            </p>
          </template>
          <template slot="smsCentreNum" slot-scope="{row, index}">
            <Input v-model="row.smsCentreNum"></Input>
          </template>
        </Table>
        <FormItem style="margin-top: 15px;">
          <Button type="primary" @click="handleSubmit">确定</Button>
          <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
        </FormItem>
      </Card>

      <!-- <MessageReceive/> -->

      <!-- <MMSConfig/>
      <MMSSend/> -->

      <MessageConfig/>
      <MessageAuto/>

      <MessageSend/>
      <MessageAdvanced/>
      <MessageTransmit/>

    </Form>
  </div>
</template>

<script>
import mixins from '@/mixins'

// import MessageReceive from './message/receive'
// import MMSConfig from './message/mmsConfig'
// import MMSSend from './message/mmsSend'
import MessageSend from './message/send'
import MessageConfig from './message/config'
import MessageAuto from './message/auto'
import MessageAdvanced from './message/advanced'
import MessageTransmit from './message/transmit'

import {
  genaratePorts
} from '@/libs/genarateOptions'

export default {
  name: 'advanced_message',
  mixins: [mixins],
  components: {
    MessageSend,
    // MessageReceive,
    // MMSConfig,
    // MMSSend,
    MessageConfig,
    MessageAuto,
    MessageAdvanced,
    MessageTransmit
  },
  data () {
    return {
      selection: [],
      formData: {
        smsPortSetting: genaratePorts(32, {
          portStatus: 'IDLE',
          smsEnable: 1,
          smsCentreNum: ''
        })
      },
      atableColumns: [
        {
          type: 'selection',
          width: 60
        },
        {
          key: 'port',
          title: '端口',
          align: 'center'
        },
        {
          key: 'portStatus',
          title: '端口状态',
          align: 'center'
        },
        {
          key: 'smsEnable',
          title: '短信启用',
          slot: 'smsEnable',
          align: 'center'
        },
        {
          key: 'smsCentreNum',
          title: '短信中心号码',
          slot: 'smsCentreNum',
          align: 'center'
        }
      ]
    }
  },
  methods: {
    open () {
      if (this.selection.length === 0) {
        this.$Message.info('请选择端口')
        return
      }

      this.formData.smsPortSetting.forEach(item => {
        if (this.selection.findIndex(sel => sel.port === item.port) > -1) {
          item.smsEnable = 1
        }
      })
      this.$forceUpdate()
    },
    close () {
      if (this.selection.length === 0) {
        this.$Message.info('请选择端口')
        return
      }
      this.formData.smsPortSetting.forEach((item, index) => {
        if (this.selection.findIndex(sel => sel.port === item.port) > -1) {
          item.smsEnable = 0
        }
      })
      this.$forceUpdate()
    },
    selectionChange (selection) {
      this.selection = selection
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/common';
</style>
