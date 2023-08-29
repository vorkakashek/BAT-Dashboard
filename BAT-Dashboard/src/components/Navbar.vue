<script setup>

import { reactive, onBeforeMount, onBeforeUnmount } from 'vue'
import Downloader from '@/components/Downloader.vue'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue';
import { useReportStore } from "@/store/store"
const store = useReportStore()

const props = defineProps(['navActive'])

const state = reactive({
    visible: false,
    menuActive: false,
})

const navClick = () => {
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
nav(:class="{ active: state.menuActive }")
    .nav-btn.fajc(
        v-if="state.visible",
        @click="navClick",
        :class="{ active: state.menuActive }"
    )
        //- app-icon(name="nav-btn", size="20")
        .nav-btn-name 
            span {{ $t('header.menu') }}
            span {{ $t('header.close') }}
        span
        span
        span
        span


    .logo {{ $t('header.logo') }}

    #export-excel
    Downloader(v-if="store.amount_requested > 0 || store.amount_ready > 0")

    LanguageSwitcher

    router-link.user.fajc(to="/login")
        .user-login username
        app-icon(name="log-out", size="40")
        
#overlay(@click="navClick")
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
nav {
    position: fixed;
    top: 0;
    left: 0;
    height: var(--navbar);
    width: 100%;
    background-color: #fff;
    box-shadow: var(--shadow);
    z-index: 999;
    display: flex;
    align-items: center;

    @include respond-to(large) {
        height: calc(var(--navbar) / 1.25);
    }
}

.user {
    margin-left: 40px;
    margin-right: var(--layout-pd);
    text-decoration: none;

    &:hover {
        opacity: .75;
    }

    @include respond-to (large) {
        margin-left: 16px;
    }

    @include respond-to (handlers) {
        margin-left: 0;
    }
}

.user-login {
    font-weight: 700;
    font-size: 13px;
    margin-right: 8px;
    // color: var(--blue-light);
    color: #333;

    @include respond-to (handlers) {
        display: none;
    }
}

.logo {
    height: 100%;
    display: flex;
    align-items: center;
    width: var(--sidebar);
    position: relative;
    padding: 0 16px;
    font-weight: 900;
    font-size: 18px;
    margin-right: var(--layout-pd);
    color: var(--blue-dark);
    line-height: 1;

    &:after {
        content: "";
        width: calc(100% - var(--pdlg) * 2);
        bottom: 0;
        height: 4px;
        position: absolute;
        z-index: 1;
        background: var(--BAT);
    }


    @include respond-to (large) {
        margin-right: auto;
        width: calc(var(--sidebar) - 36px - 8px);
        font-size: calc(5px + var(--index) * 0.6);
    }

    @include respond-to(handlers) {
        padding: 0 8px;
        width: fit-content;
        font-size: calc(5px + var(--index) * 0.75);

        &:after {
            width: calc(100% - 16px);
        }
    }
}

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