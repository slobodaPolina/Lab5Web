<template>
    <div>
        <router-link to="/edit/new" class="link newDoc">Создать новый документ</router-link>
        <div class="wrapper">
            <div class="card" v-for="document in existingDocuments">
                <div class="info">
                    <p class="title">{{document.title}}</p>
                    <router-link :to="'/edit/' + document._id" class="link">Редактировать</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Index",
    computed: {
        documents () {
            return this.$store.state.documents
        },
        existingDocuments() {
            return this.documents.filter(doc => doc._id != "new");
        }
    }
}
</script>


<style lang="scss">
    .wrapper {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: .5rem;
        align-items: flex-start;
    }
    .card {
        background-color: #269926;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-gap: .5rem;
        align-items: flex-start;
    }
    .info {
        padding: 10px;
    }
    .title, .card .link {
        color: white;
    }
    .title {
        text-align: center;
        font-weight: bold;
    }
    .link {
        text-decoration: none;
        font-style: italic;
    }
    .newDoc {
        margin: 20px;
        color: green;
    }
</style>
