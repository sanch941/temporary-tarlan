<template>
    <div class="faq__item">
        <div class="faq__question" @click="toggleCollapse">
            <div class="faq__question-icon">
                <img :src="windowsIcon" alt="" />
            </div>
            <div class="faq__question-text">
                {{ item.question }}
            </div>
        </div>
        <transition name="collapse">
            <div v-show="isCollapseActive" class="faq__answer">
                <div class="faq__answer-icon">
                    <img :src="windowsIcon" alt="" />
                </div>
                <div class="faq__answer-text">
                    {{ item.answer }}
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            isCollapseActive: false
        };
    },
    computed: {
        windowsIcon() {
            return require('../../assets/images/svg/faq/windows.svg');
        }
    },
    methods: {
        toggleCollapse() {
            this.isCollapseActive = !this.isCollapseActive;
        }
    }
};
</script>
