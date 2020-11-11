<template>
  <div class="page-content">
    <h1 class="page-title">音频编码</h1>
    <Form :model="formData" :label-width="180">
      <Card class="card-content" title="音频属性">
        <h3>音量</h3>
        <Row>
          <Col span="12">
            <FormItem label="电话口输入音量">
              <FormLabelTooltip slot="label" label="电话口输入音量" content="IP侧的音量，即主叫听到的音量，可调节，范围为10-40" />
              <Slider v-model="formData.volume[0].telepInput" :min="volumnMin" :max="volumnMax" show-input/>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="电话口输出音量">
              <FormLabelTooltip slot="label" label="电话口输入音量" content="GSM侧的音量，即被叫听到的音量，可调节，范围为10-40" />
              <Slider v-model="formData.volume[0].telepOutput" :min="volumnMin" :max="volumnMax" show-input/>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="DTMF">
              <Slider v-model="formData.volume[0].dtmfVolume" :min="volumnMin" :max="volumnMax" show-input/>
            </FormItem>
          </Col>
        </Row>
        <Divider/>
        <h3>拨号音</h3>
        <Row>
          <Col span="12">
            <FormItem label="最高频率">
              <Input v-model="formData.dialTone[0].maxFrequency"></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="最低频率">
              <Input v-model="formData.dialTone[0].minFrequency"></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="通持续时间">
              <Input v-model="formData.dialTone[0].passDuration"></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="断持续时间">
              <Input v-model="formData.dialTone[0].interrupturation"></Input>
            </FormItem>
          </Col>
        </Row>
        <Divider/>
        <h3>回铃音</h3>
        <Row>
          <Col span="12">
            <FormItem label="最高频率">
              <Input v-model="formData.ringingTone[0].maxFrequency"></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="最低频率">
              <Input v-model="formData.ringingTone[0].minFrequency"></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="通持续时间">
              <Input v-model="formData.ringingTone[0].passDuration"></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="断持续时间">
              <Input v-model="formData.ringingTone[0].interrupturation"></Input>
            </FormItem>
          </Col>
        </Row>
        <Divider/>

        <h3>忙音</h3>
        <Row>
          <Col span="12">
            <FormItem label="最高频率">
              <Input v-model="formData.busyTone[0].maxFrequency"></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="最低频率">
              <Input v-model="formData.busyTone[0].minFrequency"></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="通持续时间">
              <Input v-model="formData.busyTone[0].passDuration"></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="断持续时间">
              <Input v-model="formData.busyTone[0].interrupturation"></Input>
            </FormItem>
          </Col>
        </Row>
      </Card>
      <Card title="语音编码" class="card-content">
        <p slot="title">
          语音编码
          <Tooltip transfer placement="top" max-width="350" content="此为默认编码优先级，可拖拽修改，越上面的优先级越高">
            <Icon type="ios-information-circle-outline" size="12" color="#2d8cf0"/>
          </Tooltip>
        </p>
        <Row>
          <Col span="20" offset="2">
            <div class="drag-box-card">
              <DragList :list1.sync="formData.voiceCode" :list2.sync="list2" :dropConClass="dropConClass" @on-change="handleChange">
                <h3 slot="left-title">禁用的编码</h3>
                <Card slot="left" slot-scope="left">{{ left.itemLeft.name}}</Card>
                <h3 slot="right-title">启用的编码</h3>
                <Card slot="right" slot-scope="right">{{right.itemRight.name}}</Card>
              </DragList>
            </div>
          </Col>
        </Row>
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

import DragList from '@/components/drag-list'
import FormLabelTooltip from '@/components/formLabelToolTip'
export default {
  name: 'encode',
  mixins: [mixins],

  components: {
    FormLabelTooltip,
    DragList
  },
  data () {
    return {
      dropConClass: {
        left: ['drop-box', 'left-drop-box'],
        right: ['drop-box', 'right-drop-box']
      },
      volumnMin: 10,
      volumnMax: 40,
      formData: {
        volume: [
          {
            telepInput: 10,
            telepOutput: 10,
            dtmfVolume: 10
          }
        ],
        dialTone: [
          {
            maxFrequency: 0,
            minFrequency: 450,
            passDuration: 5000,
            interrupturation: 0
          }
        ],
        ringingTone: [
          {
            maxFrequency: 0,
            minFrequency: 450,
            passDuration: 5000,
            interrupturation: 0
          }
        ],
        busyTone: [
          {
            maxFrequency: 0,
            minFrequency: 450,
            passDuration: 5000,
            interrupturation: 0
          }
        ],
        voiceCode: [
          {
            name: 'iLBC',
            id: 1
          }
        ]
      },

      list2: [
        {
          name: 'G729',
          id: 2
        },
        {
          name: 'G.723',
          id: 3
        },
        {
          name: 'G722',
          id: 4
        },
        {
          name: 'G726-32',
          id: 5
        },
        {
          name: 'PCMA',
          id: 6
        },
        {
          name: 'PCMU',
          id: 7
        }
      ]
    }
  },
  methods: {
    handleChange ({ src, target, oldIndex, newIndex }) {
      // TODO 添加修改的数据
      // this.handleList.push(`${src} => ${target}, ${oldIndex} => ${newIndex}`)
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/common';
.drag-box-card{
  display: inline-block;
  width: 100%;
  /deep/ .drag-list-item{
    margin: 10px;
  }
  /deep/ .drop-box{
    border: 1px solid #eeeeee;
    height: 400px;
    border-radius: 5px;
  }
  /deep/ .left-drop-box{
    margin-right: 10px;
  }
  .right-drop-box{
    //
  }
}
</style>
