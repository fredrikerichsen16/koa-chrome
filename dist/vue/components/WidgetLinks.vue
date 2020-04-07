<script>
    export default {
        name: 'WidgetLinks',

        data() {
            return {}
        },
    };
</script>

<template>

<div id="widget_links">
    <router-link
            v-for="(route, idx) in $router.options.routes"
            :key="idx"
            :to="route.path">
        <img :src="'/static/img/icons/' + route.meta.icon"
             :alt="route.meta.name + 'Widget Icon'">
    </router-link>

    <a href="#">
        <img src="/static/img/icons/settings-icon.svg" alt="" />
    </a>
</div>

</template>

<style lang="scss" scoped>

div#widget_links {
    background-color: rgb(32, 33, 36);
    position: absolute;
    bottom: 20px;
    left: 30px;
    padding: 20px 30px 15px 30px;
    border-radius: 8px;

    > a {
        display: inline-block;
        text-decoration: none !important;
        margin-right: 28px;
    }

    > a:last-of-type {
        margin-right: 0;
    }

    > a > img {
        height: 20px;
        width: 20px;
    }
}

</style>
