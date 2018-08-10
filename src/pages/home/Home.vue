<template>
    <div>
        <Header />
        <swiper :list="swiperList"></swiper>
        <icons :list="iconList" />
        <recommend :list="recommendList" />
        <weekend :list="weekendList" />
    </div>
</template>

<script>
import Header from './components/Header'
import Swiper from './components/Swiper'
import Icons from './components/Icons'
import Recommend from './components/Recommend'
import Weekend from './components/Weekend'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
    data (){
      return {
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: [],
        lastCity: ''
      }
    },
    components: {
      Header: () => import('./components/Header'),
      Swiper, Icons, Recommend, Weekend},
    methods: {
      getHomeInfo (){
        axios.get('/api/index.json?' + this.$store.state.city).then(this.getHomeInfoSuccss);
      },
      getHomeInfoSuccss (result){
        if(result.data.success) {
          this.swiperList = result.data.info.swiperList;
          this.iconList = result.data.info.iconList;
          this.recommendList = result.data.info.recommendList;
          this.weekendList = result.data.info.weekendList;
        }
      }
    },
    computed: {
      // ...mapState(['city'])
    },
    mounted: function() {
      this.lastCity = this.$store.state.city;
      this.getHomeInfo();
    },
    activated: function() {
      if (this.lastCity !== this.$store.state.city) {
        this.getHomeInfo();
        this.lastCity = this.$store.state.city;
      }
    }
}
</script>
<style>
.pagination {
  position: absolute;
  z-index: 20;
  bottom: 10px;
  width: 100%;
  text-align: center;
}
.swiper-pagination-switch {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background: #555;
  margin: 0 5px;
  opacity: 0.8;
  border: 1px solid #fff;
  cursor: pointer;
}
.swiper-active-switch {
  background: #fff;
}
</style>