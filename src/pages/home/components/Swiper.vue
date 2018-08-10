<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSliper">
      <swiper-slide v-for="item in list" :key="item.id"><img class="wiper-image" :src= "item.imageUrl" :key="item.id"/></swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
  export default {
    name: 'carrousel',
    props: {list: Array},
    data() {
      return {
        swiperOption: {
          pagination: ".swiper-pagination",
          loop: true
        }
      }
    },
    computed: {
      showSliper() {
        return this.list.length;
      }
    }
  }
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
>>> .swiper-container
    height:0
    padding-bottom:$wiperImageRate
.wrapper >>> .swiper-pagination-bullet-active
    background:#fff
.wiper-image
    width:100%
.wrapper
    width:100%
    height:0
    overflow:hidden
    padding-bottom:$wiperImageRate
    background-color:#eee

</style>