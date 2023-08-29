<script setup>

import { ref } from 'vue'
import Report from '@/components/Modals/ReportDownload/Report.vue'

const reports = ref([
    {
        date: '28.08.2022',
        time: '15:22',
        name: 'ISF_report_796589.xlsx',
        link: '#',
    },
    {
        date: '28.08.2022',
        time: '15:22',
        name: 'ISF_report_796589.xlsx',
        link: '#',
    },
])

const emits = defineEmits(["hide"])

</script>

<template lang="pug">
    
h2 {{ $t('reports') }}
.report-list
    Report(v-for="report in reports" :data="report")

</template>

<style lang="scss" scoped>

</style>