<template>
    <div class="container-fluid">
        <PostList/>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import Main from '../components/Main.vue';
export default {
    nome: "App",
    
    components: { 
        Header,
        Main
    }
}
</script>

<style lang="sass" scoped>

</style>