<script setup>

import ModalHeader from '@/components/Modals/ModalHeader.vue'
import WeeksGraph from '@/components/Modals/Cycle Materials Modal/WeeksGraph.vue'

const props = defineProps({
    data: Object,
})



</script>

<template lang="pug">

h2 Detailed summary
ModalHeader(:data="data.info")
WeeksGraph(:data="data")


</template>

<style lang="scss" scoped>

</style>