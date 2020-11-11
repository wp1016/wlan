<template>
  <div class="page-content">
    <h1 class="page-title">系统升级或恢复</h1>
    <Form :model="formData" :label-width="180">
      <Card title="导入文件" class="card-content">
        <p slot="title">
          <span>导入文件</span>
          <Tooltip transfer placement="top" max-width="350" content="在该页面中，用户可以对设备软件版本进行升级，升级时，文件类型选择firmware,然后导入软件版本确定即可，导入完成后设备将自动重启，说明软件版本升级成功，升级软件版本不会更改设备配置">
            <Icon type="ios-information-circle-outline" size="12" color="#2d8cf0"/>
          </Tooltip>
        </p>
        <Row>
          <Col span="12">
            <FormItem label="文件类型">
              <Select transfer v-model="formData.fileType">
                <Option v-for="item in fileTypeOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="24">
            <FormItem label="文件路劲">
              <Upload :before-upload="uploadHandler" action="">
                <Button icon="ios-cloud-upload-outline">上传文件</Button>
              </Upload>
            </FormItem>
          </Col>
        </Row>
      </Card>

      <Card class="card-content" title="导出配置">
        <Row type="flex" justify="space-between">
          <Col span="16">
            <span>点击右侧按钮将使网关的所有设置导出到文件</span>
          </Col>
          <Col span="8">
            <div class="export-config-wrapper">
              <div class="config-type">
                <span>配置类型</span>
                <Select transfer v-model="exportConfiguration.configType">
                  <Option :value="0">配置</Option>
                  <Option :value="1">IMEI</Option>
                </Select>
              </div>
              <Button type="primary" @click="exportConfig">导出配置</Button>
            </div>
          </Col>
        </Row>
      </Card>

      <Card class="card-content" title="系统恢复">
        <Row type="flex" justify="space-between">
          <Col span="16">
            <span>点击右侧按钮将使网关的所有设置恢复到出厂设置</span>
          </Col>
          <Col span="8" style="display: flex; justify-content: flex-end;">
            <Button type="primary" @click="systemRecovery">恢复出厂设置</Button>
          </Col>
        </Row>
      </Card>
    </Form>
  </div>
</template>

<script>
import { genarateOptions } from '@/libs/genarateOptions'
import { fileTypeOptions } from './options'
export default {
  name: 'update',
  data () {
    return {
      formData: {
        fileType: 0,
        filePath: '',
        systemRecovery: 0
      },
      exportConfiguration: {
        configType: 0,
        export: 0
      },
      fileTypeOptions: genarateOptions(fileTypeOptions)
    }
  },
  methods: {
    uploadHandler (file) {
      console.log(file)
      return false
    },
    exportConfig () {

    },
    systemRecovery () {
      this.formData.systemRecovery = this.formData.systemRecovery === 0 ? 1 : 0
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/common';
.export-config-wrapper{
  display: flex;
  justify-content: space-between;
}
.config-type{
  flex: 1;
  margin-right: 10px;
  display: flex;
  align-items: center;
  span {
    white-space: nowrap;
    margin-right: 5px;
  }
}
</style>
