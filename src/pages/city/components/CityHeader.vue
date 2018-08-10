<template>
    <div class="city-header">
        <router-link to='/'>
            <div class="iconfont header-back">&#xe600;</div>
        </router-link>城市选择
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.city-header
    height:$cityHerderHeight
    text-align :center
    line-height :$cityHerderHeight
    color:#fff
    font-size: .32rem
    background: $bgColor
    position: relative
    .header-back
        position :absolute
        color:#fff
        width: .64rem
        height :100%
        left:0
        top :0
        font-size: .4rem
</style>


