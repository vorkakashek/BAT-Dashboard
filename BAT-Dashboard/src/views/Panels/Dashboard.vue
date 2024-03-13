<script setup>
import NavigationTiles from '../../components/NavigationTiles.vue';
const username =  localStorage.getItem('Username');
</script>

<template lang="pug">
.dashboard
    p.dashboard__meeting 
        span {{ username ? username : "Username"}}
        | , Welcome to 
    p.dashboard__title Merchandising Dashboard
    NavigationTiles
            
</template>

<style lang="scss" scoped>
.dashboard {
    &__meeting {
        color: #3A474B;
        font-size: 18px;
        font-style: italic;
        opacity: 0.8;
        line-height: normal;
        span {
            font-weight: 700;
        }
    }
    &__title {
        color: #3A474B;
        font-size: 36px;
        font-weight: 700;
        margin-top: 4px;
        line-height: normal;
    }
}
</style>