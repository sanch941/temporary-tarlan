<template>
    <div class="how-it-works__section">
        <how-it-works-item :item="list[0]" />
        <div class="how-it-works__arrow">
            <img src="~/assets/images/svg/how-it-works/arrow.svg" alt="" />
        </div>
        <how-it-works-item :item="list[1]" />
    </div>
</template>

<script>
import HowItWorksItem from './HowItWorksItem.vue';
export default {
    components: { HowItWorksItem },
    props: {
        list: {
            type: Array,
            required: true
        }
    }
};
</script>
