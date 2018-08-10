<template>
    <div class="wrap">
        <div class="item border-bottom" v-for="(item,index) in list" :key="index">
            <div class="item-box border-bottom">
                {{item.title}}
            </div>
            <div class="sub-item" v-if="item.children">
                <ListItem :list="item.children" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ListItem',
    props: {
        list: Array
    },
    data() {
        return {
            
        };
    }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.item
    min-width: 2rem
    padding:.2rem 0 0 0
    .item-box
        line-height:.36rem
        height:.36rem
        padding-left:.2rem
    .sub-item
        padding-left: .22rem
</style>


