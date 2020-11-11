<template>
  <Form :model="formData" :label-width="180">
    <Card title="SIP账户" class="card-content">
       <Table :columns="sipAccountTableColumns" :data="formData.sipAccountList">
         <template slot="linePrefix" slot-scope="{index}">
           <Input v-model="formData.sipAccountList[index].linePrefix"></Input>
         </template>
         <template slot="sipNumber" slot-scope="{index}">
           <Input v-model="formData.sipAccountList[index].sipNumber"></Input>
         </template>
         <template slot="sipAccount" slot-scope="{index}">
           <Input v-model="formData.sipAccountList[index].sipAccount"></Input>
         </template>
         <template slot="sipPasswd" slot-scope="{index}">
           <Input v-model="formData.sipAccountList[index].sipPasswd"></Input>
         </template>
         <template slot="sipStatus" slot-scope="{row}">
           {{row.sipStatus}}
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

import { genaratePorts } from '@/libs/genarateOptions'

export default {
  name: 'lan',
  mixins: [mixins],

  data () {
    return {
      formData: {
        sipAccountList: genaratePorts(32, {
          linePrefix: '186',
          sipNumber: '123456789',
          sipAccount: '1234',
          sipPasswd: '1234',
          sipStatus: 1
        })
      },
      sipAccountTableColumns: [
        {
          key: 'port',
          title: '端口',
          align: 'center',
          width: 80
        },
        {
          key: 'linePrefix',
          title: '线路前缀',
          align: 'center',
          slot: 'linePrefix'
        },
        {
          key: 'sipNumber',
          title: '号码',
          align: 'center',
          slot: 'sipNumber'
        },
        {
          key: 'sipAccount',
          title: '账号',
          align: 'center',
          slot: 'sipAccount'
        },
        {
          key: 'sipPasswd',
          title: '密码',
          slot: 'sipPasswd'
        },
        {
          key: 'sipStatus',
          title: '状态(显示)',
          align: 'center',
          slot: 'sipStatus',
          width: 100
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../../assets/css/common';
</style>
