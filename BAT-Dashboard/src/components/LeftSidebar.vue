<script>
export default {
    props: ["sidebarActive"],
    data() {
        return {};
    },
};
</script>

<template lang="pug">
sidebar(:class="{ active: sidebarActive }")
    router-link.sidebar__nav-item(to="/panel/dashboard")
        app-icon(name="Dashboard", size="24")
        .sidebar__nav-item-name Dashboard
    //- 
    router-link.sidebar__nav-item(to="/panel/ISF")
        app-icon(name="ISF", size="24")
        .sidebar__nav-item-name ISF
        app-icon.chevron(name="chevron" size="16")
    .sidebar__nav-group(v-if="$route.path == '/panel/ISF/'")
        router-link.sidebar__nav-group-item(to="/panel/ISF") Delivery / Execution 
        router-link.sidebar__nav-group-item(to="/panel/comparison") Comparison
    //- 
    router-link.sidebar__nav-item(to="/panel/CycleMaterials")
        app-icon(name="CycleMaterials", size="24")
        .sidebar__nav-item-name CycleMaterials
        app-icon.chevron(name="chevron" size="16")
    router-link.sidebar__nav-item(to="/panel/Touchpoints")
        app-icon(name="Touchpoints", size="24")
        .sidebar__nav-item-name Touchpoints
        app-icon.chevron(name="chevron" size="16")
    router-link.sidebar__nav-item(to="/panel/Projects")
        app-icon(name="Projects", size="24")
        .sidebar__nav-item-name Projects
        app-icon.chevron(name="chevron" size="16")
</template>

<style lang="scss" scoped>
sidebar {
    width: var(--sidebar);
    // padding: var(--pdxl);
    padding-top: 36px;
    background-color: #fff;
    position: fixed;
    top: var(--navbar);
    left: 0;
    height: calc(100% - var(--navbar));
    z-index: 99;
    transition: all 0.3s var(--tr-2);
    @include respond-to(large) {
        left: -100%;
        top: calc(var(--navbar) / 1.25);
        height: calc(100% - var(--navbar) / 1.25);
        &.active {
            left: 0%;
        }
    }
}

.sidebar__nav-group-item {
    font-weight: 700;
    text-decoration: none;
    color: #333;
    padding: 12px 0;
    padding-left: 40px;
    display: block;
    font-size: 14px;
    &.router-link-active {
        color: var(--blue-light);
    }
    &:hover {
        &:not(&.router-link-active) {
            background-color: var(--grey-light);
        }
    }
}

.sidebar__nav-item {
    display: flex;
    align-items: center;

    font-weight: 700;
    color: var(--inactive);
    text-decoration: none;
    padding: 12px var(--pdlg);
    .icon {
        fill: var(--inactive);
    }

    &.router-link-active {
        background-color: var(--blue-light);
        .icon {
            fill: #fff;
            &:last-child {
                transform: rotate(90deg);
            }
        }
        .sidebar__nav-item-name {
            color: #fff;
        }
    }

    &:hover {
        &:not(&.router-link-active) {
            background-color: var(--grey-light);
        }
    }
}

.sidebar__nav-item-name {
    font-weight: 700;
    margin-left: var(--pdlg);
    margin-right: auto;
}
</style>