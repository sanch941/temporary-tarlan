<template>
    <swiper
        ref="teamSwiperXs"
        class="swiper xs-none md-block"
        :options="swiperOptions"
    >
        <swiper-slide v-for="(item, index) in team" :key="index">
            <team-item :item="item" />
        </swiper-slide>
        <div slot="pagination" class="swiper-pagination"></div>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import TeamItem from './TeamItem.vue';
import team from '~/assets/json/team';

export default {
    components: {
        Swiper,
        SwiperSlide,
        TeamItem
    },
    data() {
        return {
            team,
            swiperOptions: {
                slidesPerView: 3.5,
                spaceBetween: 23,
                freeMode: true,
                grabCursor: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            }
        };
    }
};
</script>
