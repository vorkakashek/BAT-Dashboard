<script setup>
import { RouterLink, RouterView } from "vue-router";
import LeftSidebar from "@/components/LeftSidebar.vue";
import Navbar from "@/components/Navbar.vue";
// import { useReportStore } from "@/store/store"

// const store = useReportStore()

</script>

<template lang="pug">
//- Loading
#modal
#warn
notifications(position="bottom right" width="380px")

RouterView
</template>

<style lang="scss">
@import "@/assets/base.css";

body {
    background: var(--bgc);
}

strong {
    font-weight: 700;
}

main {
    max-width: 100%;
    margin-left: var(--sidebar);
    margin-top: var(--navbar);
    padding: var(--layout-pd);

    @include respond-to(large) {
        margin-left: 0;
    }
}

.panel {
    border-radius: var(--radius-8);
    background: #fff;
    box-shadow: var(--shadow);
    padding: var(--pdxl);
    overflow: hidden;
    margin: var(--pdlg) 0;
}

hr {
    opacity: 0.3;
    margin: var(--pdlg) 0;
}

.error {
    color: var(--pink);
    padding-right: var(--pdsm);
    font-size: 12px;
    font-weight: 700;
}

/* flex align justify center */
.fajc {
    display: flex;
    align-items: center;
    justify-content: center;
}

/* panel */
.panel {
    border-radius: var(--radius-8);
    background-color: #fff;
    padding: var(--pdlg);
    border: 1px solid #eeeeee;

    h2 {
        font-weight: 900;
        color: var(--blue-medium);
        font-size: 26px;
        margin-bottom: var(--pdxl);
    }
}

.container {
    max-width: 1440px;
    margin: 0 auto;
    width: 100%;
}

.mgy {
    margin: var(--pdlg) 0;
}

.product-card-wrap {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    width: 100%;
    height: 100%;
    gap: 16px;
    align-content: stretch;

    @include respond-to(handlers) {
        grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    }
}

.hidden {
    display: none;
}

.comparison-wrap {
    display: flex;
    align-items: flex-start;
    position: relative;

    img {
        width: 200px;
        object-fit: contain;
        // margin-right: var(--pdxl);
        margin: 0 auto;
        margin-bottom: var(--pdxl);
        display: flex;
    }

    @include respond-to(large) {
        display: block;
    }

    .comparison-aside {
        margin-right: var(--pdxl);

        @include respond-to(large) {
            margin-right: 0;
        }
    }
}

.comparison-content {
    width: 100%;

    @include respond-to (large) {
        display: flex;
        flex-direction: column;
        align-items: center;

        .ISFFilter {
            margin: 0 auto;
        }
    }
}

.comparison-items {
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    width: 100%;
    height: 100%;
    gap: 16px;
    align-content: stretch;

    @include respond-to(large) {
        margin-top: var(--pdlg);
    }

    @include respond-to (handlers) {
        grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    }

}

.zoom {
    cursor: zoom-in;
}

.showmodal {
    cursor: pointer;
}

.image-zoom {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    width: 34px;
    height: 34px;
    background-color: rgba(55, 55, 55, 0.33);
    border-radius: var(--radius-8);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .3s ease;

    .icon {
        fill: #fff !important;
        cursor: zoom-in;
        transition: all .1s var(--tr-2);
    }

    &:hover {
        background-color: rgba(55, 55, 55, 0.5);

        .icon {
            transform: scale(1.25);
        }
    }
}

// 

.notification-title {
    font-size: 18px;
}

.notification-content {
    font-size: 15px;
}

.vue-notification {
    cursor: pointer;
}</style>
