<template>
  <Form :model="formData" :label-width="180">
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
                <h3 slot="left-title">启用的编码</h3>
                <Card slot="left" slot-scope="left">{{ left.itemLeft.name}}</Card>
                <h3 slot="right-title">禁用的编码</h3>
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
</template>
<script>
import mixins from '@/mixins'

import DragList from '@/components/drag-list'

export default {
  name: 'encode',
  mixins: [mixins],
  components: {
    DragList
  },
  data () {
    return {
      dropConClass: {
        left: ['drop-box', 'left-drop-box'],
        right: ['drop-box', 'right-drop-box']
      },
      formData: {
        voiceCode: []
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
@import '../../../assets/css/common.less';

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
