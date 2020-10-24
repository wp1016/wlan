
<template>
  <div class="page-content">
    <h1 class="page-title">SIM卡号码设置</h1>
    <Form :model="formData" :label-width="180">
        <Card class="card-content" title="基本设置">
        <Row>
          <Col span="12">
            <FormItem label="号码存储">
              <i-switch v-model="formData.simNumberStorage" size="large">
                <span slot="open">启用</span>
                <span slot="close">禁用</span>
              </i-switch>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="号码来源">
              <Select v-model="formData.simNumberSource">
                <Option v-for="item in simNumberSourceOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        <FormItem>
          <Button type="primary" @click="handleSubmit">确定</Button>
          <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
        </FormItem>
      </Card>

      <Card class="card-content" title="自动查询号码">

        <Table :columns="tableColumns" :data="formData.autoQueryNumber"></Table>
        <FormItem style="margin-top: 15px;">
          <Button type="primary" @click="handleSubmit">确定</Button>
          <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
        </FormItem>
      </Card>

      <Card class="card-content" title="SIM卡号码">
        <Table :columns="bTableColumns" :data="formData.simCardNumberList">
          <template slot="aslot" slot-scope="{ row }">
            <Input v-model="row.aslot"></Input>
          </template>
          <template slot="bslot" slot-scope="{ row }">
            <Input v-model="row.bslot"></Input>
          </template>
          <template slot="cslot" slot-scope="{ row }">
            <Input v-model="row.cslot"></Input>
          </template>
          <template slot="dslot" slot-scope="{ row }">
            <Input v-model="row.dslot"></Input>
          </template>
        </Table>
        <FormItem style="margin-top: 15px;">
          <Button type="primary" @click="handleSubmit">确定</Button>
          <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
        </FormItem>
      </Card>

      <Card class="card-content" title="副卡卡号码">
        <Row>
          <Col span="12">
             <FormItem label="副卡">
               <i-switch v-model="formData.subCard" size="large">
                <span slot="open">启用</span>
                <span slot="close">禁用</span>
               </i-switch>
             </FormItem>
          </Col>
        </Row>
        <template v-if="formData.subCard">
          <Row>
            <Col span="12">
              <FormItem label="拨号前缀">
                <Input v-model="formData.subCardDialPrefix"></Input>
              </FormItem>
            </Col>
            <Col span="12">
              <span class="form-tips">*前缀为空，表示所有号码都用副卡拨打</span>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="短信接收号码">
                <Input v-model="formData.subCardSmsRecvNum"></Input>
              </FormItem>
            </Col>
            <Col span="12">
              <span class="form-tips">*验证码提取接收号码</span>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="关键字">
                <Input v-model="formData.subCardSmsRecvNum"></Input>
              </FormItem>
            </Col>
            <Col span="12">
              <span class="form-tips">*验证码提取关键字</span>
            </Col>
          </Row>
        </template>
        <FormItem style="margin-top: 15px;">
          <Button type="primary" @click="handleSubmit">确定</Button>
          <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
        </FormItem>
        <Table v-if="formData.subCard" :columns="cTableColumns" :data="formData.subCardList"></Table>

      </Card>
    </Form>
  </div>
</template>

<script>
import { genarateOptions } from '@/libs/genarateOptions'
import { simNumberSourceOptions } from './options'

export default {
  name: 'number',
  data () {
    return {
      formData: {
        simNumberStorage: false,
        simNumberSource: 0,
        autoQueryNumber: [
          {
            operatorsId: '222',
            methods: 'auto',
            content: '',
            key: '',
            serviceNum: '',
            recvNum: '',
            numPrefixReplace: ''
          }
        ],
        simCardNumberList: [
          {
            port: '1A',
            simCardNum: '',
            aslot: '',
            bslot: '',
            cslot: '',
            dslot: ''
          }
        ],
        subCard: false,
        subCardDialPrefix: '',
        subCardSmsRecvNum: '',
        subCardKeyword: '',
        subCardList: [
          {
            port: '1',
            aslot: '',
            bslot: '',
            cslot: '',
            dslot: ''
          }
        ],
        showModal: false
      },
      simNumberSourceOptions: genarateOptions(simNumberSourceOptions),
      tableColumns: [
        {
          key: 'operatorsId',
          title: '运营商ID'
        },
        {
          key: 'method',
          title: '方法'
        },
        {
          key: 'content',
          title: '内容'
        },
        {
          key: 'key',
          title: '关键字'
        },
        {
          key: 'serviceNum',
          title: '服务号码'
        },
        {
          key: 'recvNum',
          title: '接收号码'
        },
        {
          key: 'numPrefixReplace',
          title: '号码前缀替换'
        }
      ],
      bTableColumns: [
        {
          key: 'port',
          title: '端口号'
        },
        {
          key: 'simCardNum',
          title: 'SIM卡号码'
        },
        {
          key: 'aslot',
          title: 'A槽',
          slot: 'aslot'
        },
        {
          key: 'bslot',
          title: 'B槽',
          slot: 'bslot'
        },
        {
          key: 'cslot',
          title: 'C槽',
          slot: 'cslot'
        },
        {
          key: 'dslot',
          title: 'D槽',
          slot: 'dslot'
        }
      ],
      cTableColumns: [
        {
          key: 'port',
          title: '端口号'
        },
        {
          key: 'aslot',
          title: 'A',
          slot: 'aslot'
        },
        {
          key: 'bslot',
          title: 'B',
          slot: 'bslot'
        },
        {
          key: 'cslot',
          title: 'C',
          slot: 'cslot'
        },
        {
          key: 'dslot',
          title: 'D',
          slot: 'dslot'
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
.button-wrapper{
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}
</style>
