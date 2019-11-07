<template lang="html">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="k in swipeData" :key="k.id">
        <router-link :to="{ name: '详情页'}">
          <img :src="k.imgPath" alt="">
        </router-link>
      </mt-swipe-item>
    </mt-swipe>
</template>

<script>
export default {
  name: 'swipe',
  props: {
     swipeData:{
       type: Array,
       default:function(){
         return []
       }
     }
   },
}
</script>

<style lang="less" scoped>

.mint-swipe {
  width: 100%;
  height:50vw;
  a,img {
    display: block;
    width: 100%;
    height:100%;
  }
}
</style>
