<template>
    <div class="hero__main background-default">
        <div class="hero__main__content container relative">
            <div class="hero__main__title">{{ hero.main.title }}</div>
            <div class="hero__main__subtitle">{{ hero.main.subtitle }}</div>
            <btn text="Подключить" type="animation" />
        </div>
        <div class="hero__main__windows">
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
        windows() {
            return require('../../../assets/images/svg/hero/windows.svg');
        }
    }
};
</script>
