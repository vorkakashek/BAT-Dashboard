<script>
import { inject } from "vue";

export default {
    props: ["sidebarActive"],
    inject: ["navItems", "updateItems"],
    data() {
        return {};
    },
    methods: {},
};
</script>

<template lang="pug">
aside(:class="{ active: sidebarActive }")
    div(v-for="item in navItems")
        router-link.sidebar__nav-item(:to="`/panel/${item.link}`")
            app-icon(:name="item.link", size="24")
            .sidebar__nav-item-name {{ item.name }}
            app-icon.chevron(
                name="chevron",
                size="16",
                v-if="item.children !== undefined"
            )

        .sidebar__tag-select(
            v-if="$route.path.includes(`/panel/${item.link}/`)"
        )
            Multiselect(
                :model-value="item.itemValue",
                @update:modelValue="updateItems(item.name, $event)",
                :options="item.itemOptions",
                mode="tags",
                :searchable="true",
                placeholder="Start typing or select..."
            ) 

        .sidebar__nav-group(
            v-if="$route.path.includes(`/panel/${item.link}/`) && item.children !== undefined"
        )
            router-link.sidebar__nav-group-item(
                v-for="child in item.children",
                :to="`/panel/${item.link}/${child.link}`"
            ) {{ child.name }}
</template>

<style lang="scss" scoped>
.sidebar__tag-select {
    background-color: #dff7ff;
    padding: var(--pdsm);
    ::v-deep {
        .multiselect {
            border: none;
            outline: none;
            box-shadow: none;
        }

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

aside {
    overflow-y: auto;
    width: var(--sidebar);
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
    background-color: #f2fcff;
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
            background-color: #dff7ff;
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