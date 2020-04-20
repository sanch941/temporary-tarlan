<template>
    <div class="section team pagination-black">
        <div class="container container-reverse">
            <div class="section__title">
                <div class="md-none">Наша команда</div>
                <div class="section__title__rotated xs-none md-block">
                    <img :src="imgSrc('title.svg')" alt="" />
                </div>
            </div>

            <team-slider-md />
            <team-slider-xs />
        </div>
    </div>
</template>

<script>
import TeamSliderMd from './TeamSliderMd.vue';
import TeamSliderXs from './TeamSliderXs.vue';
import team from '~/assets/json/team';

export default {
    components: { TeamSliderXs, TeamSliderMd },
    data() {
        return {
            team
        };
    },
    methods: {
        imgSrc(path) {
            return require(`../../../assets/images/svg/team/${path}`);
        }
    }
};
</script>
