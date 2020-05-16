<script>
    export default {
        name: 'SavedWebsites',
        data() {
            return {
                sites: []
            }
        },
        created() {
            let self = this;

            var data = null;
            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function() {
                if (this.readyState === this.DONE) {
                    if(this.status == 200)
                    {
                        self.sites = JSON.parse(this.responseText);
                        console.log(self.sites);
                    }
                }
            });

            xhr.open("GET", "http://localhost:3002/api/get-saved-websites");
            xhr.send(data);
        }
    }
</script>

<template>

<div id="saved_websites">
    <div class="list">
        <a v-for="site of sites" :href="site.url">
            <div>
                <img v-if="site.icon" :src="'/static/img/website-logos/' + site.icon">
                <span v-if="site.letter">{{ site.letter }}</span>
            </div>
            <p>{{ site.title }}</p>
        </a>
    </div>
</div>

</template>

<style lang="scss" scoped>

@import '~@static/scss/variables.scss';

div#saved_websites {
    max-height: 400px;
    width: 550px;
    border-radius: 20px;
    overflow-y: scroll;
    padding: 10px 0;
    background: linear-gradient(-45deg, rgba(150, 150, 150, 0.4), rgba(87, 109, 127, 0.3));
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    box-shadow: 0 0 3px rgba(50, 50, 50, 0.8);
}

div.list {
    display: flex;
    flex-wrap: wrap;
    margin-left: 38px;
}

div.list > a, div.list > a:link, div.list > a:visited, div.list > a:active {
    text-decoration: none !important;
    color: inherit;
}

div.list > a {
    height: 100px;
    width: 140px;
    background-color: rgba(255, 255, 255, 0);
    border-radius: 8px;
    display: inline-block;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: background-color .2s;

    &:hover {
        background-color: rgba(255, 255, 255, 0.3);
        cursor: pointer;
    }

    > div {
        height: 65px;
        width: 65px;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 10px;
        margin: 0 auto;
        text-align: center;

        > img {
            width: 42px;
            max-height: 50px;
            margin-top: 50%;
            transform: translateY(-50%);
        }

        > span {
            font-family: $default-font;
            font-size: 32px;
            display: block;
            margin-top: 50%;
            transform: translateY(-50%);
        }
    }
    > p {
        font-family: $default-font;
        font-size: 12px;
        font-weight: lighter;
        color: rgba(255, 255, 255, 0.7);
        text-align: center;
        margin-top: 8px;
        text-align: bottom;
        white-space: nowrap;
    }
}

</style>