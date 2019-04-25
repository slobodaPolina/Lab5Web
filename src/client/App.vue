<template>
    <div class="main">
        <header>
            <router-link to="/">To the main page</router-link>
        </header>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "App"
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
