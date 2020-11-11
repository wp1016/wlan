<style lang="less">
  @import './login.less';
</style>

<template>
  <Modal transfer v-model="showModal" :mask-closable="false">
    <login-form @on-success-valid="handleSubmit"></login-form>
  </Modal>
</template>

<script>
import { mapActions } from 'vuex'
import loginForm from '../login-form'
export default {
  components: {
    loginForm
  },
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    ...mapActions([
      'handleLogin',
      'getUserInfo'
    ]),
    handleSubmit ({ userName, password }) {
      this.handleLogin({ userName, password }).then(res => {
        this.getUserInfo().then(res => {
          this.$router.push({
            name: this.$config.homeName
          })
        })
      })
    },
    show() {
      this.showModal = true
    }
  }
}
</script>

<style>

</style>
