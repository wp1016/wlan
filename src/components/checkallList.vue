<template>
  <div class="check-group">
    <div class="check-all">
      <Checkbox
        :value="checkAll"
        :disabled="disabled"
        :indeterminate="indeterminate"
        @on-change="selectAll"
      >所有端口</Checkbox>
    </div>
    <div class="check-list">
      <CheckboxGroup
        :value="value"
        @on-change="selectPort"
        size="large"
      >
        <Checkbox
          v-for="i in 32"
          :disabled="disabled"
          :key="i"
          :label="i"
        >{{i}}</Checkbox>
      </CheckboxGroup>
    </div>
  </div>
</template>

<script>
export default {
  name: 'checkAllList',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      checkAll: false,
      indeterminate: false
    }
  },
  watch: {
    value: {
      handler (val) {
        if (val.length === 32) {
          this.indeterminate = false
          this.checkAll = true
        } else if (val.length > 0) {
          this.indeterminate = true
          this.checkAll = false
        } else {
          this.indeterminate = false
          this.checkAll = false
        }
      },
      immediate: true
    }
  },

  methods: {
    selectAll (status) {
      let selected = []
      if (this.checkAll) {
        this.checkAll = false
        selected = []
      } else {
        selected = new Array(32).fill(0).map((item, index) => index + 1)
        this.checkAll = true
      }
      this.$emit('change', selected)
      this.indeterminate = false
    },
    selectPort (ports) {
      if (ports.length === 32) {
        this.checkAll = true
        this.indeterminate = false
      } else if (ports.length === 0) {
        this.indeterminate = false
        this.checkAll = false
      } else {
        this.checkAll = false
        this.indeterminate = true
      }
      this.$emit('change', ports)
    }
  }
}
</script>
<style lang="less" scoped>
.check-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.check-all {
  flex-basis: 20%;
}
.check-list {
  flex: 1;
  margin-left: 10px;
}
</style>
