<script setup>
import { computed } from 'vue';

const props = defineProps({
    fullsize: {
        type: Boolean,
        required: false,
        default: true,
    },
    text: {
        type: String,
        required: false,
        default: 'Loading...',
    }
})

const delay = (index) => {
    let val = 0
    if (index > 0) {
        val = index * .05
    } return `animation-delay: ${val}s`
}

const letters = computed(() => {
    return props.text.split('')
})


</script>

<template lang="pug">
    
#preloader(:class="{ 'full-size': fullsize }")
    .preloader-frame
        .preloader-outer
            .preloader-inner(v-for="n in 4")
        .preloader-text 
            .preloader-text-letter(v-for="(letter, index) in letters" :style="[delay(index)]") {{ letter }}

</template>


<style lang="scss" scoped>
@keyframes jump {
    0% {
        transform: translateY(0);
    }

    4% {
        transform: translateY(-40%);
    }

    8% {
        transform: translateY(0%);
        opacity: 1;
    }

    25% {
        opacity: .5;
    }

    50% {
        opacity: 1;
    }

    75% {
        opacity: .5;
    }

    100% {
        opacity: 1;
        transform: translateY(0%);
    }
}
@keyframes opacity {
    0% {
        opacity: 1;
    }

    25% {
        opacity: .5;
    }

    50% {
        opacity: 1;
    }

    75% {
        opacity: .5;
    }

    100% {
        opacity: 1;
    }
}

#preloader {
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    cursor: default;

    &.full-size {
        position: fixed;
        background: rgba(0, 0, 0, 0.331);
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    &:not(.full-size) {
        .preloader-frame {
            width: 100%;
        }
        .preloader-outer {
            justify-content: center;
        }
        
    }
}

.preloader-frame {
    background-color: #fff;
    padding: 10px 30px;
    border-radius: var(--radius-8);
    box-shadow: var(--shadow);
}

.preloader-outer {
    display: flex;
    align-items: center;
    padding: 10px;
}

.preloader-text {
    text-align: center;
    margin-top: var(--pdsm);
    display: flex;
    align-items: center;
    justify-content: center;
}

.preloader-text-letter {
    // animation: jump 5s cubic-bezier(0.83, 0.51, 0.27, 1.55) infinite 2s;
    // animation: jump 5s cubic-bezier(0.32, -1.5, 0.88, 1) infinite 2s;
    animation: opacity 5s cubic-bezier(0.32, -1.5, 0.88, 1) infinite 2s;

    &:not(:last-child) {
        margin-right: 1px;
    }
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
        background-color: #50AF47;
    }

    &:nth-child(4) {
        transform-origin: center right;
        animation: spin4 3s linear infinite;
        animation-delay: .4s;
        background-color: #FFBB00;
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
        background-color: #50AF47;
    }

    29% {
        background-color: #cecece;
    }

    38% {
        background-color: #cecece;
    }

    40% {
        transform: rotate(180deg);
        background-color: #afca0b;
    }

    45% {
        transform: rotate(190deg);
    }

    50% {
        transform: rotate(180deg);
    }

    62% {
        transform: rotate(180deg);
        background-color: #afca0b;
    }

    64% {
        background-color: #cecece;
    }

    73% {
        background-color: #cecece;
    }

    75% {
        transform: rotate(360deg);
        background-color: #50AF47;
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
        background-color: #FFBB00;
    }

    40% {
        background-color: #cecece;
    }

    60% {
        transform: rotate(-360deg);
        background-color: #cecece;
    }

    65% {
        transform: rotate(-370deg);
        background-color: #FFBB00;
    }

    75% {
        transform: rotate(-360deg);
    }

    100% {
        transform: rotate(-360deg);
    }
}
</style>