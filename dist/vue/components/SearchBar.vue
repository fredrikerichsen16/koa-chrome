<script>
    export default {
        components: {
            SearchMenu: () => import('./SearchMenu.vue')
        },
        name: 'SearchBar',
        data() {
            return {
                input: '',
                query: '',
                renderMenu: false,

                searchSite: 'GOOGLE',
                searchSiteOptions: [
                    {
                        value: "GOOGLE",
                        url: 'https://www.google.com/search?q=[]'
                    },
                    {
                        value: "YOUTUBE",
                        url: 'https://www.youtube.com/results?search_query=[]'
                    },
                    {
                        value: "MAPS",
                        url: 'https://www.google.com/maps/place/[]',
                    },
                    {
                        value: "YAHOO"
                    },
                    {
                        value: "AMAZON",
                        url: 'https://www.amazon.com/s?k=[]'
                    },
                    {
                        value: "NAVER",
                        url: 'https://search.naver.com/search.naver?query=[]',
                    },
                    {
                        value: "PORNHUB",
                        url: 'https://www.pornhub.com/video/search?search=[]',
                    },
                    {
                        value: "DUCKDUCKGO",
                        url: 'https://duckduckgo.com/?q=[]&t=h_&ia=web',
                    },
                ],
            };
        },
        methods: {
            search() {
                this.query = this.input;
            },

            focusInput() {
                if(this.input === '') return;
                try {
                    this.$refs.SearchMenu.showMenu(true);
                } catch {
                    // This doesn't work the first time you focus on the input, because the search menu hasn't rendered
                    // yet (because it only renders when user inputs something). Don't have to do any error handling.
                    console.log('No problem, move on. #48932489324');
                }
            },

            blurInput() {
                try {
                    this.$refs.SearchMenu.showMenu(false);
                } catch(e) {
                    // This doesn't work the first time you leave the input if you, haven't written anything.
                    // Because the search menu hasn't rendered yet. Don't have to do any error handling.
                    console.log('No problem, move on. #48534204324');
                }
            },

            focusOnSelect() {
                this.$refs.selectSearchSite.focus();
            },

            backToInput(e) {
                e.preventDefault();
                this.$refs.magicSearchInput.focus();
            },

            onFormSubmit(e) {
                if(e) e.preventDefault();

                let searchSiteObj = this.searchSiteOptions.find(e => e.value === this.searchSite) || this.searchSiteOptions[0];
                let searchSiteUrl = searchSiteObj.url.replace('[]', this.input);

                location.href = searchSiteUrl;
            }
        },
    }
</script>

<template>
    <form id="search"
          method="GET"
          @submit="onFormSubmit($event)">
        <div id="searchbox">
            <input type="text"
                   id="magic_search_input"
                   name="q"
                   ref="magicSearchInput"
                   autofocus="autofocus"
                   autocomplete="off"
                   placeholder="Magic Search..."
                   v-model.trim="input"
                   v-debounce:500="search"
                   @input="renderMenu = true"
                   @focus="focusInput"
                   @blur="blurInput">

            <select ref="selectSearchSite"
                    v-model="searchSite"
                    @keydown.enter="onFormSubmit()"
                    @keydown.tab="backToInput($event)">
                <option v-for="option in searchSiteOptions" :value="option.value">{{ option.value }}</option>
            </select>

            <span class="phantom-select"
                  @click="focusOnSelect">{{ searchSite }}</span>
        </div>

        <SearchMenu v-if="renderMenu"
                    :input="input"
                    :query="query"
                    :searchSite="searchSite"
                    ref="SearchMenu"/>
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
    box-shadow: 1px 1px 1px $inputBoxShadow;
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