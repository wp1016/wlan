<template>
  <div class="page-content">
    <h1 class="page-title">短信端口设置</h1>
    <Form :model="formData" :label-width="180">
      <Card title="短信端口设置" class="card-content">
        <Table :columns="tableColumns" :data="formData.smsPortSetting">
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
    </Form>
  </div>
</template>

<script>
export default {
  name: 'port',
  data () {
    return {
      formData: {
        smsPortSetting: [
          {
            port: '1A',
            portStatus: 'IDLE',
            smsEnable: 1,
            smsCentreNum: ''
          }
        ]
      },
      tableColumns: [
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
    handleSubmit () {},
    handleCancel () {}
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/common';

</style>
