<script>

import { mapState, mapMutations } from 'vuex';

export default {
    components: {
        SearchMenu: () => import('./SearchMenu.vue')
    },

    name: 'SearchBar',

    data() {
        return {
            queryInput: '',
            query: '',

            showMenu: false,
            showMenuFirstTime: false,

            searchSite: "GOOGLE",
            searchSiteOptions: [
                { value: "GOOGLE" },
                { value: "YOUTUBE" },
                { value: "MAPS" },
                { value: "YAHOO" },
                { value: "AMAZON" },
                { value: "NAVER" }
            ],
        };
    },

    computed: {
        /**
         * Get action attribute for form, depending on user's preferred search engine
         */
        // action() {
        //     if(this.searchSite === 'GOOGLE') {
        //         return "https://www.google.com/search";
        //     }
        // },

        ...mapState(['magicSearchPosition'])
    },

    methods: {
        ...mapMutations(['CHANGE_MAGIC_SEARCH_POSITION']),

        search() {
            this.query = this.queryInput;

            if(this.queryInput === '') {
                this.showMenu = false;
                return;
            }

            this.showMenu = true;
            this.showMenuFirstTime = true;
        },

        selectDown() {
            this.CHANGE_MAGIC_SEARCH_POSITION(this.magicSearchPosition + 1);
        },

        selectUp(e) {
            if (this.magicSearchPosition < 1) return;
            this.CHANGE_MAGIC_SEARCH_POSITION(this.magicSearchPosition - 1);
            e.preventDefault();
        },

        focusInput() {
            // TEMPORARY to disable the FUCKING MUTHER FUCKERS AT CHROME
            let inp = document.getElementById('magic_search_input');
            inp.value = ' ';

            this.CHANGE_MAGIC_SEARCH_POSITION(0);

            if(this.query !== '') {
                this.showMenu = true;
            }
        },

        blurInput() {
            this.showMenu = false;
            this.CHANGE_MAGIC_SEARCH_POSITION(0);
        },

        focusOnSelect() {
            this.$refs.selectSearchSite.focus();
        },

        onFormSubmit(e) {
            if(e) e.preventDefault();

            if(this.magicSearchPosition == 0) {
                if(this.searchSite === 'GOOGLE') {
                    location.href = 'https://www.google.com/search?q=' + this.queryInput;
                } else if(this.searchSite === 'AMAZON') {
                    location.href = 'https://www.amazon.com/s?k=' + this.queryInput;
                } else if(this.searchSite === 'YOUTUBE') {
                    location.href = 'https://www.youtube.com/results?search_query=' + this.queryInput;
                }
            }

            if(this.magicSearchPosition == 2) {
                location.href = 'https://www.google.com';
            }

            if(this.magicSearchPosition == 3) {
                location.href = 'https://www.google.com/maps';
            }
        }
    },
}

</script>

<template>
    <form id="search"
          method="GET"
          v-bind:action="action"
          @submit="onFormSubmit($event)"
          autocomplete="off">
        <div id="searchbox">
            <input type="text"
                   id="magic_search_input"
                   name="q"
                   autofocus="autofocus"
                   autocomplete="nope"
                   placeholder="Magic Search..."
                   v-model.trim="queryInput"
                   v-debounce:500="search"
                   @focus="focusInput"
                   @blur="blurInput"
                   v-on:keyup.down="selectDown"
                   v-on:keydown.up="selectUp($event)">

            <select ref="selectSearchSite"
                    v-model="searchSite"
                    v-on:keydown.enter="onFormSubmit()">
                <option v-for="option in searchSiteOptions" :value="option.value">{{ option.value }}</option>
            </select>

            <span class="phantom-select"
                  @click="focusOnSelect">{{ searchSite }}</span>
        </div>

        <transition name="toggle-menu" mode="out-in">
            <SearchMenu v-if="showMenuFirstTime"
                        v-show="showMenu"
                        :query="query" />
        </transition>
    </form>
</template>

<style lang="scss" scoped>

@import '~@static/scss/variables.scss';

$inputBackground: rgba(87, 109, 127, 0.47);
$inputBoxShadow: rgba(48, 60, 70, 0.8);
$inputTextColor: rgba(255, 255, 255, 0.8);
$inputPlaceholderColor: rgba(255, 255, 255, 0.5);

form#search div#searchbox {
    width: 400px;
    background: $inputBackground;
    box-shadow: 1px 1px 1px 1px $inputBoxShadow;
    border-radius: 8px;
    padding: 15px 20px;
    overflow: auto;

    input[type="text"] {
        width: 320px;
        color: $inputTextColor;
        font-size: 20px;
        font-family: $default-font;
        border: none;
        outline: none;
        background-color: rgba(0, 0, 0, 0);

        &::placeholder {
            color: $inputPlaceholderColor;
            font-family: $default-font;
        }
    }

    span.phantom-select {
        width: 70px;
        margin-top: 6px;
        float: right;
        text-align: right;
        font-family: $default-font;
        font-size: 12px;
        color: rgba(255, 255, 255, 0.6);

        &:hover {
            color: rgba(255, 255, 255, 0.9);
            cursor: pointer;
        }
    }

    input[type="text"],
    span.phantom-select {
        display: inline-block;
    }

    select {
        position: absolute;
        margin-top: -5000px;

        &:focus + span.phantom-select {
            color: rgba(255, 255, 255, 1);
        }
    }
}

</style>
