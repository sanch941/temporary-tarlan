<template>
    <div>
        <hero />
        <advantages />
    </div>
</template>

<script>
import Advantages from '../components/index-page/advantages/Advantages.vue';
import Hero from '../components/index-page/hero/Hero.vue';

export default {
    components: { Hero, Advantages }
};
</script>
