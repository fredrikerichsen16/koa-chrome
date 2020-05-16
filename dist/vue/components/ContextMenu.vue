<script>

export default {
    name: 'ContextMenu',

    data() {
        return {}
    },

    mounted() {
        let contextMenu = document.getElementById('context_menu');

        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();

            contextMenu.style.display = contextMenu.style.display === 'none' ? 'block' : 'none';
            contextMenu.style.top = e.clientY + 'px';
            contextMenu.style.left = e.clientX + 'px';
        }, false);
    },

    methods: {
        async refresh() {
            await import('@static/js/helpers/tryToLogin');
        },

        go(to='bookmarks') {
            chrome.tabs.create({
                url: 'chrome://' + to
            });
        }
    }
}
</script>

<template>
    <div id="context_menu">
        <a href="#">Enter Focus Mode</a>
        <a href="#">Enter Deep Focus Mode</a>
        <div></div>
        <a @click="refresh">Refresh</a>
        <div></div>
        <a @click="go('bookmarks')">Bookmarks</a>
        <a @click="go('history')">History</a>
    </div>
</template>

<style lang="scss" scoped>

@import '~@static/scss/variables.scss';

div#context_menu {
    position: absolute;
    background: rgb(61, 65, 72);
    color: white;
    border-radius: 3px;
    padding: 8px 0;
    display: none;

    > a {
        display: block;

        font-family: $default-font;
        color: white;
        text-decoration: none;

        padding: 10px 20px;
    }

    > a:hover {
        background: rgb(37, 41, 46);
    }

    > div {
        height: 1px;
        width: 76%;
        background: rgba(49, 52, 58, 1);
        margin: 6px 0 6px 12%;
    }
}

</style>