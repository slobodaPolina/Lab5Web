<template>
    <div class="main">
        <header>
            <router-link to="/">На главную страницу</router-link>
        </header>
        <router-view></router-view>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "App",
    created() {
        axios.get('/index')
            .then(response => {
                this.$store.commit('insertAll', response.data);
            }).catch(err => {
                console.error(err);
            });
    }
}
</script>


<style lang="scss">
    header {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 15px;

        & > * {
            color: green;
            text-decoration: none;
            font-size: 18px;
        }
    }
</style>
