<template>
    <div class="faq__question">
        <div class="faq__icon">
            <img src="@/assets/images/icon/faq-icon.png" alt />
        </div>
        <p class="faq-question">{{ questionData.text }}</p>
    </div>
</template>

<script>
export default {
    name: 'FaqItem',
    components: {},
    props: {
        questionData: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    data() {
        return {
            title: 'advantages component'
        };
    },
    computed: {},
    methods: {}
};
</script>
