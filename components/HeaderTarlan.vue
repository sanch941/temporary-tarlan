<template>
    <header v-scroll="handleScroll" class="header relative">
        <div class="header__fit-xs md-none" />
        <div class="header__fit-left xs-none md-flex" />
        <div class="container relative">
            <div class="header__content">
                <div class="header__logo">
                    <nuxt-link to="/">
                        <img :src="imgSrc('tarlan.svg')" alt="" />
                    </nuxt-link>
                </div>
                <div class="header__hamburger md-none" @click="showSideMenu">
                    <header-tarlan-hamburger />
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
                                    <header-tarlan-phone />
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
        <div class="header__fit-right xs-none md-flex" />
    </header>
</template>

<script>
import { mapActions } from 'vuex';
import { fitMenu } from '../utils/directives/fit-menu';
import HeaderTarlanHamburger from './HeaderTarlanHamburger.vue';
import HeaderTarlanPhone from './HeaderTarlanPhone.vue';
import menu from '~/assets/json/menu';

export default {
    directives: {
        scroll: fitMenu
    },
    components: { HeaderTarlanPhone, HeaderTarlanHamburger },
    data() {
        return {
            menu
        };
    },
    methods: {
        ...mapActions({
            showSideMenu: 'side-menu/showSideMenu'
        }),
        imgSrc(path) {
            return require(`../assets/images/svg/header/${path}`);
        },
        handleScroll(evt, el) {
            if (window.scrollY > 1) {
                el.classList.add('header__filled');
            } else {
                el.classList.remove('header__filled');
            }
        }
    }
};
</script>
