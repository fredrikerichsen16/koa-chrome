<script>

import MagicSearch from "@/services/magic-search/MagicSearch";

export default {
    name: 'SearchMenu',

    data() {
        return {
            MagicSearchService: new MagicSearch(),
            searchResults: [],
            show: false,
        };
    },

    computed: {

    },

    props: {
        query: {
            type: String,
            required: true
        }
    },

    watch: {
        query: {
            immediate: true,
            async handler(newVal) {
                if(newVal === '') {
                    this.searchResults = [];
                    this.show = false;
                    return;
                }

                this.searchResults = await this.MagicSearchService.search(newVal);
                this.showMenu(this.searchResults.length > 0);
            }
        }
    },

    methods: {
        showMenu(bool = true) {
            if(!bool) {
                this.show = false;
                return;
            }

            if(this.searchResults.length > 0) {
                this.show = true;
            }
        }
    },
}

</script>

<template>

<div id="menu" v-show="show">
    <ul>
        <li v-for="result in searchResults">
            <div class="icon-wrapper">
                <img :src="'/static/img/icons/search-menu/' + result.icon">
            </div>
            <p>{{ result.text }}</p>
            <img src="/static/img/icons/search-menu/arrow.png" alt="Arrow right" class="arrow">
        </li>
    </ul>
</div>

</template>

<style lang="scss" scoped>

// TEMPORARY hard-cored colors.
#menu li:nth-of-type(1) div.icon-wrapper {
    background-color: rgb(100, 118, 243);
}

#menu li:nth-of-type(2) div.icon-wrapper {
    background-color: rgb(237, 104, 129);
}

#menu li:nth-of-type(3) div.icon-wrapper {
    background-color: rgb(244, 195, 109);
}

#menu li:nth-of-type(4) div.icon-wrapper {
    background-color: rgb(104, 237, 124);
}

#menu li:nth-of-type(5) div.icon-wrapper {
    background-color: rgb(104, 228, 237);
}

div#menu {
    margin-top: 15px;
    width: 420px;
    background: white;
    border-radius: 10px;
    padding: 10px;
    position: absolute;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    box-shadow: 1px 3px 6px rgba(0, 0, 0, 0.6);

    ul li {
        padding: 6px 10px;
        margin-bottom: 6px;
        border-radius: 10px;
        transition: .4s background;

        &:hover {
            background: rgb(245, 245, 245);
            cursor: pointer;
        }

        p, div, > img {
            display: inline-block;
        }

        p {
            font-family: Roboto, Arial;
            font-size: 18px;
            color: rgb(114, 119, 140);
            transform: translateY(-2px);
            margin-left: 8px;
        }

        div.icon-wrapper {
            height: 35px;
            width: 35px;
            border-radius: 10px;

            > img {
                height: 19px;
                width: 19px;
                margin-top: 8px;
                margin-left: 8px;
            }
        }

        img.arrow {
            float: right;
            height: 22px;
            width: 22px;
            margin-top: 8px;
            display: none;
        }
    }
}

.toggle-menu-enter {
    transform: translateY(-10px);
    opacity: 0;
}
.toggle-menu-enter-to {
    transform: translateY(0);
    opacity: 1;
}

.toggle-menu-leave {
    transform: translateY(0);
    opacity: 1;
}
.toggle-menu-leave-to {
    transform: translateY(-10px);
    opacity: 0;
}

.toggle-menu-enter-active,
.toggle-menu-leave-active {
    transition: .35s opacity, .35s transform;
}
</style>