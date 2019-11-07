<template>
  <div class="index">
    <x-header/>
    <x-swipe :swipeData="swipeData"/>
  </div>
</template>

<script>
import header from '@/components/common/header.vue'
import swipe from '@/components/common/swipe.vue'

export default {
  name: "index",
  components: {
    'x-header': header,
    'x-swipe': swipe,
  },
  data() {
    return {
      swipeData: []
    }
  }
}
</script>

<style scoped>
  .index {
    width: 100%;
    padding-bottom: 14vw;
    background-color: #F8FCFF;
  }
</style>
