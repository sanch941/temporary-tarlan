<template>
    <div class="btn-container" @click="goToFeedBack">
        <button
            v-if="type === 'default'"
            v-bind="otherProps"
            :class="['btn', ...typeClasses]"
        >
            {{ text }}
        </button>
        <button v-else v-bind="otherProps" :class="['btn', ...typeClasses]">
            {{ text }}
            <span
                v-for="(item, index) in 5"
                :key="index"
                :class="
                    `btn-animation__border btn-animation__border-${index + 1}`
                "
            />
        </button>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: 'default'
        },
        otherProps: {
            type: Object,
            default: () => ({})
        }
    },
    computed: {
        typeClasses() {
            if (this.type === 'default') {
                return ['btn-default'];
            }

            if (this.type === 'btn-animation-black') {
                return ['btn-animation btn-animation-black'];
            }

            return ['btn-animation'];
        }
    },
    methods: {
        goToFeedBack() {
            if (this.text === 'Подключить') {
                const currentRoute = this.$router.currentRoute;

                if (currentRoute.name === 'index') {
                    return this.$scrollTo('#feedback');
                }

                this.$router.push('/');
                setTimeout(() => {
                    this.$scrollTo('#feedback');
                }, 100);
            }
        }
    }
};
</script>
