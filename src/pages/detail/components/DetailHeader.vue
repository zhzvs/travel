<template>
    <div>
        <div class="header" v-show="showHeader" id="header" :style="headerStyle">
            <router-link to="/" tag="div" class="iconfont left">&#xe600;</router-link>
            <div class="title">旅游详情页</div>
        </div>
        <router-link tag="div" to="/" class="iconfont back" v-show="showBack">&#xe600;</router-link>
    </div>
</template>
<script>
export default {
    data() {
        return {
            showHeader: false,
            headerStyle: {opacity:0},
            scrollHeight:0,
            scrollTop: 0
        };
    },
    computed: {
        showBack() {
            return !this.showHeader;
        }
    },
    mounted() {
        this.scrollHeight = document.getElementById('header').offsetHeight;
        // this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
        // console.log('mounted');
        // window.addEventListener('scroll', this.scrollEvent);
    },
    methods:{
        scrollEvent() {
            var top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
            if (top > this.scrollHeight) {;
                if(!this.showHeader) {
                    this.showHeader = true;
                }
                var opacity = top / 140;
                opacity = opacity > 1 ? 1 : opacity;
                opacity = opacity.toFixed(1);
                this.headerStyle = {opacity};
            } else {
                this.showHeader = false;
                this.headerStyle = {opacity:0};
            }
        }
    },
    activated() {
        window.addEventListener('scroll', this.scrollEvent);
    },
    deactivated() {
        window.removeEventListener('scroll', this.scrollEvent);
    }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.header
    position:fixed
    width: 100%
    left:0
    top:0
    height:.8rem
    line-height:.8rem
    color:#fff
    text-align:center
    font-size:.32rem
    background-color:$bgColor
    z-index:77  
    .left
        position: absolute
        left: 0.4rem
        top:0
        height:100%
        width:.32rem
        font-size:.36rem
.back
    position:fixed
    width: 0.8rem
    height 0.8rem
    border-radius:.4rem
    background-color: rgba(0,0,0,.8);
    line-height:.8rem
    text-align:center
    left:0
    top:0
    color:#fff
    font-size:.32rem
</style>