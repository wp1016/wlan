<template>
  <div class="page-content">
    <h1 class="page-title">短信收件箱</h1>
    <Form :model="formData" :label-width="180">
      <Card title="短信内容" class="card-content">
        <Table :columns="tableColumns" :data="formData.smsInbox">
          <template slot="content" slot-scope="{ row, index }">
            <Input v-model="row.content"></Input>
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
    </Form>
  </div>
</template>
<script>
import { genaratePorts } from '@/libs/genarateOptions'
export default {
  name: 'receive',
  data () {
    return {
      formData: {
        smsInbox: genaratePorts(32, { sendPerson: '', recvPerson: '', time: '', content: '' })
      },
      tableColumns: [
        {
          key: 'port',
          title: '端口',
          align: 'center'
        },
        {
          key: 'sendPerson',
          title: '发件人',
          align: 'center'
        },
        {
          key: 'recvPerson',
          title: '收件人',
          align: 'center'
        },
        {
          key: 'time',
          title: '时间',
          align: 'center'
        },
        {
          key: 'content',
          title: '内容',
          align: 'center',
          slot: 'content',
          width: 200
        },
        {
          key: 'operation',
          title: '详细',
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
<style lang="less" scoped>
@import '../../assets/css/common';

</style>
