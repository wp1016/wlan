
<template>
  <div class="page-content">
    <Card class="card-content">
      <h2 slot="title">WAN口设置</h2>
      <div class="form-content">
        <Form :model="wanForm" :label-width="180">
          <FormItem label="WAN口连接类型">
            <Select v-model="wanForm.connectionType">
                <Option v-for="item in connectionTypes" :key="item.value" :value="item.value">{{item.label}}</Option>
            </Select>
          </FormItem>
          <FormItem label="IP地址">
            <Input v-model="wanForm.ip" readonly placeholder="输入IP地址"></Input>
          </FormItem>
          <FormItem label="子网掩码">
            <Input v-model="wanForm.sm" readonly placeholder="子网掩码"></Input>
          </FormItem>
          <FormItem label="默认网关">
            <Input v-model="wanForm.gateway" readonly placeholder="默认网关"></Input>
          </FormItem>
          <FormItem label="DNS服务器">
            <Input v-model="wanForm.dns" readonly placeholder="DNS服务器"></Input>
          </FormItem>
        </Form>
      </div>
    </Card>
    <Card class="card-content">
      <h2 slot="title">SIP服务及账号</h2>
      <div class="form-content">
        <Form :model="sipForm" :label-width="180">
          <FormItem label="协议模式">
            <Select v-model="sipForm.protocol">
                <Option v-for="item in sipProtocols" :key="item.value" :value="item.value">{{item.label}}</Option>
            </Select>
          </FormItem>
          <FormItem label="SIP服务器">
            <Input v-model="sipForm.sipServer" readonly placeholder="SIP服务器"></Input>
          </FormItem>
          <FormItem label="电话号码">
            <Input v-model="sipForm.tel" type="number" readonly placeholder="电话号码"></Input>
          </FormItem>
          <FormItem label="密码">
            <Input v-model="sipForm.password" type="password" readonly placeholder="密码"></Input>
          </FormItem>
          <FormItem label="加密方式">
            <Select v-model="sipForm.encryption">
              <Option v-for="item in encryptions" :key="item.value" :value="item.value">{{item.label}}</Option>
            </Select>
          </FormItem>
          <FormItem label="服务器端口">
            <Input v-model="sipForm.port" type="number" readonly placeholder="服务器端口"></Input>
          </FormItem>
          <FormItem label="账号">
            <Input v-model="sipForm.account" readonly placeholder="账号"></Input>
          </FormItem>
        </Form>
      </div>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'basic',
  data () {
    return {
      wanForm: {
        connectionType: 1,
        ip: '192.168.0.1',
        sm: '255.255.255.0',
        gateway: '',
        dns: ''
      },
      connectionTypes: [
        {
          value: 1,
          label: '静态IP'
        },
        {
          value: 2,
          label: '动态IP'
        },
        {
          value: 3,
          label: 'PPPoE'
        }
      ],
      sipForm: {
        protocol: 1,
        sipServer: 'SIP服务器',
        tel: '',
        password: '',
        encryption: 1,
        port: '',
        account: ''
      },
      encryptions: [
        {
          value: 1,
          label: 'NONE'
        },
        {
          value: 2,
          label: 'EJOIN'
        },
        {
          value: 3,
          label: 'VOS2000'
        }
      ],
      sipProtocols: [
        {
          value: 1,
          label: '注册'
        },
        {
          value: 2,
          label: '点对点'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.card-content{
  margin-top: 10px;
}
.form-content {
  max-width: 800px;
}
</style>
