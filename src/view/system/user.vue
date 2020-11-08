<template>
  <div class="page-content">
    <h1 class="page-title">用户管理</h1>
    <Card title="网关用户列表" class="card-content">
      <div class="button-wrap">
        <Button type="primary" @click="add">新增数据</Button>
        <Button @click="remove" style="margin-left: 10px;">批量删除</Button>
      </div>
      <Table style="margin-top:10px;" :columns="tableColumn" :data="userList" @on-selection-change="selectionChange">
        <template slot="role" slot-scope="{ row, index }">
          {{row.role | roleName}}
        </template>
        <template slot="operation" slot-scope="{ row, index }">
          <Button @click="edit(index)">编辑</Button>
        </template>
      </Table>
    </Card>

    <Card title="IP控制" class="card-content"></Card>

    <Modal v-model="showModal" :title="modalTitie">
      <Form ref="formValidate" :model="formData" :rules="ruleValidate" :label-width="90">
        <FormItem label="账号" prop="account">
          <Input :readonly="isEdit" placeholder="请输入用户名" v-model="formData.account"></Input>
        </FormItem>
        <FormItem label="密码" prop="password">
          <Input v-model="formData.password" placeholder="密码由6-15位英文字母、数字或下划线组成" :maxlength="15" type="password"></Input>
        </FormItem>
        <FormItem label="确认密码" prop="password2">
          <Input v-model="formData.password2" placeholder="密码由6-15位英文字母、数字或下划线组成" :maxlength="15" type="password"></Input>
        </FormItem>
        <FormItem label="角色" prop="role">
          <Select v-model="formData.role">
            <Option v-for="item in roleOptions" :key="item.value" :value="item.value">{{item.label}}</Option>
          </Select>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button type="text" @click="showModal = false">取消</Button>
        <Button type="primary" @click="confirm">确认</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
const roleOptions = [
  {
    value: 1,
    label: 'Admin'
  },
  {
    value: 2,
    label: 'User'
  }
]
export default {
  name: 'user',
  data () {
    return {
      isEdit: false,
      editIndex: -1,
      showModal: false,
      formData: {
        account: '',
        password: '',
        password2: '',
        role: 1
      },
      ruleValidate: {
        account: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [
          {
            required: true,
            validator: (rule, value, callback) => {
              let reg = /^\w{6,15}$/g
              if (value.trim() === '') {
                callback(new Error('请输入密码'))
              } else if (!reg.test(value)) {
                callback(
                  new Error('密码必须由6-15位英文字母、数字或下划线组成')
                )
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }
        ],
        password2: [
          {
            required: true,
            validator: (rule, value, callback) => {
              if (value.trim() === '') {
                callback(new Error('请再次输入密码'))
              } else if (value !== this.formData.password2) {
                callback(new Error('两次密码输入不一致'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }
        ]
      },
      roleOptions: roleOptions,
      tableColumn: [
        {
          type: 'selection',
          width: 60
        },
        {
          key: 'account',
          title: '账号',
          align: 'center'
        },
        {
          key: 'role',
          title: '角色',
          align: 'center',
          slot: 'role'
        },
        {
          key: 'operation',
          title: '操作',
          slot: 'operation'
        }
      ],
      userList: [
        {
          account: 'root',
          role: 1
        }
      ],
      selection: []
    }
  },
  filters: {
    roleName (val) {
      let option = roleOptions.find((item) => item.value === val)
      return option ? option.label : 'Admin'
    }
  },
  watch: {
    showModal (val) {
      if (!val) {
        this.$nextTick(function () {
          this.$refs.formValidate.resetFields()
        })
      }
    }
  },
  computed: {
    modalTitie () {
      return this.isEdit ? '编辑用户' : '添加用户'
    }
  },
  methods: {
    add () {
      this.isEdit = false
      this.editIndex = -1
      this.showModal = true
      this.formData = {
        account: '',
        role: 1,
        password: '',
        password2: ''
      }
    },
    remove () {
      if (this.selection.length === 0) {
        this.$Message.info({
          content: '请至少选择一个用户'
        })
      } else {
        this.$Modal.confirm({
          title: '温馨提示',
          content: '确定删除这些用户吗？',
          onOk: () => {
            this.userList = this.userList.filter(
              (item) =>
                this.selection.findIndex(
                  (sel) => sel.account === item.account
                ) < 0
            )
          }
        })
      }
    },
    confirm () {
      this.$refs.formValidate.validate((valid) => {
        if (valid) {
          this.showModal = false
          this.isEdit = false
          this.editIndex = -1
          this.userList.push({
            account: this.formData.account,
            role: this.formData.role
          })
        } else {

        }
      })
    },
    edit (index) {
      this.isEdit = true
      this.editIndex = index
      this.showModal = true
      console.log(this.userList[index])
      this.formData = {
        account: this.userList[index].account,
        role: this.userList[index].role,
        password: '',
        password2: ''
      }
      console.log(this.formData)
    },
    selectionChange (selection) {
      this.selection = selection
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/common';
.button-wrapper {
  display: flex;
  padding: 10px 0;
  justify-content: flex-end;
}
</style>
