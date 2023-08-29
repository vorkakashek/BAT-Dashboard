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
        link: 'Equipment',
        name: 'Equipment in PP',
        class: 'blue-bright',
        disabled: false,
        new: true,
    },
    // {
    //     link: 'Projects',
    //     name: 'Projects',
    //     class: 'green',
    //     disabled: true,
    // },
])

</script>

<template lang="pug">
.dashboard-tile__group
    .dashboard-tile__wrap(v-for="tile in tiles" :class="{ 'disabled': tile.disabled, 'new': tile.new }")
        router-link.dashboard-tile(:to="`/panel/${tile.link}`" :class="tile.class")
            .dashboard-tile__icon.fajc 
                app-icon(:name="tile.link", size="30")
            .dashboard-tile__name {{ tile.name }}
            
</template>

<style lang="scss" scoped>
.dashboard-tile__group {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    // flex-wrap: wrap;
    margin: -8px;

    @include respond-to (large) {
        margin: -4px;
    }

    @include respond-to (small) {
        grid-template-columns: repeat(2, 1fr);
    }
}

.dashboard-tile__wrap {
    // height: calc(var(--index) * 10 + 50px);
    height: calc(var(--index) * 8 + 50px);
    // width: calc(100% / 3);
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

    &.new {
        position: relative;

        &:after {
            content: 'new';
            display: inline-block;
            position: absolute;
            right: 16px;
            top: 16px;
            opacity: .7;
            // border: 2px solid #27292e;
            background-color: rgba(39, 41, 46, 0.05);
            color: #27292e;
            font-weight: 900;
            text-transform: uppercase;
            font-size: 11px;
            letter-spacing: .1rem;
            border-radius: 8px;
            padding: 2px 8px;

            @include respond-to (small) {
                font-size: 9px;
            }
        }
    }
}

.dashboard-tile {
    display: flex;
    // height: 260px;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    align-items: center;
    background: #fff;
    border-radius: var(--radius-8);
    text-decoration: none;
    transition: all 0.3s ease;
    padding: 16px;
    // padding-left: 100px;

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

    &.blue-bright {
        .icon {
            fill: var(--blue-bright);
            fill: #fff;
        }

        .dashboard-tile__name {
            color: var(--blue-bright);
        }

        .dashboard-tile__icon {
            background-color: var(--blue-bright);
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
    // font-size: calc(4px + var(--index) * .85);
    font-size: calc(4px + var(--index) * .7);
    letter-spacing: .01rem;
    font-weight: 600;
    // margin-left: var(--pdlg);
    margin-top: 24px;
    text-align: center;
    line-height: 1.2;
    // text-align: center;
    max-width: 18rem;
    // text-align: left;
    // height: 58px;

    @include respond-to(large) {
        margin-left: unset;
        margin-top: 16px;
        text-align: center;
    }

}

.dashboard-tile__icon {
    border-radius: var(--radius-8);
    // width: 54px;
    // height: 54px;
    display: flex;
    height: calc(var(--index) * 2 + 10px);
    width: calc(var(--index) * 2 + 10px);
    flex-shrink: 0;

    .icon {
        height: calc(var(--index) * 1 + 10px);
        width: calc(var(--index) * 1 + 10px);
    }
}</style>