<script>

import Loader from '@/components/Loader';
import MiddleComponent from '@/components/MiddleComponent';
import Quote from '@/components/Quote';
import Clock from '@/components/Clock';
import WidgetLinks from '@/components/WidgetLinks';
import PhotoInfo from '@/components/PhotoInfo';
import Sidebar from '@/widgets/Sidebar';
import ContextMenu from '@/components/ContextMenu';

export default {
    name: 'App',

    data() {
        return {};
    },

    components: {
        Loader,
        MiddleComponent,
        Quote,
        Sidebar,
        WidgetLinks,
        PhotoInfo,
        ContextMenu,
        Clock,
    },
}

</script>

<template>
    <div id="background">
        <Loader />
        <Sidebar />

        <div id="content">
            <MiddleComponent />
            <WidgetLinks />
            <Quote />
            <PhotoInfo />
            <ContextMenu />
        </div>
    </div>
</template>

<style lang="scss">

div#background {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 1;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    div#content {
        position: relative;
        height: 100%;
        width: 100%;
    }
}

</style>
