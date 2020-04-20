<template>
    <div class="hero__about background-default">
        <div class="container relative">
            <div class="hero__about__title">{{ hero.about.title }}</div>
            <div
                v-for="(subtitle, index) in hero.about.subtitles"
                :key="index"
                class="hero__about__subtitle"
            >
                <div class="hero__about__icon">
                    <img
                        class="md-none"
                        :src="imgSrc('about-icon.svg')"
                        alt=""
                    />
                    <img
                        class="xs-none md-block"
                        :src="imgSrc('about-icon-tablet.svg')"
                        alt=""
                    />
                </div>
                <div>{{ subtitle }}</div>
            </div>
            <btn text="Подключить" type="animation" />
        </div>
    </div>
</template>

<script>
import Btn from '../../Btn.vue';
import hero from '~/assets/json/hero';

export default {
    components: { Btn },
    data() {
        return {
            hero
        };
    },
    methods: {
        imgSrc(path) {
            return require(`../../../assets/images/svg/hero/${path}`);
        }
    }
};
</script>
