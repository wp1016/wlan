<template>
  <div class="page-content">
    <h1 class="page-title">线路设置</h1>
    <Card class="card-content" title="MNP">
      <Form :model="formData" :label-width="180">
        <Row>
          <Col span="24">
            <FormItem label="MNP支持">
              <i-switch :true-value="1" :false-value="0" v-model="formData.mnp" size="large">
                <span slot="open">启用</span>
                <span slot="close">禁用</span>
              </i-switch>
              <span class="form-tips">*启用后，允许服务器选择端口以及做号码转换</span>
            </FormItem>
          </Col>
        </Row>

        <template v-if="formData.mnp">
          <Row>
            <Col span="12">
              <FormItem label="端口选择顺序">
                <Select transfer v-model="formData.portSort">
                  <Option v-for="item in sortOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
                </Select>
              </FormItem>
            </Col>
            <Col span="12">
                <span class="form-tips">*升序/降序会尽量保证在选定的通道内流量平衡</span>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="路由">
                <Select transfer v-model="formData.route">
                  <Option v-for="item in routeOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="服务器Url">
                <Input v-model="formData.serverUrl"></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="用户名">
                <Input v-model="formData.username"></Input>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <FormItem label="密码">
                <Input v-model="formData.password" type="password"></Input>
              </FormItem>
            </Col>
          </Row>

          <Row type="flex" justify="end" style="margin:10px 0;">
            <Col span="24" style="display: flex; justify-content: flex-end;">
              <Button type="primary">新增数据</Button>
              <Button style="margin-left: 8px">批量删除</Button>
            </Col>
          </Row>

          <Table :columns="tableColumns" :data="tableData">

            <template slot-scope="{ row, index }" slot="opration">
              <template v-if="editIndex===index">
                <Button type="primary" size="small">确定</Button>
                <Button type="error" size="small" @click="editIndex=-1" style="margin-left: 8px;">取消</Button>
              </template>
              <Button v-else type="primary" size="small" @click="editIndex=index">操作</Button>
            </template>
          </Table>

        </template>

        <FormItem>
          <Button type="primary" @click="handleSubmit">确定</Button>
          <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
        </FormItem>

      </Form>
    </Card>
  </div>
</template>

<script>
import { genarateOptions } from '@/libs/genarateOptions'
import { sortOptions, routeOptions } from './options'

export default {
  name: 'mnp',
  data () {
    return {
      editIndex: -1,
      formData: {
        mnp: 0,
        portSort: '1',
        route: '1',
        serverUrl: '',
        username: '',
        password: ''
      },
      tableColumns: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '被叫前缀',
          key: 'prefix'
        },
        {
          title: '去掉前缀',
          key: 'removePrefix'
        },
        {
          title: '增加前缀',
          key: 'addPrefix'
        },
        {
          type: 'opration',
          title: '操作',
          width: 130,
          slot: 'opration'
        }
      ],
      tableData: [
        {
          prefix: '',
          removePrefix: '0',
          addPrefix: ''
        }
      ],
      sortOptions: genarateOptions(sortOptions),
      routeOptions: genarateOptions(routeOptions)
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
