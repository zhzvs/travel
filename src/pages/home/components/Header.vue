<template>
    <div class="header">
        <div class="header-left"><div class="iconfont back-iconfont">&#xe600;</div></div>
        <div class="header-input"><span class="iconfont">&#xe649;</span>输入城市/景点/游玩主题</div>
        <router-link to="/city">
            <div class="header-right">
                    {{this.city}}&nbsp;<span class="iconfont arrow-icon">&#xe64a;</span>
            </div>
        </router-link>
    </div>
</template>
<script>
import {mapState, mapGetters} from 'vuex'
export default {
    name: 'HomeHeader',
    computed: {
        ...mapState(['city']),
        // ...mapGetters(['doubleCity'])
    }
}
</script>
<style  lang='stylus' scoped>
@import '~@/assets/styles/varibles.styl'
.header
    height: .86rem
    background:$bgColor
    align-items:center
    line-height:.86rem;
    color:#fff
    display: flex
    .header-left
        width:.64rem
        height:.86rem
        .back-iconfont
            font-size: 0.4rem
            text-align:center
    .header-input
        flex:1
        background-color:#fff
        border-radius:.1rem
        height:.62rem
        margin-left:.2rem
        padding-left:.2rem
        color:#ccc
        line-height:.62rem
        text-align:left
    .header-right
        min-width:0.8rem
        text-align:center
        padding: 0 .2rem
        height:.86rem
        .arrow-icon
            font-size:.24rem
        color:#fff
</style>