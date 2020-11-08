<template>
  <div class="page-content">
    <h1 class="page-title">端口设置</h1>
    <Form :model="formData" :label-width="180">
      <Card class="card-content" title="基本设置">
        <Row>
          <Col span="12">
            <FormItem label="最大基站数">
              <Input v-model="formData.maxBaseStationCount"></Input>
            </FormItem>
          </Col>
        </Row>

        <Row>
          <Col span="12">
            <FormItem label="最低有效信号">
              <Input v-model="formData.minValidSign">
                <span slot="append">dbm</span>
              </Input>
            </FormItem>
          </Col>
        </Row>

        <Row>
          <Col span="12">
            <FormItem label="切换周期">
              <FormLabelTooltip slot="label" label="切换周期" content="定义基站切换周期，只有当基站选择Poll模式时，基站才会根据切换周期来切换，默认为60分钟"/>
              <Input v-model="formData.changeFrequency">
                <span slot="append">分钟</span>
              </Input>
            </FormItem>
          </Col>
        </Row>

        <Row>
          <Col span="12">
            <FormItem label="基站平衡">
              <FormLabelTooltip slot="label" label="基站平衡" content="禁用，每个端口将尽量选择信号较好的基站进行注册，启用后，每个端口将尽量分散基站进行注册，以此缓解基站压力"/>
              <i-switch size="large" v-model="formData.baseStationBalance" :true-value="1" :false-value="0">
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

      <Card class="card-content" title="触发条件">
        <Row>
          <Col span="6">
            <FormItem :label-width="100">
              <Checkbox v-model="formData.withContinuousCallFailure" :true-value="1" :false-value="0">按连续呼叫失败</Checkbox>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="呼叫失败次数">
              <Input v-model="formData.callFailureCount"></Input>
            </FormItem>
          </Col>
        </Row>

        <Row>
          <Col span="6">
            <FormItem :label-width="100">
              <Checkbox v-model="formData.withContinuousCall" :true-value="1" :false-value="0">按连续呼叫次数</Checkbox>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="连续呼叫次数">
              <Input v-model="formData.continuousCallTimes"></Input>
            </FormItem>
          </Col>
        </Row>

        <Row>
          <Col span="6">
            <FormItem :label-width="100">
              <Checkbox v-model="formData.withCumulativeCallTime" :true-value="1" :false-value="0">按累计通话时长</Checkbox>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="累计通话时长">
              <Input v-model="formData.cumulativeCallTimes">
                <span slot="append">分钟</span>
              </Input>
            </FormItem>
          </Col>
        </Row>

        <Row>
          <Col span="6">
            <FormItem :label-width="100">
              <Checkbox v-model="formData.withCumulativeCallCount" :true-value="1" :false-value="0">按累计通话次数</Checkbox>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="累计通话次数">
              <Input v-model="formData.cumulativeCallCount"></Input>
            </FormItem>
          </Col>
        </Row>

        <FormItem>
          <Button type="primary" @click="handleSubmit">确定</Button>
          <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
        </FormItem>
      </Card>

      <Card class="card-content" title="基站设置&操作">
        <Table :columns="tableColumns" :data="tableData">

          <template slot="baseStationSelect" slot-scope="{ row }">
            <Select v-model="row.baseStationSelect">
              <Option :value="0">auto</Option>
              <Option :value="1">poll</Option>
            </Select>
          </template>

          <template slot="whiteList" slot-scope="{ row }">
            <Input v-model="row.whiteList"></Input>
          </template>
          <template slot="blackList" slot-scope="{ row }">
            <Input v-model="row.blackList"></Input>
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
import FormLabelTooltip from '@/components/formLabelToolTip'

export default {
  name: 'bsc',
  components: {
    FormLabelTooltip
  },
  data () {
    return {
      formData: {
        maxBaseStationCount: 4,
        minValidSign: -90,
        changeFrequency: 60,
        baseStationBalance: 0,
        withContinuousCallFailure: 0,
        callFailureCount: 0,
        withContinuousCall: 0,
        continuousCallTimes: 0,
        withCumulativeCallTime: 0,
        cumulativeCallTimes: 60,
        withCumulativeCallCount: 0,
        cumulativeCallCount: 0
      },
      tableColumns: [
        {
          key: 'port',
          title: '端口'
        },
        {
          key: 'baseStationSelect',
          title: '基站选择',
          slot: 'baseStationSelect'
        },
        {
          key: 'currentBaseStation',
          title: '当前基站'
        },
        {
          key: 'whiteList',
          title: '白名单',
          slot: 'whiteList'
        },
        {
          key: 'blackList',
          title: '黑名单',
          slot: 'blackList'
        }
      ],
      tableData: [
        {
          port: 1,
          baseStationSelect: 0,
          currentBaseStation: 55,
          whiteList: '',
          blackList: ''
        }
      ]
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
