<template>
    <div class="recommend">
        <div class="title">热销推荐</div>
        <div class="cont">
            <ul>
                <router-link tag="li" :to="'/detail/' + item.id" v-for="item in list" :key="item.id" class="border-bottom">
                    <img :src="item.imgUrl" />
                    <div class="text">
                        <div class="recommend-title">{{item.title}}</div>
                        <div class="recommend-desc">{{item.detail}}</div>
                        <button class="recommend-detail">查看详情</button>
                    </div>
                </router-link>
            </ul>
        </div>
    </div>
</template>
<script>
export default{
    props: {
        list: Array
    }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.recommend
    margin-top:.1rem
    font-size:.32rem
    text-align:left
    .title
        line-height:.6rem
        height:.6rem
        color:333
        background:#eee
        text-indent:.1rem
    .cont
        text-indent:0
        padding:0 .2rem
        flex:1
        min-width:0
        ul li
            overflow:hidden
            height:2rem
            display:flex
            padding:.2rem 0
            .recommend-title
                font-size:.28rem
                line-height:.42rem
                height:.42rem
                color:#333
                ellipsis()
            .recommend-desc
                font-size:.24rem
                height:.92rem
                overflow:hidden
                text-overflow:ellipsis
                white-space:wrap
                color:#888
                text-indent:0
                line-height:.46rem
                display:flex
            img
                width:2rem
                height:2rem
            .text
                flex:1
                padding-left:.2rem
                .recommend-detail
                    line-height:.44rem
                    background:#ff9300
                    border-radius:.06rem
                    padding:0 .2rem
                    color:#fff
                    width:100%
                    font-size:.24rem


</style>