<template>
    <div class="faq__question">
        <div class="faq-icon">
            <img src="@/assets/images/icon/faq-icon.png" alt />
        </div>
        <div class="faq-text">
            <div @click="showAnswer = !showAnswer">
                <p class="faq-text__question">{{ questionData.question }}</p>
            </div>
            <div v-if="showAnswer">
                <p class="faq-text__answer">{{ questionData.answer }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FaqQuestion',
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
            showAnswer: false
        };
    },
    computed: {},
    methods: {}
};
</script>
