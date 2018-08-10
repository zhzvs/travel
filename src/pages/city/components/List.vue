<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title boder-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.currentCity}}</div>
                    </div>
                </div>
            </div>
        <div class="area">
            <div class="title boder-topbottom">热门城市</div>
            <div class="button-list">
                <div class="button-wrapper" v-for="item in hotCities" :key="item.id" @click="clickCityHandle(item.name)">
                    <div class="button">{{item.name}}</div>
                </div>
            </div>
        </div>
        <div class="area" v-for="(item, key) in cities" :key="key" :ref="key">
            <div class="title boder-topbottom">{{key}}</div>
            <div class="item-list">
                <div class="item boder-topbottom" v-for="innerItem in item" :key="innerItem.id" @click="clickCityHandle(innerItem.name)">{{innerItem.name}}</div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import Bscroll from 'better-scroll'
import {mapState, mapMutations} from 'vuex'
export default {
    name: 'CityList',
    props: {
        hotCities: Array, 
        cities:Object, 
        letter: String
    },
    computed: {
        ...mapState({currentCity: 'city'})
    },
    mounted: function() {
        this.bscroll = new Bscroll(this.$refs.wrapper, {click: true});
    },
    methods: {
        clickCityHandle(city) {
            // this.$store.dispatch('changeCity', city);
            this.$store.commit('changeCity', city);
            // this.changeCity(city);
            this.$router.push('/');
        },
        ...mapMutations(['changeCity'])
    },
    watch:{
        letter(letter) {
            this.bscroll.scrollToElement(this.$refs[this.letter][0]);
        }
    }
}
</script>
<style lang="stylus" scoped>
.list
    position:absolute
    left:0
    top:1.48rem
    right:0
    bottom:0
    overflow: hidden
.area
    border-bottom:1px solid #ccc
.boder-topbottom
    border-bottom:1px solid #ccc
    &:before
        border-color:#ccc
    &:after
        border-color:#ccc
.title
    line-height 0.54rem
    background:#eee
    padding-left:.2rem
    color:#777
    font-size:.26rem
.button-list
    padding 0.1rem 0.6rem .1rem .1rem
    overflow: hidden
    .button-wrapper
        width:33.33%
        float:left
        .button
            padding:.1rem 0
            margin: .1rem
            border:.02rem solid #ccc
            text-align:center
            border-radius:.06rem
.item-list
    .item
        line-height 0.76rem
        color:#666
        padding-left:.2rem
</style>


