<template>
    <div class="weekend">
        <div class="title">周末去哪儿</div>
        <div class="cont">
            <ul>
                <li v-for="item in list" :key="item.id">
                    <img :src="item.imgUrl" />
                    <div class="text">
                        <p class="desc">{{item.title}}</p>
                        <p class="detail">
                            {{item.detail}}
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="stylus" scoped>
.weekend
    margin-top:.1rem
    text-align:left
    .title
        height:.6rem
        line-height:.6rem
        font-size:.32rem
        background-color:#eee
        text-indent:.1rem
    .cont
        img
            width:100%
        .text
            padding:.16rem
            .desc
                font-size:.28rem
                line-height:2
                height:28px
                overflow:hidden
                white-space:nowrap
                text-overflow:ellipsis
            .detail
                font-size:.24rem
                line-height:2
                min-height:24px
                height:auto
                max-height:48px
                overflow:hidden

</style>
<script>
export default{
    props: {
        list: Array
    }
}
</script>