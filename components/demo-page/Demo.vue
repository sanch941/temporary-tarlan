<template>
    <div class="demo">
        <div class="demo__content">
            <div class="demo__title">Демо-покупка</div>
            <div class="demo__products">
                <demo-product
                    v-for="product in products"
                    :key="product.id"
                    :product-data="product"
                />
            </div>
            <div class="demo__enable-btn">
                <enable-button />
            </div>
        </div>
    </div>
</template>

<script>
import EnableButton from '../elements/EnableButton';
import DemoProduct from './DemoProduct';
export default {
    name: 'Demo',
    components: { DemoProduct, EnableButton },
    props: {},
    data() {
        return {
            products: [
                {
                    name: 'Apple watch',
                    price: '500 тенге',
                    image: 'demo-watch.png',
                    id: 1
                },
                {
                    name: '4k TV',
                    price: '500 тенге',
                    image: 'demo-tv.png',
                    id: 2
                },
                {
                    name: 'Путевка в Таиланд',
                    price: '500 тенге',
                    image: 'demo-thailand.png',
                    id: 3
                }
            ]
        };
    },
    computed: {},
    methods: {}
};
</script>
