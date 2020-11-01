<template>
  <div class="page-content">
    <h1 class="page-title">短信过滤</h1>
    <Form :model="formData" :label-width="180">
      <Card title="垃圾短信过滤条件" class="card-content">
        <Row>
          <Col span="12">
            <FormItem label="垃圾短信过滤"></FormItem>
          </Col>
        </Row>
      </Card>
    </Form>
  </div>
</template>

<script>
export default {
  name: 'filter',
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
