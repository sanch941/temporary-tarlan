<template>
    <div class="hero relative">
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
        <div class="hero__quotes xs-none md-block">
            <img
                :src="imgSrc('back.svg')"
                alt=""
                @click="swiperSlide('back')"
            />
            <img
                :src="imgSrc('forward.svg')"
                alt=""
                @click="swiperSlide('forward')"
            />
        </div>
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
                    el: '.swiper-pagination',
                    clickable: true
                },
                loop: true
            }
        };
    },
    computed: {
        swiper() {
            return this.$refs.heroSwiper.$swiper;
        }
    },
    methods: {
        imgSrc(path) {
            return require(`../../../assets/images/svg/hero/${path}`);
        },
        swiperSlide(direction) {
            if (direction === 'forward') {
                return this.swiper.slideNext();
            }

            this.swiper.slidePrev();
        }
    }
};
</script>
