<script>

import { mapState, mapMutations } from 'vuex';

export default {
    name: 'PhotoInfo',

    computed: {
        photo() {
            return this.$store.state.page.backgrounds.active;
        }
    },

    methods: {
        ...mapMutations(['OVERWRITE_PAGE']),

        switchBG() {
            this.OVERWRITE_PAGE({
                backgrounds: {
                    nextShuffle: 0
                }
            });
        }
    }
}
</script>

<template>
    <div id="photo_info">
        <p @click="switchBG">{{ photo.meta.location }}</p>
        <a :href="photo.meta.photographerSource">Photo by {{ photo.meta.photographer }}</a>
    </div>
</template>

<style lang="scss" scoped>
    @import '~@static/scss/variables.scss';

    div#photo_info {
        position: absolute;
        right: 25px;
        bottom: 25px;
    }

    p, a {
        font-family: $default-font;
        text-align: right;
    }

    p {
        color: rgba(255, 255, 255, 0.8);
        font-size: 15px;
        padding-bottom: 4px;
    }

    a {
        color: rgba(255, 255, 255, 0.6);
        font-size: 12px;

        &:hover {
            color: rgba(255, 255, 255, 0.7);
        }
    }
</style>