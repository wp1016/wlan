<template>
  <Form :model="formData" :label-width="180">
    <Card class="card-content" title="GSM->IP">
      <div class="button-wrapper">
          <Button type="primary" @click="add">添加数据</Button>
      </div>
      <Table :columns="tableColumns" :data="formData.gsm2ip">
        <template slot="toIpPort" slot-scope="{ row, index }">
          <CheckallList :disabled="editIndex !== index" v-model="formData.gsm2ip[index].toIpPort"/>
        </template>
        <template slot="toIpOrignPrefix" slot-scope="{ row, index }">
          <Input v-if="editIndex === index" v-model="formData.gsm2ip[index].toIpOrignPrefix"></Input>
          <span v-else>{{row.toIpOrignPrefix}}</span>
        </template>
        <template slot="toIpInsteadPrefix" slot-scope="{ row, index }">
          <Input v-if="editIndex === index" v-model="formData.gsm2ip[index].toIpInsteadPrefix"></Input>
          <span v-else>{{row.toIpInsteadPrefix}}</span>
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
  name: 'gsm2ip',
  mixins: [mixins],

  components: {
    CheckallList
  },
  data () {
    return {
      editIndex: -1,
      formData: {
        gsm2ip: []
      },
      tableColumns: [
        {
          key: 'toIpPort',
          title: '端口',
          slot: 'toIpPort',
          width: 430
        },
        {
          key: 'toIpOrignPrefix',
          title: '原始前缀',
          slot: 'toIpOrignPrefix'
        },
        {
          key: 'toIpInsteadPrefix',
          title: '替换后前缀',
          slot: 'toIpInsteadPrefix'
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
