<template>
    <div class="section demo">
        <div class="container">
            <div class="section__title">Демо - покупка</div>
            <div class="demo__content">
                <demo-item
                    v-for="(item, index) in demo"
                    :key="index"
                    :item="item"
                />
            </div>
            <btn text="Подключить" />
        </div>
    </div>
</template>

<script>
import Btn from '../components/Btn.vue';
import DemoItem from '../components/demo/DemoItem.vue';
import demo from '~/assets/json/demo';

export default {
    components: { DemoItem, Btn },
    data() {
        return {
            demo
        };
    },
    mounted() {
        const header = document.getElementsByClassName('header')[0];
        header.classList.add('header-black');
    },
    destroyed() {
        const header = document.getElementsByClassName('header')[0];
        header.classList.remove('header-black');
    }
};
</script>
