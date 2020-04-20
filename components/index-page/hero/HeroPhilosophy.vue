<template>
    <div class="hero__philosophy background-default relative">
        <div class="hero__philosophy__content container relative">
            <div class="hero__philosophy__title md-none">
                {{ hero.philosophy.title }}
            </div>
            <div class="hero__philosophy__quote">
                <div class="hero__philosophy__words">
                    {{ hero.philosophy.words }}
                </div>
                <div class="hero__philosophy__author">
                    {{ hero.philosophy.author }}
                </div>
            </div>

            <btn text="Подключить" type="animation" />
            <div class="xs-none md-flex hero__philosophy__rotated-title">
                <img :src="title" alt="" />
            </div>
        </div>
        <div class="hero__philosophy__director container">
            <div class="hero__philosophy__director__img" />
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
    computed: {
        title() {
            return require('../../../assets/images/svg/hero/philosophy-title.svg');
        }
    }
};
</script>
