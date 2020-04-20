<template>
    <div class="relative">
        <header-tarlan />
        <nuxt />
        <footer-tarlan />
    </div>
</template>

<script>
import HeaderTarlan from '../components/HeaderTarlan.vue';
import FooterTarlan from '../components/FooterTarlan.vue';
export default {
    components: { FooterTarlan, HeaderTarlan }
};
</script>
