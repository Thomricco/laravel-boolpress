<template>
<div class="container-fluid">
    <div class="row">
        <div>
            <div class="card">
                <d class="card-body">
                    <div class="card-title">
                        {{post.title}}
                    </div>
                    <div class="card-subtitle">
                        {{post.autore}}
                    </div>
                    <div class="card-footer">
                        {{post.content}}
                    </div>
                </d>
            </div>
        </div>
    </div>

</div>
    
</template>

<script>
export default {
    nome: "Post",
    components: { 
        
    }, 
    props: ['post']
}
</script>

<style lang="sass" scoped>

</style>