<template>
    <div class="row">
        <div class="col-12">
            <router-view></router-view>
            <Post v-for="post in posts" :key="post" :post="post"/>
        </div>
    </div>
    
</template>

<script>
import Post from '../components/Post.vue';
export default {
    nome: "PostList",
    
    components: { 
        Post,
    },
    data: function (){
        return{
            posts: [],
        }
    },
    methods: {
        getPosts(){
            axios.get('http//localhost:8000/api/posts')
            .then((result)=>{
                //console.log(result.data.data);
                this.posts = result.data.data;
                condole.log(this.posts);
            })
            .cach((error) => {
                console.loge(error);
            })
        }
    },

    created(){
        this.getPosts();
    }
}
</script>

<style lang="sass" scoped>