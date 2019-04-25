<template>
    <div>
        <router-link to="/edit/new" class="link newDoc">Создать новый документ</router-link>
        <div class="wrapper">
            <div class="card" v-for="document in documents">
                <div class="info">
                    <p class="title">{{document.title}}</p>
                    <router-link :to="'/edit/' + document._id" class="link">{{document.text}}</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "Index",
    data() {
        return {
            documents: []
        }
    },
    mounted() {
        axios.get('/index')
            .then(response => {
                this.documents = response.data;
            }).catch(err => {
                console.error(err);
            });
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
    }
</style>
