<template>
    <div class="wrapper-page">
        <div class="ex-page-content text-center">
            <div class="text-error">404</div>
                <h3 class="text-uppercase font-600">Página não Encontrada</h3>
                <p class="text-muted">
                    Desculpe pelo transtorno, porem esse conteúdo não foi encontrado
                </p>
                <br>
                <router-link to ="/" class="btn btn-success waves-effect waves-light"> Retorne a Home</router-link>

            </div>
        </div>
</template>

<script>
export default {
    name:"404"
}
</script>

<style>

</style>
