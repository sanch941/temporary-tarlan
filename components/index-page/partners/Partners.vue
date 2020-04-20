<template>
    <div class="section partners">
        <div class="container container-reverse">
            <div class="section__title">
                <div class="md-none">Партнеры</div>
                <div class="section__title__rotated xs-none md-block">
                    <img :src="imgSrc('title.svg')" alt="" />
                </div>
            </div>
            <div class="partners__content">
                <div class="partners__description">
                    <div class="partners__text">{{ partners.firstPart }}</div>
                    <div class="partners__text">{{ partners.secondPart }}</div>
                </div>

                <div class="partners__icons">
                    <div
                        v-for="(item, index) in partnersIcons"
                        :key="index"
                        class="partners__icon"
                    >
                        <img :src="imgSrc(item)" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import partners from '~/assets/json/partners';
import partnersIcons from '~/assets/json/partners-icons';

export default {
    data() {
        return {
            partners,
            partnersIcons
        };
    },
    methods: {
        imgSrc(path) {
            return require(`../../../assets/images/svg/partners/${path}`);
        }
    }
};
</script>
