<template>
  <Form :model="formData" :label-width="180">
    <Card title="USSD关键字查询" class="card-content">
      <Table :columns="tableColumns" :data="formData.ussdQueryKeyList"></Table>
    </Card>
  </Form>
</template>

<script>
export default {
  name: 'operator',
  data () {
    return {
      formData: {
        ussdQueryKeyList: []
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
          key: 'queryCmd',
          title: '查询命令'
        },
        {
          key: 'effectiveBalanceKey',
          title: '有效余额关键字'
        },
        {
          key: 'invalidBalanceKey',
          title: '无效余额关键字'
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
