<template>
  <Form :model="formData" :label-width="180">
    <Card title="费率列表" class="card-content">
      <div class="button-wrapper">
        <Button type="primary" @click="add">添加数据</Button>
      </div>
      <Table :columns="tableColumns" :data="formData.billingRateList">
        <template slot="calledPrefix" slot-scope="{row, index}">
          <Input v-if="editIndex === index" v-model="formData.billingRateList[index].calledPrefix"></Input>
          <span v-else>{{row.calledPrefix}}</span>
        </template>
        <template slot="charge" slot-scope="{row, index}">
          <Input v-if="editIndex === index" type="number" v-model="formData.billingRateList[index].charge"></Input>
          <span v-else>{{row.charge}}</span>
        </template>
        <template slot="time" slot-scope="{row, index}">
          <Input v-if="editIndex === index" type="number" v-model="formData.billingRateList[index].time"></Input>
          <span v-else>{{row.time}}</span>
        </template>
        <template slot="operation" slot-scope="{row, index}">
          <template v-if="editIndex === index">
            <Button type="primary" size="small" @click="save(index)">保存</Button>
          </template>
          <template v-else>
            <Button type="primary" size="small" @click="edit(index)">编辑</Button>
          </template>
          <Button size="small" @click="remove(index)" style="margin-left:8px;">删除</Button>
        </template>
      </Table>
      <FormItem style="margin-top: 15px;">
        <Button type="primary" @click="handleSubmit">确定</Button>
        <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
      </FormItem>
    </Card>
  </Form>
</template>

<script>
import mixins from '@/mixins'

export default {
  name: 'rate',
  mixins: [mixins],

  data () {
    return {
      editIndex: -1,
      formData: {
        billingRateList: [],
        addRateListData: 0
      },
      tableColumns: [
        {
          key: 'calledPrefix',
          title: '被叫前缀',
          slot: 'calledPrefix'
        },
        {
          key: 'charge',
          title: '收费',
          slot: 'charge'
        },
        {
          key: 'time',
          title: '时间(秒)',
          slot: 'time'
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
    add () {
      this.formData.billingRateList.push({
        calledPrefix: '',
        charge: 1,
        time: 60
      })
      this.editIndex = this.formData.billingRateList.length - 1
    },
    save (index) {
      this.editIndex = -1
    },
    edit (index) {
      this.editIndex = index
    },
    remove (index) {
      this.formData.billingRateList.splice(index, 1)
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../../assets/css/common';

</style>
