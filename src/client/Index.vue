<template>
    <div class="wrapper">
        <div class="card">
            <div class="info">
                <p class="title">Название документа</p>
                <router-link to="/edit/1" class="link">Редактировать документ</router-link>
            </div>
        </div>
        <div class="card">
            <p class="title">Название документа</p>
            <router-link to="/edit/2" class="link">Редактировать документ</router-link>
        </div>
        <div class="card">
            <p class="title">Название документа</p>
            <router-link to="/edit/3" class="link">Редактировать документ</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "Index",
    data() {
        return {
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
    .title, .link {
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
</style>
