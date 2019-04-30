<!--  -->
<template>
  <div class="page">
    <ParentPage>
      <template slot="bottom">shhhs这是继承的</template>
    </ParentPage>
  </div>
</template>

<script type="text/ecmascript-6">
import ParentPage from '@parent-theme/components/Page.vue'
export default {
  components: {
    ParentPage
  },
  props: {},
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="stylus">
.page {
}
</style>
