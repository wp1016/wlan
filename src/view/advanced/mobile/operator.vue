<template>
  <Form :model="formData" :label-width="180">
    <Card title="运营商列表" class="card-content">
      <Table :columns="tableColumns" :data="formData.operatorsList"></Table>
    </Card>
  </Form>
</template>

<script>
export default {
  name: 'operator',
  data () {
    return {
      formData: {
        operatorsList: []
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
          key: 'operatorsName',
          title: '运营商名'
        },
        {
          key: 'queryMethods',
          title: '查询方法'
        },
        {
          key: 'waringValue',
          title: '警戒值'
        },
        {
          key: 'invalidValue',
          title: '无效值'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../../assets/css/common';

</style>
