<script>
export default {
    props: ["inData"],
};
</script>

<template lang="pug">
//- div {{inData}}

.product-card-infographics
    span.executed(v-if="inData.executed !== undefined") {{ inData.executed }}
    span.delivered(v-if="inData.delivered !== undefined") {{ inData.delivered }}
    span.delivered-to-city(v-if="inData.deliveredToCity !== undefined") {{ inData.deliveredToCity }}
    span.delivered-to-tmr(v-if="inData.deliveredToTMR !== undefined") {{ inData.deliveredToTMR }}
    span.not-delivered(v-if="inData.notDelivered !== undefined") {{ inData.notDelivered }}
    span.not-delivered(v-if="inData.notExecuted !== undefined") {{ inData.notExecuted }}
    span.planned(v-if="inData.planned !== undefined") Planned [{{ inData.planned }}]
</template>

<style lang="scss" scoped>
.product-card-infographics {
    display: flex;
    margin-top: var(--pdlg);
    // min-width: max-content;
    flex-wrap: wrap;
    span {
        font-weight: 700;
        font-size: 15px;
        display: flex;
        align-items: center;
        &:not(.planned) {
            &:not(:last-child) {
            }
            &:not(.not-delivered) {
                &:after {
                    content: "";
                    height: 16px;
                    width: 1px;
                    background: #e5e5e5;
                    display: inline-block;
                    margin: 0 var(--pdsm);
                }
            }
        }

        &.executed {
            color: var(--green);
        }

        &.delivered {
            // color: var(--green-light);
            // color: #7e9200;
            color: var(--green-light-darker);
        }

        &.delivered-to-city {
            // color: var(--green-light);
            // color: #7e9200;
            color: var(--green-light-darker);
        }

        &.delivered-to-tmr {
            // color: var(--yellow);
            // color: var(--dark-yellow);
            color: var(--orange);
        }

        &.not-delivered {
            color: var(--inactive);
            margin-right: var(--pdxl);
        }

        &.planned {
            // margin-left: var(--pdxl);
            margin-left: auto;
            background: var(--grey);
            padding: var(--pd) var(--pdsm);
            border-radius: var(--radius-8);
            text-align: center;
        }
    }
}
</style>