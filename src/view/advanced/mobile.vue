<template>
  <div class="page-content">
    <h1 class="page-title">Mobile设置</h1>
    <Price/>
    <Operator/>
    <Ussd/>
    <Message/>
    <Rate/>
  </div>
</template>

<script>
import Price from './mobile/price'
import Operator from './mobile/operator'
import Message from './mobile/message'
import Ussd from './mobile/ussd'
import Rate from './mobile/rate'

export default {
  name: 'mobile',
  components: {
    Price,
    Operator,
    Message,
    Ussd,
    Rate
  },
  data () {
    return {
      formData: {

      }
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/common';

</style>
