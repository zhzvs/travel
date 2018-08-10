<template>
    <transition><slot /></transition>
</template>
<script>
export default {
    
}
</script>
<style lang="stylus" scoped>
    .v-enter,.v-leave-to
        opacity:0
    .v-enter-active, .v-leave-active 
        transition:0.5s opacity
</style>


