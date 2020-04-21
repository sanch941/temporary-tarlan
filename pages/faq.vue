<template>
    <div class="section faq">
        <div class="container">
            <div class="section__title md-none">FAQ</div>
            <div class="faq__content md-none">
                <faq-item
                    v-for="(item, index) in faq"
                    :key="index"
                    :item="item"
                />
            </div>
            <div class="faq__section xs-none md-flex">
                <div
                    v-for="(item, index) in faqSectionList"
                    :key="index"
                    class="faq__content"
                >
                    <faq-item
                        v-for="(childItem, chilindex) in item"
                        :key="chilindex"
                        :item="childItem"
                    />
                </div>
            </div>
            <btn text="Подключить" type="btn-animation-black" />
        </div>
    </div>
</template>

<script>
import Btn from '../components/Btn.vue';
import FaqItem from '../components/faq/FaqItem.vue';
import faq from '~/assets/json/faq';

export default {
    components: { FaqItem, Btn },
    data() {
        return {
            faq
        };
    },
    computed: {
        faqSectionList() {
            return [this.faq.slice(0, 10), this.faq.slice(10, 20)];
        }
    },
    mounted() {
        const header = document.getElementsByClassName('header')[0];
        header.classList.add('header-black');
    },
    destroyed() {
        const header = document.getElementsByClassName('header')[0];
        header.classList.remove('header-black');
    }
};
</script>
