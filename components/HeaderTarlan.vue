<template>
    <header class="header">
        <div class="container">
            <div class="header__content">
                <div class="header__logo">
                    <nuxt-link to="/">
                        <img :src="imgSrc('tarlan.svg')" alt=""
                    /></nuxt-link>
                </div>
                <div class="header__hamburger md-none">
                    <img :src="imgSrc('hamburger.svg')" alt="" />
                </div>
                <ul class="xs-none md-flex header__menu">
                    <li
                        v-for="(item, index) in menu"
                        :key="index"
                        class="header__menu__item"
                    >
                        <a class="header__menu__link" href="">
                            {{ item.text }}
                        </a>
                    </li>
                    <li class="header__menu__item">
                        <div class="header__menu__link">
                            <div class="xs-none md-flex header__admin">
                                <div class="header__admin__number">
                                    <img :src="imgSrc('phone.svg')" alt="" />
                                    <a href="+77010913025">+ 7 701 091 30 25</a>
                                </div>
                                <div class="header__admin__link">
                                    <a href="">Личный кабинет</a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
import menu from '~/assets/json/menu';

export default {
    data() {
        return {
            menu
        };
    },
    methods: {
        imgSrc(path) {
            return require(`../assets/images/svg/header/${path}`);
        }
    }
};
</script>
