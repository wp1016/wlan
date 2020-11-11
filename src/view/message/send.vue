<template>
    <Form :model="formData" :label-width="180">
      <Card title="短信发送" class="card-content">
        <div class="card-wrapper">
          <Row>
            <Col span="17">
              <FormItem class="form-item-center" label="请选择端口">
                <CheckallList v-model="formData.smsSelectPort"/>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="17">
              <FormItem class="form-item-center" label="收件人列表">
                <Input type="textarea" v-model="formData.smsSendRecvPersonList" placeholder="【提示】最大长度4095（包括分号）！；多个联系人用分号隔开"></Input>
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
              <FormItem label="发送成功的短信数">
                <Input v-model="formData.smsSendSuccSmsNum" clearable></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="发送失败的短信数">
                <Input v-model="formData.smsSendFailedNum" clearable></Input>
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
import CheckallList from '@/components/checkallList'
export default {
  name: 'send',
  components: {
    CheckallList
  },
  data () {
    return {
      formData: {
        smsSelectPort: [],
        smsSendRecvPersonList: '',
        smsSendSendSmsContent: '',
        smsSendSuccSmsNum: 0,
        smsSendFailedNum: 0
      }
    }
  },
  methods: {
    sendSms () {

    },
    handleSubmit () {},
    handleCancel () {}
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/common';

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
