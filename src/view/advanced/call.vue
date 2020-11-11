<template>
  <div class="page-content">
    <h1 class="page-title">互打设置</h1>
    <Form :model="formData" :label-width="180">
      <Card class="card-content" title="基本设置">
        <div class="card-wrapper">

          <Row>
            <Col span="12">
              <FormItem label="互打设置">
                <FormatLabelTooltip slot="label" label="互打设置" content="启用后，设备空间端口将依据设置的触发条件互打。比如端口3拨打端口5"/>
                <i-switch size="large" v-model="formData.mutualHitSetting" :true-value="1" :false-value="0">
                  <span slot="open">启用</span>
                  <span slot="close">禁用</span>
                </i-switch>
              </FormItem>
            </Col>
            <Col span="12">
              <span class="form-tips">*启用后，设备将依据设置的触发条件进行互打</span>
            </Col>
          </Row>

          <template v-if="formData.mutualHitSetting">
            <Row>
              <Col span="12">
                <FormItem label="最小通话时长">
                  <Input v-model="formData.mutualHitMinConverseDuration">
                    <span slot="append">秒</span>
                  </Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="最大通话时长">
                  <Input v-model="formData.mutualHitMaxConverseDuration">
                    <span slot="append">秒</span>
                  </Input>
                </FormItem>
              </Col>
            </Row>
          </template>

          <FormItem style="margin-top:10px;">
            <Button type="primary" @click="handleSubmit">确定</Button>
            <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
          </FormItem>
        </div>
      </Card>

      <template v-if="formData.mutualHitSetting">
        <Card class="card-content" title="触发条件">
          <Row>
            <Col span="4">
              <FormItem :label-width="10">
                <Checkbox v-model="formData.onlineTimeUse" :true-value="1" :false-value="0">按设备在线时间</Checkbox>
              </FormItem>
            </Col>
            <Col span="10">
              <FormItem label="最小间隔时间">
                <Input :disabled="!formData.onlineTimeUse" v-model="formData.onlineTimeMinTime"><span slot="append">分钟</span></Input>
              </FormItem>
            </Col>
            <Col span="10">
              <FormItem label="最大间隔时间">
                <Input :disabled="!formData.onlineTimeUse" v-model="formData.onlineTimeMaxTime"><span slot="append">分钟</span></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="4">
              <FormItem :label-width="10">
                <Checkbox  v-model="formData.continCallFailedUse" :true-value="1" :false-value="0">按连续呼叫失败</Checkbox>
              </FormItem>
            </Col>
            <Col span="10">
              <FormItem label="呼叫失败次数">
                <Input :disabled="!formData.continCallFailedUse" v-model="formData.continCallFailedNum"></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="4">
              <FormItem :label-width="10">
                <Checkbox  v-model="formData.continCallNumUse" :true-value="1" :false-value="0">按连续呼叫次数</Checkbox>
              </FormItem>
            </Col>
            <Col span="10">
              <FormItem label="连续呼叫次数">
                <Input :disabled="!formData.continCallNumUse" v-model="formData.continCallNum"></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="4">
              <FormItem :label-width="10">
                <Checkbox  v-model="formData.cumulConvsaDuraUse" :true-value="1" :false-value="0">按累计通话时长</Checkbox>
              </FormItem>
            </Col>
            <Col span="10">
              <FormItem label="累计通话时长">
                <Input :disabled="!formData.cumulConvsaDuraUse" v-model="formData.cumulConvsaDuration"><span slot="append">分钟</span></Input>
              </FormItem>
            </Col>
          </Row>

          <FormItem style="margin-top:10px;">
            <Button type="primary" @click="handleSubmit">确定</Button>
            <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
          </FormItem>
        </Card>

        <Card class="card-content" title="端口分组">
          <p slot="title">
            端口分组
            <Tooltip transfer placement="top" max-width="350">
              <Icon type="ios-information-circle-outline" size="16" color="#2d8cf0"/>
              <div slot="content">
                <p>所选端口必须连续，所选SIM必须连续，所有端口的SIM必须一样。</p>
                <p><strong>加组：</strong>一次只能添加一个组，组中不能只有一个端口卡槽</p>
                <p><strong>退组：</strong>一次可以多个组退出，但是不能分割原有组</p>
              </div>
            </Tooltip>
          </p>
          <div v-for="item in formData.portGroupMutualHit" :key="item.port">
            <Row>
              <Col span="4">
                <FormItem :label-width="20">
                  <Checkbox :indeterminate="item.indeterminate" :value="item.portSelected" @click.prevent.native="selectPort(item.portSelected,item.port)">端口{{item.port}}</Checkbox>
                </FormItem>
              </Col>
              <Col span="12">
                <FormItem :label-width="0">
                  <CheckboxGroup v-model="item.cardSlot" @on-change="selectSlot($event,item.port)">
                    <Checkbox :label="0">A</Checkbox>
                    <Checkbox :label="1">B</Checkbox>
                    <Checkbox :label="2">C</Checkbox>
                    <Checkbox :label="3">D</Checkbox>
                  </CheckboxGroup>
                </FormItem>
              </Col>
            </Row>
          </div>

          <FormItem style="margin-top:15px;">
            <Button type="primary" @click="join">加组</Button>
            <Button @click="quit" style="margin-left: 8px">退组</Button>
          </FormItem>

        </Card>

      </template>
    </Form>
  </div>
</template>

<script>
import mixins from '@/mixins'

import FormatLabelTooltip from '@/components/formLabelToolTip'
import { genaratePorts } from '@/libs/genarateOptions'
export default {
  name: 'call',
  mixins: [mixins],

  components: {
    FormatLabelTooltip
  },
  data () {
    return {
      formData: {
        mutualHitSetting: 0,
        mutualHitSmsSend: 0,
        mutualHitMinConverseDuration: 60,
        mutualHitMaxConverseDuration: 120,

        onlineTimeUse: 0,
        onlineTimeMinTime: 60,
        onlineTimeMaxTime: 120,

        continCallFailedUse: 0,
        continCallFailedNum: 0,

        continCallNumUse: 0,
        continCallNum: 0,

        cumulConvsaDuraUse: 0,
        cumulConvsaDuration: 0,

        portGroupMutualHit: genaratePorts(32, { cardSlot: [], portSelected: false, indeterminate: false, selectedAll: false })
      }
    }
  },
  methods: {
    selectSlot (cardSlot, port) {
      let selectedRowIndex = this.formData.portGroupMutualHit.findIndex(item => item.port === port)
      if (cardSlot.length === 4) {
        this.formData.portGroupMutualHit[selectedRowIndex].portSelected = true
        this.formData.portGroupMutualHit[selectedRowIndex].indeterminate = false
      } else if (cardSlot.length > 0) {
        this.formData.portGroupMutualHit[selectedRowIndex].portSelected = false
        this.formData.portGroupMutualHit[selectedRowIndex].indeterminate = true
      } else {
        this.formData.portGroupMutualHit[selectedRowIndex].portSelected = false
        this.formData.portGroupMutualHit[selectedRowIndex].indeterminate = false
      }
    },
    selectPort (portSelected, port) {
      let selectedRowIndex = this.formData.portGroupMutualHit.findIndex(item => item.port === port)

      if (this.formData.portGroupMutualHit[selectedRowIndex].indeterminate) {
        this.formData.portGroupMutualHit[selectedRowIndex].portSelected = false
        this.formData.portGroupMutualHit[selectedRowIndex].cardSlot = []
      } else {
        this.formData.portGroupMutualHit[selectedRowIndex].portSelected = !portSelected
        this.formData.portGroupMutualHit[selectedRowIndex].cardSlot = !portSelected ? [0, 1, 2, 3] : []
      }
      this.formData.portGroupMutualHit[selectedRowIndex].indeterminate = false
    },
    join () {

    },
    quit () {

    }
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/common';

</style>
