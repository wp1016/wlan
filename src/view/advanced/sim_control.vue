<template>
  <div class="page-content">
    <h1 class="page-title">SIM管理</h1>
    <Form :model="formData" :label-width="180">
      <Card title="SIM分时策略" class="card-content">
        <div class="button-wrapper">
            <Button type="primary" @click="add">添加数据</Button>
        </div>
        <Table :columns="tableColumns" :data="formData.simStrategy">
          <template slot="startTime" slot-scope="{ row, index }">
            <Input v-if="editIndex === index" v-model="formData.simStrategy[index].startTime"></Input>
            <span v-else>{{row.startTime}}</span>
          </template>
          <template slot="endTime" slot-scope="{ row, index }">
            <Input v-if="editIndex === index" v-model="formData.simStrategy[index].endTime"></Input>
            <span v-else>{{row.endTime}}</span>
          </template>
          <template slot="simSet" slot-scope="{ row, index }">
            <CheckallList v-model="formData.simStrategy[index].simSet" />
          </template>
          <template slot="operation" slot-scope="{ row, index }">
            <template v-if="editIndex === index">
              <Button type="primary" size="small" @click="save(index)">保存</Button>
              <Button size="small" @click="remove(index)" style="margin-left:8px;">删除</Button>
            </template>
            <template v-else>
              <Button type="primary" size="small" @click="edit(index)">编辑</Button>
              <Button size="small" @click="remove(index)" style="margin-left:8px;">删除</Button>
            </template>
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
import CheckallList from '@/components/checkallList'
export default {
  name: 'sim_control',
  components: {
    CheckallList
  },
  data () {
    return {
      editIndex: -1,
      formData: {
        simStrategy: []
      },
      tableColumns: [
        {
          key: 'startTime',
          title: '开始',
          slot: 'startTime',
          width: 160
        },
        {
          key: 'endTime',
          title: '结束',
          slot: 'endTime',
          width: 160
        },
        {
          key: 'simSet',
          title: 'SIM集合',
          slot: 'simSet'
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
      this.formData.simStrategy.push({
        startTime: '',
        endTime: '',
        simSet: []
      })
      this.editIndex = this.formData.simStrategy.length - 1
    },
    save (index) {
      this.editIndex = -1
    },
    edit (index) {
      this.editIndex = index
    },
    remove (index) {
      this.formData.simStrategy.splice(index, 1)
    },
    handleSubmit () {},
    handleCancel () {}
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/common';

</style>
