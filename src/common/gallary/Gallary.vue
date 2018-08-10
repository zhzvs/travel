<template>
    <div class="container" @click="handleClickGalary">
        <div class="wrapper">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(item, key) in imageUrl" :key="key">
                    <img class="wiper-image" :src= "item" />
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        imageUrl:Array,
        showBanner: Boolean,
        gallaryImgs: Array
    },
    data() {
        return {
            swiperOption:{
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                observer:true,
                observeParents:true,
            }
        };
    },
    methods: {
        handleClickGalary() {
            this.$emit('handle-click');
        }
    }
}
</script>
<style lang="stylus" scoped>
>>> .swiper-container
    overflow:auto
.container
    position:fixed
    left:0
    top:0
    bottom:0
    right:0
    background-color:#000
    display:flex
    flex-direction:column
    justify-content: center
    z-index:66
    .wrapper
        height:0
        padding-bottom:100%
        width:100%
        color:#fff
        .wiper-image
            width:100%
        .swiper-pagination
            bottom: 0
            position:absolute
            left:0
            width:100%
            z-index:99
            color: #fff
            overflow:inherit
</style>