<script>
    export default {
        name: 'SavedWebsites',
        data() {
            return {
                websites: []
            };
        },
        mounted() {
            const URL = 'https://www.facebook.com/';
            this.websites = [
                {
                    name: 'Facebook',
                    url: 'https://www.facebook.com/'
                },
                {
                    name: 'Reddit',
                    url: 'https://www.reddit.com/'
                },
                {
                    name: 'Instagram',
                    url: 'https://www.instagram.com/'
                },
                {
                    name: 'StackOverflow',
                    url: 'https://www.stackoverflow.com/'
                },
            ];
        }
    }
</script>

<template>

<div id="saved_websites">
    <div class="list">
        <a href="https://www.facebook.com">
            <div>
                <img src="/static/img/website-logos/facebook.svg">
            </div>
            <p>Facebook</p>
        </a>
        <a href="https://www.google.com">
            <div>
                <img src="/static/img/website-logos/google.svg">
            </div>
            <p>Google</p>
        </a>
        <a href="https://www.netflix.com">
            <div>
                <img src="/static/img/website-logos/netflix.svg">
            </div>
            <p>Netflix</p>
        </a>
        <a href="https://www.instagram.com">
            <div>
                <img src="/static/img/website-logos/instagram.svg">
            </div>
            <p>Instagram</p>
        </a>
        <a href="https://www.reddit.com">
            <div>
                <img src="/static/img/website-logos/reddit.svg">
            </div>
            <p>Reddit</p>
        </a>
        <a href="https://www.messenger.com">
            <div>
                <img src="/static/img/website-logos/facebook-messenger.svg">
            </div>
            <p>Messenger</p>
        </a>
        <a href="https://www.stackoverflow.com">
            <div>
                <span>S</span>
            </div>
            <p>StackOverflow</p>
        </a>
        <a href="https://www.whatsapp.com">
            <div>
                <img src="/static/img/website-logos/whatsapp.svg">
            </div>
            <p>WhatsApp</p>
        </a>
        <a href="https://www.vuejs.org">
            <div>
                <img src="/static/img/website-logos/vue.svg">
            </div>
            <p>Vue</p>
        </a>
        <a href="https://www.vg.no">
            <div>
                <span>V</span>
            </div>
            <p>VG</p>
        </a>
        <a href="https://www.dagbladet.no">
            <div>
                <span>D</span>
            </div>
            <p>Dagbladet</p>
        </a>
        <a href="https://www.drive.google.com">
            <div>
                <img src="/static/img/website-logos/google-drive.svg">
            </div>
            <p>Google Drive</p>
        </a>
        <a href="https://www.dropbox.com">
            <div>
                <img src="/static/img/website-logos/dropbox.svg">
            </div>
            <p>Dropbox</p>
        </a>
        <a href="https://www.slack.com">
            <div>
                <img src="/static/img/website-logos/slack.svg">
            </div>
            <p>Slack</p>
        </a>
        <a href="https://www.twitter.com">
            <div>
                <img src="/static/img/website-logos/twitter.svg">
            </div>
            <p>Twitter</p>
        </a>
        <a href="https://www.bbc.com">
            <div>
                <img src="/static/img/website-logos/bbc.svg">
            </div>
            <p>BBC</p>
        </a>
        <a href="https://www.amazon.com">
            <div>
                <img src="/static/img/website-logos/amazon.svg">
            </div>
            <p>Amazon</p>
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