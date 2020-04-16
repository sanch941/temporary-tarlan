<template>
    <div class="hero__about background-default">
        <div class="container relative">
            <div class="hero__about__title">{{ hero.about.title }}</div>
            <div
                v-for="(subtitle, index) in hero.about.subtitles"
                :key="index"
                class="hero__about__subtitle"
            >
                {{ subtitle }}
            </div>
            <div class="btn">Подключить</div>
        </div>
    </div>
</template>

<script>
import hero from '~/assets/json/hero';

export default {
    data() {
        return {
            hero
        };
    }
};
</script>
