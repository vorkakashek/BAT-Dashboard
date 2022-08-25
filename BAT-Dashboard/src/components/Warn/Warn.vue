<script setup>

import { onMounted, ref } from 'vue'

const props = defineProps({
    msg: {
        type: String,
        required: true,
    },
    seconds: {
        type: Number,
        required: false,
        default: 2,
    },
})

onMounted(() => {
    timer()
})

const timer = () => {
    setTimeout(() => {
        
    }, props.seconds)
}


</script>

<template lang="pug">
    
Teleport(to="#warn")
    .warn 
        .warn-msg {{ msg }}
        .warn-timer(:style="{ animationDuration: seconds + 's' }")

</template>

<style lang="scss" scoped>

.warn {
    position: fixed;
    right: 16px;
    bottom: 16px;
    z-index: 9999;
    background: rgba(180, 242, 255, 0.508);
    padding: 8px;
    border-radius: var(--radius-4);
}

.warn-timer {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    background: rgba(120, 189, 203, 0.508);
    border-radius: var(--radius-4);
    animation: linear both timer;
    animation-duration: .1s;
}

@keyframes timer {
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
}


</style>