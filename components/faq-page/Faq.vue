<template>
    <div class="faq">
        <div class="test-header">header</div>
        <div class="faq__content">
            <div class="faq__title">FAQ</div>
            <div class="faq__questions">
                <FaqQuestion
                    v-for="question in questions"
                    :key="question.num"
                    :question-data="question"
                />
            </div>
        </div>
        <div class="test-footer">footer</div>
    </div>
</template>

<script>
import FaqQuestion from './FaqQuestion';
export default {
    name: 'Faq',
    components: { FaqQuestion },
    props: {},
    data() {
        return {
            questions: [
                {
                    text: 'Что нужно для подключения?',
                    num: 1
                },
                {
                    text: 'Сколько длится подключение?',
                    num: 2
                },
                {
                    text: 'Нужно ли открывать счет в банке-партнере?',
                    num: 3
                },
                {
                    text: 'Кто осуществляет интеграцию?',
                    num: 4
                },
                {
                    text: 'В каком виде будет отчетность?',
                    num: 5
                },
                {
                    text: 'Как происходит списание комиссии?',
                    num: 6
                },
                {
                    text: 'Как осуществляется вывод денежных средств?',
                    num: 7
                },
                {
                    text:
                        'В какие сроки осуществляется перечисление средств на расчетный счет?',
                    num: 8
                },
                {
                    text: 'Могут ли мои клиенты оплачивать в долларах/евро?',
                    num: 9
                },
                {
                    text: 'Можно ли подключить мобильное приложение?',
                    num: 10
                },
                {
                    text: 'Как происходит возврат/отмена платежа?',
                    num: 11
                },
                {
                    text: 'В какие сроки осуществляется возврат?',
                    num: 12
                },
                {
                    text: 'Есть ли рекуррентные платежи?',
                    num: 13
                },
                {
                    text: 'Можно ли работать без 3DS?',
                    num: 14
                },
                {
                    text: 'Работаете ли вы с физ.лицами?',
                    num: 15
                },
                {
                    text:
                        'Есть ли возможность блокировки (холдирования) денежных средств?',
                    num: 16
                },
                {
                    text:
                        'Возможно ли выставить счет покупателю/сформировать ссылку на оплату?',
                    num: 17
                },
                {
                    text: 'Можно ли переложить комиссию на покупателя?',
                    num: 18
                },
                {
                    text: 'Каким требованиям должен соответствовать сайт?',
                    num: 19
                },
                {
                    text: 'Есть ли возможность привязки/запоминания карт?',
                    num: 20
                }
            ]
        };
    },
    computed: {},
    methods: {}
};
</script>
