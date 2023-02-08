import {
    defineStore
} from 'pinia'

import { useStorage } from '@vueuse/core'

import { computed } from 'vue'

export const useReportStore = defineStore('reportStore', {
    state: () => ({
        amount_requested: 1, // Кол-во запросов на репорты
        amount_ready: 2, // Репорты готовые к скачиванию
        amount_new: 1, // Кол-во новых репортов, готовых к скачиванию
        alaram_express: useStorage('alaram_express', true),
    }),
    actions: {
        increment() {
            this.amount_requested++ // Добавляет +1 к запрошенным репортам
        },
        clear() {
            this.amount_new = 0 // Когда открываем модалку с репортам, очищаем "новые"
        },
        shown() {
            this.alaram_express = false // когда показали юзеру уведомление
        }
    },
})

export const useFiltersStore = defineStore('filtersStore', {
    state: () => ({
        isf_togglers: [
            // ISF togglers
            {
                name: 'isf_1', // дропдаун в сайд меню
                value: 'unset'
            },
            // ISF delivery/execution
            {
                name: 'isf_2', // BWD / OHD
                value: 'unset'
            },
            {
                name: 'isf_3', // CAPEX / OPEX
                value: 'unset'
            },
            {
                name: 'isf_4', // IndepLocal / RKA
                value: 'unset'
            },
            // ISF Comparison
            {
                name: 'isf_5', // BWD / OHD
                value: 'unset'
            },
            {
                name: 'isf_6', // CAPEX / OPEX
                value: 'unset'
            },
            {
                name: 'isf_7', // IndepLocal / RKA
                value: 'unset'
            },
            // ISF Progress
            {
                name: 'isf_8', // BWD / OHD
                value: 'unset'
            },
        ],
        cycle_togglers: [
            // CycleMaterials togglers
            {
                name: 'cycle_1', // BWD / OHD
                value: 'unset'
            },
        ]
    }),
    actions: {
        save(new_val, name) {
            this.isf_togglers.find(e => e.name === name).value = new_val
        },
    }
})

export const useSalesChannelFilter = defineStore('salesChannelStore', {
    state: () => ({
        SalesChannelFilter_Options: ['Independent', 'National', 'Regional'], // Опции для CycleMaterials - SalesChannelFilter
        SalesChannelFilter_Value: useStorage('SalesChannelFilter_Value', ['Independent', 'National', 'Regional']), // Текущий выбор для CycleMaterials - SalesChannelFilter
    }),
    actions: {
        change(new_val) {
            this.SalesChannelFilter_Value = new_val
        }
    }
})

