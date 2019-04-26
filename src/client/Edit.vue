<template>
    <div class="container">
        <div class="input-wrapper">
            <p>Название документа</p>
            <input type="text" v-model="current.title"/>
        </div>
        <div class="texts">
            <textarea v-model="current.text"></textarea>
            <code v-html="parsedHtml"></code>
        </div>
        <div class="button-wrapper">
            <button @click="sendData()">Сохранить</button>
        </div>
    </div>
</template>

<script>
import { markdown }  from 'markdown';
import axios from 'axios';

export default {
    name: "Edit",
    computed: {
        parsedHtml() {
            return markdown.toHTML(this.current.text);
        },
        current() {
            let id = this.$route.params.id;
            return this.$store.getters.getById(id);
        }
    },
    created() {
        if (this.current === undefined) {
            this.$store.commit('insertEmpty');
        }
    },
    methods: {
        sendData() {
            let currentId = this.$route.params.id
            let newTitle = this.current.title;
            let newText = this.current.text;
            axios.post('/edit', {
                id: currentId,
                title: newTitle,
                text: newText
            }).then((result) => {
                let generatedID = result.data.id;
                this.$store.commit(
                    'update',
                    {
                        id: currentId,
                        newID: generatedID,
                        title: newTitle,
                        text: newText
                    }
                );
            }).catch(err => console.log(err));
            this.$router.push("/");
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

    .button-wrapper {
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

    .input-wrapper {
        display: flex;
        flex-direction: row;
        & > * {
            margin: 20px;
        }
    }

    textarea {
        min-height: 500px;
    }
</style>
