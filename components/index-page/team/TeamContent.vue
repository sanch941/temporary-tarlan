<template>
    <div class="team__content">
        <team-item v-for="(item, index) in list" :key="index" :item="item" />
    </div>
</template>

<script>
import TeamItem from './TeamItem.vue';
export default {
    components: { TeamItem },
    props: {
        list: {
            type: Array,
            required: true
        }
    }
};
</script>
