<script>
export default {
    props: ["sidebarActive"],

    data() {
        return {
            value: null,
            options: [
                "КЕНТ NANOTEK Cycle'4",
                "КЕНТ NANOTEK Cycle'5",
                "КЕНТ NANOTEK Cycle'6",
                "КЕНТ NANOTEK Cycle'7",
                "КЕНТ NANOTEK Cycle'8",
                "КЕНТ NANOTEK Cycle'9",
                "КЕНТ NANOTEK Cycle'10",
                "КЕНТ NANOTEK Cycle'11",
            ],
        };
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
        app-icon.chevron(name="chevron", size="16")

    .sidebar__tag-select(v-if="$route.path.includes('/panel/ISF/')",)
        //- MULTI SELECT
        Multiselect(
            v-model="value",
            :options="options",
            mode="tags",
            :searchable="true",
            placeholder="Start typing or select..."
        )

    .sidebar__nav-group(v-if="$route.path.includes('/panel/ISF/')")
        router-link.sidebar__nav-group-item(to="/panel/ISF/Delivery-Execution") Delivery / Execution
        router-link.sidebar__nav-group-item(to="/panel/ISF/Comparison") Comparison
    //- 
    router-link.sidebar__nav-item(to="/panel/CycleMaterials")
        app-icon(name="CycleMaterials", size="24")
        .sidebar__nav-item-name CycleMaterials
        app-icon.chevron(name="chevron", size="16")
    router-link.sidebar__nav-item(to="/panel/Touchpoints")
        app-icon(name="Touchpoints", size="24")
        .sidebar__nav-item-name Touchpoints
        app-icon.chevron(name="chevron", size="16")
    router-link.sidebar__nav-item(to="/panel/Projects")
        app-icon(name="Projects", size="24")
        .sidebar__nav-item-name Projects
        app-icon.chevron(name="chevron", size="16")
</template>

<style lang="scss" scoped>
.sidebar__tag-select {
    background-color: #DFF7FF;
    padding: var(--pdsm);
    ::v-deep {
        .multiselect-placeholder {
            font-size: 13px;
            font-weight: 700;
        }

        .multiselect-tags-search {
            font-weight: 700;
            color: #333;
            font-size: 13px;
        }
        
        .multiselect-tags-search-wrapper {
            width: 100%;
        }

        .multiselect-clear {
            position: absolute;
            bottom: 8px;
        }
        
        .multiselect-caret {
            top: 10px;
            position: absolute;
        }

        .multiselect-dropdown {
            &::-webkit-scrollbar {
                width: 4px;
            }
            &::-webkit-scrollbar-track {
                background-color: #e4e4e4;
            }
            &::-webkit-scrollbar-thumb {
                box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            }
        }

        .multiselect-option {
            font-size: 13px;
        }
    }
}

sidebar {
    overflow-y: auto;
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

.sidebar__nav-group {
    background-color: #F2FCFF;
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
            background-color: #DFF7FF;
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