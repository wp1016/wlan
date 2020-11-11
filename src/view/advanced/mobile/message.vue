<template>
  <Form :model="formData" :label-width="180">
    <Card title="短信查询关键字列表" class="card-content">
      <Table :columns="tableColumns" :data="formData.smsQueryKeyList"></Table>
    </Card>
  </Form>
</template>

<script>
export default {
  name: 'operator',
  data () {
    return {
      formData: {
        smsQueryKeyList: []
      },
      tableColumns: [
        {
          key: 'indexNumber',
          title: '索引'
        },
        {
          key: 'operatorsId',
          title: '运营商ID'
        },
        {
          key: 'sendNumber',
          title: '发送号码'
        },
        {
          key: 'recvNumber',
          title: '接收号码'
        },
        {
          key: 'querySms',
          title: '查询短信'
        },
        {
          key: 'resolutionRange',
          title: '解析范围'
        },
        {
          key: 'effectiveKey',
          title: '有效关键字'
        },
        {
          key: 'invalidKey',
          title: '无效关键字'
        },
        {
          key: 'invalidSimCardKey',
          title: '无效SIM卡关键字'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../../assets/css/common';

</style>
