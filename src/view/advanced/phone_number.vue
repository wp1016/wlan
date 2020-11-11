
<template>
  <div class="page-content">
    <h1 class="page-title">SIM卡号码设置</h1>
    <Form :model="formData" :label-width="180">
      <AutoQuery/>
      <Card class="card-content" title="SIM卡号码">
        <Table :columns="tableColumns" :data="formData.simCardNumberList">
          <template slot="aslot" slot-scope="{ index }">
            <Input v-model="formData.simCardNumberList[index].aslot"></Input>
          </template>
          <template slot="bslot" slot-scope="{ index }">
            <Input v-model="formData.simCardNumberList[index].bslot"></Input>
          </template>
          <template slot="cslot" slot-scope="{ index }">
            <Input v-model="formData.simCardNumberList[index].cslot"></Input>
          </template>
          <template slot="dslot" slot-scope="{ index }">
            <Input v-model="formData.simCardNumberList[index].dslot"></Input>
          </template>
        </Table>
        <FormItem style="margin-top: 15px;">
          <Button type="primary" @click="handleSubmit">确定</Button>
          <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
        </FormItem>
      </Card>

    </Form>
  </div>
</template>

<script>
import mixins from '@/mixins'
import AutoQuery from './phone_number/auto_query'
import { genaratePorts } from '@/libs/genarateOptions'

export default {
  name: 'number',
  mixins: [mixins],
  components: {
    AutoQuery
  },
  data () {
    return {
      formData: {
        simCardNumberList: genaratePorts(32, { simCardNum: '',
          aslot: '',
          bslot: '',
          cslot: '',
          dslot: '' })
      },
      tableColumns: [
        {
          key: 'port',
          title: '端口号',
          align: 'center',
          width: 80
        },
        {
          key: 'simCardNum',
          title: 'SIM卡号码',
          align: 'center'
        },
        {
          key: 'aslot',
          title: 'A槽',
          slot: 'aslot',
          align: 'center'
        },
        {
          key: 'bslot',
          title: 'B槽',
          slot: 'bslot',
          align: 'center'
        },
        {
          key: 'cslot',
          title: 'C槽',
          slot: 'cslot',
          align: 'center'
        },
        {
          key: 'dslot',
          title: 'D槽',
          slot: 'dslot',
          align: 'center'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/common';
.button-wrapper{
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}
</style>
