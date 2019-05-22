<template>
    
    <div class="wrapper-page">
        <div class="text-center">
            <router-link to="/"><a class="logo"><span>Rec<span>Connect</span></span></a></router-link>
            <h5 class="text-muted m-t-0 font-600">Você fazendo um mundo melhor</h5>
        </div>
        	<div class="m-t-40 card-box">
                <div class="text-center">
                    <h4 class="text-uppercase font-bold m-b-0">Sign In</h4>
                </div>
                <div class="p-20">
                    <form class="form-horizontal m-t-20" >

                        <div class="form-group">
                            <div class="col-xs-12">
                                <input class="form-control" type="text" required="" v-model="auth.login" placeholder="Email">
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-xs-12">
                                <input class="form-control" type="password" required="" v-model="auth.senha" placeholder="Senha">
                            </div>
                        </div>

                        <div class="form-group ">
                            <div class="col-xs-12">
                                <div class="checkbox checkbox-custom">
                                    
                                </div>

                            </div>
                        </div>

                        <div class="form-group text-center m-t-30">
                            <div class="col-xs-12">
                                <button class="btn btn-custom btn-bordred btn-block waves-effect waves-light" type="submit" @click="this.submit">Log In</button>
                            </div>
                        </div>

                        <div class="form-group m-t-30 m-b-0">
                            <div class="col-sm-12">
                                <a href="#" class="text-muted"><i class="fa fa-lock m-r-5"></i> Esqueceu sua Senha?</a>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
            <!-- end card-box-->

            <div class="row">
                <div class="col-sm-12 text-center">
                    <p class="text-muted">Não tem uma Conta? <router-link to="/cadastro" class="text-primary m-l-5"><b>Registre-se</b></router-link></p>
                </div>
            </div>
            
        </div>
    
</template>

<script>


export default {
    name: "login",
    data(){
        return{
            auth:{
                login: null,
                senha: null,
                logado:String,
                remenbeme:false
                }
        }
    }, mounted(){
        
    },
    methods:{
        submit(){
            
            this.$router.push("/logado");
        }
    }
}
</script>

<style>

</style>
