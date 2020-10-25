<template>
  <div class="page-content">
    <h1 class="page-title">切卡设置</h1>
    <Form :model="formData" :label-width="180">
      <Card class="card-content" title="基本设置">
        <FormItem label="短信告警">
          <FormatLabelTooltip slot="label" label="短信告警" content="如果启用短信告警，当SIM卡被锁定后，将发送短信至告警号码提示用户该卡已被锁定"/>
          <i-switch size="large" v-model="formData.messageWarning" :true-value="1" :false-value="0">
            <span slot="open">启用</span>
            <span slot="close">禁用</span>
          </i-switch>
        </FormItem>

        <Row>
          <Col span="12">
            <FormItem label="短信告警号码">
              <Input v-model="formData.messageWarningNum"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="重启保存当前卡">
              <FormatLabelTooltip slot="label" label="重启保存当前卡" content="重启时是否保存各端口当前卡，以便重启后继续使用"/>
              <i-switch size="large" v-model="formData.restartAndSaveCurrentCard" :true-value="1" :false-value="0">
                <span slot="open">启用</span>
                <span slot="close">禁用</span>
              </i-switch>
            </FormItem>
          </Col>
        </Row>

        <FormItem>
          <Button type="primary" @click="handleSubmit">确定</Button>
          <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
        </FormItem>

      </Card>
      <Card class="card-content" title="锁卡条件">
        <Row>
          <Col span="12">
            <FormItem label="SIM在线时间">
              <i-switch size="large" v-model="formData.simOnlineTimeLockCard[0].use" :true-value="1" :false-value="0">
                <span slot="open">启用</span>
                <span slot="close">禁用</span>
              </i-switch>
            </FormItem>
          </Col>
        </Row>
        <template v-if="formData.simOnlineTimeLockCard[0].use" >
          <Row>
            <Col span="12">
              <FormItem label="强制挂机">
                <i-switch size="large" v-model="formData.simOnlineTimeLockCard[0].forceHangUp" :true-value="1" :false-value="0">
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
                <Input v-model="formData.simOnlineTimeLockCard[0].online">
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
                <Input v-model="formData.simOnlineTimeLockCard[0].lockDuration">
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

        <FormItem label="按累计通话时长">
          <i-switch size="large" v-model="formData.cumulatConversaDurationLockCard[0].use" :true-value="1" :false-value="0">
            <span slot="open">启用</span>
            <span slot="close">禁用</span>
          </i-switch>
        </FormItem>

        <template v-if="formData.cumulatConversaDurationLockCard[0].use">
          <Row>
            <Col span="12">
              <FormItem label="切卡时重置">
                <FormatLabelTooltip slot="label" label="切卡时重置" content="当存在两个或两个以上切卡条件时，若SIM卡先达到其他切卡条件而切卡，该张卡连续呼叫失败次数将会被清零，下一次切换到这张卡的时候，将重新计数"/>
                <i-switch size="large" v-model="formData.cumulatConversaDurationLockCard[0].restartCutCard" :true-value="1" :false-value="0">
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
                <i-switch size="large" v-model="formData.cumulatConversaDurationLockCard[0].ussdQuery" :true-value="1" :false-value="0">
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
                <i-switch size="large" v-model="formData.cumulatConversaDurationLockCard[0].arriCondtCutCd" :true-value="1" :false-value="0">
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
              <FormItem label="累计通话时长">
                <Input v-model="formData.cumulatConversaDurationLockCard[0].cumulatDuration">
                  <span slot="append">分钟</span>
                </Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="锁定时长">
                <Input v-model="formData.cumulatConversaDurationLockCard[0].lockDuration">
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

        <FormItem label="按通话次数">
          <i-switch size="large" v-model="formData.conversationNumLockCard[0].use" :true-value="1" :false-value="0">
            <span slot="open">启用</span>
            <span slot="close">禁用</span>
          </i-switch>
        </FormItem>

        <template v-if="formData.conversationNumLockCard[0].use">
          <Row>
            <Col span="12">
              <FormItem label="切卡时重置">
                <FormatLabelTooltip slot="label" label="切卡时重置" content="当存在两个或两个以上切卡条件时，若SIM卡先达到其他切卡条件而切卡，该张卡连续呼叫失败次数将会被清零，下一次切换到这张卡的时候，将重新计数"/>
                <i-switch size="large" v-model="formData.conversationNumLockCard[0].restartCutCard" :true-value="1" :false-value="0">
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
                <i-switch size="large" v-model="formData.conversationNumLockCard[0].ussdQuery" :true-value="1" :false-value="0">
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
                <i-switch size="large" v-model="formData.conversationNumLockCard[0].arriCondtCutCd" :true-value="1" :false-value="0">
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
                <Input v-model="formData.conversationNumLockCard[0].conversationNum"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="锁定时长">
                <Input v-model="formData.conversationNumLockCard[0].lockDuration">
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

        <FormItem label="按呼叫次数">
          <i-switch size="large" v-model="formData.callNumLockCard[0].use" :true-value="1" :false-value="0">
            <span slot="open">启用</span>
            <span slot="close">禁用</span>
          </i-switch>
        </FormItem>

        <template v-if="formData.callNumLockCard[0].use">
          <Row>
            <Col span="12">
              <FormItem label="切卡时重置">
                <FormatLabelTooltip slot="label" label="切卡时重置" content="当存在两个或两个以上切卡条件时，若SIM卡先达到其他切卡条件而切卡，该张卡连续呼叫失败次数将会被清零，下一次切换到这张卡的时候，将重新计数"/>
                <i-switch size="large" v-model="formData.callNumLockCard[0].restartCutCard" :true-value="1" :false-value="0">
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
                <i-switch size="large" v-model="formData.callNumLockCard[0].ussdQuery" :true-value="1" :false-value="0">
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
                <i-switch size="large" v-model="formData.callNumLockCard[0].arriCondtCutCd" :true-value="1" :false-value="0">
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
              <FormItem label="累计呼叫次数">
                <Input v-model="formData.callNumLockCard[0].cumulativeCallNum"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="锁定时长">
                <Input v-model="formData.callNumLockCard[0].lockDuration">
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
          <i-switch size="large" v-model="formData.continueCallFailedNumLockCard[0].use" :true-value="1" :false-value="0">
            <span slot="open">启用</span>
            <span slot="close">禁用</span>
          </i-switch>
        </FormItem>

        <template v-if="formData.continueCallFailedNumLockCard[0].use">
          <Row>
            <Col span="12">
              <FormItem label="切卡时重置">
                <FormatLabelTooltip slot="label" label="切卡时重置" content="当存在两个或两个以上切卡条件时，若SIM卡先达到其他切卡条件而切卡，该张卡连续呼叫失败次数将会被清零，下一次切换到这张卡的时候，将重新计数"/>
                <i-switch size="large" v-model="formData.continueCallFailedNumLockCard[0].restartCutCard" :true-value="1" :false-value="0">
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
                <i-switch size="large" v-model="formData.continueCallFailedNumLockCard[0].ussdQuery" :true-value="1" :false-value="0">
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
                <Input v-model="formData.continueCallFailedNumLockCard[0].autoDetecThreshold"></Input>
              </FormItem>
            </Col>
            <Col span="12">
              <span class="form-tips">*达到自动检测阈值，该端口主动往其他端口发起呼叫，检测是否接通</span>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="呼叫失败次数">
                <Input v-model="formData.continueCallFailedNumLockCard[0].callFailedNum"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="锁定时长">
                <FormatLabelTooltip slot="label" label="锁定时长" content="SIM卡达到切卡条件后切换到下一张卡，而该SIM卡将会被锁定，设定值即被锁定时长，0表示不锁，-1表示一直锁"/>
                <Input v-model="formData.continueCallFailedNumLockCard[0].lockDuration">
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

        <FormItem label="按连续无振铃次数">
          <i-switch size="large" v-model="formData.continueNoRingNumLockCard[0].use" :true-value="1" :false-value="0">
            <span slot="open">启用</span>
            <span slot="close">禁用</span>
          </i-switch>
        </FormItem>

        <template v-if="formData.continueNoRingNumLockCard[0].use">
          <Row>
            <Col span="12">
              <FormItem label="切卡时重置">
                <i-switch size="large" v-model="formData.continueNoRingNumLockCard[0].restartCutCard" :true-value="1" :false-value="0">
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
                <i-switch size="large" v-model="formData.continueNoRingNumLockCard[0].ussdQuery" :true-value="1" :false-value="0">
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
                <Input v-model="formData.continueNoRingNumLockCard[0].autoDetecThreshold"></Input>
              </FormItem>
            </Col>
            <Col span="12">
              <span class="form-tips">*达到自动检测阈值，该端口主动往其他端口发起呼叫，检测是否接通</span>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="无振铃次数">
                <Input v-model="formData.continueNoRingNumLockCard[0].noRingNum"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="最小持续时长">
                <Input v-model="formData.continueNoRingNumLockCard[0].minContinueDuration"></Input>
              </FormItem>
            </Col>
            <Col span="12">
              <span class="form-tips">*呼叫持续时长，大于等于该时长才统计无振铃</span>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="锁定时长">
                <Input v-model="formData.continueNoRingNumLockCard[0].lockDuration">
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

        <FormItem label="按连续无应答次数">
          <i-switch size="large" v-model="formData.continueNoResponseNumLockCard[0].use" :true-value="1" :false-value="0">
            <span slot="open">启用</span>
            <span slot="close">禁用</span>
          </i-switch>
        </FormItem>

        <template v-if="formData.continueNoResponseNumLockCard[0].use">
          <Row>
            <Col span="12">
              <FormItem label="切卡时重置">
                <i-switch size="large" v-model="formData.continueNoResponseNumLockCard[0].restartCutCard" :true-value="1" :false-value="0">
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
                <i-switch size="large" v-model="formData.continueNoResponseNumLockCard[0].ussdQuery" :true-value="1" :false-value="0">
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
              <FormItem label="无应答次数">
                <Input v-model="formData.continueNoResponseNumLockCard[0].noResponseNum"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="锁定时长">
                <Input v-model="formData.continueNoResponseNumLockCard[0].lockDuration">
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

        <FormItem label="按连续No Carrier次数">
          <i-switch size="large" v-model="formData.continueNoCarrierNumLockCard[0].use" :true-value="1" :false-value="0">
            <span slot="open">启用</span>
            <span slot="close">禁用</span>
          </i-switch>
        </FormItem>

        <template v-if="formData.continueNoCarrierNumLockCard[0].use">
          <Row>
            <Col span="12">
              <FormItem label="切卡时重置">
                <i-switch size="large" v-model="formData.continueNoCarrierNumLockCard[0].restartCutCard" :true-value="1" :false-value="0">
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
                <i-switch size="large" v-model="formData.continueNoCarrierNumLockCard[0].ussdQuery" :true-value="1" :false-value="0">
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
              <FormItem label="No Carrier次数">
                <Input v-model="formData.continueNoCarrierNumLockCard[0].noCarrierNum"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="锁定时长">
                <Input v-model="formData.continueNoCarrierNumLockCard[0].lockDuration">
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
          <i-switch size="large" v-model="formData.continueCallShortSecNumLockCard[0].use" :true-value="1" :false-value="0">
            <span slot="open">启用</span>
            <span slot="close">禁用</span>
          </i-switch>
        </FormItem>

        <template v-if="formData.continueCallShortSecNumLockCard[0].use">
          <Row>
            <Col span="12">
              <FormItem label="切卡时重置">
                <i-switch size="large" v-model="formData.continueCallShortSecNumLockCard[0].restartCutCard" :true-value="1" :false-value="0">
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
                <i-switch size="large" v-model="formData.continueCallShortSecNumLockCard[0].ussdQuery" :true-value="1" :false-value="0">
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
                <Input v-model="formData.continueCallShortSecNumLockCard[0].cumulCallShortSecNum"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="短秒时长">
                <Input v-model="formData.continueCallShortSecNumLockCard[0].shortDuration">
                  <span slot="append">秒</span>
                </Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="锁定时长">
                <Input v-model="formData.continueCallShortSecNumLockCard[0].lockDuration">
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

        <FormItem label="按连续快速振铃次数">
          <i-switch size="large" v-model="formData.continueFastRingNumLockCard[0].use" :true-value="1" :false-value="0">
            <span slot="open">启用</span>
            <span slot="close">禁用</span>
          </i-switch>
        </FormItem>

        <template v-if="formData.continueFastRingNumLockCard[0].use">
          <Row>
            <Col span="12">
              <FormItem label="切卡时重置">
                <i-switch size="large" v-model="formData.continueFastRingNumLockCard[0].restartCutCard" :true-value="1" :false-value="0">
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
                <i-switch size="large" v-model="formData.continueFastRingNumLockCard[0].ussdQuery" :true-value="1" :false-value="0">
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
              <FormItem label="快速振铃次数">
                <Input v-model="formData.continueFastRingNumLockCard[0].fastRingNum"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="最大振铃时间">
                <Input v-model="formData.continueFastRingNumLockCard[0].maxRingTime">
                  <span slot="append">秒</span>
                </Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="锁定时长">
                <Input v-model="formData.continueCallShortSecNumLockCard[0].lockDuration">
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

        <FormItem label="按连续快速应答次数">
          <i-switch size="large" v-model="formData.continueFastResponseNumLockCard[0].use" :true-value="1" :false-value="0">
            <span slot="open">启用</span>
            <span slot="close">禁用</span>
          </i-switch>
        </FormItem>

        <template v-if="formData.continueFastResponseNumLockCard[0].use">
          <Row>
            <Col span="12">
              <FormItem label="切卡时重置">
                <i-switch size="large" v-model="formData.continueFastResponseNumLockCard[0].restartCutCard" :true-value="1" :false-value="0">
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
                <i-switch size="large" v-model="formData.continueFastResponseNumLockCard[0].ussdQuery" :true-value="1" :false-value="0">
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
              <FormItem label="忽略应答信号">
                <i-switch size="large" v-model="formData.continueFastResponseNumLockCard[0].ignoreRespSignal" :true-value="1" :false-value="0">
                  <span slot="open">启用</span>
                  <span slot="close">禁用</span>
                </i-switch>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="快速应答次数">
                <Input v-model="formData.continueFastResponseNumLockCard[0].fastResponseNum"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="最大应答时间">
                <Input v-model="formData.continueFastResponseNumLockCard[0].maxResponseTime">
                  <span slot="append">秒</span>
                </Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="锁定时长">
                <Input v-model="formData.continueFastResponseNumLockCard[0].lockDuration">
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

        <FormItem label="按模块挂机原因">
          <i-switch size="large" v-model="formData.moduleHangUpCauseLockCard[0].use" :true-value="1" :false-value="0">
            <span slot="open">启用</span>
            <span slot="close">禁用</span>
          </i-switch>
        </FormItem>

        <template v-if="formData.moduleHangUpCauseLockCard[0].use">
          <Row>
            <Col span="12">
              <FormItem label="挂机原因码">
                <Input v-model="formData.moduleHangUpCauseLockCard[0].hangUpCauseCode"></Input>
              </FormItem>
            </Col>
            <Col span="12">
              <span class="form-tips">*多个挂机原因用;区分</span>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="连续出现次数">
                <Input v-model="formData.moduleHangUpCauseLockCard[0].continAppearNum"></Input>
              </FormItem>
            </Col>
          </Row>
        </template>

        <Divider/>

        <FormItem label="按SIP挂机原因">
          <i-switch size="large" v-model="formData.sipHangUpCauseLockCard[0].use" :true-value="1" :false-value="0">
            <span slot="open">启用</span>
            <span slot="close">禁用</span>
          </i-switch>
        </FormItem>

        <template v-if="formData.sipHangUpCauseLockCard[0].use">
          <Row>
            <Col span="12">
              <FormItem label="挂机原因码">
                <Input v-model="formData.sipHangUpCauseLockCard[0].hangUpCauseCode"></Input>
              </FormItem>
            </Col>
            <Col span="12">
              <span class="form-tips">*多个挂机原因用;区分</span>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="连续出现次数">
                <Input v-model="formData.sipHangUpCauseLockCard[0].continAppearNum"></Input>
              </FormItem>
            </Col>
          </Row>
        </template>

        <Divider/>

        <FormItem label="按SIP&模块挂机原因">
          <i-switch size="large" v-model="formData.sipModlHangUpCauseLockCard[0].use" :true-value="1" :false-value="0">
            <span slot="open">启用</span>
            <span slot="close">禁用</span>
          </i-switch>
        </FormItem>

        <template v-if="formData.sipModlHangUpCauseLockCard[0].use">
          <Row>
            <Col span="12">
              <FormItem label="挂机原因码">
                <Input v-model="formData.sipModlHangUpCauseLockCard[0].hangUpCauseCode"></Input>
              </FormItem>
            </Col>
            <Col span="12">
              <span class="form-tips">*多个挂机原因用;区分</span>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="连续出现次数">
                <Input v-model="formData.sipModlHangUpCauseLockCard[0].continAppearNum"></Input>
              </FormItem>
            </Col>
          </Row>
        </template>

        <Divider/>


        <FormItem label="按累计发送短信数">
          <i-switch size="large" v-model="formData.cumulatSendSmsNumLockCard[0].use" :true-value="1" :false-value="0">
            <span slot="open">启用</span>
            <span slot="close">禁用</span>
          </i-switch>
        </FormItem>

        <template v-if="formData.cumulatSendSmsNumLockCard[0].use">
          <Row>
            <Col span="12">
              <FormItem label="切卡时重置">
                <i-switch size="large" v-model="formData.cumulatSendSmsNumLockCard[0].restartCutCard" :true-value="1" :false-value="0">
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
                <i-switch size="large" v-model="formData.cumulatSendSmsNumLockCard[0].ussdQuery" :true-value="1" :false-value="0">
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
                <Input v-model="formData.cumulatSendSmsNumLockCard[0].sendSmsNum"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="锁定时长">
                <Input v-model="formData.cumulatSendSmsNumLockCard[0].lockDuration">
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
          <i-switch size="large" v-model="formData.sendSmsFailedNumLockCard[0].use" :true-value="1" :false-value="0">
            <span slot="open">启用</span>
            <span slot="close">禁用</span>
          </i-switch>
        </FormItem>

        <template v-if="formData.sendSmsFailedNumLockCard[0].use">
          <Row>
            <Col span="12">
              <FormItem label="切卡时重置">
                <i-switch size="large" v-model="formData.sendSmsFailedNumLockCard[0].restartCutCard" :true-value="1" :false-value="0">
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
                <i-switch size="large" v-model="formData.sendSmsFailedNumLockCard[0].ussdQuery" :true-value="1" :false-value="0">
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
                <Input v-model="formData.sendSmsFailedNumLockCard[0].sendSmsFailedNum"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="锁定时长">
                <Input v-model="formData.sendSmsFailedNumLockCard[0].lockDuration">
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

        <FormItem label="按连续发送短信失败数">
          <i-switch size="large" v-model="formData.continuSendSmsFailedNumLockCard[0].use" :true-value="1" :false-value="0">
            <span slot="open">启用</span>
            <span slot="close">禁用</span>
          </i-switch>
        </FormItem>

        <template v-if="formData.continuSendSmsFailedNumLockCard[0].use">
          <Row>
            <Col span="12">
              <FormItem label="切卡时重置">
                <i-switch size="large" v-model="formData.continuSendSmsFailedNumLockCard[0].restartCutCard" :true-value="1" :false-value="0">
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
                <i-switch size="large" v-model="formData.continuSendSmsFailedNumLockCard[0].ussdQuery" :true-value="1" :false-value="0">
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
              <FormItem label="连续发送短信失败数">
                <Input v-model="formData.continuSendSmsFailedNumLockCard[0].ctnSndSmsFailedNum"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="锁定时长">
                <Input v-model="formData.continuSendSmsFailedNumLockCard[0].lockDuration">
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

        <FormItem label="按连续未送达短信条数">
          <i-switch size="large" v-model="formData.continuNoSendSmsNumLockCard[0].use" :true-value="1" :false-value="0">
            <span slot="open">启用</span>
            <span slot="close">禁用</span>
          </i-switch>
        </FormItem>

        <template v-if="formData.continuNoSendSmsNumLockCard[0].use">
          <Row>
            <Col span="12">
              <FormItem label="切卡时重置">
                <i-switch size="large" v-model="formData.continuNoSendSmsNumLockCard[0].restartCutCard" :true-value="1" :false-value="0">
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
                <i-switch size="large" v-model="formData.continuNoSendSmsNumLockCard[0].ussdQuery" :true-value="1" :false-value="0">
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
              <FormItem label="连续未送达短信条数">
                <Input v-model="formData.continuNoSendSmsNumLockCard[0].ctnNoSndSmsNum"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="锁定时长">
                <Input v-model="formData.continuNoSendSmsNumLockCard[0].lockDuration">
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

        <FormItem label="按累计未送达短信条数">
          <i-switch size="large" v-model="formData.cumulaNoSendSmsNumLockCard[0].use" :true-value="1" :false-value="0">
            <span slot="open">启用</span>
            <span slot="close">禁用</span>
          </i-switch>
        </FormItem>

        <template v-if="formData.cumulaNoSendSmsNumLockCard[0].use">
          <Row>
            <Col span="12">
              <FormItem label="切卡时重置">
                <i-switch size="large" v-model="formData.cumulaNoSendSmsNumLockCard[0].restartCutCard" :true-value="1" :false-value="0">
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
                <i-switch size="large" v-model="formData.cumulaNoSendSmsNumLockCard[0].ussdQuery" :true-value="1" :false-value="0">
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
              <FormItem label="累计未送达短信条数">
                <Input v-model="formData.cumulaNoSendSmsNumLockCard[0].cumulNoSndSmsNum"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="锁定时长">
                <Input v-model="formData.cumulaNoSendSmsNumLockCard[0].lockDuration">
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

        <FormItem label="按累计接收短信数">
          <i-switch size="large" v-model="formData.cumulaRecvSmsNumLockCard[0].use" :true-value="1" :false-value="0">
            <span slot="open">启用</span>
            <span slot="close">禁用</span>
          </i-switch>
        </FormItem>

        <template v-if="formData.cumulaRecvSmsNumLockCard[0].use">
          <Row>
            <Col span="12">
              <FormItem label="切卡时重置">
                <i-switch size="large" v-model="formData.cumulaRecvSmsNumLockCard[0].restartCutCard" :true-value="1" :false-value="0">
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
                <i-switch size="large" v-model="formData.cumulaRecvSmsNumLockCard[0].ussdQuery" :true-value="1" :false-value="0">
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
              <FormItem label="累计接收条数">
                <Input v-model="formData.cumulaRecvSmsNumLockCard[0].cumulRecvSmsNum"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="短信内容关键字">
                <Input v-model="formData.cumulaRecvSmsNumLockCard[0].smsTextKey"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="短信发送号码">
                <Input v-model="formData.cumulaRecvSmsNumLockCard[0].sendSmsNum"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="锁定时长">
                <Input v-model="formData.cumulaRecvSmsNumLockCard[0].lockDuration">
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

        <FormItem label="按端口互打次数">
          <i-switch size="large" v-model="formData.portHitNumLockCard[0].use" :true-value="1" :false-value="0">
            <span slot="open">启用</span>
            <span slot="close">禁用</span>
          </i-switch>
        </FormItem>

        <template v-if="formData.portHitNumLockCard[0].use">
          <Row>
            <Col span="12">
              <FormItem label="切卡时重置">
                <i-switch size="large" v-model="formData.portHitNumLockCard[0].restartCutCard" :true-value="1" :false-value="0">
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
                <i-switch size="large" v-model="formData.portHitNumLockCard[0].ussdQuery" :true-value="1" :false-value="0">
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
                <i-switch size="large" v-model="formData.portHitNumLockCard[0].conditArrivCutCd" :true-value="1" :false-value="0">
                  <span slot="open">启用</span>
                  <span slot="close">禁用</span>
                </i-switch>
              </FormItem>
            </Col>
            <Col span="12">
              <span class="form-tips">*如果启用，只会锁卡不会切卡</span>
            </Col>
          </Row>


          <Row>
            <Col span="12">
              <FormItem label="累计互打次数">
                <Input v-model="formData.portHitNumLockCard[0].cumulHitNum"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="短信内容关键字">
                <Input v-model="formData.portHitNumLockCard[0].smsTextKey"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="短信发送号码">
                <Input v-model="formData.cumulaRecvSmsNumLockCard[0].sendSmsNum"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="锁定时长">
                <Input v-model="formData.cumulaRecvSmsNumLockCard[0].lockDuration">
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
        messageWarning: 0,
        messageWarningNum: '',
        restartAndSaveCurrentCard: 0,
        simOnlineTimeLockCard: [
          {
            use: 0,
            forceHangUp: 0,
            online: 120,
            lockDuration: 0
          }
        ],
        cumulatConversaDurationLockCard: [{
          use: 0,
          restartCutCard: 0,
          ussdQuery: 0,
          arriCondtCutCd: 0,
          cumulatDuration: 0,
          lockDuration: 0
        }],
        conversationNumLockCard: [{
          use: 0,
          restartCutCard: 0,
          ussdQuery: 0,
          arriCondtCutCd: 0,
          conversationNum: 0,
          lockDuration: 0
        }],
        callNumLockCard: [{
          use: 0,
          restartCutCard: 0,
          ussdQuery: 0,
          arriCondtCutCd: 0,
          cumulativeCallNum: 0,
          lockDuration: 0
        }],
        continueCallFailedNumLockCard: [{
          use: 0,
          restartCutCard: 0,
          ussdQuery: 0,
          autoDetecThreshold: 0,
          callFailedNum: 20,
          lockDuration: -1
        }],
        continueNoRingNumLockCard: [{
          use: 0,
          restartCutCard: 0,
          ussdQuery: 0,
          autoDetecThreshold: 0,
          noRingNum: 10,
          minContinueDuration: 0,
          lockDuration: 0
        }],
        continueNoResponseNumLockCard: [{
          use: 0,
          restartCutCard: 0,
          ussdQuery: 0,
          noResponseNum: 0,
          lockDuration: 0
        }],
        continueNoCarrierNumLockCard: [{
          use: 0,
          restartCutCard: 0,
          ussdQuery: 0,
          noCarrierNum: 0,
          lockDuration: 0
        }],
        continueCallShortSecNumLockCard: [{
          use: 0,
          restartCutCard: 0,
          ussdQuery: 0,
          cumulCallShortSecNum: 0,
          shortDuration: 0,
          lockDuration: 0
        }],
        continueFastRingNumLockCard: [{
          use: 0,
          restartCutCard: 0,
          ussdQuery: 0,
          fastRingNum: 5,
          maxRingTime: 3,
          lockDuration: -1
        }],
        continueFastResponseNumLockCard: [{
          use: 0,
          restartCutCard: 0,
          ussdQuery: 0,
          ignoreRespSignal: 0,
          fastResponseNum: 5,
          maxResponseTime: 3,
          lockDuration: -1
        }],
        moduleHangUpCauseLockCard: [{
          use: 0,
          hangUpCauseCode: '',
          continAppearNum: 3
        }],
        sipHangUpCauseLockCard: [{
          use: 0,
          hangUpCauseCode: '',
          continAppearNum: 3
        }],
        sipModlHangUpCauseLockCard: [{
          use: 0,
          hangUpCauseCode: '',
          continAppearNum: 3
        }],
        cumulatSendSmsNumLockCard: [{
          use: 0,
          restartCutCard: 0,
          ussdQuery: 0,
          sendSmsNum: 100,
          lockDuration: 0
        }],
        sendSmsFailedNumLockCard: [{
          use: 0,
          restartCutCard: 0,
          ussdQuery: 0,
          sendSmsFailedNum: 20,
          lockDuration: 0
        }],
        continuSendSmsFailedNumLockCard: [{
          use: 0,
          restartCutCard: 0,
          ussdQuery: 0,
          ctnSndSmsFailedNum: 5,
          lockDuration: 0
        }],
        continuNoSendSmsNumLockCard: [{
          use: 0,
          restartCutCard: 0,
          ussdQuery: 0,
          ctnNoSndSmsNum: 5,
          lockDuration: 0
        }],
        cumulaNoSendSmsNumLockCard: [{
          use: 0,
          restartCutCard: 0,
          ussdQuery: 0,
          cumulNoSndSmsNum: 5,
          lockDuration: 0
        }],
        cumulaRecvSmsNumLockCard: [{
          use: 0,
          restartCutCard: 0,
          ussdQuery: 0,
          cumulRecvSmsNum: 8,
          smsTextKey: '',
          smsSendNum: '',
          lockDuration: 0
        }],
        portHitNumLockCard: [{
          use: 0,
          restartCutCard: 0,
          ussdQuery: 0,
          conditArrivCutCd: 0,
          cumulHitNum: 0,
          lockDuration: 0
        }]
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
