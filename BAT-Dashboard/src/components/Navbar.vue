<script>
export default {
    data() {
        return {
            visible: false,
            menuActive: false,
        };
    },
    props: ["navActive"],
    methods: {
        onResize() {
            this.itemSize =
                document.documentElement.clientWidth < 1200
                    ? (this.visible = true)
                    : (this.visible = false);
        },
        navClick() {
            (this.menuActive = !this.menuActive),
                this.navActive({
                    menuActive: this.menuActive,
                });
        },
    },
    created() {
        window.addEventListener("resize", this.onResize);
        this.onResize();
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.onResize);
    },
};
</script>

<template lang="pug">
nav
    .nav-btn.fajc(
        v-if="visible",
        @click="navClick",
        :class="{ active: menuActive }"
    )
        app-icon(name="nav-btn", size="20")

    .logo Merchandising Dashboard

    a.export-excel.fajc(href="#", v-if="$route.path !== '/panel/dashboard'")
        app-icon(name="excel", size="40")

    router-link.user.fajc(to="/login")
        .user-login username
        app-icon(name="log-out", size="40")
        

</template>

<style lang="scss" scoped>
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
    margin-left: auto;
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
    color: var(--blue-light);
    
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
    width: 36px;
    height: 36px;
    background: var(--grey);
    border-radius: var(--radius-8);
    flex-shrink: 0;

    .icon {
        transition: all 0.3s var(--tr-2);
    }

    &.active {
        .icon {
            transform: rotate(-180deg);
            fill: var(--blue-light);
        }
    }

    @include respond-to(large) {
        margin-left: var(--pdsm);
    }
}

.export-excel {
    &:hover {
        opacity: 0.75;
    }

    @include respond-to(large) {
        height: 36px;
        width: 36px;
        margin-left: auto;
        margin-right: 8px;
        .icon {
            height: 36px;
            width: 36px;
        }
    }
}
</style>