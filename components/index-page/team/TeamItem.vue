<template>
    <div class="team__item">
        <div class="team__img"></div>
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
    }
};
</script>
