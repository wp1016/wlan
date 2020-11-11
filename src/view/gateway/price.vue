<template>
  <div class="page-content">
    <h1 class="page-title">SIM卡号码设置</h1>
    <Form :model="formData" :label-width="180">
      <Card class="card-content" title="基本设置">
        <Row>
          <Col span="12">
            <FormItem label="模拟计费">
              <FormLabelTooltip slot="label" label="模拟计费" content="一正模拟计费系统，计费原理如下：自定义一个费率，设备首先通过选择的查询方法获取SIM卡余额，通话没经过一个计费周期，设备将会按照费率扣余额，但是在计费过程中余额会产生一定的误差，当余额到达警戒值时，设备将自动发送USSD或短信来重新获取余额，以此来校准产生的误差。当余额低于无效值时，SIM卡将会变为黄色，不能再使用"/>

              <i-switch v-model="formData.analogBilling" :true-value="1" :false-value="0" size="large">
                <span slot="open">启用</span>
                <span slot="close">禁用</span>
              </i-switch>
            </FormItem>
          </Col>
        </Row>
        <FormItem label="无余额时挂机">
          <FormLabelTooltip slot="label" label="无余额时挂机" content="计费过程中，若余额达到无效值，是否强制挂机"/>

          <i-switch v-model="formData.noBalanceHangUp" :true-value="1" :false-value="0" size="large">
            <span slot="open">启用</span>
            <span slot="close">禁用</span>
          </i-switch>
          <span class="form-tips">*当余额不足时</span>
        </FormItem>

        <Row>
          <Col span="12">
            <FormItem label="运营商来源">
              <Select transfer v-model="formData.operatorsSource">
                <Option v-for="item in operatorsSourceOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>

        <Row>
          <Col span="12">
            <FormItem label="周期查询余额">
              <FormLabelTooltip slot="label" label="周期查询余额" content="定义自动查询余额的周期，根据设定的分钟数周期自动发送查询命令"/>

              <Input v-model="formData.cycleQueryBalance" type="number">
                <span slot="append">分钟</span>
              </Input>
            </FormItem>
          </Col>
        </Row>

        <FormItem label="查询余额不足卡">
          <FormLabelTooltip slot="label" label="查询余额不足卡">
            <div slot="content">
              <p><strong>启用：</strong>当卡为余额不足卡时，会查询余额，需要开启模拟计费</p>
            </div>
          </FormLabelTooltip>
          <i-switch v-model="formData.queryBalanceInsufficientCd" :true-value="1" :false-value="0" size="large">
            <span slot="open">启用</span>
            <span slot="close">禁用</span>
          </i-switch>
        </FormItem>

         <FormItem label="使用上次余额">
          <FormLabelTooltip slot="label" label="查询余额不足卡">
            <div slot="content">
              <p><strong>启用：</strong>查询余额失败，使用上一次余额</p>
              <p><strong>禁用：</strong>查询余额失败，余额显示N/A，状态显示余额不足</p>
            </div>
          </FormLabelTooltip>
          <i-switch v-model="formData.useLastBalance" :true-value="1" :false-value="0" size="large">
            <span slot="open">启用</span>
            <span slot="close">禁用</span>
          </i-switch>
        </FormItem>

        <Row>
          <Col span="7">
            <FormItem :label-width="100">
              <Checkbox v-model="formData.balanceWaringSendSms[0].use" :true-value="1" :false-value="0">当余额告警时发送短信到</Checkbox>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem :label-width="0">
              <Input v-model="formData.balanceWaringSendSms[0].destNum" :disabled="!formData.balanceWaringSendSms[0].use"></Input>
            </FormItem>
          </Col>
        </Row>
        <FormItem style="margin-top: 15px;">
          <Button type="primary" @click="handleSubmit">确定</Button>
          <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
        </FormItem>
      </Card>

      <Card class="card-content" title="运营商列表">
        <Table :columns="atableColumns" :data="formData.operatorsList"></Table>
      </Card>

      <Card class="card-content" title="USSD查询关键字列表">
        <Table :columns="btableColumns" :data="formData.ussdQueryKeyList"></Table>
      </Card>

      <Card class="card-content" title="短信查询关键字列表">
        <Table :columns="ctableColumns" :data="formData.smsQueryKeyList"></Table>
      </Card>

      <Card class="card-content" title="费率列表">
        <Table :columns="dtableColumns" :data="formData.billingRateList">
          <template slot="operation" slot-scope="{ row,index }">
            <template v-if="editIndex === index">
              <Button type="primary" size="small" style="margin-right: 5px" @click="save(index)">保存</Button>
              <Button type="error" size="small" @click="cancel(index)">取消</Button>
            </template>
            <template v-else>
              <Button type="primary" size="small" style="margin-right: 5px" @click="edit(index)">编辑</Button>
              <Button type="error" size="small" @click="remove(index)">删除</Button>
            </template>
          </template>
        </Table>
      </Card>
    </Form>

  </div>
</template>

<script>
import FormLabelTooltip from '@/components/formLabelToolTip'
import { genarateOptions } from '@/libs/genarateOptions'
import { operatorsSourceOptions } from './options'
export default {
  name: 'price',
  components: {
    FormLabelTooltip
  },
  data () {
    return {
      editIndex: -1,
      formData: {
        analogBilling: 0,
        noBalanceHangUp: 0,
        operatorsSource: 0,
        cycleQueryBalance: 0,
        queryBalanceInsufficientCd: 0,
        useLastBalance: 0,
        balanceWaringSendSms: [
          {
            use: 0,
            destNum: ''
          }
        ],
        operatorsList: [],
        ussdQueryKeyList: [],
        smsQueryKeyList: [],
        billingRateList: []
      },
      operatorsSourceOptions: genarateOptions(operatorsSourceOptions),
      atableColumns: [
        {
          key: 'indexNumber',
          title: '索引号'
        },
        {
          key: 'operatorsId',
          title: '运营商ID'
        },
        {
          key: 'operatorsName',
          title: '运营商名'
        },
        {
          key: 'queryMethods',
          title: '查询方法'
        },
        {
          key: 'waringValue',
          title: '警戒值'
        },
        {
          key: 'invalidValue',
          title: '无效值'
        }
      ],
      btableColumns: [
        {
          key: 'indexNumber',
          title: '索引号'
        },
        {
          key: 'operatorsId',
          title: '运营商ID'
        },
        {
          key: 'queryCmd',
          title: '查询命令'
        },
        {
          key: 'effectiveBalanceKey',
          title: '有效余额关键字'
        },
        {
          key: 'invalidBalanceKey',
          title: '无效余额关键字'
        },
        {
          key: 'invalidSimCardKey',
          title: '无效SIM卡关键字'
        }
      ],
      ctableColumns: [
        {
          key: 'indexNumber',
          title: '索引号'
        },
        {
          key: 'operatorsId',
          title: '运营商ID'
        },
        {
          key: 'sendNumber',
          title: '发送号码'
        },
        {
          key: 'recvNumber',
          title: '接收号码'
        },
        {
          key: 'querySms',
          title: '查询短信'
        },
        {
          key: 'resolutionRange',
          title: '解析范围'
        },
        {
          key: 'effectiveKey',
          title: '有效关键字'
        },
        {
          key: 'invalidKey',
          title: '无效关键字'
        },
        {
          key: 'invalidSimCardKey',
          title: '无效SIM卡关键字'
        }
      ],
      dtableColumns: [
        {
          type: 'selection',
          width: 60
        },
        {
          key: 'calledPrefix',
          title: '被叫前缀'
        },
        {
          key: 'charge',
          title: '收费'
        },
        {
          key: 'time',
          title: '计费费率'
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
    edit (index) {
      this.editIndex = index
    },
    remove (index) {
      // TODO
    },
    save (index) {
      this.editIndex = -1
    },
    cancel (index) {
      this.editIndex = -1
      // TODO
    },
    handleSubmit () {},
    handleCancel () {}
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/common';
</style>
