<script setup>
import { inject, watch, ref } from "vue";
import Logo from "./Logo.vue";
import AsideButton from "./AsideButton.vue";
import { version } from "../../package.json";
import LanguageSwitcher from "./LanguageSwitcher.vue";
import { useRouter, useRoute } from 'vue-router'

const navItems = inject("navItems");
const updateItems = inject("updateItems");
const filterItems = inject("filterItems");
const router = useRouter()
const route = useRoute()

const props = defineProps({
    navActive: Boolean,
})
const emits = defineEmits(['activate'])
filterItems('link', route.path.split('/')[2])
watch(() => route.path, () => {
    console.log(route.path.split('/')[3])
    filterItems('link', route.path.split('/')[2])
})
const navClick = () => {
    emits('activate')
    state.menuActive = !state.menuActive
    props.navActive({ menuActive: state.menuActive, })
}
const activeItem = ref('')
</script>

<template lang="pug">
.aside-wrapper(:class="{ 'active': navActive }" @click.self="navClick()")
    .aside
        Logo.aside-logo
        .aside-mobile
            button.nav__burger(@click="navClick")
                span
                span
                span
            LanguageSwitcher.aside-mobile__locale
            router-link.user(to="/login")
                app-icon(name="log-out", size="18")
        .aside-back
            AsideButton(:isPrimary="$route.path === '/panel/Dashboard'" :isBack="$route.path !== '/panel/Dashboard'" :icon="$route.path !== '/panel/Dashboard' ? 'back' : 'Dashboard'" to="/panel/Dashboard") Dashboard
        .aside__group
            AsideButton.aside__isf-back(:isPrimary="$route.path.includes('ISF')" v-if="$route.path.includes('ISF/')" icon="ISFPOSM" to="/panel/ISF") ISF / POSM
            template(v-for="(item, index) in navItems.length === 1 ? navItems[0].children : navItems")
                AsideButton(
                    @open="() => {activeItem = index; router.push(`/panel/${item.link}`)}" 
                    :icon="item.icon ? item.icon : item.link" 
                    :to="`/panel/${item.link}`" 
                    :disabled="item.disabled" 
                    :activeItem="route.path.split('/')[3]?.toLowerCase() === item.name.split(' ').join('').toLowerCase()" 
                    :children="(item.children && $route.path.includes('ISF')) ? item.children : []" 
                    :name="item.name"
                ) {{ item.name }}
        .aside-version 
            p.aside-version__value v {{ version }}
        .sidebar__tag-select


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

        //- .sidebar__tag-select#multiselector(v-if="$route.path.includes(`/panel/${item.link}/`)")

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
.nav {
    &__burger {
        width: 36px;
        height: 36px;
        background: var(--blue-light);
        border: 0;
        border-radius: 6px;
        position: relative;
        span {
            position: absolute;
            top: 50%;
            left: 50%;
            height: 2px;
            width: 18px;
            border-radius: 2px;
            background-color: white;
            transform: translate(-50%, -50%);
            transition: .3s ease;
            &:nth-child(1) {
                transform: translate(-50%, calc(-50% - 6px));
            }
            &:nth-child(2) {
                width: 12px;
                transform: translate(calc(-50% - 3px), -50%);
            }
            &:nth-child(3) {
                transform: translate(-50%, calc(-50% + 6px));
            }
        }
    }
}
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
    transition: .3s ease;
    @include r(1280px) {
        padding-left: var(--layout-pd);
        left: -100%;
        z-index: 900;
        transition: left .3s ease .3s, background .3s ease, backdrop-filter .3s ease;
        width: 100%;
        &.active {
            left: 0;
            transition: left .3s ease, background .3s ease .3s, backdrop-filter .3s ease .3s;
            background: rgba(240, 242, 241, 0.70);
            backdrop-filter: blur(15px);
        }
    }
    @include r(768px) {
        padding: 0;
        z-index: 1001;
    }
}
.aside-mobile {
    align-items: center;
    justify-content: space-between;
    width: 100%;
    display: none;
    &__locale {
        margin: 0;
    }
    @include r(768px) {
        display: flex;
    }
}
.user {
    display: flex;
    padding: 8px;
    border-radius: 4px;
    background: #F9FAFB;
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
        overflow: auto;
    }
    &__isf-back {
        margin-bottom: 16px;
    }
    @include r(1280px) {
        border-radius: 0 0 4px 4px;
    }
    @include r(768px) {
        padding: 22px 16px;
    }
}
.aside-logo {
    @include r(1280px) {
        opacity: 0;
    }
    @include r(768px) {
        display: none;
    }
}
.aside-version {
    display: flex;
    position: absolute;
    z-index: 10;
    bottom: 0;
    left: 0;
    padding: 16px;
    &__value {
        border-radius: 16px;
        padding: 4px 8px;
        background: #ECEDED;
        color: #939A9C;
        opacity: 1;
        font-size: 12px;
        font-weight: 600;
        line-height: 8px; /* 66.667% */
    }
}
</style>