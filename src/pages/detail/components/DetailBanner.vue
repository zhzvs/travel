<template>
    <div>
        <div class="banner-image" @click="handleClickBanner">
            <img :src="bannerImg" />
            <div class="banner-info">
                <div class="banner-title">{{sightName}}</div>
                <div class="banner-number">{{gallaryImgs.length}}&nbsp;&nbsp;<span class="iconfont">&#xe678;</span></div>
            </div>
        </div>
        <FadeAnimation>
            <Gallary :imageUrl="gallaryImgs" v-show="showBanner" @handle-click="handleClick" :gallaryImgs="gallaryImgs" />
        </FadeAnimation>
    </div>
</template>
<script>
import Gallary from '@/common/gallary/Gallary'
import FadeAnimation from '@/common/FadeAnimation/Fade'
export default {
    name: 'Banner',
    props: {
        sightName: String,
        bannerImg: String,
        gallaryImgs: Array
    },
    components: {Gallary, FadeAnimation},
    data() {
        return {
            // imageUrl: [
            //     'http://img1.qunarzz.com/sight/p0/1705/c4/c4bdbd938d7ed0e6a3.img.jpg_r_800x800_07025641.jpg',
            //     'http://img1.qunarzz.com/sight/p0/1805/14/14fa1498de97e60fa3.water.jpg_r_800x800_312574cc.jpg',
            //     'http://img1.qunarzz.com/sight/p0/1805/e7/e7a3dd2b6bef784ca3.water.jpg_r_800x800_7e9235d6.jpg'
            // ],
            showBanner: false
        };
    },
    methods: {
        handleClickBanner() {
            this.showBanner = true;
        },
        handleClick() {
            this.showBanner = false;
        }
    }
}
</script>
<style lang="stylus" scoped>
.banner-image
    height:0
    overflow: hidden
    padding-bottom: 54.93%
    position: relative
    img
        width: 100%
    .banner-info
        color:#fff
        position:absolute
        left:0
        bottom:0
        height: 0.6rem
        line-height:.6rem
        padding-left 0.2rem
        display: flex
        width:100%
        box-sizing: border-box
        background-image:linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
        .banner-title
            flex:1
            font-size:.32rem
        .banner-number
            padding:0 .4rem
            box-sizing: border-box
            border-radius:.2rem
            width:auto
            min-width:.5rem
            height 0.4rem
            margin-top:.1rem
            line-height:.4rem
            background: rgba(0,0,0,.8)
</style>