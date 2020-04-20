<template>
    <div :class="['how-it-works__subpage', subPageClass]">
        <div
            class="how-it-works__subpage__button"
            @click="changeSubPage('Прием платежей')"
        >
            Прием платежей
        </div>
        <div class="how-it-works__subpage__divider">/</div>
        <div
            class="how-it-works__subpage__button"
            @click="changeSubPage('Выплаты')"
        >
            Выплаты
        </div>
    </div>
</template>

<script>
export default {
    props: {
        changeSubPage: {
            type: Function,
            required: true
        },
        subPageClass: {
            type: String,
            required: true
        }
    }
};
</script>
