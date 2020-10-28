<template>
  <div class="page-content">
    <h1 class="page-title">流量上网配置</h1>
    <Form :model="formData" :label-width="180">
      <Card class="card-content" title="流量分时策略">
        <div class="button-wrapper">
            <Button type="primary" @click="add">添加数据</Button>
        </div>
        <Table :columns="atableColumns" :data="formData.flowTimSharingStrategy">
          <template slot="start" slot-scope="{row,index}">
            <InputNumber v-if="editIndex === index" v-model="formData.flowTimSharingStrategy[index].start"></InputNumber>
            <span v-else>{{row.start}}</span>
          </template>
          <template slot="end" slot-scope="{row,index}">
            <InputNumber v-if="editIndex === index" v-model="formData.flowTimSharingStrategy[index].end"></InputNumber>
            <span v-else>{{row.end}}</span>
          </template>
          <template slot="consumeFlow" slot-scope="{row, index}">
            <InputNumber v-if="editIndex === index" v-model="formData.flowTimSharingStrategy[index].consumeFlow"></InputNumber>
            <span v-else>{{row.consumeFlow}}</span>
          </template>
          <template slot="operation" slot-scope="{row, index}">
            <template v-if="editIndex === index">
              <Button type="primary" size="small" @click="save(index)">保存</Button>
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

      <Card title="URL配置" class="card-content">
        <FormItem label="URLs">
          <Input type="textarea" placeholder="多个URL逗号或换行分隔" v-model="formData.urls"></Input>
        </FormItem>
        <FormItem style="margin-top:10px;">
          <Button type="primary" @click="handleSubmit">确定</Button>
          <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
        </FormItem>
      </Card>

      <Card title="APN设置" class="card-content">
        <Table :columns="apnTableColumns" :data="formData.apnSetting"></Table>
      </Card>
    </Form>
  </div>
</template>

<script>
export default {
  name: 'gprs',
  data () {
    return {
      editIndex: -1,
      formData: {
        flowTimSharingStrategy: [],
        urlConfig: '',
        apnSetting: [{
          operatorsId: '',
          apn: '',
          username: '',
          passwd: ''
        }]
      },
      atableColumns: [
        {
          key: 'start',
          title: '开始',
          slot: 'start'
        },
        {
          key: 'end',
          title: '结束',
          slot: 'end'
        },
        {
          key: 'consumeFlow',
          title: '消耗流量（MB）',
          slot: 'consumeFlow'
        },
        {
          key: 'operation',
          title: '操作',
          slot: 'operation'
        }
      ],
      apnTableColumns: [
        {
          key: 'operatorsId',
          title: '运营商Id'
        },
        {
          key: 'apn',
          title: 'APN'
        },
        {
          key: 'username',
          title: '用户名'
        },
        {
          key: 'passwd',
          title: '密码'
        }
      ]
    }
  },
  methods: {
    add () {
      console.log(this.formData.flowTimSharingStrategy)
      this.formData.flowTimSharingStrategy.push({
        start: 0,
        end: 24,
        consumeFlow: 0
      })
      this.editIndex = this.formData.flowTimSharingStrategy.length - 1
    },
    save (index) {
      this.editIndex = -1
    },
    edit (index) {
      this.editIndex = index
    },
    remove (index) {
      this.formData.flowTimSharingStrategy.splice(index, 1)
    },
    handleSubmit () {},
    handleCancel () {}
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/common';
.button-wrapper {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}
</style>
