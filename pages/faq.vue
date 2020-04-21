<template>
    <div class="section faq">
        <div class="container">
            <div class="section__title md-none">FAQ</div>
            <div class="faq__content">
                <faq-item
                    v-for="(item, index) in faq"
                    :key="index"
                    :item="item"
                />
            </div>
        </div>
    </div>
</template>

<script>
import FaqItem from '../components/faq/FaqItem.vue';
import faq from '~/assets/json/faq';

export default {
    components: { FaqItem },
    data() {
        return {
            faq
        };
    }
};
</script>
