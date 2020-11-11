<template>
 <div>
    <div class="button-wrapper">
      <Button type="primary" @click="add">添加数据</Button>
    </div>
    <Table :columns="tableColumn" :data="tableData">
      <template slot="smsSmppUser" slot-scope="{index}">
        <Input v-model="list[index].smsSmppUser"></Input>
      </template>
      <template slot="smsSmppPasswd" slot-scope="{index}">
        <Input v-model="list[index].smsSmppPasswd"></Input>
      </template>
      <template slot="smsSmppRecvCode" slot-scope="{index}">
        <Select transfer v-model="list[index].smsSmppRecvCode">
          <Option v-for="item in smsSmppRecvCodeOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
        </Select>
      </template>
      <template slot="smsSmppReportCode" slot-scope="{index}">
        <Select transfer v-model="list[index].smsSmppReportCode">
          <Option v-for="item in smsSmppReportCodeOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
        </Select>
      </template>
      <template slot="smsSmppUser" slot-scope="{index}">
        <Input v-model="list[index].smsSmppUser"></Input>
      </template>
      <template slot="smsSmppDestAddr" slot-scope="{index}">
        <Input v-model="list[index].smsSmppDestAddr"></Input>
      </template>

      <template slot="smsSmppTon" slot-scope="{index}">
        <Checkbox v-model="list[index].smsSmppTon" :true-value="1" :false-value="0">TON</Checkbox>
      </template>

      <template slot="smsSmppLinkStatus" slot-scope="{row, index}">
        {{row.smsSmppLinkStatus}}
      </template>

      <template slot="operation" slot-scope="{index}">
        <Button size="small" @click="remove(index)">删除</Button>
      </template>

    </Table>
 </div>
</template>
<script>
import CheckallList from '@/components/checkallList'
import { genarateOptions } from '@/libs/genarateOptions'
import { smppRecvCodeOptions, smppReportCodeOptions } from './options'

export default {
  name: 'smpp',
  components: {
    CheckallList
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    tableData () {
      let arr = []
      this.list.map(item => {
        arr.push({
          ...item,
          _expanded: true
        })
      })
      return arr
    }
  },
  data () {
    return {
      editIndex: -1,
      smsSmppRecvCodeOptions: genarateOptions(smppRecvCodeOptions),
      smsSmppReportCodeOptions: genarateOptions(smppReportCodeOptions),
      tableColumn: [
        {
          type: 'expand',
          width: 50,
          title: '端口',
          render: (h, parmas) => {
            return h(CheckallList, {
              props: {
                value: this.list[parmas.index].smsServerPort
              },
              on: {
                change: ports => {
                  this.list[parmas.index].smsServerPort = ports
                }
              }
            })
          }
        },
        {
          key: 'smsSmppUser',
          title: 'SMPP账号',
          slot: 'smsSmppUser'
        },
        {
          key: 'smsSmppPasswd',
          title: '密码',
          slot: 'smsSmppPasswd'
        },
        {
          key: 'smsSmppRecvCode',
          title: '收量编码',
          slot: 'smsSmppRecvCode'
        },
        {
          key: 'smsSmppReportCode',
          title: '报告编码',
          slot: 'smsSmppReportCode'
        },
        {
          key: 'smsSmppDestAddr',
          title: '目的地址',
          slot: 'smsSmppDestAddr'
        },
        {
          key: 'smsSmppTon',
          title: 'TON',
          slot: 'smsSmppTon'
        },
        {
          key: 'smsSmppLinkStatus',
          title: '与服务器连接状态',
          slot: 'smsSmppLinkStatus'
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
      this.list.push({
        smsServerPort: [],
        smsSmppUser: 'root',
        smsSmppPasswd: '1234',
        smsSmppServerIp: '192.168.8.1',
        smsSmppServerPort: '8888',
        smsSmppRecvCode: 0,
        smsSmppReportCode: 0,
        smsSmppDestAddr: '13142567845',
        smsSmppTon: 0,
        smsSmppLinkStatus: 'IDEL'
      })
      this.editIndex = this.list.length - 1
    },
    remove (index) {
      this.list.splice(index, 1)
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../../assets/css/common.less';
</style>
