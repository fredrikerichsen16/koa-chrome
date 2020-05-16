<script>

export default {
    name: 'Todo'
}

</script>

<template>

<div id="todo">
    <h1>Google Tasks</h1>

    <ul>
        <li>
            <div class="task">
                <span class="body">Avbestill YouFone</span>
                <span class="tag">Personal</span>
                <span class="date">Tomorrow 12:00</span>
            </div>
            <div class="buttons">
                <img class="trash" src="/static/img/icons/trash.svg">
                <div class="check"></div>
            </div>
        </li>
    </ul>
</div>

</template>

<style lang="scss" scoped>

@import '~@static/scss/variables.scss';

div#todo {
    height: 300px;
    width: 540px;
    border-radius: 20px;
    padding: 25px;
    overflow-y: scroll;
    background: linear-gradient(-45deg, rgba(150, 150, 150, 0.4), rgba(87, 109, 127, 0.3));
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
}

h1 {
    font-family: $default-font;
    font-size: 24px;
    color: white;
    margin-bottom: 14px;
    text-align: center;
}

div li {
    position: relative;
    width: calc(100% - 30px);
    float: left;

    font-family: $default-font;
    font-size: 16px;
    color: white;
    padding: 15px;
    background-color: rgba(150, 150, 150, 0.4);
    border-radius: 8px;
    margin-bottom: 10px;

    > div.task {
        width: 85%;

        > span.body {
            display: block;
            margin-bottom: 8px;
        }

        > span.tag {
            background-color: #FF416C;
            font-size: 12px;
            font-weight: 300;
            border-radius: 6px;
            padding: 5px;
        }

        > span.date {
            color: rgba(255, 255, 255, 0.6);
            position: relative;
            top: 2px;
            left: 5px;
        }
    }

    > div.buttons {
        position: absolute;
        right: 15px;
        top: calc(50% - 8px);

        > div, > img {
            display: inline-block;
            margin-left: 4px;

            &:hover {
                cursor: pointer;
            }
        }

        > div.check {
            width: 14px;
            height: 14px;
            border: 2px solid white;
            border-radius: 5px;

            &:hover {
                background: rgba(255, 255, 255, 0.2);
            }

            &.checked {
                background: white;
            }
        }

        > img.trash {
            height: 20px;
            width: 20px;
        }
    }
}

</style>