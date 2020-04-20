<template>
    <div class="section rate relative">
        <div class="container container-reverse">
            <div class="section__title">
                <div class="md-none">Тарифы</div>
            </div>
            <div class="md-none">
                <rate-item
                    v-for="(item, index) in rate"
                    :key="index"
                    :item="item"
                    class="rate__item"
                />
            </div>
            <div class="xs-none md-flex rate__item-left">
                <div class="section__title__rotated xs-none md-block">
                    <img :src="imgSrc('title.svg')" alt="" />
                </div>
                <rate-item :item="rate[0]" />
            </div>
        </div>
        <div class="xs-none md-flex rate__background">
            <rate-item :item="rate[1]" />
        </div>
    </div>
</template>

<script>
import RateItem from './RateItem.vue';
import rate from '~/assets/json/rate';

export default {
    components: { RateItem },
    data() {
        return {
            rate
        };
    },
    methods: {
        imgSrc(icon) {
            return require(`../../../assets/images/svg/rate/${icon}`);
        }
    }
};
</script>
