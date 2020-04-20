<template>
    <div class="how-it-works__item">
        <div class="how-it-works__img relative">
            <div class="how-it-works__number">{{ item.index }}.</div>
            <component :is="item.component" />
        </div>
        <div class="how-it-works__text">{{ item.text }}</div>
    </div>
</template>

<script>
import HowItWorksSvg4 from './HowItWorksSvg4.vue';
import HowItWorksSvg3 from './HowItWorksSvg3.vue';
import HowItWorksSvg2 from './HowItWorksSvg2.vue';
import HowItWorksSvg1 from './HowItWorksSvg1.vue';

export default {
    components: {
        HowItWorksSvg1,
        HowItWorksSvg2,
        HowItWorksSvg3,
        HowItWorksSvg4
    },
    props: {
        item: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            default: 0
        }
    },
    methods: {
        isNumberEven(number) {
            return number % 2 === 0;
        }
    }
};
</script>
