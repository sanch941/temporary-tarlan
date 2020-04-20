<template>
    <div>
        <div :id="scrollId" class="capabilities__content">
            <div
                v-for="(item, index) in list"
                :key="index"
                class="capabilities__item"
            >
                <div class="capabilities__icon">
                    <img :src="imgSrc(item.icon)" alt="" />
                </div>
                <div class="capabilities__text">{{ item.text }}</div>
            </div>
        </div>
        <div
            v-if="isFirstArr && isButtonActive"
            class="capabilities__more md-none"
            @click="moreCapabilities"
        >
            Больше возможностей
        </div>
    </div>
</template>

<script>
export default {
    props: {
        list: {
            type: Array,
            required: true
        },
        isFirstArr: {
            type: Boolean,
            default: true
        },
        imgSrc: {
            type: Function,
            required: true
        },
        scrollId: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            isButtonActive: true
        };
    },
    mounted() {
        if (!this.isFirstArr) {
            this.$scrollTo('#capabilities-item2', 500);
        }
    },
    methods: {
        moreCapabilities() {
            this.$emit('more-capabilities');
            this.isButtonActive = false;
        }
    }
};
</script>
