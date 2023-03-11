import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useReportStore = defineStore('reportStore', {
    state: () => ({
        amount_requested: 1, // Кол-во запросов на репорты
        amount_ready: 2, // Репорты готовые к скачиванию
        amount_new: 1, // Кол-во новых репортов, готовых к скачиванию
        alarm_express: useStorage('alarm_express_1', true),
    }),
    actions: {
        increment() {
            this.amount_requested++ // Добавляет +1 к запрошенным репортам
        },
        clear() {
            this.amount_new = 0 // Когда открываем модалку с репортам, очищаем "новые"
        },
        shown() {
            this.alarm_express = false // когда показали юзеру уведомление
        }
    },
})

export const useFiltersStore = defineStore('filtersStore', {
    state: () => ({
        togglers: [
            // ISF togglers
            {
                name: 'isf_1', // дропдаун в сайд меню
                value: 'unset'
            },
            // ISF - delivery/execution
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
            // ISF - Comparison
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
            // ISF - Progress
            {
                name: 'isf_8', // BWD / OHD
                value: 'unset'
            },
            // CycleMaterials togglers
            {
                name: 'cycle_1', // Дропдаун Cycles в сайд меню
                value: 'unset'
            },
            {
                name: 'cycle_2', // Дропдаун Activities в сайд меню
                value: 'unset'
            },
            // CycleMaterials - Delivery/Execution
            {
                name: 'cycle_3', // IndepLocal / RKA
                value: 'unset'
            },
            // CycleMaterials - Comparison
            {
                name: 'cycle_4', // Must Set / Other
                value: 'unset'
            },
            // Semi-permanentMaterials togglers
            {
                name: 'semiperm_1', // Дропдаун Semi-permanentMaterials в сайд меню
                value: 'unset'
            },
            // Semi-permanentMaterials - Delivery/Execution
            {
                name: 'semiperm_2', // IndepLocal / RKA
                value: 'unset'
            },
            // Semi-permanentMaterials - Comparison
            {
                name: 'semiperm_3', // IndepLocal / RKA
                value: 'unset'
            },
            // Headers togglers
            {
                name: 'headers_1', // Дропдаун Headers в сайд меню
                value: 'unset'
            },
            // Headers - Delivery/Execution
            {
                name: 'headers_2', // IndepLocal / RKA
                value: 'unset'
            },
            // Headers - Comparison
            {
                name: 'headers_3', // IndepLocal / RKA
                value: 'unset'
            },
            // Projects togglers
            {
                name: 'projects_1', // Дропдаун Headers в сайд меню
                value: 'unset'
            },
            // Equipment togglers
            {
                name: 'equipment_1', // Дропдаун Equipment в сайд меню
                value: 'unset',
            },
            {
                name: 'equipment_2', // BWD Vitrine 
                value: 'unset',
            },
            {
                name: 'equipment_3', // IndepLocal / RKA 
                value: 'unset',
            },
        ],
    }),
    actions: {
        save(new_val, name) {
            this.togglers.find(e => e.name === name).value = new_val
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

