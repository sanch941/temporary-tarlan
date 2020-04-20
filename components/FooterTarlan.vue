<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__content">
                <div class="footer__item">
                    <div class="footer__year">{{ footer.year }}</div>
                    <div class="footer__rules">
                        <a href=""> {{ footer.rules }} </a>
                    </div>
                    <div class="footer__icons">
                        <img
                            v-for="(item, index) in footer.icons"
                            :key="index"
                            :src="imgSrc(item)"
                            alt=""
                        />
                    </div>
                </div>
                <div class="footer__item">
                    <div class="footer__company-name">
                        {{ footer.companyName }}
                    </div>
                    <div class="footer__address">{{ footer.address }}</div>
                    <div class="footer__common-questions">Общие вопросы:</div>
                    <div class="footer__common-questions">
                        {{ footer.commonQuestions }}
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import footer from '~/assets/json/footer';

export default {
    data() {
        return {
            footer
        };
    },
    methods: {
        imgSrc(path) {
            return require(`../assets/images/svg/footer/${path}`);
        }
    }
};
</script>
