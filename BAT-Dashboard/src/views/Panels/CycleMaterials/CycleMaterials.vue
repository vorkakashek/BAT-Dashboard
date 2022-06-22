<script setup>
import { reactive, watch } from "vue";

const cycleOptions = [
    {
        value: 0,
        label: 'ALL SELECTED',
        activities: [0]
    },
    {
        value: 1,
        label: 'Cycle Name 1',
        activities: [1, 3, 4]
    },
    {
        value: 2,
        label: 'Cycle Name 2',
        activities: [1, 2, 4]
    },
    {
        value: 3,
        label: 'Cycle Name 3',
        activities: [2, 3, 4]
    },
];

const activityOptions = [
    {
        value: 0,
        label: 'ALL SELECTED',
        cycles: [0]
    },
    {
        value: 1,
        label: 'Activity 1',
        cycles: [1, 2]
    },
    {
        value: 2,
        label: 'Activity 2',
        cycles: [2, 3]
    },
    {
        value: 3,
        label: 'Activity 3',
        cycles: [1, 3]
    },
    {
        value: 4,
        label: 'Activity 4',
        cycles: [1, 2, 3]
    },
];

// let filteredActivityOptions = activityOptions;
// let filteredCycleOptions = cycleOptions;

const state = reactive({
    cycleValue: [0],
    activityValue: [0],
    filteredActivityOptions: activityOptions,
    filteredCycleOptions: cycleOptions
});


['cycleValue', 'activityValue'].forEach((key) => {
    watch(() => state[key], (value) => {
        if (value.length < 1) {
            state[key] = [0];
        }

        if (key == 'cycleValue') {
            // console.log(activityOptions.filter(option => option.cycles.some(e => value.includes(e))));
            state.filteredActivityOptions = activityOptions.filter(option => option.cycles.some(e => value.includes(e)))
        }

        if (key == 'activityValue') {
            console.log(value)
        }
    });
});


function handleSelector(value, nameValue) {
    if (value == 0) {
        state[nameValue] = [0];
    }
    if (value !== 0 && state[nameValue].includes(0)) {
        state[nameValue] = state[nameValue].filter((value) => value !== 0);
    }
};


</script>


<template lang="pug">

Teleport(to="#multiselector")
    div cycles: {{ state.cycleValue }}
    div activities: {{ state.activityValue }}
    Multiselect(
        v-model="state.cycleValue", 
        :close-on-select="true", 
        :options="state.filteredCycleOptions", 
        mode="tags",
        @select="handleSelector($event, 'cycleValue')", 
        :searchable="true",
        placeholder="Start typing or select...",
        :style="{ marginBottom: '8px' }"
        )
    Multiselect(
        v-model="state.activityValue", 
        :close-on-select="true", 
        :options="state.filteredActivityOptions", 
        mode="tags",
        @select="handleSelector($event, 'activityValue')", 
        :searchable="true",
        placeholder="Start typing or select...",
        )


RouterView

</template>