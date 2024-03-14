<script setup>
import { ref, reactive, watch, computed, onMounted } from "vue";
import FavoriteToggler from "@/components/FavoriteToggler.vue";
import OptionalToggler from "@/components/OptionalToggler.vue";
import FilterTogglerMulti from "@/components/FilterTogglerMulti.vue";
// import SalesChannelFilter from "@/components/SalesChannelFilter.vue"; надо удалить из компонентов проекта

import { useFiltersStore } from "@/store/store";
import Dropdown from "@/components/Dropdown.vue";
const store = useFiltersStore();

onMounted(() => {
    optionalValue.value = ['']
    if (store.togglers.find(e => e.name === 'cycle_1').value !== 'unset') {
        state.cycleValue = [store.togglers.find(e => e.name === 'cycle_1').value]
    }
    if (store.togglers.find(e => e.name === 'cycle_2').value !== 'unset') {
        state.activityValue = store.togglers.find(e => e.name === 'cycle_2').value
    }
    if (store.togglers.find(e => e.name === 'cycle_3').value !== 'unset') {
        RKAFilterValue.value = store.togglers.find(e => e.name === 'cycle_3').value
    }
    if (store.togglers.find(e => e.name === 'cycle_5').value !== 'unset') {
        optionalValue.value = store.togglers.find(e => e.name === 'cycle_5').value
    }
})

// Indep/Local RKA
const RKAFilterOptions = ref(['Indep/Local', 'RKA']);
const RKAFilterValue = ref(['Indep/Local', 'RKA']);

const cycleOptions = ref([
    {
        value: 3,
        label: 'Cycle Name 4',
        activities: [5],
        favorite: true,
        year: '2023'
    },
    {
        value: 2,
        label: 'Cycle Name 3',
        activities: [2, 3, 4],
        year: '2023'
    },
    {
        value: 1,
        label: 'Cycle Name 2',
        activities: [1, 2, 4],
        favorite: true,
        year: '2022'
    },
    {
        value: 0,
        label: 'Cycle Name 1',
        activities: [1, 3, 4],
        favorite: true,
        year: '2022'
    },
])

const optionalOptions = ref([
    {
        value: 'optional_1',
        label: 'Name 1',
    },
    {
        value: 'optional_2',
        label: 'Name 2',
    },
    {
        value: 'optional_3',
        label: 'Name 3',
    },
])
const optionalValue = ref([''])

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
    activityValue: [],
});

const activeCycleOptions = computed(() => {
    return cycleOptions.value.filter((obj) => state.cycleValue[0] === obj.value);
});

const filteredActivityOptions = computed(() => {
    return activityOptions.value.filter(({ value }) => {
        if (value === 0 || state.cycleValue[0] === 0) {
            return true;
        }
        return activeCycleOptions.value.some(({ activities }) => {
            return activities.includes(value);
        })
    });
});

watch(() => state.cycleValue, (val) => {
    if (val.length < 1) {
        state.cycleValue = [cycleOptions.value.length - 1]
    }
    // filtering Activity Options
    // state.activityValue = state.activityValue.filter((v) => {
    //     return filteredActivityOptions.value.some(({ value }) => v === value);
    // });
    store.save(state.cycleValue, 'cycle_1')
});

watch(() => state.activityValue, (val) => {
    if (val.length < 1) {
        state.activityValue = []
    }
    store.save(state.activityValue, 'cycle_2')
})

watch(() => RKAFilterValue.value, (val) => {
    if (val.length !== undefined) {
        store.save(RKAFilterValue.value, 'cycle_3')
    }
})
watch(() => optionalValue.value, (val) => {
    if (val.length !== undefined) {
        store.save(optionalValue.value, 'cycle_5')
    }
})

function handleSelector(value, nameValue) {
    if (nameValue === 'cycleValue') {
        state[nameValue] = [value]
    } else if (nameValue === 'activityValue') {
        if (value == 0) {
            state[nameValue] = [0]
        }
        else if (value !== 0 && state[nameValue].includes(0)) {
            state[nameValue] = state[nameValue].filter((value) => value !== 0)
        }
    }
}

let currentYear = (y) => {
    let now = new Date()
    return Number(y) === now.getFullYear() ? true : false
}

</script>


<template lang="pug">


div {{ state.SalesChannelFilter_Value}}

Teleport(to="#export-excel")
    ExportExcel(disabled)

Teleport(to="#CycleMaterials")
    Dropdown(
        @update:modelValue="(val) => state.cycleValue = [val.value]",
        :value="cycleOptions.filter(i => i.value === state.cycleValue[0])[0]",
        isWhite
        isFill
        :options="cycleOptions",
        placeholder="Cycle Name",
    )
        template(v-slot:option="{ option }")
            span {{ option.label }}
            span.tag {{ option.year }}
        template(v-slot:value="{ value }")
            | {{value?.label || 'Cycle Name'}}
    Dropdown(
        v-model="state.activityValue",
        :value="state.activityValue",
        isWhite
        isFill
        isTags
        :options="filteredActivityOptions",
        placeholder="Activity",
    )
        template(v-slot:option="{ option }")
            span {{ option.label }}
            span.tag {{ option.year }}
        template(v-slot:value="{ value }")
            | {{value?.label || 'Activity'}}
    //- .multiselect-label 
    //-     span CYCLE 
    //-     | Selection:
    //- Multiselect(
    //-     v-model="state.cycleValue", 
    //-     :close-on-select="true", 
    //-     :options="cycleOptions", 
    //-     mode="tags",
    //-     :clearOnSelect="false",
    //-     :canClear="false",
    //-     @select="handleSelector($event, 'cycleValue')", 
    //-     :searchable="true",
    //-     placeholder="Start typing or select...",
    //-     :style="{ marginBottom: '16px' }",
    //-     )
    //-     template(v-slot:option="{ option }")
    //-         span {{ option.label }}
    //-         span.tag(:class="{ 'current': currentYear(option.year) }") {{ option.year }}
    //- .multiselect-label 
    //-     span ACTIVITY 
    //-     | Selection: 
    //- Multiselect(
    //-     v-model="state.activityValue", 
    //-     :close-on-select="true", 
    //-     :options="filteredActivityOptions", 
    //-     mode="tags",
    //-     @select="handleSelector($event, 'activityValue')", 
    //-     :searchable="true",
    //-     placeholder="Start typing or select...",
    //-     )
    //-     template(v-slot:option="{ option }")
    //-         span {{ option.label }}
    //-         span.tag(:class="{ 'current': currentYear(option.year) }") {{ option.year }}
    //- Multiselect(
    //-     v-model="state.cycleValue", 
    //-     :close-on-select="true", 
    //-     :options="cycleOptions", 
    //-     mode="tags",
    //-     @select="handleSelector($event, 'cycleValue')", 
    //-     :searchable="true",
    //-     placeholder="Start typing or select...",
    //-     :style="{ marginBottom: '16px' }",
    //-     )
    //- .multiselect-label 
    //-     span ACTIVITY 
    //-     | Selection: 
    //- Multiselect(
    //-     v-model="state.activityValue", 
    //-     :close-on-select="true", 
    //-     :options="filteredActivityOptions", 
    //-     mode="tags",
    //-     @select="handleSelector($event, 'activityValue')", 
    //-     :searchable="true",
    //-     placeholder="Start typing or select...",
    //-     )

.filter-group
    FavoriteToggler(:options="cycleOptions" v-model="state.cycleValue")
    FilterTogglerMulti(:options="RKAFilterOptions" v-model="RKAFilterValue")
    OptionalToggler(v-if="optionalOptions && optionalOptions.length > 0" :options="optionalOptions" v-model="optionalValue")
    
    //- SalesChannelFilter(:options="store.SalesChannelFilter_Options")

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

.filter-group {
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: var(--pdlg);
    >* {
        margin: 0 !important;
        margin-bottom: var(--pdlg) !important;

        &:not(:last-child) {
            margin-right: var(--pdlg) !important;
        }
    }
}
</style>