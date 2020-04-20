<template>
    <swiper ref="teamSwiperXs" class="swiper md-none" :options="swiperOptions">
        <swiper-slide v-for="(item, index) in listLength" :key="index">
            <team-content :list="distributeList(index)" />
        </swiper-slide>
        <div slot="pagination" class="swiper-pagination"></div>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import TeamContent from './TeamContent.vue';

import team from '~/assets/json/team';

export default {
    components: {
        Swiper,
        SwiperSlide,
        TeamContent
    },
    data() {
        return {
            team,
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            }
        };
    },
    computed: {
        listLength() {
            return Math.ceil(this.team.length / 4);
        }
    },
    methods: {
        distributeList(index) {
            const idx = index * 4;
            return this.team.slice(idx, idx + 4);
        }
    }
};
</script>
