<template>
    <div class="team__item">
        <div class="team__img">
            <img
                class="xs-none md-block"
                :src="imgSrc(`desktop/${item.img}`)"
                alt=""
            />
            <img class="md-none" :src="imgSrc(`mobile/${item.img}`)" alt="" />
        </div>
        <div class="team__fullname">{{ item.fullname }}</div>
        <div class="team__position">{{ item.position }}</div>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    methods: {
        imgSrc(path) {
            return require(`../../../assets/images/${path}`);
        }
    }
};
</script>
