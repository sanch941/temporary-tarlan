<template>
    <div class="hero__philosophy background-default relative">
        <div class="hero__philosophy__content container relative">
            <div class="hero__philosophy__title md-none">
                {{ hero.philosophy.title }}
            </div>
            <div class="hero__philosophy__bottom-content">
                <div class="hero__philosophy__quote">
                    <div class="hero__philosophy__words">
                        {{ hero.philosophy.words }}
                    </div>
                    <div class="hero__philosophy__author">
                        {{ hero.philosophy.author }}
                    </div>
                </div>

                <btn text="Подключить" type="animation" />
            </div>
        </div>
        <div class="container hero__philosophy__director ">
            <div class="hero__philosophy__director__img xs-none md-block" />
            <img
                class="hero__philosophy__director__img md-none"
                :src="directorXs"
                alt=""
            />
            <img
                class="hero__philosophy__director__img xs-none md-block"
                :src="directorDesktop"
                alt=""
            />
        </div>
        <div class="hero__philosophy__windows xs-none md-block">
            <img :src="windows" alt="" />
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
        },
        directorXs() {
            return require('../../../assets/images/mobile/hero-philosophy-director.png');
        },
        directorDesktop() {
            return require('../../../assets/images/desktop/hero-philosophy-director.png');
        },
        windows() {
            return require('../../../assets/images/svg/hero/windows.svg');
        }
    }
};
</script>
