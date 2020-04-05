<script>

import MagicSearch from "@/services/magic-search/MagicSearch";

export default {
    name: 'SearchMenu',

    data() {
        return {
            MagicSearchService: new MagicSearch(),
            immediateSearchResults: [],
            delayedSearchResults: [],
            show: false,
        };
    },

    props: {
        query: {
            type: String,
            required: true,
        },
        input: {
            type: String,
            required: true,
        }
    },

    watch: {
        input: {
            immediate: true,
            handler(newVal) {
                if(newVal === '') {
                    this.delayedSearchResults = [];
                    this.immediateSearchResults = [];
                    this.show = false;
                    return;
                }

                this.MagicSearchService.immediateSearch(newVal,(results) => {
                    this.immediateSearchResults = results;
                    this.showMenu();
                });
            }
        },

        query: {
            immediate: true,
            async handler(newVal) {
                this.delayedSearchResults = await this.MagicSearchService.delayedSearch(newVal);
                this.showMenu();
            }
        },
    },

    methods: {
        showMenu(bool = true) {
            if(!bool) {
                this.show = false;
                return;
            }

            if((this.immediateSearchResults.length + this.delayedSearchResults.length) > 0) {
                this.show = true;
            } else {
                this.show = false;
            }
        }
    },
}

</script>

<template>

<div id="menu" v-show="show">
    <template v-for="result in delayedSearchResults">
        <div v-if="result.type === 'block'"
             class="block">
            <span class="header">{{ result.header }}</span>
            <div class="block">
                <p>{{ result.content.text }}</p>
            </div>
        </div>

        <div v-if="result.type === 'inline'"
             class="inline">
            <img src="https://img.icons8.com/doodle/344/google-logo.png" alt="" class="icon">
            <div class="content">{{ result.content.text }}</div>
            <a v-if="result.content.button"
               :href="result.content.button.url"
               class="button">{{ result.content.button.text }}</a>
        </div>
    </template>

    <a v-for="page in immediateSearchResults"
       v-if="page.type === 'link'"
       class="link"
       :title="page.url"
       :data-favicon="page.content.favicon">{{ page.content.title }}</a>
</div>

</template>

<style lang="scss" scoped>

div#menu {
    width: 450px;
    background: rgb(32, 33, 36);
    padding: 10px 0;
    border-radius: 6px;

    position: absolute;
    margin-top: 15px;
    z-index: 2;

    a.suggested {
        &:after {
            content: "Suggested Website";
            position: absolute;
            right: 10px;
            top: 11px;
            color: #666;
            font-size: 10px;
        }
    }

    a.link {
        float: left;
        min-width: 422px;
        width: 422px;
        white-space: nowrap;
        overflow-x: hidden;

        &:before {
            content: url('https://www.google.com/s2/favicons?domain=google.com');
            margin-right: 10px;
            top: 2px;
            position: relative;
        }

        &:hover {
            background-color: rgba(60, 62, 68, 1);
            cursor: pointer;
            width: auto;
        }
    }

    a.link, > span, > div {
        padding: 6px 14px;
        color: white;
        font-family: Arial;
        font-size: 16px;
        display: block;
        position: relative;
    }

    > div.inline {
        height: 50px;

        > img.icon, > div.content, > a.button {
            position: absolute;
        }

        > img.icon {
            /*background-color: rgb(104, 237, 124);*/
            margin-right: 6px;
            height: 40px;
            width: 40px;
            top: 10px;
        }

        > div.content {
            width: 250px;
            top: 22px;
            left: 65px;
        }

        > a.button {
            right: 10px;
            top: 15px;
            color: rgb(32, 33, 36);

            font-size: 14px;

            border-radius: 10px;
            background: #00B4DB;
            background: -webkit-linear-gradient(to right, #0083B0, #00B4DB);
            background: linear-gradient(to right, #0083B0, #00B4DB);
            color: white;
            padding: 5px 15px;

            vertical-align: middle;

            &:hover {
                cursor: pointer;
            }
        }
    }

    > div.block {
        width: 420px;
    }
}

</style>