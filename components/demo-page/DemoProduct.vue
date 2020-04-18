<template>
    <div class="demo__product demo-product">
        <div class="product__img">
            <img
                :src="
                    require('../../assets/images/mobile/' + productData.image)
                "
                alt="img"
            />
        </div>
        <div class="product__description">
            <p class="product__name">{{ productData.name }}</p>
            <p class="product__price">{{ productData.price }}</p>
        </div>
        <div class="product__purchase">
            <button class="purchase-btn">Купить</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DemoProduct',
    components: {},
    props: {
        productData: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    data() {
        return {};
    },
    computed: {},
    methods: {}
};
</script>
