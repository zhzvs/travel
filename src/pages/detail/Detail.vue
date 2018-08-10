<template>
    <div>
        <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs" />
        <DetailHeader />
        <DetailList :list="list"/>
        <div style="height:600px;"></div>
    </div>
</template>
<script>
import DetailBanner from './components/DetailBanner'
import DetailHeader from './components/DetailHeader'
import DetailList from './components/List'
import axios from 'axios'
export default {
    name: 'Detail',
    data() {
        return {
            sightName: '',
            bannerImg: '',
            gallaryImgs: [],
            list: []
        };
    },
    methods: {
        getDetailInfo() {
            var info = axios.get('/api/detail.json', {
                params: {
                    id: this.$route.params.id
                }
            }).then(this.handleResponse).catch(function(err){
                console.log('cannot connect to server');
            });
        },
        handleResponse(result) {
            if (result.data && result.data.ret) {
                var info = result.data.data;
                this.sightName = info.sightName;
                this.bannerImg = info.bannerImg;
                this.gallaryImgs = info.gallaryImgs;
                this.list = info.categoryList;
                console.log();
            } else {
                console.log('server cannot find query result');
            }
        }
    },
    components: {DetailBanner, DetailHeader, DetailList},
    activated() {
        this.getDetailInfo();
    }
}
</script>
<style lang="stylus" scoped>

</style>


