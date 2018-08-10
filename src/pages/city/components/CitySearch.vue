<template>
    <div>
        <div class="city-search">
            <input type="text" v-model="keyworlds" class="search-input" placeholder="请输入城市名称或者拼音" />
        </div>
        <div class="search-content" ref="searchContent" v-show="this.keyworlds">
            <ul>
                <li class="border-bottom" v-for="item in matchList" :key="item.id" @click="handleClickCity(item.name)">{{item.name}}</li>
                <li class="border-bottom" v-show="showNotFound">未匹配到任何内容！</li>
            </ul>
        </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
import {mapMutations} from 'vuex'
export default {
    props: {cities:Object},
    data() {
        return {
            keyworlds: '',
            matchList: [],
            timer: null
        }
    },
    mounted: function() {
        this.scroll = new Bscroll(this.$refs.searchContent, {click: true});
    },
    watch: {
        keyworlds (value) {
            if (this.timer) {
                clearTimeout(this.timer);
            }
            this.timer = setTimeout(() => {
                var searchList = [];
                for(var i in this.cities) {
                    this.cities[i].forEach(function(item){
                        if (item.spell.indexOf(value) > -1 || item.name.indexOf(value) > -1) {
                            searchList.push(item);
                        }
                    });
                }
                this.matchList = searchList;
            }, 16);
        }
    },
    computed: {
        showNotFound() {
            return !this.matchList.length;
        }
    },
    methods: {
        handleClickCity(city) {
            // this.$store.commit('changeCity', city);
            this.changeCity(city);
            this.keyworlds = '';
            this.$router.push('/');
        },
        ...mapMutations(['changeCity'])
    }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.city-search
    height :.62rem
    background-color :$bgColor
    overflow: hidden
    padding:0 .2rem
    .search-input
        height:.50rem
        overflow: hidden    
        line-height 0.50rem
        padding:0 .2rem
        box-sizing:border-box
        width:100%
        margin:.03rem auto 0 auto
        color:#777
        border-radius:.06rem
        text-align:center
        font-size:.28rem
.search-content
    position: absolute
    left:0
    top: 1.46rem
    right:0
    bottom:0
    z-index:10
    overflow: hidden
    background-color:#eee;
    ul li
        line-height: 0.48rem
        padding:0 .24rem
        color:#666
        background-color:white

</style>
