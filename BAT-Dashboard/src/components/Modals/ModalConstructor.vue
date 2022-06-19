<script setup>
import CycleMaterialsModal from '@/components/Modals/Cycle Materials Modal/modal.vue'

const props = defineProps({
    visible: Boolean,
    modalName: String,
    data: Object,
})
</script>

<template lang="pug">

Transition(name="nested" appear) 
    #modal-constructor(v-if="visible")
        .container
            .panel
                app-icon.close-modal(name="close" size="24" @click="$emit('hide')")
                .modal-content(v-if="modalName == 'CycleMaterialsModal'")
                    CycleMaterialsModal(:data="data")
        .inner#modal-constructor-overlay(@click="$emit('hide')")

</template>

<style lang="scss" scoped>
.close-modal {
    position: absolute;
    z-index: 100;
    right: var(--pdsm);
    top: var(--pdsm);
    cursor: pointer;
    transition: all .2s ease;

    &:hover {
        transform: rotate(90deg);
    }
}

#modal-constructor {
    position: fixed;
    z-index: 7777;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    overflow-y: auto;
    padding: var(--pdlg);

    @include respond-to (medium) {
        padding: var(--pdlg);
    }

    @include respond-to (handlers) {
        padding: var(--pdsm);
    }
}

#modal-constructor-overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: var(--overlay);
    z-index: -1;
    cursor: pointer;
}

.panel {
    margin: 0;
}

.nested-enter-active,
.nested-leave-active {
    transition: all 0.3s ease-in-out;
}

/* delay leave of parent element */
.nested-leave-active {
    transition-delay: 0.1s;
}

.nested-enter-from,
.nested-leave-to {
    // transform: translateY(30px);
    opacity: 0;
}


/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner {
    transition: all 0.3s ease;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
    opacity: 0.001;
}

.nested-enter-from .panel,
.nested-leave-to .panel {
    transition: all 0.3s ease;
    transform: translateY(30px);
}

</style>