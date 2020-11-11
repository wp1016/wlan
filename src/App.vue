<template>
  <div id="app">
    <router-view/>
    <Modal transfer v-model="showLogin" :mask-closable="false">
      <login-form @on-success-valid="handleSubmit"></login-form>
      <div slot="footer"></div>
    </Modal>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import loginForm from '@/components/login-form'

export default {
  name: 'App',
  components: {
    loginForm
  },
  data () {
    return {
      showLogin: false
    }
  },
  watch: {
    token: {
      handler (val) {
        if (!val) {
          this.showLogin = true
        }
      },
      deep: true,
      immediate: true
    }
  },
  computed: {
    ...mapState({
      token: state => state.user.token
    })
  },
  methods: {
    ...mapActions([
      'handleLogin',
      'getUserInfo'
    ]),
    handleSubmit ({ userName, password }) {
      this.handleLogin({ userName, password }).then(res => {
        this.getUserInfo().then(res => {
          this.showLogin = false
        })
      })
    }
  }
}
</script>

<style lang="less">
.size{
  width: 100%;
  height: 100%;
}
html,body{
  .size;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
#app {
  .size;
}
</style>
