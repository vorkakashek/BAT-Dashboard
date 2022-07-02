<script setup>
import { computed } from 'vue';

const props = defineProps({
    fullSize: {
        type: Boolean,
        required: false,
        default: true,
    }
})

const delay = (index) => {
    let val = 0
    if (index > 0) {
        val = index * .2
    } return `animation-delay: ${val}s`
}



</script>

<template lang="pug">
    
#preloader(:class="{ 'full-size': fullSize }")
    .preloader-outer
        .preloader-inner(v-for="(n, index) in 4")

</template>


<style lang="scss" scoped>
#preloader {
    position: absolute;
    z-index: 9999;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.331);
    display: flex;
    align-items: center;
    justify-content: center;

    user-select: none;
    cursor: default;

    &.full-size {
        position: fixed;
    }
}

.preloader-outer {
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 10px 30px;
    border-radius: var(--radius-8);
}

.preloader-inner {
    height: 10px;
    width: 20px;
    background-color: #cecece;
    border-radius: var(--radius-4);

    &:not(:last-child) {
        margin-right: 18px;
    }

    &:nth-child(1) {
        margin-right: -4px;
        transform-origin: center left;
        animation: spin 3s linear infinite;
        background-color: var(--blue-light);
    }

    &:nth-child(2) {
        transform-origin: center right;
        animation: spin2 3s linear infinite;
        animation-delay: .2s;
        background-color: var(--pink);
    }

    &:nth-child(3) {
        transform-origin: center right;
        animation: spin3 3s linear infinite;
        animation-delay: .3s;
    }

    &:nth-child(4) {
        transform-origin: center right;
        animation: spin4 3s linear infinite;
        animation-delay: .4s;
    }
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
        background-color: var(--blue-light);
    }

    5% {
        background-color: #cecece;
    }

    22% {
        background-color: #cecece;
    }

    27% {
        background-color: var(--blue-light);
        transform: rotate(360deg);
    }

    30% {
        transform: rotate(370deg);
    }

    35% {
        transform: rotate(360deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes spin2 {
    0% {
        transform: rotate(0deg);
    }

    20% {
        transform: rotate(0deg);
        background-color: var(--pink);
    }

    23% {
        background-color: #cecece;
    }

    28% {
        background-color: #cecece;
    }

    30% {
        transform: rotate(-180deg);
        background-color: #5a328a;
    }

    35% {
        transform: rotate(-190deg);
    }

    40% {
        transform: rotate(-180deg);
    }
    78% {
        transform: rotate(-180deg);
        background-color: #5a328a;
    }

    82% {
        background-color: #cecece;
    }
    
    94% {
        background-color: #cecece;
    }
    
    95% {
        transform: rotate(-360deg);
        background-color: var(--pink);
    }

    98% {
        transform: rotate(-370deg);
    }

    100% {
        transform: rotate(-360deg);
    }
}

@keyframes spin3 {
    0% {
        transform: rotate(0deg);
    }

    27% {
        transform: rotate(0deg);
    }

    40% {
        transform: rotate(180deg);
    }

    45% {
        transform: rotate(190deg);
    }

    50% {
        transform: rotate(180deg);
    }

    62% {
        transform: rotate(180deg);
    }

    75% {
        transform: rotate(360deg);
    }

    80% {
        transform: rotate(370deg);
    }

    85% {
        transform: rotate(360deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes spin4 {
    0% {
        transform: rotate(0deg);
    }

    38% {
        transform: rotate(0deg);
    }

    60% {
        transform: rotate(-360deg);
    }

    65% {
        transform: rotate(-370deg);
    }

    75% {
        transform: rotate(-360deg);
    }

    100% {
        transform: rotate(-360deg);
    }
}
</style>