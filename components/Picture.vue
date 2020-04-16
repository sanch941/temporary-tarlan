<template>
    <picture>
        <source :srcset="srcset" v-bind="defaultProps" />
        <img
            :src="require(`../assets/images/desktop/${path}`)"
            v-bind="defaultProps"
        />
    </picture>
</template>

<script>
export default {
    props: {
        path: {
            type: String,
            required: true
        },
        custom: {
            type: Boolean,
            default: false
        },
        defaultProps: {
            type: Object,
            default: () => ({})
        }
    },
    computed: {
        srcset() {
            const devices = [
                {
                    deviceName: 'mobile',
                    deviceWidth: 768
                },
                {
                    deviceName: 'tablet',
                    deviceWidth: 769
                },
                {
                    deviceName: 'desktop',
                    deviceWidth: 1200
                }
            ];

            const srcset = devices.map(({ deviceName, deviceWidth }) => {
                let pathToImage = null;

                if (this.custom) {
                    pathToImage = require(`../assets/images/${this.path}`);
                } else {
                    pathToImage = require(`../assets/images/${deviceName}/${this.path}`);
                }

                return `${pathToImage} ${deviceWidth}w`;
            });

            return srcset.join(',');
        }
    }
};
</script>
