<template>
    <div>
        <hero />
        <advantages />
        <rate />
        <capabilities />
        <how-it-works />
        <partners />
        <team />
        <feedback />
    </div>
</template>

<script>
import Feedback from '../components/index-page/feedback/Feedback.vue';
import Team from '../components/index-page/team/Team.vue';
import Partners from '../components/index-page/partners/Partners.vue';
import HowItWorks from '../components/index-page/how-it-works/HowItWorks.vue';
import Capabilities from '../components/index-page/capabilities/Capabilities.vue';
import Rate from '../components/index-page/rate/Rate.vue';
import Advantages from '../components/index-page/advantages/Advantages.vue';
import Hero from '../components/index-page/hero/Hero.vue';

export default {
    components: {
        Hero,
        Advantages,
        Rate,
        Capabilities,
        HowItWorks,
        Partners,
        Team,
        Feedback
    }
};
</script>
