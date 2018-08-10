<template>
    <div>
        <CityHeader />
        <CitySearch :cities="cities" />
        <List :cities="cities" :hotCities="hotCities"  :letter="letter" />
        <letter :list="cities" @clickEvent="handleClick" />
    </div>
</template>
<script>
import CityHeader from '@/pages/city/components/CityHeader'
import CitySearch from '@/pages/city/components/CitySearch'
import List from '@/pages/city/components/List'
import Letter from '@/pages/city/components/Letter'
import axios from 'axios'
export default {
    components: {CityHeader, CitySearch, List, Letter},
    data() {
        return {
            cities:{},
            hotCities: [],
            letter: ''
        };
    },
    methods: {
        getCityInfo(){
            axios.get('/api/city.json').then(this.getCityHandle);
        },
        getCityHandle(result) {
            if(result && result.data.ret) {
                this.cities = result.data.data.cities;
                this.hotCities = result.data.data.hotCities;
            }
        },
        handleClick(letter) {
            this.letter = letter;
        }
    },
    mounted() {
        this.getCityInfo();
    }
    
}
</script>
<style scoped>
</style>