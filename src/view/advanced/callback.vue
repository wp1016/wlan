<template>
  <div class="page-content">
    <h1 class="page-title">回拨设置</h1>
    <Form :model="formData" :label-width="180">
      <Card class="card-content" title="回拨设置">
        <Table :columns="tableColumns" :data="formData.callbackSettings">
          <template slot="use" slot-scope="{index}">
            <Checkbox v-model="formData.callbackSettings[index].use" :true-value="1" :false-value="0" />
          </template>
          <template slot="callbackNum" slot-scope="{row, index}">
            <Input :disabled="!row.use" v-model="formData.callbackSettings[index].callbackNum"></Input>
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
import { genaratePorts } from '@/libs/genarateOptions'

export default {
  name: 'callback',
  mixins: [mixins],
  data () {
    return {
      formData: {
        callbackSettings: genaratePorts(32, { use: 0, callbackNum: '' })
      },
      tableColumns: [
        {
          key: 'port',
          title: '端口',
          align: 'center',
          width: 80
        },
        {
          key: 'use',
          title: '启用',
          slot: 'use',
          align: 'center',
          width: 100
        },
        {
          key: 'callbackNum',
          title: '回拨号码（表示所有号码，最多支持128个回拨号码，逗号分隔）',
          slot: 'callbackNum',
          align: 'center'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/common';
</style>
