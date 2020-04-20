<template>
    <picture>
        <source :srcset="srcset" v-bind="defaultProps" />
        <img :src="fallbackImgSrc(path)" v-bind="defaultProps" />
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
            type: [Array, Boolean],
            default: false
        },
        svg: {
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
            let devices = [
                {
                    devicePath: 'mobile',
                    deviceWidth: 768
                },
                {
                    devicePath: 'tablet',
                    deviceWidth: 769
                },
                {
                    devicePath: 'tablet',
                    deviceWidth: 1024
                },
                {
                    devicePath: 'desktop',
                    deviceWidth: 1200
                }
            ];

            if (this.custom) {
                devices = this.custom;
            }

            const srcset = devices.map(({ devicePath, deviceWidth }) => {
                let pathToImage = null;

                if (this.custom) {
                    pathToImage = this.imgSrc(devicePath);
                } else {
                    pathToImage = this.imgSrc(`${devicePath}/${this.path}`);
                }

                return `${pathToImage} ${deviceWidth}w`;
            });

            return srcset.join(',');
        }
    },
    methods: {
        imgSrc(path) {
            return require(`../assets/images/${path}`);
        },
        fallbackImgSrc(path) {
            if (this.svg) {
                return this.imgSrc(`svg/${path}`);
            }
            return this.imgSrc(`desktop/${path}`);
        }
    }
};
</script>
