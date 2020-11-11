<template>
  <Form :model="formData" :label-width="180">
    <Card title="来电显示" class="card-content">
      <Table :columns="tableColumns" :data="formData.autoQueryNumber">
        <template slot="methods" slot-scope="{index}">
          <Select transfer v-model="formData.autoQueryNumber[index].methods">
            <Option v-for="item in methodsOptions" :value="item.value" :key="item.value">{{item.label}}</Option>
          </Select>
        </template>
        <template slot="content" slot-scope="{index}">
          <Input v-model="formData.autoQueryNumber[index].content"></Input>
        </template>
        <template slot="keyWords" slot-scope="{index}">
          <Input v-model="formData.autoQueryNumber[index].keyWords"></Input>
        </template>
        <template slot="serviceNum" slot-scope="{index}">
          <Input v-model="formData.autoQueryNumber[index].serviceNum"></Input>
        </template>
        <template slot="recvNum" slot-scope="{index}">
          <Input v-model="formData.autoQueryNumber[index].recvNum"></Input>
        </template>
        <template slot="prefix" slot-scope="{index}">
          <Row>
            <Col span="11">
              <Input v-model="formData.autoQueryNumber[index].originPrefix"></Input>
            </Col>
            <Col span="2">
              <div style="margin: 0 5px; line-height: 30px;">></div>
            </Col>
            <Col span="11">
              <Input v-model="formData.autoQueryNumber[index].replacePrefix"></Input>
            </Col>
          </Row>
        </template>
      </Table>
    </Card>
  </Form>
</template>

<script>
import mixins from '@/mixins'
import { genarateOptions } from '@/libs/genarateOptions'
import { methodsOptions } from './options'
export default {
  name: 'auto_query',
  mixins: [mixins],
  data () {
    return {
      formData: {
        autoQueryNumber: []
      },
      methodsOptions: genarateOptions(methodsOptions),
      tableColumns: [
        {
          key: 'operatorsId',
          title: '运营商ID',
          width: 100,
          align: 'center'
        },
        {
          key: 'methods',
          title: '方法',
          slot: 'methods',
          width: 120,
          align: 'center'
        },
        {
          key: 'content',
          title: '内容',
          slot: 'content',
          minWidth: 130,
          align: 'center'
        },
        {
          key: 'keyWords',
          title: '关键字',
          slot: 'keyWords',
          minWidth: 130,
          align: 'center'
        },
        {
          key: 'serviceNum',
          title: '服务号码',
          slot: 'serviceNum',
          minWidth: 130,
          align: 'center'
        },
        {
          key: 'recvNum',
          title: '接收号码',
          slot: 'recvNum',
          minWidth: 130,
          align: 'center'
        },
        {
          key: 'prefix',
          title: '号码前缀替换',
          slot: 'prefix',
          width: 290,
          align: 'center'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../../assets/css/common';

</style>
