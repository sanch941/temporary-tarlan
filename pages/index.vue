<template>
    <div>
        <!-- <hero /> -->
        <faq />
        <demo />
    </div>
</template>

<script>
// import Hero from '../components/index-page/hero/Hero.vue';
import Faq from '../components/faq-page/Faq.vue';
import Demo from '../components/demo-page/Demo.vue';

export default {
    components: { Faq, Demo }
};
</script>
