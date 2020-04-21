<template>
    <div :class="['side-menu md-none', isActiveClass]">
        <div class="side-menu__close" @click="hideSideMenu">
            <img :src="imgSrc('close.svg')" alt="" />
        </div>
        <div v-for="(item, index) in menu" :key="index" class="side-menu__link">
            <nuxt-link :to="item.to" @click.native="hideSideMenu">
                {{ item.text }}
            </nuxt-link>
        </div>
        <div class="side-menu__call">
            <div class="side-menu__phone">
                <img :src="imgSrc('phone.svg')" alt="" />
            </div>
            <div class="side-menu__number">
                <a href="tel:+77010913025">+ 7 701 091 30 25</a>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import menu from '~/assets/json/menu';

export default {
    data() {
        return {
            menu
        };
    },
    computed: {
        ...mapState({
            isActive: state => state['side-menu'].isActive
        }),
        isActiveClass() {
            return this.isActive ? 'side-menu-active' : '';
        }
    },
    methods: {
        ...mapActions({
            hideSideMenu: 'side-menu/hideSideMenu'
        }),
        imgSrc(path) {
            return require(`../assets/images/svg/side-menu/${path}`);
        }
    }
};
</script>
