<template>
  <div class="page-content">
    <h1 class="page-title">流量上网配置</h1>
    <Form :model="formData" :label-width="180">

      <Strategy/>

      <Card title="URL配置" class="card-content">
        <div class="card-wrapper">
          <Row>
            <Col span="12">
              <FormItem label="URLs">
                <Input type="textarea" :autosize="{minRows: 3,  maxRows: 5}" placeholder="多个URL逗号或换行分隔" v-model="formData.urls"></Input>
              </FormItem>
            </Col>
          </Row>
        </div>
        <FormItem style="margin-top:10px;">
          <Button type="primary" @click="handleSubmit">确定</Button>
          <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
        </FormItem>
      </Card>

      <ApnSetting/>

    </Form>
  </div>
</template>

<script>
import mixins from '@/mixins'
import Strategy from './gprs/stratrgy'
import ApnSetting from './gprs/apn'
export default {
  name: 'gprs',
  mixins: [mixins],
  components: {
    Strategy,
    ApnSetting
  },
  data () {
    return {
      formData: {
        urlConfig: ''
      }
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/common';

</style>
