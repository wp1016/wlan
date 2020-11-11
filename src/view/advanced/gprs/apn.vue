<template>
  <Form :model="formData" :label-width="180">
    <Card title="APN设置" class="card-content">
      <Table :columns="tableColumns" :data="formData.apnSetting">

      </Table>
      <FormItem style="margin-top:10px;">
        <Button type="primary" @click="handleSubmit">确定</Button>
        <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
      </FormItem>
    </Card>
  </Form>
</template>

<script>
import mixins from '@/mixins'

import CheckallList from '@/components/checkallList'
export default {
  name: 'gsm2ip',
  mixins: [mixins],
  components: {
    CheckallList
  },
  data () {
    return {
      editIndex: -1,
      formData: {
        apnSetting: []
      },
      tableColumns: [
        {
          key: 'operatorsId',
          title: '运营商Id',
          align: 'center'
        },
        {
          key: 'apn',
          title: 'APN',
          align: 'center'
        },
        {
          key: 'username',
          title: '用户名',
          slot: 'username'
        },
        {
          key: 'passwd',
          title: '密码',
          slot: 'passwd'
        }
      ]
    }
  },
  methods: {
    add () {
      this.formData.gsm2ip.push({
        toIpPort: '',
        toIpOrignPrefix: '',
        toIpInsteadPrefix: ''
      })
      this.editIndex = this.formData.gsm2ip.length - 1
    },
    save (index) {
      this.editIndex = -1
    },
    edit (index) {
      this.editIndex = index
    },
    remove (index) {
      this.formData.gsm2ip.splice(index, 1)
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../../assets/css/common';

</style>
