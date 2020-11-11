<template>
  <div class="page-content">
    <h1 class="page-title">网络测试</h1>
    <Form :model="formData" :label-width="180">
      <Card title="手动Ping" class="card-content">
        <Row>
          <Col span="12">
            <FormItem label="IP地址/主机名">
              <Input v-model="formData.handPing.ipAddrOrHostName"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="包大小">
              <Input v-model="formData.handPing.packageSize"></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <span class="form-tips">*缺省为56字节</span>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="包个数">
              <Input v-model="formData.handPing.packNum"></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <span class="form-tips">*缺省为4，0表示一直ping</span>
          </Col>
        </Row>
        <h2 class="result-title">
          <span>结果</span>
          <Button type="primary">开始Ping</Button>
        </h2>
        <Divider dashed/>
        <div class="result-wrapper" v-html="formData.handPing.result"></div>
      </Card>

      <Card title="抓包" class="card-content">
        <Row>
          <Col span="12">
            <FormItem label="自动抓包">
              <i-switch size="large" v-model="formData.autoPacketCapture" :true-value="1" :false-value="0">
                <span slot="open">启用</span>
                <span slot="close">禁用</span>
              </i-switch>
            </FormItem>
          </Col>
          <Col span="12">
            <span class="form-tips">*设备开机后自动开始抓包</span>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="主机地址">
              <Input v-model="formData.packetCaptureHostAddr"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="端口">
              <Input v-model="formData.packetCaptureHostPort"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="文件大小">
              <Select transfer v-model="formData.packetCaptureFileSize">
                <Option v-for="item in fileSezeOptions" :value="item.value" :key="item.value">{{item.label}}</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
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
        handPing: {
          ipAddrOrHostName: '192.168.8.1',
          packageSize: 56,
          packNum: 4,
          result: ''
        },
        autoPacketCapture: 0,
        packetCaptureHostAddr: '',
        packetCaptureHostPort: 8888,
        packetCaptureFileSize: 0
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
