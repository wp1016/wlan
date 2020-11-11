<template>
  <div class="page-content">
    <h1 class="page-title">自动充值设置</h1>
    <Form :model="formData" :label-width="180">
      <Card title="基本设置" class="card-content">
        <Row>
          <Col span="12">
            <FormItem label="自动充值">
              <i-switch size="large" v-model="formData.autoRecharge" :true-value="1" :false-value="0">
                <span slot="open">启用</span>
                <span slot="close">禁用</span>
              </i-switch>
            </FormItem>
          </Col>
        </Row>

        <template v-if="formData.autoRecharge === 1">
          <Row>
            <Col span="12">
              <FormItem label="充值平台">
                <Select transfer v-model="formData.rechargePlatform">
                  <Option v-for="item in chargePlatformOptions" :value="item.value" :key="item.value">{{item.label}}</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>

          <!-- 充值模板0 -->
          <template v-if="formData.rechargePlatform===0">
            <Row>
              <Col span="12">
                <FormItem label="服务器地址">
                  <Input v-model="formData.rechargePlatform0_ServerIp"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="端口">
                  <Input v-model="formData.rechargePlatform0_ServerPort"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="用户名">
                  <Input v-model="formData.rechargePlatform0_User"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="密码">
                  <Input type="password" v-model="formData.rechargePlatform0_Passwd"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="状态">
                  <span>{{formData.rechargePlatform0_Status}}</span>
                </FormItem>
              </Col>
            </Row>
          </template>
          <!-- 充值模板1 -->
          <template v-if="formData.rechargePlatform===1">
            <Row>
              <Col span="12">
                <FormItem label="服务器地址">
                  <Input v-model="formData.rechargePlatform1_ServerIp"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="用户名">
                  <Input v-model="formData.rechargePlatform1_User"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="密码">
                  <Input type="password" v-model="formData.rechargePlatform1_Passwd"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="号码类型">
                  <Select transfer v-model="formData.rechargePlatform1_NumType">
                    <Option v-for="item in rechargeNumTypeOptions" :value="item.value" :key="item.key">{{item.label}}</Option>
                  </Select>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="充值金额">
                  <Input type="number" v-model="formData.rechargePlatform1_RechargeAmount"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="Access key">
                  <Input v-model="formData.rechargePlatform1_AccessKey"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="卡重复充值间隔">
                  <Input type="number" v-model="formData.rechargePlatform1_ReptRechgeInterval"></Input>
                </FormItem>
              </Col>
              <Col span="12">
                <span class="form-tips">不能小于600秒</span>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="充值确认超时时间">
                  <Input type="number" v-model="formData.rechargePlatform1_RechgeConfirmTimout">
                    <span slot="append">秒</span>
                  </Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="时间段充值控制">
                  <TimePicker transfer v-model="formData.rechargePlatform1_TimPeriodRechageCtrl.start" :steps="[1,60,60]" format="HH:mm"/>
                  -
                  <TimePicker transfer v-model="formData.rechargePlatform1_TimPeriodRechageCtrl.end" :steps="[1,60,60]" format="HH:mm"/>
                </FormItem>
              </Col>
            </Row>
          </template>
          <!-- 充值模板2 -->
          <template v-if="formData.rechargePlatform===2">
            <Row>
              <Col span="12">
                <FormItem label="服务器地址">
                  <Input v-model="formData.rechargePlatform2_ServerIp"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="号码类型">
                  <Select transfer v-model="formData.rechargePlatform2_NumType">
                    <Option v-for="item in rechargeNumTypeOptions" :value="item.value" :key="item.key">{{item.label}}</Option>
                  </Select>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="充值金额">
                  <Input type="number" v-model="formData.rechargePlatform2_RechargeAmount"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="Access key">
                  <Input v-model="formData.rechargePlatform2_AccessKey"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="卡重复充值间隔">
                  <Input type="number" v-model="formData.rechargePlatform2_ReptRechgeInterval"></Input>
                </FormItem>
              </Col>
              <Col span="12">
                <span class="form-tips">不能小于600秒</span>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="充值确认超时时间">
                  <Input type="number" v-model="formData.rechargePlatform2_RechgeConfirmTimout">
                    <span slot="append">秒</span>
                  </Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="时间段充值控制">
                  <TimePicker transfer v-model="formData.rechargePlatform2_TimPeriodRechageCtrl.start" :steps="[1,60,60]" format="HH:mm"/>
                  -
                  <TimePicker transfer v-model="formData.rechargePlatform2_TimPeriodRechageCtrl.end" :steps="[1,60,60]" format="HH:mm"/>
                </FormItem>
              </Col>
            </Row>
          </template>
          <!-- 充值模板3 -->
          <template v-if="formData.rechargePlatform===3">
            <Row>
              <Col span="12">
                <FormItem label="服务器地址">
                  <Input v-model="formData.rechargePlatform3_ServerIp"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="用户名">
                  <Input v-model="formData.rechargePlatform3_User"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="密码">
                  <Input type="password" v-model="formData.rechargePlatform3_Passwd"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="运营商">
                  <i-switch size="large" v-model="formData.rechargePlatform3_Operators" :true-value="1" :false-value="0">
                    <span slot="open">启用</span>
                    <span slot="close">禁用</span>
                  </i-switch>
                </FormItem>
              </Col>
            </Row>
            <template v-if="formData.rechargePlatform3_Operators === 1">
              <Row>
                <Col span="12">
                  <FormItem label="使用全局运营商">
                    <i-switch size="large" v-model="formData.rechargePlatform3_UseGlobalOperators" :true-value="1" :false-value="0">
                      <span slot="open">启用</span>
                      <span slot="close">禁用</span>
                    </i-switch>
                  </FormItem>
                </Col>
              </Row>
              <Row v-if="formData.rechargePlatform3_UseGlobalOperators === 1">
                <Col span="12">
                  <FormItem label="MNC/MCC">
                    <Input v-model="formData.rechargePlatform3_MncMcc">
                      <span style="line-height: 32px;" slot="prefix">470</span>
                    </Input>
                  </FormItem>
                </Col>
              </Row>
            </template>
            <Row>
              <Col span="12">
                <FormItem label="号码类型">
                  <Select transfer v-model="formData.rechargePlatform3_NumType">
                    <Option v-for="item in rechargeNumTypeOptions" :value="item.value" :key="item.key">{{item.label}}</Option>
                  </Select>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="充值金额">
                  <Input type="number" v-model="formData.rechargePlatform3_RechargeAmount"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="Access key">
                  <Input v-model="formData.rechargePlatform3_AccessKey"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="卡重复充值间隔">
                  <Input type="number" v-model="formData.rechargePlatform3_ReptRechgeInterval"></Input>
                </FormItem>
              </Col>
              <Col span="12">
                <span class="form-tips">不能小于600秒</span>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="充值确认超时时间">
                  <Input type="number" v-model="formData.rechargePlatform3_RechgeConfirmTimout">
                    <span slot="append">秒</span>
                  </Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="时间段充值控制">
                  <TimePicker transfer v-model="formData.rechargePlatform3_TimPeriodRechageCtrl.start" :steps="[1,60,60]" format="HH:mm"/>
                  -
                  <TimePicker transfer v-model="formData.rechargePlatform3_TimPeriodRechageCtrl.end" :steps="[1,60,60]" format="HH:mm"/>
                </FormItem>
              </Col>
            </Row>
          </template>
          <!-- 充值模板4 -->
          <template v-if="formData.rechargePlatform===4">
            <Row>
              <Col span="12">
                <FormItem label="服务器地址">
                  <Input v-model="formData.rechargePlatform4_ServerIp"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="用户名">
                  <Input v-model="formData.rechargePlatform4_User"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="密码">
                  <Input type="password" v-model="formData.rechargePlatform4_Passwd"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="号码类型">
                  <Select transfer v-model="formData.rechargePlatform4_NumType">
                    <Option v-for="item in rechargeNumTypeOptions" :value="item.value" :key="item.key">{{item.label}}</Option>
                  </Select>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="充值金额">
                  <Input type="number" v-model="formData.rechargePlatform4_RechargeAmount"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="Access key">
                  <Input v-model="formData.rechargePlatform4_AccessKey"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="卡重复充值间隔">
                  <Input type="number" v-model="formData.rechargePlatform4_ReptRechgeInterval"></Input>
                </FormItem>
              </Col>
              <Col span="12">
                <span class="form-tips">不能小于600秒</span>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="充值确认超时时间">
                  <Input type="number" v-model="formData.rechargePlatform4_RechgeConfirmTimout">
                    <span slot="append">秒</span>
                  </Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="时间段充值控制">
                  <TimePicker transfer v-model="formData.rechargePlatform4_TimPeriodRechageCtrl.start" :steps="[1,60,60]" format="HH:mm"/>
                  -
                  <TimePicker transfer v-model="formData.rechargePlatform4_TimPeriodRechageCtrl.end" :steps="[1,60,60]" format="HH:mm"/>
                </FormItem>
              </Col>
            </Row>
          </template>

        </template>

        <FormItem style="margin-top:10px;">
          <Button type="primary" @click="handleSubmit">确定</Button>
          <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
        </FormItem>
      </Card>

      <Card title="其他设置" class="card-content">
        <Row>
          <Col span="12">
            <FormItem label="最小金额">
              <Input type="number" v-model="formData.minBalance"></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <span class="form-tips">*当金额达到这个值时，发起自动充值</span>
          </Col>
        </Row>
        <FormItem style="margin-top:10px;">
          <Button type="primary" @click="handleSubmit">确定</Button>
          <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
        </FormItem>

        <Table :columns="tableColumns" :data="formData.rechargeRecord"></Table>
        <div style="margin: 10px;overflow: hidden">
          <div style="float: right;">
            <Page :total="total" :current="current" :page-size="20" @on-change="changePage"></Page>
          </div>
        </div>
      </Card>
    </Form>
  </div>
</template>

<script>
import FormLabelToolTip from '@/components/formLabelToolTip'
import { genarateOptions } from '@/libs/genarateOptions'
import { chargePlatformOptions, rechargeNumtypeOptions } from './options'

export default {
  name: 'auto_charge',
  components: {
    FormLabelToolTip
  },
  data () {
    return {
      formData: {
        autoRecharge: 0,
        rechargePlatform: 0,

        rechargePlatform0_ServerIp: '',
        rechargePlatform0_ServerPort: '',
        rechargePlatform0_User: '',
        rechargePlatform0_Passwd: '',
        rechargePlatform0_Status: '',

        rechargePlatform1_ServerIp: '',
        rechargePlatform1_User: '',
        rechargePlatform1_Passwd: '',
        rechargePlatform1_NumType: 0,
        rechargePlatform1_RechargeAmount: 0,
        rechargePlatform1_AccessKey: '',
        rechargePlatform1_ReptRechgeInterval: 600,
        rechargePlatform1_RechgeConfirmTimout: 60,
        rechargePlatform1_TimPeriodRechageCtrl: {
          start: '00:00',
          end: '24:00'
        },

        rechargePlatform2_ServerIp: '',
        rechargePlatform2_User: '',
        rechargePlatform2_Passwd: '',
        rechargePlatform2_NumType: 0,
        rechargePlatform2_RechargeAmount: 0,
        rechargePlatform2_AccessKey: '',
        rechargePlatform2_ReptRechgeInterval: 600,
        rechargePlatform2_RechgeConfirmTimout: 60,
        rechargePlatform2_TimPeriodRechageCtrl: {
          start: '00:00',
          end: '24:00'
        },

        rechargePlatform3_ServerIp: '',
        rechargePlatform3_User: '',
        rechargePlatform3_Passwd: '',
        rechargePlatform3_Operators: 0,
        rechargePlatform3_UseGlobalOperators: 0,
        rechargePlatform3_MncMcc: '',
        rechargePlatform3_NumType: 0,
        rechargePlatform3_RechargeAmount: 0,
        rechargePlatform3_AccessKey: '',
        rechargePlatform3_ReptRechgeInterval: 600,
        rechargePlatform3_RechgeConfirmTimout: 300,
        rechargePlatform3_TimPeriodRechageCtrl: {
          start: '00:00',
          end: '24:00'
        },

        rechargePlatform4_ServerIp: '',
        rechargePlatform4_User: '',
        rechargePlatform4_Passwd: '',
        rechargePlatform4_NumType: 0,
        rechargePlatform4_RechargeAmount: 0,
        rechargePlatform4_AccessKey: '',
        rechargePlatform4_ReptRechgeInterval: 600,
        rechargePlatform4_RechgeConfirmTimout: 300,
        rechargePlatform4_TimPeriodRechageCtrl: {
          start: '00:00',
          end: '23:00'
        },

        minBalance: 20,
        rechargeRecord: []
      },
      total: 0,
      current: 1,
      chargePlatformOptions: genarateOptions(chargePlatformOptions),
      rechargeNumTypeOptions: genarateOptions(rechargeNumtypeOptions),
      tableColumns: [
        {
          key: 'port',
          title: '端口',
          align: 'center'
        },
        {
          key: 'num',
          title: '号码',
          align: 'center'
        },
        {
          key: 'rechargeAmount',
          title: '充值金额'
        },
        {
          key: 'time',
          title: '充值时间'
        },
        {
          key: 'status',
          title: '状态',
          width: 80
        },
        {
          key: 'description',
          title: '描述'
        }
      ]
    }
  },
  methods: {
    changePage (page) {
      this.current = page
    },
    handleSubmit () {},
    handleCancel () {}
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/common';

</style>
