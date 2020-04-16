<template>
    <div class="hero__main background-default">
        <div class="hero__main__content container relative">
            <div class="hero__main__title">{{ hero.main.title }}</div>
            <div class="hero__main__subtitle">{{ hero.main.subtitle }}</div>
            <div class="btn">Подключить</div>
        </div>
    </div>
</template>

<script>
import hero from '~/assets/json/hero';

export default {
    data() {
        return {
            hero
        };
    }
};
</script>
