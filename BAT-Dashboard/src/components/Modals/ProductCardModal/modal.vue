<script setup>

import { ref } from 'vue'
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

let props = defineProps({
    data: {
        type: Object,
        required: false,
    }
})

let emits = defineEmits(["hide"])
let importPhoto = (photo) => new URL(`./../../../assets/images/${photo}.jpg`, import.meta.url).href

let extended = ref(false)

</script>

<template lang="pug">

.product_card_outer
    h2 {{ data.name }}

    .product_card_content(:class="{ extended: extended }")
        .product_photo
            template(v-if="data.info.photo.length > 1")
                swiper(:slides-per-view="1" :space-between="32" :modules="[Navigation, Pagination]" navigation :pagination="{ clickable: true }")
                    swiper-slide(v-for="photo in data.info.photo")
                        img.zoom(:src="importPhoto(photo)" @click="extended = !extended")

            img.zoom(:src="importPhoto(data.photo)" @click="extended = !extended" v-else)
        .product_info(v-html="data.info.html")
    

</template>

<style lang="scss" scoped>
.product_card_content {
    display: flex;

    &.extended {
        flex-wrap: wrap;

        .product_photo {
            width: 100%;
            max-width: 100% !important;
        }

        .zoom {
            cursor: zoom-out;
        }

        .product_info {
            margin-left: 0;
            margin-top: 24px;
        }
    }

    @include respond-to (handlers) {
        display: block;

        .product_photo {
            width: 100%;
            max-width: 100% !important;
        }

        .product_info {
            margin-left: 0;
            margin-top: 24px;
        }
    }
}

.product_photo {
    width: 40%;
    max-width: 400px;
    transition: all .3s ease;

    img {
        width: 100%;
    }
}

.product_info {
    font-size: 16px;
    margin-left: 24px;

    @include respond-to (small) {
        font-size: 14px;
    }
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
    --swiper-navigation-size: 32px;
}

:deep(.swiper-button-prev) {
    left: 0;
}

:deep(.swiper-button-next) {
    right: 0;
}</style>