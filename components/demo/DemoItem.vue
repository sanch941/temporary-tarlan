<template>
    <div class="demo__item">
        <div class="demo__img">
            <img :src="imgSrc(item.img)" alt="" />
        </div>
        <div class="demo__description">
            <div class="demo__name">{{ item.name }}</div>
            <div class="demo__price">{{ item.price }}</div>
        </div>
        <btn text="Купить" />
    </div>
</template>

<script>
import Btn from '../Btn.vue';
export default {
    components: { Btn },
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    methods: {
        imgSrc(path) {
            return require(`../../assets/images/desktop/${path}`);
        }
    }
};
</script>
