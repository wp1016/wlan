<template>
  <div>
    <span>{{label}}</span>
    <Tooltip transfer placement="top" max-width="350" :content="content">
      <Icon type="ios-information-circle-outline" size="12" color="#2d8cf0"/>
      <slot slot="content" name="content"></slot>
    </Tooltip>
  </div>
</template>
<script>
export default {
  name: 'formLabelTooltips',
  props: {
    label: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  }
}
</script>
