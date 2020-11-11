<template>
  <Form :model="formData" :label-width="180">
    <Card class="card-content" title="IP->GSM">
      <div class="button-wrapper">
          <Button type="primary" @click="add">添加数据</Button>
      </div>
      <Table :columns="tableColumns" :data="formData.ip2gsm">
        <template slot="toGsmPort" slot-scope="{ row, index }">
          <CheckallList :disabled="editIndex !== index" v-model="formData.ip2gsm[index].toGsmPort"/>
        </template>
        <template slot="toGsmCalledPrefix" slot-scope="{ row, index }">
          <Input v-if="editIndex === index" v-model="formData.ip2gsm[index].toGsmCalledPrefix"></Input>
          <span v-else>{{row.toGsmCalledPrefix}}</span>
        </template>
        <template slot="toGsmRemovePrefix" slot-scope="{ row, index }">
          <Input v-if="editIndex === index" v-model="formData.ip2gsm[index].toGsmRemovePrefix"></Input>
          <span v-else>{{row.toGsmRemovePrefix}}</span>
        </template>
        <template slot="toGsmAddPrefix" slot-scope="{ row, index }">
          <Input v-if="editIndex === index" v-model="formData.ip2gsm[index].toGsmAddPrefix"></Input>
          <span v-else>{{row.toGsmAddPrefix}}</span>
        </template>
        <template slot="operation" slot-scope="{ row, index }">
          <template v-if="editIndex === index">
            <Button type="primary" size="small" @click="save(index)">保存</Button>
          </template>
          <template v-else>
            <Button type="primary" size="small" @click="edit(index)">编辑</Button>
          </template>
            <Button size="small" @click="remove(index)" style="margin-left:8px;">删除</Button>
        </template>
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
  name: 'ip2gsm',
  mixins: [mixins],

  components: {
    CheckallList
  },
  data () {
    return {
      editIndex: -1,
      formData: {
        ip2gsm: []
      },
      tableColumns: [
        {
          key: 'toGsmPort',
          title: '端口',
          slot: 'toGsmPort',
          width: 430
        },
        {
          key: 'toGsmCalledPrefix',
          title: '被叫前缀',
          slot: 'toGsmCalledPrefix'
        },
        {
          key: 'toGsmRemovePrefix',
          title: '去掉前缀',
          slot: 'toGsmRemovePrefix'
        },
        {
          key: 'toGsmAddPrefix',
          title: '增加前缀',
          slot: 'toGsmAddPrefix'
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
      this.formData.ip2gsm.push({
        toGsmPort: '',
        toGsmCalledPrefix: '',
        toGsmRemovePrefix: ''
      })
      this.editIndex = this.formData.ip2gsm.length - 1
    },
    save (index) {
      this.editIndex = -1
    },
    edit (index) {
      this.editIndex = index
    },
    remove (index) {
      this.formData.ip2gsm.splice(index, 1)
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../../assets/css/common';

</style>
