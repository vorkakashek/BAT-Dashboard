<script setup>
import { ref, reactive, watch, computed } from "vue";
import FavoriveToggler from "@/components/FavoriveToggler.vue";

const cycleOptions = ref([
    {
        value: 0,
        label: 'ALL SELECTED',
        activities: [0]
    },
    {
        value: 1,
        label: 'Cycle Name 1',
        activities: [1, 3, 4],
        favorite: true
    },
    {
        value: 2,
        label: 'Cycle Name 2',
        activities: [1, 2, 4],
        favorite: true
    },
    {
        value: 3,
        label: 'Cycle Name 3',
        activities: [2, 3, 4]
    },
    {
        value: 4,
        label: 'Cycle Name 4',
        activities: [5],
        favorite: true
    },
]);

const activityOptions = ref([
    {
        value: 0,
        label: 'ALL SELECTED',
    },
    {
        value: 1,
        label: 'Activity 1',
    },
    {
        value: 2,
        label: 'Activity 2',
    },
    {
        value: 3,
        label: 'Activity 3',
    },
    {
        value: 4,
        label: 'Activity 4',
    },
    {
        value: 5,
        label: 'Activity 5',
    },
]);

const state = reactive({
    cycleValue: [0],
    activityValue: [0],
});

const activeCycleOptions = computed(() => {
    return cycleOptions.value.filter((obj) => state.cycleValue.includes(obj.value));
});

const filteredActivityOptions = computed(() => {
    return activityOptions.value.filter(({ value }) => {
        if (value === 0 || state.cycleValue.includes(0)) {
            return true;
        }
        return activeCycleOptions.value.some(({ activities }) => {
            return activities.includes(value);
        })
    });
});


['cycleValue', 'activityValue'].forEach((key) => {
    watch(() => state[key], (value) => {
        if (value.length < 1) {
            state[key] = [0];
        }
    });
});

watch(() => state.cycleValue, () => {
    // filtering Activity Options
    state.activityValue = state.activityValue.filter((v) => {
        return filteredActivityOptions.value.some(({ value }) => v === value);
    });
});


function handleSelector(value, nameValue) {
    // console.log(value)
    if (value == 0) {
        state[nameValue] = [0];
    }
    else if (value !== 0 && state[nameValue].includes(0)) {
        state[nameValue] = state[nameValue].filter((value) => value !== 0);
    }
};

</script>


<template lang="pug">


Teleport(to="#export-excel")
    ExportExcel(disabled)

Teleport(to="#multiselector")
    .multiselect-label 
        span CYCLE 
        | Selection: {{ state.togglerValue }}
    Multiselect(
        v-model="state.cycleValue", 
        :close-on-select="true", 
        :options="cycleOptions", 
        mode="tags",
        @select="handleSelector($event, 'cycleValue')", 
        :searchable="true",
        placeholder="Start typing or select...",
        :style="{ marginBottom: '16px' }",
        )
    .multiselect-label 
        span ACTIVITY 
        | Selection: 
    Multiselect(
        v-model="state.activityValue", 
        :close-on-select="true", 
        :options="filteredActivityOptions", 
        mode="tags",
        @select="handleSelector($event, 'activityValue')", 
        :searchable="true",
        placeholder="Start typing or select...",
        )

FavoriveToggler(:options="cycleOptions" v-model="state.cycleValue")

RouterView

</template>

<style lang="scss" scoped>
.multiselect-label {
    font-size: 14px;
    opacity: .8;

    span {
        font-weight: 700;
    }
}
</style>