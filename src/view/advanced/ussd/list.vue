<template>
  <Form :model="formData" :label-width="180">
    <Card class="card-content" title="USSD列表">
      <div class="card-wrapper">
        <Row>
          <Col span="12">
            <FormItem label="USSD命令">
              <Input v-model="formData.ussdCmd"></Input>
            </FormItem>
          </Col>
        </Row>

        <Row>
          <Col span="12">
            <FormItem label="端口">
              <Input readonly :value="formData.sendPort.join(',')"></Input>
            </FormItem>
          </Col>
          <Col span="12" style="text-align: left; padding-left: 10px;">
            <Button type="primary">发送</Button>
          </Col>
        </Row>
      </div>

      <Table :columns="tableColumn" :data="formData.ussdList" @on-selection-change="onSelect">
        <template slot="cmd" slot-scope="{row, index}">
          <Input v-model="formData.ussdList[index].cmd"></Input>
        </template>
        <template slot="operation" slot-scope="{row, index}">
          <Button type="primary">发送</Button>
        </template>
      </Table>
    </Card>
  </Form>
</template>

<script>
import mixins from '@/mixins'

import { genaratePorts } from '@/libs/genarateOptions'

export default {
  name: 'auto',
  mixins: [mixins],

  data () {
    return {
      formData: {
        ussdCmd: '',
        cmdSend: 0,
        sendPort: [],

        ussdList: genaratePorts(32, { status: 'IDLE', cmd: '', response: '', operation: '' })
      },
      tableColumn: [
        {
          type: 'selection',
          width: 60
        },
        {
          key: 'port',
          title: '端口',
          width: 100
        },
        {
          key: 'status',
          title: '状态',
          width: 80
        },
        {
          key: 'cmd',
          title: '命令',
          slot: 'cmd',
          align: 'center'
        },
        {
          key: 'response',
          title: '响应',
          align: 'center'
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
    onSelect (selection) {
      let ports = []
      selection.map(item => {
        ports.push(item.port)
      })
      this.formData.sendPort = ports
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../../assets/css/common';

</style>
