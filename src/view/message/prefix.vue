<template>
  <div class="page-content">
    <h1 class="page-title">前缀匹配</h1>
    <Form :model="formData" :label-width="180">
      <Card class="card-content" title="基本设置">
        <Row>
          <Col span="12">
            <FormItem label="前缀匹配">
              <Select transfer v-model="formData.prefixMatch">
                <Option v-for="item in prefixOptions" :value="item.value" :key="item.value">{{item.label}}</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        <template v-if="formData.prefixMatch === 1">
          <div class="button-wrapper">
            <Button @click="add" type="primary">新增数据</Button>
            <Button @click="removeList" style="margin-left: 10px;">批量删除</Button>
          </div>
          <Table :columns="tableColumns" :data="formData.operatorsPrefix" @on-selection-change="selectionChange">
            <template slot="countryCode" slot-scope="{ row, index }">
              <Input v-if="editIndex === index" v-model="formData.operatorsPrefix[index].countryCode"></Input>
              <span v-else>{{row.countryCode}}</span>
            </template>
            <template slot="operatorsId" slot-scope="{ row, index }">
              <Input v-if="editIndex === index" v-model="formData.operatorsPrefix[index].operatorsId"></Input>
              <span v-else>{{row.operatorsId}}</span>
            </template>
            <template slot="recvNumPrefix" slot-scope="{ row, index }">
              <Input v-if="editIndex === index" v-model="formData.operatorsPrefix[index].recvNumPrefix"></Input>
              <span v-else>{{row.recvNumPrefix}}</span>
            </template>
            <template slot="operation" slot-scope="{ row, index }">
              <template v-if="editIndex===index">
                <Button @click="save(index)" type="primary" size="small">保存</Button>
              </template>
              <template v-else>
                <Button @click="edit(index)" type="primary" size="small">编辑</Button>
                <Button @click="remove(index)" size="small" style="margin-left: 8px;">删除</Button>
              </template>
            </template>
          </Table>
        </template>

        <FormItem style="margin-top: 15px;">
          <Button type="primary" @click="handleSubmit">确定</Button>
          <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
        </FormItem>
      </Card>

      <template v-if="formData.prefixMatch === 2">
        <Card title="端口前缀设置" class="card-content">
          <Table :class="portTableColumns" :data="formData.portPrefixSetting">
            <template slot="prefix" slot-scope="{ row, index }">
              <Input v-model="formData.portPrefixSetting[index].prefix"></Input>
            </template>
          </Table>
          <FormItem style="margin-top: 15px;">
            <Button type="primary" @click="handleSubmit">确定</Button>
          </FormItem>
        </Card>
      </template>
    </Form>
  </div>
</template>

<script>
import { genarateOptions, genaratePorts } from '@/libs/genarateOptions'
import { prefixOptions } from './options'

export default {
  name: 'prefix',
  data () {
    return {
      editIndex: -1,
      formData: {
        prefixMatch: 0,
        operatorsPrefix: [
          // {
          //   addData: 1,
          //   countryCode: '',
          //   operatorsId: '',
          //   recvNumPrefix: ''
          // }
        ],
        portPrefixSetting: genaratePorts(32, { portStatus: '', prefix: '' })
      },
      tableColumns: [
        {
          type: 'selection',
          width: 60
        },
        {
          key: 'countryCode',
          title: '国家码',
          slot: 'countryCode'
        },
        {
          key: 'operatorsId',
          title: '运营商ID',
          slot: 'operatorsId'
        },
        {
          key: 'recvNumPrefix',
          title: '接收号码前缀',
          slot: 'recvNumPrefix'
        },
        {
          key: 'operation',
          title: '操作',
          slot: 'operation'
        }
      ],
      prefixOptions: genarateOptions(prefixOptions),
      portTableColumns: [
        {
          key: 'port',
          title: '端口',
          align: 'center'
        },
        {
          key: 'portStatus',
          title: '端口状态',
          align: 'center'
        },
        {
          key: 'prefix',
          title: '前缀',
          align: 'center',
          slot: 'prefix'
        }
      ],
      selection: [] // 选中项
    }
  },
  methods: {
    add () {
      let len = this.formData.operatorsPrefix.length
      this.formData.operatorsPrefix.push({
        addData: len + 1,
        countryCode: '',
        operatorsId: '',
        recvNumPrefix: ''
      })
      this.editIndex = len
    },
    edit (index) {
      this.editIndex = index
    },
    save (index) {
      this.editIndex = -1
    },
    remove (index) {
      this.formData.operatorsPrefix.splice(index, 1)
    },
    removeList () {
      if (this.selection.length === 0) {
        this.$Message.info('至少选择一项')
        return
      }
      this.$Modal.confirm({
        title: '温馨提示',
        content: `确定删除${this.selection.length}项数据吗?`,
        onOk: () => {
          this.formData.operatorsPrefix = this.formData.operatorsPrefix.filter(item => this.selection.findIndex(it => it.addData === item.addData) < 0)
        }
      })
    },
    selectionChange (selection) {
      this.selection = selection
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
  padding: 10px 0;
  justify-content: flex-end;
}
</style>
