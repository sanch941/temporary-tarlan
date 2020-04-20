<template>
    <div class="how-it-works__content-md">
        <how-it-works-section :list="firstPart" />
        <div class="how-it-works__arrow">
            <img src="~/assets/images/svg/how-it-works/arrow.svg" alt="" />
        </div>
        <how-it-works-section :list="secondPart" />
    </div>
</template>

<script>
import HowItWorksSection from './HowItWorksSection.vue';
export default {
    components: { HowItWorksSection },
    props: {
        list: {
            type: Array,
            required: true
        }
    },
    computed: {
        firstPart() {
            return this.list.slice(0, 2);
        },
        secondPart() {
            return this.list.slice(2, 4);
        }
    }
};
</script>
