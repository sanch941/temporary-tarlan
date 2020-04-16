<template>
    <div class="hero__philosophy background-default">
        <div class="container relative">
            <div class="hero__philosophy__title">
                {{ hero.philosophy.title }}
            </div>
            <div class="hero__philosophy__words">
                {{ hero.philosophy.words }}
            </div>
            <div class="hero__philosophy__author">
                {{ hero.philosophy.author }}
            </div>
        </div>

        <div class="btn">Подключить</div>
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
