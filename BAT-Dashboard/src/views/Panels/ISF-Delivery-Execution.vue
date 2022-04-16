<script setup>
import Filters from "@/components/Filters.vue";
</script>

<script>
export default {
    data() {
        return {
            progressbarsData: [
                {
                    name: "Delivered",
                    value: 3200,
                },
                {
                    name: "Executed",
                    value: 2680,
                },
                {
                    name: "Planned",
                    value: 4000,
                },
            ],
        };
    },
};
</script>


<template lang="pug">
Filters
app-progressbar(:progressbarsData="progressbarsData")

</template>