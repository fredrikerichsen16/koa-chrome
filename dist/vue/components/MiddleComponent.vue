<script>
import { mapState, mapMutations } from "vuex";

export default {
    name: 'MiddleComponent',

    computed: {
        ...mapState(['page']),
    },

    created() {
        let components = [];
        let widgets = this.$store.state.user.widgets;

        for(let widget of widgets)
        {
            if(widget.type !== 'semi') continue;
            components.push({...widget, loaded: false});
        }

        let defaultComponents = [
            {
                name: 'SearchBar',
                loaded: false,
            },
            {
                name: 'SavedWebsites',
                loaded: false,
            }
        ];

        this.components = defaultComponents.concat(components);

        this.slide = this.$store.state.page.middleComponentSlide || 0;
        this.components[this.slide].loaded = true;
        this.nSlides = this.components.length;
    },

    data() {
        return {
            nSlides: 0,
            slide: 0,
            components: [],
        };
    },

    components: {
        SearchBar: () => import('./SearchBar.vue'),
        SavedWebsites: () => import('./SavedWebsites.vue'),
        Weather: () => import('@/widgets/Weather/semi/Weather.vue'),
        Todo: () => import('@/widgets/Todo/semi/Todo.vue'),
    },

    methods: {
        ...mapMutations(['OVERWRITE_PAGE']),

        /**
         * Switch middle component
         * if n = -1: go one back
         * if n = undefined | null: go one forward
         * if n = integer: go to that index
         *
         * @param n - int | undefined | null
         */
        next(n) {
            /**
             * TODO: Perhaps first set component loaded = true first for 100ms, THEN change this.slide to that slide
             * so that it loads a bit first and then it is show. But it's probably better to load the content inside
             * the thing with a spinner.
             */
            if(n === -1)
            {
                if(this.slide === 0) {
                    this.slide = this.nSlides - 1;
                } else {
                    this.slide--;
                }
            }
            else if(!n)
            {
                if(this.slide >= (this.nSlides - 1)) {
                    this.slide = 0;
                } else {
                    this.slide++;
                }
            }
            else
            {
                this.slide = n;
            }

            this.OVERWRITE_PAGE({
                'middleComponentSlide': this.slide
            });

            this.components[this.slide].loaded = true;
        }
    },

    mounted() {
        window.addEventListener('keydown', (e) => {
            let inputs = document.querySelectorAll('input[type="text"]');
            let magicSearchInput = document.getElementById('magic_search_input');

            for(let input of inputs) {
                if(magicSearchInput === document.activeElement && magicSearchInput.value === '') {
                    continue;
                }

                if(input === document.activeElement) {
                    return;
                }
            }

            if(e.which === 39) {
                this.next();
            }

            if(e.which === 37) {
                this.next(-1);
            }
        });
    }
}

</script>

<template>

<div>
    <div id="middle_component">
        <component
                v-for="(c, index) in components"
                :is="c.name"
                v-if="c.loaded"
                v-show="index === slide"
                :key="index"></component>

        <ul id="navigation_dots">
            <li v-for="n in nSlides"
                :class="{selected: (n - 1) === slide}"
                @click="next(n - 1)"></li>
        </ul>
    </div>
</div>

</template>

<style lang="scss" scoped>

div#middle_component {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
}

ul#navigation_dots {
    position: absolute;
    bottom: -40px;
    left: 50%;
    transform: translateX(-50%);

    li {
        height: 8px;
        width: 8px;
        display: inline-block;
        border-radius: 50%;
        margin-right: 8px;
        background-color: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);

        &.selected {
            background-color: rgba(255, 255, 255, 0.8);
        }

        &:hover {
            background-color: rgba(255, 255, 255, 0.65);
            cursor: pointer;
        }
    }
}

</style>