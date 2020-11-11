<template>
    <Form :model="formData" :label-width="180">
      <Card title="彩信配置" class="card-content">

        <div class="button-wrapper">
            <Button type="primary" @click="add">添加数据</Button>
        </div>
        <Table :columns="tableColumns" :data="formData.mmsBasicList">
          <template slot="mmsOperatorId" slot-scope="{row, index}">
            <Input v-if="editIndex === index" v-model="formData.mmsBasicList[index].mmsOperatorId"></Input>
            <span v-else>{{row.mmsOperatorId}}</span>
          </template>
          <template slot="mmsc" slot-scope="{row, index}">
            <Input v-if="editIndex === index" v-model="formData.mmsBasicList[index].mmsc"></Input>
            <span v-else>{{row.mmsOperatorId}}</span>

          </template>
          <template slot="mmsAgent" slot-scope="{row, index}">
            <Input v-if="editIndex === index" v-model="formData.mmsBasicList[index].mmsAgent"></Input>
            <span v-else>{{row.mmsOperatorId}}</span>

          </template>
          <template slot="mmsPort" slot-scope="{row, index}">
            <Input v-if="editIndex === index" v-model="formData.mmsBasicList[index].mmsPort"></Input>
            <span v-else>{{row.mmsOperatorId}}</span>
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
        <FormItem style="margin-top: 15px;">
          <Button type="primary" @click="handleSubmit">确定</Button>
          <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
        </FormItem>
      </Card>
    </Form>
</template>

<script>

export default {
  name: 'send',
  data () {
    return {
      editIndex: -1,
      formData: {
        mmsBasicList: [],
        smsSelectPort: [],
        smsSendRecvPersonList: '',
        smsSendSendSmsContent: '',
        smsSendSuccSmsNum: 0,
        smsSendFailedNum: 0,
        mmsSelectPort: [],
        mmsAddressee: '',
        mmsTheme: '',
        mmsContent: '',
        successSendMmsNum: 0,
        failedSendMmsNum: 0
      },
      tableColumns: [
        {
          key: 'mmsOperatorId',
          title: '运营商ID',
          slot: 'mmsOperatorId'
        },
        {
          key: 'mmsc',
          title: 'MMSC',
          slot: 'mmsc'
        },
        {
          key: 'mmsAgent',
          title: '彩信代理',
          slot: 'mmsAgent'
        },
        {
          key: 'mmsPort',
          title: '彩信端口',
          slot: 'mmsPort'
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
      this.formData.mmsBasicList.push({ mmsOperatorId: '', mmsc: '', mmsAgent: '', mmsPort: '' })
      this.editIndex = this.formData.mmsBasicList.length - 1
    },
    save (index) {
      this.editIndex = -1
    },
    edit (index) {
      this.editIndex = index
    },
    remove (index) {
      this.formData.mmsBasicList.splice(index, 1)
    },
    handleSubmit () {},
    handleCancel () {}
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/common';

.check-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.check-all {
  flex-basis: 20%;
}
.check-list {
  flex: 1;
  margin-left: 10px;
}

</style>
