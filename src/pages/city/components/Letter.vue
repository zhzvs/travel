<template>
    <ul class="letter">
        <li v-for="(item, key) in list" :key="key" :ref="key" @click="handleClick" @touchstart.prevent="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">{{key}}</li>
    </ul>    
</template>
<script>
export default {
    props: {
        list: Object
    },
    data(){
        return {
            moveStatus: false,
            startPos: 0,
            height:0,
            timer: null
        };
    },
    updated() {
        var startElement = this.$refs['A'][0]; 
        this.startPos = startElement.getBoundingClientRect().top;
        this.height = startElement.offsetHeight;
    },
    methods: {
        handleClick(e) {
            var letter = e.target.innerText;
            this.$emit('clickEvent', letter);
        },
        handleTouchStart() {
            this.moveStatus = true;
        },
        handleTouchMove(event) {
            if (this.timer) {
                clearTimeout(this.timer);
            }
            this.timer = setTimeout(() => {
                if (this.moveStatus) {           
                    var endPos = event.touches[0].clientY;
                    var index = Math.floor((endPos - this.startPos)/this.height);
                    var letterList = Object.keys(this.list);
                    if (index >=0 && index <= 21) {
                        this.$emit('clickEvent', letterList[index]);
                    }
                }
            }, 16);
            
        },
        handleTouchEnd() {
            this.moveStatus = false;
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.letter
    position:absolute
    top:1.48rem
    right:0
    bottom:0
    width:.5rem
    display:flex;
    flex-direction:column;
    justify-content: center;
    li
        text-align:center;
        line-height:.44rem
        color:$bgColor
</style>


