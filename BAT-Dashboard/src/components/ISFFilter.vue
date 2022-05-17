<script>
export default {
    data() {
        return {
            options: ["ALL", "BWD", "OHD"],
        };
    },

    inject: ["ISFFilter", "updateISFFilter"],
};
</script>

<template lang="pug">
.ISFFilter
    label(v-for="option in options")
        input(
            :model-value="option",
            @click="updateISFFilter(option)",
            :class="{ checked: option == ISFFilter }"
        )
        span {{ option }}
</template>

<style lang="scss" scoped>

.ISFFilter {
    display: inline-flex;
    align-items: center;
    margin: 0 0 var(--pdxl) 0;
    border-radius: 100px;
    overflow: hidden;
    label {
        display: flex;
        align-items: center;
        background: var(--blue-light);
        cursor: pointer;
        input {
            cursor: pointer;
            display: none;
            &:checked,
            &.checked {
                ~ span {
                    background-color: rgb(0 0 0 / 10%);
                    opacity: 1;
                }
            }
        }
        span {
            font-weight: 700;
            color: #fff;
            padding: var(--pdsm) var(--pdlg);
            opacity: 0.7;
        }
        &:hover {
            span {
                opacity: 1;
            }
        }
    }
}
</style>