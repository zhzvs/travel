<template>
    <div class="icons-wrapper" style="margin-top:.1rem">
        <swiper>
            <swiper-slide v-for="(swiperItem, swiperKey) in pages" :key="swiperKey" v-if="showList">
                <div class="icon" v-for="item in swiperItem" :key="item.id">
                    <div class="icon-img"><img class="img-content" :src="item.imgUrl" /></div>
                    <p class="icon-desc">{{item.text}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
export default {
    props:{
        list: Array
    },
    computed: {
        pages (){
            var pages = [];
            this.list.forEach(function(item, index) {
                var newIndex = Math.floor(index/8);
                if (!pages[newIndex]) {
                    pages[newIndex] = [];
                }
                pages[newIndex].push(item);
            });
            return pages;
        },
        showList (){
            return this.list.length;
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
@import '~@/assets/styles/mixins.styl'
.icons-wrapper, .icons-wrapper >>> .swiper-container
    height:0
    overflow:hidden
    padding-bottom:50%
    .icon
        width: 25%
        height:0
        padding-bottom:25%
        float:left
        position:relative
        overflow:hidden
        .icon-img
            position:absolute
            left:0
            top:0
            right:0
            bottom:.44rem
            text-align:center
            .img-content
                height:100% 
        .icon-desc
            position:absolute
            left:0
            right:0
            bottom:0
            height:.44rem
            line-height:.44rem
            color:$textDescColor
            text-indent:0
            text-align:center
            ellipsis()
</style>