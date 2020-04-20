<template>
    <div class="section how-it-works pagination-black">
        <div class="container container-reverse">
            <div class="section__title">
                <div class="md-none">Как это работает?</div>
                <div class="section__title__rotated xs-none md-block">
                    <img :src="imgSrc('title.svg')" alt="" />
                </div>
            </div>
            <div class="how-it-works__content">
                <div class="md-none">
                    <how-it-works-section :list="fromOneToTwo" />
                    <how-it-works-section :list="fromTwoToFour" />
                </div>
                <div class="xs-none md-block how-it-works__slider">
                    <div class="how-it-works__actions-md">
                        <how-it-works-actions
                            :change-sub-page="changeSubPageMd"
                            :sub-page-class="subPageClassMd"
                        />
                    </div>
                    <swiper ref="howItWorksSwiperMd" :options="swiperOptions">
                        <swiper-slide
                            v-for="(item, index) in listForSlider"
                            :key="index"
                        >
                            <how-it-works-slide :list="item" />
                        </swiper-slide>
                        <div slot="pagination" class="swiper-pagination"></div>
                    </swiper>
                </div>
                <div class="md-none">
                    <how-it-works-actions
                        :change-sub-page="changeSubPage"
                        :sub-page-class="subPageClass"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import HowItWorksSlide from './HowItWorksSlide.vue';
import HowItWorksActions from './HowItWorksActions.vue';
import HowItWorksSection from './HowItWorksSection.vue';
import howItWorks from '~/assets/json/how-it-works';

export default {
    components: {
        HowItWorksSection,
        Swiper,
        SwiperSlide,
        HowItWorksActions,
        HowItWorksSlide
    },
    data() {
        return {
            howItWorks,
            subPage: 'Прием платежей',
            subPageClassMd: 'how-it-works__clicked-first',
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            }
        };
    },
    computed: {
        list() {
            return this.subPage === 'Прием платежей'
                ? this.fromOneToFour
                : this.fromFourToEight;
        },
        fromOneToTwo() {
            return this.list.slice(0, 2);
        },
        fromTwoToFour() {
            return this.list.slice(2, 4);
        },
        fromOneToFour() {
            return this.howItWorks.slice(0, 4);
        },
        fromFourToEight() {
            return this.howItWorks.slice(4, 8);
        },
        subPageClass() {
            return this.subPage === 'Прием платежей'
                ? 'how-it-works__clicked-first'
                : 'how-it-works__clicked-second';
        },
        swiper() {
            return this.$refs.howItWorksSwiperMd.$swiper;
        },
        listForSlider() {
            return [this.howItWorks.slice(0, 4), this.howItWorks.slice(4, 8)];
        }
    },
    methods: {
        changeSubPage(name) {
            this.subPage = name;
        },
        changeSubPageMd(name) {
            if (name === 'Выплаты') {
                this.subPageClassMd = 'how-it-works__clicked-second';
                return this.swiper.slideNext();
            }

            this.subPageClassMd = 'how-it-works__clicked-first';
            this.swiper.slidePrev();
        },
        imgSrc(path) {
            return require(`../../../assets/images/svg/how-it-works/${path}`);
        }
    }
};
</script>
