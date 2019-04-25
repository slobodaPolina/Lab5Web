<template>
    <div class="container">
        <p>Название документа</p>
        <div class="texts">
            <textarea id="raw" v-model="input">
            </textarea>
            <code v-html="parsedHtml" id="parsed">
            </code>
        </div>
        <div class="send-button-wrapper">
            <button>Save</button>
        </div>
    </div>
</template>

<script>
import { markdown } from 'markdown';

export default {
    name: "Edit",
    data() {
        return {
            input: `*Привет*`
        }
    },
    computed: {
        parsedHtml() {
            return markdown.toHTML(this.input);
        }
    }
}
</script>


<style lang="scss">
    .texts {
        padding-top: .5rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: .5rem;
        align-items: flex-start;
        background: green;

        & > * {
            margin: 20px 25px 25px;
            padding: 25px;
            background: white;
        }

        & > code {
            height: calc(100% - 95px);
        }
    }

    .send-button-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;

        & > button {
            padding: 10px 60px;
            background: green;
            color: white;
        }
        & > button:hover{
            cursor: pointer;
        }
    }

    textarea {
        min-height: 500px;
    }
</style>
