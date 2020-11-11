<template>
    <Form :model="formData" :label-width="180">
      <Card title="彩信发送" class="card-content">
        <div class="card-wrapper">
          <Row>
            <Col span="17">
              <FormItem class="form-item-center" label="请选择端口">
                <checkall-list v-model="formData.mmsSelectPort" @change="change"></checkall-list>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="17">
              <FormItem class="form-item-center" label="收件人列表">
                <Input type="textarea" v-model="formData.mmsAddressee" placeholder="【提示】最大长度4095（包括分号）！；多个联系人用分号隔开"></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="17">
              <FormItem class="form-item-center" label="主题">
                <Input v-model="formData.mmsTheme"></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="17">
              <FormItem class="form-item-center" label="发送的短信内容">
                <Input type="textarea" v-model="formData.smsSendSendSmsContent" placeholder="【提示】最大2400个英文字母或800个本地字符！"></Input>
              </FormItem>
            </Col>
            <Col span="3">
              <Button style="margin-left: 20px; margin-top: 10px;" type="primary" @click="sendSms">发送</Button>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="发送成功的彩信数">
                <Input type="number" v-model="formData.successSendMmsNum" clearable></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="发送失败的彩信数">
                <Input type="number" v-model="formData.failedSendMmsNum" clearable></Input>
              </FormItem>
            </Col>
          </Row>
          <FormItem style="margin-top: 15px;">
            <Button type="primary" @click="handleSubmit">确定</Button>
            <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
          </FormItem>
        </div>
      </Card>
    </Form>
</template>

<script>

import CheckallList from '@/components/checkallList.vue'
export default {
  name: 'mms_send',
  components: {
    CheckallList
  },
  data () {
    return {
      formData: {
        mmsSelectPort: [],
        mmsAddressee: '',
        mmsTheme: '',
        mmsContent: 0,
        successSendMmsNum: 0,
        failedSendMmsNum: 0
      },
      checkAll: false,
      indeterminate: false
    }
  },
  methods: {
    change (selected) {
      this.formData.smsSelectPort = selected
    },
    sendSms () {

    },

    handleSubmit () {},
    handleCancel () {}
  }
}
</script>
<style lang="less" scoped>
@import '../../../assets/css/common';

.check-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.check-all {
  flex-basis: 20%;
}
.check-list {
  flex: 1;
  margin-left: 10px;
}

</style>
