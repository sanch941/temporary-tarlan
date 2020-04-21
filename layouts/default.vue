<template>
    <div class="relative">
        <side-menu-xs />
        <header-tarlan />
        <nuxt />
        <footer-tarlan />
    </div>
</template>

<script>
import SideMenuXs from '../components/SideMenuXs.vue';
import HeaderTarlan from '../components/HeaderTarlan.vue';
import FooterTarlan from '../components/FooterTarlan.vue';
export default {
    components: { FooterTarlan, HeaderTarlan, SideMenuXs }
};
</script>
