<template>
    <div class="main">
        Hello from Vue to {{ name }}
    </div>
</template>

<script>

export default {
    name: "App",
    data() {
        return {
            name: 'Polina'
        }
    }
}
</script>

<style lang="scss">
    .main {
        display: flex;
        color: pink;
        background-color: black;
    }
</style>
