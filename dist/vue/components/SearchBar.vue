<script>

export default {
    components: {
        SearchMenu: () => import('./SearchMenu.vue')
    },

    name: 'SearchBar',

    data() {
        return {
            queryInput: '',
            query: '',

            showMenuFirstTime: false,

            searchSite: "GOOGLE",
            searchSiteOptions: [
                { value: "GOOGLE" },
                { value: "YOUTUBE" },
                { value: "MAPS" },
                { value: "YAHOO" },
                { value: "AMAZON" },
                { value: "NAVER" },
                { value: "PORNHUB" },
                { value: "DUCKDUCKGO" },
            ],
        };
    },

    methods: {
        search() {
            this.query = this.queryInput;
            this.showMenuFirstTime = true;
        },

        focusInput() {
            // TEMPORARY to disable the FUCKING MUTHER FUCKERS AT CHROME
            // let inp = document.getElementById('magic_search_input');
            // inp.value = ' ';

            this.$refs.SearchMenu.showMenu(true);
        },

        blurInput() {
            this.$refs.SearchMenu.showMenu(false);
        },

        focusOnSelect() {
            this.$refs.selectSearchSite.focus();
        },

        onFormSubmit(e) {
            if(e) e.preventDefault();

            if(this.searchSite === 'GOOGLE') {
                location.href = 'https://www.google.com/search?q=' + this.queryInput;
            } else if(this.searchSite === 'AMAZON') {
                location.href = 'https://www.amazon.com/s?k=' + this.queryInput;
            } else if(this.searchSite === 'YOUTUBE') {
                location.href = 'https://www.youtube.com/results?search_query=' + this.queryInput;
            } else if(this.searchSite === 'PORNHUB') {
                location.href = 'https://www.pornhub.com/video/search?search=' + this.queryInput;
            } else if(this.searchSite === 'NAVER') {
                location.href = 'https://search.naver.com/search.naver?query=' + this.queryInput;
            } else if(this.searchSite === 'MAPS') {
                location.href = 'https://www.google.com/maps/place/' + this.queryInput;
            } else if(this.searchSite === 'DUCKDUCKGO') {
                location.href = 'https://duckduckgo.com/?q=' + this.queryInput + '&t=h_&ia=web';
            }
        }
    },
}

</script>

<template>
    <form id="search"
          method="GET"
          v-bind:action="action"
          @submit="onFormSubmit($event)">
        <div id="searchbox">
            <input type="text"
                   id="magic_search_input"
                   name="q"
                   autofocus="autofocus"
                   autocomplete="off"
                   placeholder="Magic Search..."
                   v-model.trim="queryInput"
                   v-debounce:500="search"
                   @focus="focusInput"
                   @blur="blurInput">

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
                        :query="query"
                        ref="SearchMenu"/>
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
