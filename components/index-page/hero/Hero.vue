<template>
    <div class="hero">
        <swiper ref="heroSwiper" :options="swiperOptions">
            <swiper-slide>
                <hero-main />
            </swiper-slide>
            <swiper-slide>
                <hero-about />
            </swiper-slide>
            <swiper-slide>
                <hero-philosophy />
            </swiper-slide>
            <div slot="pagination" class="swiper-pagination"></div>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import HeroPhilosophy from './HeroPhilosophy.vue';
import HeroAbout from './HeroAbout.vue';
import HeroMain from './HeroMain.vue';

export default {
    components: {
        Swiper,
        SwiperSlide,
        HeroMain,
        HeroAbout,
        HeroPhilosophy
    },
    data() {
        return {
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination'
                }
            }
        };
    },
    computed: {
        swiper() {
            return this.$refs.heroSwiper.$swiper;
        }
    }
};
</script>
