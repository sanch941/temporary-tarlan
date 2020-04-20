<template>
    <div class="section advantages relative">
        <div class="container container-reverse">
            <div class="section__title">
                <div class="md-none">Преимущества</div>
                <div class="section__title__rotated xs-none md-block">
                    <img :src="imgSrc('title.svg')" alt="" />
                </div>
            </div>
            <div class="advantages__items">
                <div class="advantages__content">
                    <div
                        v-for="(item, index) in advantages"
                        :key="index"
                        class="advantages__item"
                    >
                        <div class="advantages__icon">
                            <img :src="imgSrc(item.icon)" alt="" />
                        </div>
                        <div class="advantages__text">{{ item.text }}</div>
                    </div>
                </div>
                <div class="advantages__background md-none" />
            </div>
        </div>
        <div class="advantages__background xs-none md-block" />
    </div>
</template>

<script>
import advantages from '~/assets/json/advantages';

export default {
    data() {
        return {
            advantages
        };
    },
    methods: {
        imgSrc(icon) {
            return require(`../../../assets/images/svg/advantages/${icon}`);
        }
    }
};
</script>
