<script setup>
import { inject, watch, ref } from "vue";
import Logo from "./Logo.vue";
import AsideButton from "./AsideButton.vue";
import { version } from "../../package.json";
import { useRouter, useRoute } from 'vue-router'

const navItems = inject("navItems");
const updateItems = inject("updateItems");
const filterItems = inject("filterItems");
const route = useRoute()

defineProps({
    sidebarActive: Boolean,
})
filterItems('link', route.path.split('/')[2])
watch(() => route.path, () => {
    filterItems('link', route.path.split('/')[2])
})
</script>

<template lang="pug">
.aside-wrapper
    .aside(:class="{ 'active': sidebarActive }")
        Logo.aside-logo
        .aside-back
            AsideButton(:isPrimary="$route.path === '/panel/Dashboard'" :isBack="$route.path !== '/panel/Dashboard'" :icon="$route.path !== '/panel/Dashboard' ? 'back' : 'dashboard'" to="/panel/Dashboard") Dashboard
        .aside__group
            template(v-for="item in navItems.length === 1 ? navItems[0].children : navItems")
                AsideButton(:icon="item.icon ? item.icon : item.link" :to="`/panel/${item.link}`" :disabled="item.disabled") {{ item.name }}
        .aside-version 
            p.aside-version__value v {{ version }}

//- aside(:class="{ 'active': sidebarActive }")
//-     div(v-for="item in navItems")
//-         router-link.sidebar__nav-item(:to="`/panel/${item.link}`")
//-             app-icon(:name="item.link", size="24")
//-             .sidebar__nav-item-name {{ item.name }}
//-             app-icon.chevron(
//-                 name="chevron",
//-                 size="16",
//-                 v-if="item.children !== undefined"
//-             )

//-         .sidebar__tag-select#multiselector(v-if="$route.path.includes(`/panel/${item.link}/`)")

//-         transition(name="heightAnim", appear)
//-             .sidebar__nav-group(
//-                 v-if="$route.path.includes(`/panel/${item.link}/`) && item.children !== undefined"
//-             )
//-                 router-link.sidebar__nav-group-item(
//-                     v-for="child in item.children",
//-                     :to="`/panel/${item.link}/${child.link}`"
//-                 ) {{ child.name }}

</template>

<style lang="scss" scoped>
.aside-back {
    width: 100%;
}
.heightAnim-enter-active {
    animation: heightAnim 0.75s ease;
    animation-delay: 0;
    max-height: 0;
    overflow: hidden;
}

@keyframes heightAnim {
    from {
        max-height: 0;
    }

    to {
        max-height: 400px;
    }
}
.aside-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    padding: var(--layout-inner-pd);
    padding-right: 0px;
    z-index: 1000;
    height: 100%;
}
.aside {
    padding: 12px;
    overflow-y: auto;
    width: var(--sidebar);
    background-color: #fff;
    height: 100%;
    transition: all 0.3s var(--tr-2);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    position: relative;
    &__group {
        display: flex;
        width: 100%;
        flex-direction: column;
    }
}
.aside-version {
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 16px;
    &__value {
        border-radius: 16px;
        padding: 4px 8px;
        background: rgba(58, 71, 75, 0.10);
        color: #3A474B;
        opacity: 0.5;
        font-size: 12px;
        font-weight: 600;
        line-height: 8px; /* 66.667% */
    }
}
</style>