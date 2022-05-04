<script>
export default {
    props: ["inData"],
};
</script>

<template lang="pug">
.product-card-infographics
    .executed(v-if="inData.executed !== undefined")
        span Executed:
        | {{ inData.executed }}
    .delivered(v-if="inData.delivered !== undefined")
        span Delivered:
        | {{ inData.delivered }}
    .delivered-to-city(v-if="inData.deliveredToCity !== undefined") 
        span Delivered to City:
        | {{ inData.deliveredToCity }}
    .delivered-to-tmr(v-if="inData.deliveredToTMR !== undefined") 
        span Delivered to TMR:
        | {{ inData.deliveredToTMR }}
    .not-delivered(v-if="inData.notDelivered !== undefined") 
        span Not Delivered:
        | {{ inData.notDelivered }}
    .not-delivered(v-if="inData.notExecuted !== undefined") 
        span Not Executed:
        | {{ inData.notExecuted }}
    .target(v-if="inData.target !== undefined") 
        span Target:  
        | [ {{ inData.target }} ]
</template>

<style lang="scss" scoped>
.product-card-infographics {
    display: flex;
    flex-wrap: wrap;
    background-color: var(--grey);
    padding: var(--pdsm);
    border-radius: var(--radius-4);
    > * {
        font-weight: 700;
        font-size: 15px;
        display: flex;
        align-items: center;
        width: 100%;
    }

    span {
        margin-right: auto;
    }

    .executed {
        color: var(--green);
    }

    .delivered {
        color: var(--green-light-darker);
    }

    .delivered-to-city {
        color: var(--green-light-darker);
    }

    .delivered-to-tmr {
        color: var(--orange);
    }

    .not-delivered {
        color: var(--inactive);
    }

    .target {
        background: var(--grey);
        padding: var(--pd) var(--pdsm);
        border-radius: var(--radius-4);
        text-align: center;
        margin-top: var(--pdlg);

        display: block;
        // justify-content: space-between;
        // background: var(--blue-light) !important;
        background-color: var(--color-target) !important;
        color: #333;
    }
}
</style>