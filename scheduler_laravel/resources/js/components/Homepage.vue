<template>
    <header></header>
    <homepage-body></homepage-body>
    <footer></footer>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import HomepageBody from "./HomepageBody.vue";

export default {
    name: "Homepage",
    components: {Header, Footer, HomepageBody},
    mounted() {
        console.log('Component mounted.1')
    }
}
</script>

<style scoped>

</style>
