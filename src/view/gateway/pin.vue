<template>
  <div class="page-content">
    <h1 class="page-title">PIN设置</h1>
    <Form :model="formData" :label-width="180">
      <Card class="card-content" title="基本设置">
        <Row>
          <Col span="12">
            <FormItem label="PIN解锁">
              <i-switch size="large" v-model="formData.unlockPin" :true-value="1" :false-value="0">
                <span slot="open">启用</span>
                <span slot="close">禁用</span>
              </i-switch>
            </FormItem>
          </Col>
        </Row>
         <FormItem>
          <Button type="primary" @click="handleSubmit">确定</Button>
          <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
        </FormItem>
      </Card>
      <Card class="card-content" title="端口PIN">
        <Table :columns="tableColumns" :data="tableData">
          <div class="flex-box" slot="apin" slot-scope="{row}">
            <span>A</span> <Input v-model="row.aPin"></Input>
          </div>

          <div class="flex-box" slot="bpin" slot-scope="{row}">
            <span>B</span> <Input v-model="row.bPin"></Input>
          </div>

          <div class="flex-box" slot="cpin" slot-scope="{row}">
            <span>C</span> <Input v-model="row.cPin"></Input>
          </div>

          <div class="flex-box" slot="dpin" slot-scope="{row}">
            <span>D</span> <Input v-model="row.dPin"></Input>
          </div>

        </Table>
        <FormItem style="margin-top:10px;">
          <Button type="primary" @click="handleSubmit">确定</Button>
          <Button @click="handleCancel" style="margin-left: 8px">取消</Button>
        </FormItem>
      </Card>
    </Form>
  </div>
</template>

<script>
export default {
  name: 'pin',
  data () {
    return {
      formData: {
        unlockPin: 0
      },
      tableColumns: [
        {
          key: 'port',
          title: '端口'
        },
        {
          key: 'aPin',
          title: ' ',
          slot: 'apin'
        },
        {
          key: 'bPin',
          title: ' ',
          slot: 'bpin'
        },
        {
          key: 'cPin',
          title: ' ',
          slot: 'cpin'
        },
        {
          key: 'dPin',
          title: ' ',
          slot: 'dpin'
        }
      ],
      tableData: [
        {
          port: 1,
          aPin: '',
          bPin: '',
          cPin: '',
          dPin: ''
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
.flex-box{
  display: flex;
  align-items: center;
  span {
    margin-right: 5px;
  }
}
</style>
