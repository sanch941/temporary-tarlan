<template>
    <div class="rate__item">
        <div class="rate__card">{{ item.card }}</div>
        <div class="rate__percent">{{ item.percent }}</div>
        <div class="rate__commission">{{ item.commission }}</div>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    }
};
</script>
