<script setup>

import { reactive, onBeforeMount, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import Downloader from '@/components/Downloader.vue'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue';
import { useReportStore } from "@/store/store"
const store = useReportStore()

const props = defineProps(['navActive'])
const emits = defineEmits(['activate'])

const state = reactive({
    visible: false,
    menuActive: false,
})

const navClick = () => {
    emits('activate')
    state.menuActive = !state.menuActive
    props.navActive({ menuActive: state.menuActive, })
}

const onResize = () => {
    let w = window.innerWidth
    if (w < 1200) {
        state.visible = true
    } else {
        state.visible = false
    }
}

onBeforeMount(() => {
    window.addEventListener("resize", onResize)
    onResize()
})

onBeforeUnmount(() => {
    window.removeEventListener("resize", onResize);
})

</script>

<template lang="pug">
.nav-wrapper 
    nav.nav(:class="{ active: state.menuActive }")
        .nav__buttons
            Downloader(v-if="store.amount_requested > 0 || store.amount_ready > 0")
        .nav__controllers
            LanguageSwitcher
            router-link.user(to="/login") Username
                app-icon(name="log-out", size="18")
        //- .nav-btn.fajc(
        //-     v-if="state.visible",
        //-     @click="navClick",
        //-     :class="{ active: state.menuActive }"
        //- )
        //-     //- app-icon(name="nav-btn", size="20")
        //-     .nav-btn-name 
        //-         span {{ $t('header.menu') }}
        //-         span {{ $t('header.close') }}
        //-     span
        //-     span
        //-     span
        //-     span

//- nav(:class="{ active: state.menuActive }")


//-     .logo {{ $t('header.logo') }}

//-     #export-excel
//-     Downloader(v-if="store.amount_requested > 0 || store.amount_ready > 0")

//-     LanguageSwitcher

//-     router-link.user.fajc(to="/login")
//-         .user-login username
//-         app-icon(name="log-out", size="40")
        
//- #overlay(@click="navClick")
</template>

<style lang="scss" scoped>
#overlay {
    position: fixed;
    z-index: 20;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(59, 150, 255, 0.301);
    backdrop-filter: blur(8px);
    z-index: -1000;
    opacity: 0;
    user-select: none;
    pointer-events: none;
    transition: opacity .3s ease 0s;
    
}

nav.active {
    ~#overlay {
        z-index: 20;
        opacity: 1;
        user-select: auto;
        pointer-events: auto;
        transition: opacity .3s ease .1s;
    }
}
.nav {
    height: var(--navbar);
    width: 100%;
    background-color: #fff;
    // box-shadow: var(--shadow);
    display: flex;
    align-items: center;
    max-width: 1440px;
    margin: 0 auto;
    border-radius: 4px;
    padding: 12px;
    justify-content: space-between;
    &__buttons {
        display: flex;
        gap: 8px;
    }
    &__controllers {
        display: flex;
        align-items: center;
        gap: 24px;
    }
    // @include respond-to(large) {
    //     height: calc(var(--navbar) / 1.25);
    // }
}

.nav-wrapper {
    z-index: 999;
    padding-top: var(--layout-inner-pd);
    padding-right: var(--layout-pd);
    padding-left: calc(var(--sidebar) + var(--layout-inner-pd) + var(--layout-pd));
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}

.user {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 8px 8px 8px 16px;
    border: 1px solid #ECECEC;
    color: var(--TEXT---PRIMARY, #3A474B);
    font-size: 13px;
    font-weight: 700;
    text-decoration: none;
    border-radius: 8px;

    @include respond-to (large) {
        margin-left: 16px;
    }

    @include respond-to (handlers) {
        margin-left: 0;
    }
}

// .user-login {
//     font-weight: 700;
//     font-size: 13px;
//     margin-right: 8px;
//     // color: var(--blue-light);
//     color: #333;

//     @include respond-to (handlers) {
//         display: none;
//     }
// }


.nav-btn {
    margin-left: var(--pdlg);
    width: 42px;
    height: 42px;
    // background: var(--grey);
    background-color: var(--blue-dark);
    border-radius: var(--radius-8);
    flex-shrink: 0;
    flex-direction: column;
    overflow: hidden;
    transition: all .3s ease;

    .icon {
        transition: all 0.3s var(--tr-2);
    }



    >span {
        width: 24px;
        height: 2px;
        display: block;
        background-color: #fff;
        margin: 4px 0;
        position: absolute;
        transition: all .3s ease;
        // left: 9px;

        // margin-top: 8px;
        &:nth-child(2) {
            // display: none;
            top: 8px;
            left: 9px;
        }

        &:nth-child(3) {
            // display: none;
            top: 14px;
            left: 9px;
        }

        &:nth-child(4) {
            transform: rotate(45deg);
            width: 14px;
            left: 60px;
            top: 60px;
            // display: none;
        }

        &:nth-child(5) {
            transform: rotate(-45deg);
            width: 14px;
            left: -20px;
            bottom: -20px;
        }
    }

    &.active {
        background-color: var(--blue-medium);

        >span {
            &:nth-child(2) {
                left: -150%;
            }

            &:nth-child(3) {
                left: 150%;
            }

            &:nth-child(4) {

                transform: rotate(45deg);
                left: 14px;
                top: 12px;

            }

            &:nth-child(5) {
                // display: none;
                transform: rotate(-45deg);
                left: 14px;
                bottom: 20px;
            }
        }

        .nav-btn-name {
            >span {
                &:nth-child(1) {
                    position: absolute;
                    left: -100%;
                    transform: translateX(-50%);
                }

                &:nth-child(2) {
                    left: 50%;
                    transform: translateX(-50%);
                }
            }
        }
    }

    @include respond-to(large) {
        margin-left: var(--pdsm);
    }
}

.nav-btn-name {
    text-transform: uppercase;
    font-size: 8px;
    letter-spacing: .075rem;
    color: #fff;
    position: absolute;
    bottom: 4px;
    width: 100%;
    overflow: hidden;
    height: 13px;

    >span {
        position: absolute;
        transform: translateX(-50%);
        transition: all .3s ease;
        &:nth-child(1) {
            left: 50%;
        }

        &:nth-child(2) {
            left: 200%;
        }
    }
}
</style>