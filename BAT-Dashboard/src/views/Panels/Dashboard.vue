<script setup>

import { ref } from 'vue'

const tiles = ref([
    {
        link: 'ISF',
        name: 'ISF',
        class: 'blue-medium',
        disabled: false,
    },
    {
        link: 'Semi-permanentMaterials',
        name: 'Semi-permanent materials',
        class: 'pink',
        disabled: false,
    },
    {
        link: 'CycleMaterials',
        name: 'Cycle Materials',
        class: 'orange',
        disabled: false,
    },
    {
        link: 'Headers',
        name: 'Headers',
        class: 'purple',
        disabled: false,
    },
    {
        link: 'Projects',
        name: 'Projects',
        class: 'green',
        disabled: true,
    },
])

</script>

<template lang="pug">
.dashboard-tile__group
    .dashboard-tile__wrap(v-for="tile in tiles" :class="{ 'disabled': tile.disabled }")
        router-link.dashboard-tile(:to="`/panel/${tile.link}`" :class="tile.class")
            .dashboard-tile__icon.fajc 
                app-icon(:name="tile.link", size="30")
            .dashboard-tile__name {{ tile.name }}
            
</template>

<style lang="scss" scoped>
.dashboard-tile__group {
    display: flex;
    flex-wrap: wrap;
    margin: -8px;

    @include respond-to (large) {
        margin: -4px;
    }
}

.dashboard-tile__wrap {
    height: calc(var(--index) * 10 + 50px);
    width: calc(50%);
    padding: 8px;

    @include respond-to (large) {
        padding: 4px;
    }

    &.disabled {
        pointer-events: none;
        user-select: none;
        opacity: .5;
        .dashboard-tile {
            background: rgb(231, 231, 231);
            .dashboard-tile__icon {
                background-color: var(--inactive);
            }
            .dashboard-tile__name {
                color: var(--inactive);
            }
        }
    }
}

.dashboard-tile {
    display: flex;
    // height: 260px;
    height: 100%;
    align-items: center;
    background: #fff;
    border-radius: var(--radius-8);
    text-decoration: none;
    transition: all 0.3s ease;
    padding: 16px;
    padding-left: 100px;

    &:hover {
        box-shadow: var(--shadow-large);
    }

    &.blue-medium {
        .icon {
            fill: var(--blue-medium);
            fill: #fff;
        }

        .dashboard-tile__name {
            color: var(--blue-medium);
        }

        .dashboard-tile__icon {
            background-color: var(--blue-medium);
        }
    }

    &.orange {
        .icon {
            fill: var(--orange);
            fill: #fff;
        }

        .dashboard-tile__name {
            color: var(--orange);
        }

        .dashboard-tile__icon {
            background-color: var(--orange);
        }
    }

    &.pink {
        .icon {
            fill: var(--pink);
            fill: #fff;
        }

        .dashboard-tile__name {
            color: var(--pink);
        }

        .dashboard-tile__icon {
            background-color: var(--pink);
        }
    }

    &.purple {
        .icon {
            fill: var(--purple);
            fill: #fff;
        }

        .dashboard-tile__name {
            color: var(--purple);
        }

        .dashboard-tile__icon {
            background-color: var(--purple);
        }
    }

    &.green {
        .icon {
            fill: var(--green);
            fill: #fff;
        }

        .dashboard-tile__name {
            color: var(--green);
        }

        .dashboard-tile__icon {
            background-color: var(--green);
        }
    }

    // @include respond-to(xxlarge) {
    //     padding-left: var(--pdxxl);
    // }
    @include respond-to(large) {
        padding-left: 16px;
        flex-direction: column;
        justify-content: center;
    }

    // @include respond-to(medium) {
    //     padding-left: unset;
    //     padding: var(--pdlg);
    //     height: calc(var(--index) * 10);
    //     min-width: 300px;
    //     width: 40%;
    // }

    // @include respond-to(small) {
    //     width: 100%;
    // }
}

.dashboard-tile__name {
    font-weight: 900;
    font-size: calc(4px + var(--index) * .85);
    margin-left: var(--pdlg);
    line-height: 1.2;
    // text-align: center;
    max-width: 18rem;
    text-align: left;

    @include respond-to(large) {
        margin-left: unset;
        margin-top: 16px;
        text-align: center;
    }

}

.dashboard-tile__icon {
    border-radius: var(--radius-8);
    width: 54px;
    height: 54px;
    display: flex;
    height: calc(var(--index) * 2.5 + 10px);
    width: calc(var(--index) * 2.5 + 10px);
    flex-shrink: 0;

    .icon {
        height: calc(var(--index) * 1 + 10px);
        width: calc(var(--index) * 1 + 10px);
    }
}
</style>