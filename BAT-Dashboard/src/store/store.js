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
    }),
    actions: {
        increment() {
            this.amount_requested++ // Добавляет +1 к запрошенным репортам
        },
        clear() {
            this.amount_new = 0 // Когда открываем модалку с репортам, очищаем "новые"
        },
    },
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

