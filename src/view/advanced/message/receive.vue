<template>
  <Card title="短信收邮件" class="card-content">
    <Table :columns="tableColumns" :data="formData.smsRecvEmailList">
      <template slot="content" slot-scope="{ row, index }">
        <Input v-model="formData.smsRecvEmailList[index].content"></Input>
      </template>
      <template slot="operation" slot-scope="{ row, index }">
        <Button type="primary" size="small">详细</Button>
      </template>
    </Table>
    <FormItem style="margin-top: 15px;">
      <Button type="primary" @click="handleSubmit">确定</Button>
      <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
    </FormItem>
  </Card>
</template>
<script>
import { genaratePorts } from '@/libs/genarateOptions'
export default {
  name: 'receive',
  data () {
    return {
      formData: {
        smsRecvEmailList: genaratePorts(32, {
          sendPerson: '',
          time: '',
          content: ''
        })
      },
      tableColumns: [
        {
          type: 'selection',
          width: 60
        },
        {
          key: 'sendPerson',
          title: '发送者'
        },
        {
          key: 'time',
          title: '时间'
        },
        {
          key: 'content',
          title: '内容',
          slot: 'content'
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
