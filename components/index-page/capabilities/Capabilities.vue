<template>
    <div class="section capabilities">
        <div class="container container-reverse relative">
            <div class="section__title">
                <div class="md-none">Возможности</div>
                <div class="section__title__rotated xs-none md-block">
                    <img :src="imgSrc('title.svg')" alt="" />
                </div>
            </div>
            <div class="md-none">
                <capabilities-item
                    :list="fromOneToFive"
                    :img-src="imgSrc"
                    @more-capabilities="moreCapabilities"
                />
                <capabilities-item
                    v-if="more"
                    :scroll-id="'capabilities-item2'"
                    :list="fromSixToTen"
                    :img-src="imgSrc"
                    :is-first-arr="false"
                />
            </div>
            <div class="xs-none md-block capabilities__slider">
                <swiper ref="capabilitiesSwiper" :options="swiperOptions">
                    <swiper-slide>
                        <capabilities-item
                            :list="fromOneToFive"
                            :img-src="imgSrc"
                            @more-capabilities="moreCapabilities"
                        />
                    </swiper-slide>
                    <swiper-slide>
                        <capabilities-item
                            :list="fromSixToTen"
                            :img-src="imgSrc"
                        />
                    </swiper-slide>
                    <div slot="pagination" class="swiper-pagination"></div>
                </swiper>
            </div>
            <div
                class="xs-none md-flex capabilities__more-md"
                @click="swiperNextSlide"
            >
                <img :src="imgSrc('more.svg')" alt="" />
                <img :src="imgSrc('forward.svg')" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import CapabilitiesItem from './CapabilitiesItem.vue';
import capabilities from '~/assets/json/capabilities';

export default {
    components: { CapabilitiesItem, Swiper, SwiperSlide },
    data() {
        return {
            capabilities,
            more: false,
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
        fromOneToFive() {
            return this.capabilities.slice(0, 5);
        },
        fromSixToTen() {
            return this.capabilities.slice(5, 10);
        },
        swiper() {
            return this.$refs.capabilitiesSwiper.$swiper;
        }
    },
    methods: {
        imgSrc(icon) {
            return require(`../../../assets/images/svg/capabilities/${icon}`);
        },
        moreCapabilities() {
            this.more = true;
        },
        swiperNextSlide() {
            this.swiper.slideNext();
        }
    }
};
</script>
