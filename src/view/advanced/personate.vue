<template>
  <div class="page-content">
    <h1 class="page-title">切卡设置</h1>
    <Form :model="formData" :label-width="180">

      <Card class="card-content" title="锁卡条件">

        <FormItem label="SIM在线时间">
          <i-switch size="large" v-model="formData.simOnlineTimeUse" :true-value="1" :false-value="0">
            <span slot="open">启用</span>
            <span slot="close">禁用</span>
          </i-switch>
        </FormItem>

        <template v-if="formData.simOnlineTimeUse" >
          <Row>
            <Col span="12">
              <FormItem label="强制挂机">
                <i-switch size="large" v-model="formData.OlineForceHangUp" :true-value="1" :false-value="0">
                  <span slot="open">启用</span>
                  <span slot="close">禁用</span>
                </i-switch>
              </FormItem>
            </Col>
            <Col span="12">
              <span class="form-tips">*当切卡时间到时，强制挂断当前呼叫</span>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="在线时长">
                <Input v-model="formData.simOnlineTime">
                  <span slot="append">秒</span>
                </Input>
              </FormItem>
            </Col>
            <Col span="12">
              <span class="form-tips">*当切卡时间到时，强制挂断当前呼叫</span>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="锁定时长">
                <Input v-model="formData.lockDuration">
                  <span slot="append">秒</span>
                </Input>
              </FormItem>
            </Col>
            <Col span="12">
              <span class="form-tips">*秒，0表示不锁，-1表示一直锁</span>
            </Col>
          </Row>
        </template>

        <Divider/>

        <FormItem label="按通话次数">
          <i-switch size="large" v-model="formData.conversationNumUse" :true-value="1" :false-value="0">
            <span slot="open">启用</span>
            <span slot="close">禁用</span>
          </i-switch>
        </FormItem>

        <template v-if="formData.conversationNumUse">
          <Row>
            <Col span="12">
              <FormItem label="切卡时重置">
                <FormatLabelTooltip slot="label" label="切卡时重置" content="当存在两个或两个以上切卡条件时，若SIM卡先达到其他切卡条件而切卡，该张卡连续呼叫失败次数将会被清零，下一次切换到这张卡的时候，将重新计数"/>
                <i-switch size="large" v-model="formData.conversatNumRestart" :true-value="1" :false-value="0">
                  <span slot="open">启用</span>
                  <span slot="close">禁用</span>
                </i-switch>
              </FormItem>
            </Col>
            <Col span="12">
              <span class="form-tips">*切换到下一张卡时重置这个条件</span>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="USSD查询">
                <i-switch size="large" v-model="formData.conversatNumUssdQuery" :true-value="1" :false-value="0">
                  <span slot="open">启用</span>
                  <span slot="close">禁用</span>
                </i-switch>
              </FormItem>
            </Col>
            <Col span="12">
              <span class="form-tips">*切换前发送USSD查询命令</span>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="条件达到时切卡">
                <i-switch size="large" v-model="formData.conversatNumArriCondt" :true-value="1" :false-value="0">
                  <span slot="open">启用</span>
                  <span slot="close">禁用</span>
                </i-switch>
              </FormItem>
            </Col>
            <Col span="12">
              <span class="form-tips">*如果不启用，只会锁卡而不切卡</span>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="累计通话次数">
                <Input v-model="formData.conversatNum"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="锁定时长">
                <Input v-model="formData.conversatNumLockDuration">
                  <span slot="append">秒</span>
                </Input>
              </FormItem>
            </Col>
            <Col span="12">
              <span class="form-tips">*0表示不锁，-1表示一直锁</span>
            </Col>
          </Row>
        </template>

        <Divider/>

        <FormItem label="按连续呼叫失败次数">
          <i-switch size="large" v-model="formData.continCallFailUse" :true-value="1" :false-value="0">
            <span slot="open">启用</span>
            <span slot="close">禁用</span>
          </i-switch>
        </FormItem>

        <template v-if="formData.continCallFailUse">
          <Row>
            <Col span="12">
              <FormItem label="切卡时重置">
                <FormatLabelTooltip slot="label" label="切卡时重置" content="当存在两个或两个以上切卡条件时，若SIM卡先达到其他切卡条件而切卡，该张卡连续呼叫失败次数将会被清零，下一次切换到这张卡的时候，将重新计数"/>
                <i-switch size="large" v-model="formData.continCallFailRestart" :true-value="1" :false-value="0">
                  <span slot="open">启用</span>
                  <span slot="close">禁用</span>
                </i-switch>
              </FormItem>
            </Col>
            <Col span="12">
              <span class="form-tips">*切换到下一张卡时重置这个条件</span>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="USSD查询">
                <i-switch size="large" v-model="formData.continCallFailQuery" :true-value="1" :false-value="0">
                  <span slot="open">启用</span>
                  <span slot="close">禁用</span>
                </i-switch>
              </FormItem>
            </Col>
            <Col span="12">
              <span class="form-tips">*切换前发送USSD查询命令</span>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="自动检测阈值">
                <Input v-model="formData.autoDetecThreshold"></Input>
              </FormItem>
            </Col>
            <Col span="12">
              <span class="form-tips">*达到自动检测阈值，该端口主动往其他端口发起呼叫，检测是否接通</span>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="呼叫失败次数">
                <Input v-model="formData.continCallFailNum"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="锁定时长">
                <FormatLabelTooltip slot="label" label="锁定时长" content="SIM卡达到切卡条件后切换到下一张卡，而该SIM卡将会被锁定，设定值即被锁定时长，0表示不锁，-1表示一直锁"/>
                <Input v-model="formData.continCallFailLockDuration">
                  <span slot="append">秒</span>
                </Input>
              </FormItem>
            </Col>
            <Col span="12">
              <span class="form-tips">*0表示不锁，-1表示一直锁</span>
            </Col>
          </Row>
        </template>

        <Divider/>

        <FormItem label="按连续呼叫短秒次数">
          <i-switch size="large" v-model="formData.callShortSecNum" :true-value="1" :false-value="0">
            <span slot="open">启用</span>
            <span slot="close">禁用</span>
          </i-switch>
        </FormItem>

        <template v-if="formData.callShortSecNum">
          <Row>
            <Col span="12">
              <FormItem label="切卡时重置">
                <i-switch size="large" v-model="formData.callShortSecNumRestart" :true-value="1" :false-value="0">
                  <span slot="open">启用</span>
                  <span slot="close">禁用</span>
                </i-switch>
              </FormItem>
            </Col>
            <Col span="12">
              <span class="form-tips">*切换到下一张卡时重置这个条件</span>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="USSD查询">
                <i-switch size="large" v-model="formData.callShortSecNumQuery" :true-value="1" :false-value="0">
                  <span slot="open">启用</span>
                  <span slot="close">禁用</span>
                </i-switch>
              </FormItem>
            </Col>
            <Col span="12">
              <span class="form-tips">*切换前发送USSD查询命令</span>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="累计呼叫短秒次数">
                <Input v-model="formData.cumulCallShortSecNum"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="短秒时长">
                <Input v-model="formData.callShortDuration">
                  <span slot="append">秒</span>
                </Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="锁定时长">
                <Input v-model="formData.callShortSecNumLockDuration">
                  <span slot="append">秒</span>
                </Input>
              </FormItem>
            </Col>
            <Col span="12">
              <span class="form-tips">*0表示不锁，-1表示一直锁</span>
            </Col>
          </Row>
        </template>

        <Divider/>

        <FormItem label="按累计发送短信数">
          <i-switch size="large" v-model="formData.cumulatSdSmsNum" :true-value="1" :false-value="0">
            <span slot="open">启用</span>
            <span slot="close">禁用</span>
          </i-switch>
        </FormItem>

        <template v-if="formData.cumulatSdSmsNum">
          <Row>
            <Col span="12">
              <FormItem label="切卡时重置">
                <i-switch size="large" v-model="formData.cumulatSdSmsNumRestart" :true-value="1" :false-value="0">
                  <span slot="open">启用</span>
                  <span slot="close">禁用</span>
                </i-switch>
              </FormItem>
            </Col>
            <Col span="12">
              <span class="form-tips">*切换到下一张卡时重置这个条件</span>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="USSD查询">
                <i-switch size="large" v-model="formData.cumulatSdSmsNumQuery" :true-value="1" :false-value="0">
                  <span slot="open">启用</span>
                  <span slot="close">禁用</span>
                </i-switch>
              </FormItem>
            </Col>
            <Col span="12">
              <span class="form-tips">*切换前发送USSD查询命令</span>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="累计发送短信数">
                <Input v-model="formData.cumulatSdSendSmsNum"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="锁定时长">
                <Input v-model="formData.cumulatSdSmsNumLockDuration">
                  <span slot="append">秒</span>
                </Input>
              </FormItem>
            </Col>
            <Col span="12">
              <span class="form-tips">*0表示不锁，-1表示一直锁</span>
            </Col>
          </Row>
        </template>

        <Divider/>

        <FormItem label="按累计发送短信失败数">
          <i-switch size="large" v-model="formData.sendSmsFailNum" :true-value="1" :false-value="0">
            <span slot="open">启用</span>
            <span slot="close">禁用</span>
          </i-switch>
        </FormItem>

        <template v-if="formData.sendSmsFailNum">
          <Row>
            <Col span="12">
              <FormItem label="切卡时重置">
                <i-switch size="large" v-model="formData.sendSmsFailNumRestart" :true-value="1" :false-value="0">
                  <span slot="open">启用</span>
                  <span slot="close">禁用</span>
                </i-switch>
              </FormItem>
            </Col>
            <Col span="12">
              <span class="form-tips">*切换到下一张卡时重置这个条件</span>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="USSD查询">
                <i-switch size="large" v-model="formData.sendSmsFailNumQuery" :true-value="1" :false-value="0">
                  <span slot="open">启用</span>
                  <span slot="close">禁用</span>
                </i-switch>
              </FormItem>
            </Col>
            <Col span="12">
              <span class="form-tips">*切换前发送USSD查询命令</span>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="累计发送短信失败数">
                <Input v-model="formData.sendSmsFailedNum"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="锁定时长">
                <Input v-model="formData.sendSmsFailNumLockDuration">
                  <span slot="append">秒</span>
                </Input>
              </FormItem>
            </Col>
            <Col span="12">
              <span class="form-tips">*0表示不锁，-1表示一直锁</span>
            </Col>
          </Row>
        </template>

        <Divider/>

        <FormItem style="margin-top:10px;">
          <Button type="primary" @click="handleSubmit">确定</Button>
          <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
        </FormItem>

      </Card>
    </Form>
  </div>
</template>

<script>
import FormatLabelTooltip from '@/components/formLabelToolTip'

export default {
  name: 'card',
  components: {
    FormatLabelTooltip
  },
  data () {
    return {
      formData: {
        // messageWarning: 0,
        // messageWarningNum: '',
        // restartAndSaveCurrentCard: 0,
        simOnlineTimeUse: 0,
        OlineForceHangUp: 0,
        simOnlineTime: 120,
        lockDuration: 0,

        conversationNumUse: 0,
        conversatNumRestart: 0,
        conversatNumUssdQuery: 0,
        conversatNumArriCondt: 0,
        conversatNum: 0,
        conversatNumLockDuration: 0,

        continCallFailUse: 0,
        continCallFailRestart: 0,
        continCallFailQuery: 0,
        autoDetecThreshold: 10,
        continCallFailNum: 0,
        continCallFailLockDuration: -1,

        callShortSecNum: 0,
        callShortSecNumRestart: 0,
        callShortSecNumQuery: 0,
        cumulCallShortSecNum: 0, // 有问题
        callShortDuration: 0, // 有问题
        callShortSecNumLockDuration: 0,

        cumulatSdSmsNum: 0,
        cumulatSdSmsNumRestart: 0,
        cumulatSdSmsNumQuery: 0,
        cumulatSdSendSmsNum: 100,
        cumulatSdSmsNumLockDuration: 0,

        sendSmsFailNum: 0,
        sendSmsFailNumRestart: 0,
        sendSmsFailNumQuery: 0,
        sendSmsFailedNum: 20,
        sendSmsFailNumLockDuration: 0

      }
    }
  },
  methods: {
    handleSubmit () {},
    handleCancel () {}
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/common';

</style>
