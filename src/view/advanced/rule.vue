<template>
  <div class="page-content">
    <h1 class="page-title">规则设置</h1>
    <Form :model="formData" :label-width="180">
      <Card class="card-content" title="拨号规则">
        <div class="button-wrapper">
          <Button type="primary" @click="add">添加数据</Button>
        </div>
        <Table :columns="tableColumns" :data="formData.dialingRules">
          <template slot="dialPlan" slot-scope="{row,index}">
            <Input v-if="editIndex === index" v-model="formData.dialingRules[index].dialPlan"></Input>
            <span v-else>{{row.dialPlan}}</span>
          </template>
          <template slot="operation" slot-scope="{row,index}">
            <template v-if="editIndex === index">
              <Button type="primary" size="small" style="margin-right: 5px" @click="save(index)">保存</Button>
            </template>
            <template v-else>
              <Button type="primary" size="small" style="margin-right: 5px" @click="edit(index)">编辑</Button>
            </template>
            <Button size="small" @click="remove(index)">删除</Button>
          </template>
        </Table>
        <FormItem style="margin-top:10px;">
          <Button type="primary" @click="handleSubmit">确定</Button>
          <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
        </FormItem>
      </Card>

    </Form>
  </div>
</template>

<script>
import mixins from '@/mixins'
export default {
  name: 'rule',
  mixins: [mixins],
  data () {
    return {
      editIndex: -1,
      formData: {
        dialingRules: []
      },
      tableColumns: [
        {
          key: 'dialPlan',
          title: '拨号计划',
          slot: 'dialPlan'
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
      this.formData.dialingRules.push({
        dialPlan: '123'
      })
      this.editIndex = this.formData.dialingRules.length - 1
      console.log(this.editIndex)
    },
    edit (index) {
      this.editIndex = index
    },
    remove (index) {
      this.formData.dialingRules.splice(index, 1)
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/common';

</style>
