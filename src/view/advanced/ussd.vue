<template>
  <div class="page-content">
    <h1 class="page-title">USSD命令</h1>
    <USSDSetting/>
    <USSDAuto/>
    <USSDList/>
  </div>
</template>

<script>
import USSDSetting from './ussd/setting'
import USSDAuto from './ussd/auto'
import USSDList from './ussd/list'

export default {
  name: 'ussd',
  components: {
    USSDSetting,
    USSDAuto,
    USSDList
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/common';

</style>
