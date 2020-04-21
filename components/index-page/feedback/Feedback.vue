<template>
    <div class="section feedback relative">
        <div class="container container-reverse">
            <div class="section__title">
                <div class="md-none">Оставьте заявку</div>
                <div class="section__title__rotated xs-none md-block">
                    <img :src="imgSrc('title.svg')" alt="" />
                </div>
            </div>
            <div class="feedback__form">
                <div class="xs-none md-block section__title">
                    Оставить заявку
                </div>
                <form action="" @submit.prevent="submit">
                    <input
                        v-model="form.fullName"
                        type="text"
                        placeholder="ФИО"
                        required
                    />
                    <input
                        v-model="form.phoneNumber"
                        type="number"
                        placeholder="Контактный телефон"
                        required
                    />
                    <input
                        v-model="form.email"
                        type="text"
                        placeholder="Email"
                        required
                    />
                    <input
                        v-model="form.website"
                        type="text"
                        placeholder="Веб сайт компании"
                        required
                    />
                    <textarea
                        v-model="form.comment"
                        placeholder="Комментарий"
                        name=""
                        rows="4"
                    ></textarea>
                    <div class="feedback__button">
                        <btn text="Связаться" :other-props="otherProps" />
                    </div>
                </form>
            </div>
        </div>
        <div class="container md-none">
            <div class="feedback__contact">
                <div class="feedback__contact__text">Контактный телефон:</div>
                <a class="feedback__contact__number" href="tel:+77010913025"
                    >+ 7 701 091 30 25
                </a>
            </div>
        </div>
        <div class="feedback__background xs-none md-block">
            <img :src="feedbackLines" alt="" />
        </div>
    </div>
</template>

<script>
import Btn from '../../Btn.vue';
export default {
    components: {
        Btn
    },
    data() {
        return {
            otherProps: {
                type: 'submit'
            },
            form: {
                fullName: '',
                phoneNumber: null,
                email: '',
                website: '',
                comment: ''
            }
        };
    },
    computed: {
        feedbackLines() {
            return require(`../../../assets/images/desktop/feedback-lines.png`);
        }
    },
    methods: {
        imgSrc(path) {
            return require(`../../../assets/images/svg/feedback/${path}`);
        },
        submit() {}
    }
};
</script>
