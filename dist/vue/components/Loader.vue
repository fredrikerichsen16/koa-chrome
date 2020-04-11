<template>
    <div id="overlay"></div>
</template>

<script>
    import BackgroundService from "../services/BackgroundService";
    import { mapState, mapMutations } from 'vuex';

    export default {
        name: 'SearchBar',

        data() {
            return {};
        },

        methods: {
            ...mapMutations(['OVERWRITE_PAGE'])
        },

        computed: {
            ...mapState(['page'])
        },

        mounted() {
            /**
             * TODO: Pass 'document' into .retrieve and do the bg.onload etc. inside the service.
             */
            BackgroundService.retrieve(this.page, this.OVERWRITE_PAGE)
                .then((bg) => {
                    bg.onload = function() {
                        document.getElementById('background').style.backgroundImage = `url(${bg.src})`;
                        document.getElementById('overlay').classList.add('hide');

                        setTimeout(function() {
                            document.getElementById('overlay').remove();
                        }, 700);
                    };
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
</script>

<style lang="scss">
#overlay {
    background: white;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 5;

    &.hide {
        opacity: 0;
        transition: .7s opacity ease;
        /*-webkit-transition: .6s opacity ease;*/
        /*-moz-transition: .6s opacity ease;*/
        /*-o-transition: .6s opacity ease;*/
    }
}
</style>