<script setup>

import CycleMaterialsModal from '@/components/Modals/Cycle Materials Modal/modal.vue'
import ExportExcel from '@/components/Modals/ExportExcel/modal.vue'
import ReportDownload from '@/components/Modals/ReportDownload/modal.vue'
import AlarmExpress from '@/components/Modals/AlarmExpress/modal.vue'
import ProductCardModal from '@/components/Modals/ProductCardModal/modal.vue'
import ProductCardModalGraph from '@/components/Modals/ProductCardModal/modalGraph.vue'

import { ref } from 'vue'


const props = defineProps({
    modalName: String,
    data: Object,
    dialog: {
        type: Boolean,
        required: false,
        default: false,
    },
    title: {
        type: String,
        required: false
    },
    msg: {
        type: String,
        required: false
    },
    styles: {
        type: String,
        required: false,
        default: ''
    }
}); 

const visible = ref(false)

const emits = defineEmits(["show"]);

const show = () => {
    visible.value = true
    document.querySelector('body').style.overflow = "hidden"
}

defineExpose({
    show,
})

const hide = () => {
    visible.value = false
    document.querySelector('body').removeAttribute("style")
}

</script>

<template lang="pug">

Teleport(to="#modal")
    Transition(name="nested" appear)
        #modal-constructor(v-if="visible" :class="{ dialog: dialog }")
            .container(:style="styles")
                .panel
                    //- app-icon.close-modal(name="close" size="24" @click="$emit('hide')")
                    app-icon.close-modal(name="close" size="24" @click="hide()")
                    .modal-content
                        //- For Items in Cycle Materials
                        template(v-if="modalName == 'CycleMaterialsModal'")
                            CycleMaterialsModal(:data="data")
                        //- For Items in ProductCardModalGraph
                        template(v-if="modalName == 'ProductCardModalGraph'")
                            ProductCardModalGraph(:data="data")
                        //- For Excel Icon
                        template(v-if="modalName == 'ExportExcel'")
                            ExportExcel(@hide="hide()")
                        //- For Report Downloader
                        template(v-if="modalName == 'ReportDownload'")
                            ReportDownload(@hide="hide()")
                        //- For AlarmExpress
                        template(v-if="modalName == 'AlarmExpress'")
                            AlarmExpress(@hide="hide()" :title="title" :msg="msg")
                        //- For ProductCardModal
                        template(v-if="modalName == 'ProductCardModal'")
                            ProductCardModal(@hide="hide()" :title="title" :data="data")


            .inner#modal-constructor-overlay(@click="hide()")
        
</template>

<style lang="scss" scoped>
.modal-content {
    max-height: 80vh;
    overflow-y: auto;
}

.close-modal {
    position: absolute;
    z-index: 100;
    right: var(--pdsm);
    top: var(--pdsm);
    cursor: pointer;
    transition: all .2s ease;
    fill: var(--inactive);

    &:hover {
        // transform: rotate(90deg);
        fill: var(--red);
    }
}

#modal-constructor {
    position: fixed;
    z-index: 7777;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    display: flex;

    overflow-y: auto;
    padding: var(--pdlg);

    @include respond-to (medium) {
        padding: var(--pdlg);
    }

    @include respond-to (handlers) {
        padding: var(--pdsm);
    }

    &.dialog {
        padding: 20vh 20vw;

        .container {
            width: fit-content;
            min-width: 300px;
        }

        .panel {
            padding: var(--pdxxl)
        }

        @include respond-to (medium) {
            padding: var(--pdlg);
        }

        @include respond-to (handlers) {
            padding: var(--pdsm);
        }
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
    margin-bottom: 16px;
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