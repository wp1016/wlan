<template>
  <div class="page-content">
    <h1 class="page-title">LED设置</h1>
    <Form :model="formData" :label-width="180">
      <Card class="card-content" title="锁卡闪灯频率">
        <div class="card-wrapper">
          <Row>
            <Col span="12">
              <FormItem label="运营商锁卡">
                <Input type="number" v-model="formData.operatorsLockCard"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="策略锁卡">
                <Input type="number" v-model="formData.strategyLockCard"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="余额不足">
                <Input type="number" v-model="formData.balanceLow"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="注册失败">
                <Input type="number" v-model="formData.registerFailed"></Input>
              </FormItem>
            </Col>
          </Row>
        </div>
      </Card>
      <Card title="其他设置" class="card-content">
        <Row>
          <Col span="12">
            <FormItem label="端口灯指示">
              <i-switch size="large" v-model="formData.portLightIndication" :true-value="1" :false-value="0">
                <span slot="open">启用</span>
                <span slot="close">禁用</span>
              </i-switch>
            </FormItem>
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
export default {
  name: 'led',
  mixins: [mixins],
  data () {
    return {
      formData: {
        operatorsLockCard: 100,
        strategyLockCard: 100,
        balanceLow: 500,
        registerFailed: 100,
        portLightIndication: 0
      }
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/common';

</style>
