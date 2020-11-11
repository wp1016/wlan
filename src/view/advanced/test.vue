<template>
  <div class="page-content">
    <h1 class="page-title">网络测试</h1>
    <Form :model="formData" :label-width="180">
      <Card title="手动Ping" class="card-content">
        <div class="card-wrapper">
          <Row>
            <Col span="12">
              <FormItem label="IP地址/主机名">
                <Input v-model="formData.ipAddrOrHostName"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="包大小">
                <Input type="number" v-model="formData.packageSize"></Input>
              </FormItem>
            </Col>
            <Col span="12">
              <span class="form-tips">*缺省为56字节</span>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="包个数">
                <Input type="number" v-model="formData.packNum"></Input>
              </FormItem>
            </Col>
            <Col span="12">
              <span class="form-tips">*缺省为4，0表示一直ping</span>
            </Col>
          </Row>
        </div>
        <h2 class="result-title">
          <span>结果</span>
          <Button type="primary">开始Ping</Button>
        </h2>
        <Divider dashed/>
        <div class="result-wrapper" v-html="formData.result"></div>
      </Card>

    </Form>
  </div>
</template>

<script>
import { genarateOptions } from '@/libs/genarateOptions'
import { fileSezeOptions } from './options'

export default {
  name: 'test',
  data () {
    return {
      formData: {
        ipAddrOrHostName: '192.168.8.1',
        packageSize: 56,
        packNum: 4,
        result: ''
      },
      fileSezeOptions: genarateOptions(fileSezeOptions)
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/common';
.result-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 14px;
    font-weight: 700;
    color: #17233d;
  }
}
.result-wrapper {
  margin: 20px;
  height: 300px;
  background: #eee;
  overflow-x: hidden;
  border: 1px solid #e7e7e7;
}
</style>
