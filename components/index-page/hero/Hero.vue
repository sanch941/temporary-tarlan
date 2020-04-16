<template>
    <div class="hero">
        <div>Добро пожаловать</div>
        <swiper ref="heroSwiper" :options="swiperOptions">
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
            <div slot="pagination" class="swiper-pagination"></div>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

export default {
    components: {
        Swiper,
        SwiperSlide
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
