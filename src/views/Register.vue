<template>
<div class ="row">
    <div class="col-12">
        <div class="card-box">
            <div clas="row">
                <div class="dropdown pull-right">
                    <router-link to="/cadastroins"><button class="btn btn-primary waves-effect waves-light">Cadastro de Instituição</button></router-link>
                </div>
                    <h1 class="display-4">{{ titulo }}</h1> 
                    <form  data-parsley-validate novalidate  @submit.prevent="salvar">
                        <div class="form-group">
                            <label for="userName">Nome*</label>
                            <input  type="text" name="nome" v-model= "usuario.nome"  parsley-trigger="change" required
                                placeholder="Entre com o seu nome" class="form-control" id="userName" >
                        </div>
                        <div class="form-group">
                            <label for="emailAddress">Email*</label>
                            <input type="email" name="email"  v-model = "usuario.email" parsley-trigger="change" required
                                placeholder="Entre com seu Email" class="form-control" id="emailAddress">
                        </div>
                        <div class="form-group">
                            <label for="pass1">Senha*</label>
                            <input id="pass1" type="password"  v-model= "usuario.password" placeholder="Password" required
                                class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="passWord2">Confirme a Senha *</label>
                            <input data-parsley-equalto="#pass1" type="password" required
                                placeholder="Password" class="form-control" id="passWord2">
                        </div>
                            <div class="form-check">
                                <h3 class="header-title m-t-0 m-b-30">Escolha um Avatar</h3>
                                <input class="form-check-input" type="radio" v-model = "usuario.avatar" name="inlineRadioOptions" id="inlineRadio1" value="1">
                                <label class="form-check-label" for="inlineRadio1">
                                    <img src="/assets/image/avatares/man.png" alt="user-img" title="Man" class="rounded-circle img-thumbnail img-responsive">
                                </label>
                                 <input class="form-check-input" type="radio" v-model = "usuario.avatar" name="inlineRadioOptions" id="inlineRadio2" value="2">
                                <label class="form-check-label" for="inlineRadio2">
                                    <img src="/assets/image/avatares/man2.png" alt="user-img" title="Man" class="rounded-circle img-thumbnail img-responsive">
                                </label>
                                 <input class="form-check-input" type="radio" v-model = "usuario.avatar" name="inlineRadioOptions" id="inlineRadio3" value="3">
                                <label class="form-check-label" for="inlineRadio3">
                                    <img src="/assets/image/avatares/man3.png" alt="user-img" title="Man" class="rounded-circle img-thumbnail img-responsive">
                                </label>
                                 <input class="form-check-input" type="radio" v-model = "usuario.avatar" name="inlineRadioOptions" id="inlineRadio4" value="4">
                                <label class="form-check-label" for="inlineRadio4">
                                    <img src="/assets/image/avatares/woman5.png" alt="user-img" title="Man" class="rounded-circle img-thumbnail img-responsive">
                                </label>
                                <input class="form-check-input" type="radio" v-model = "usuario.avatar" name="inlineRadioOptions" id="inlineRadio5" value="5">
                                <label class="form-check-label" for="inlineRadio5">
                                    <img src="/assets/image/avatares/woman2.png" alt="user-img" title="Man" class="rounded-circle img-thumbnail img-responsive">
                                </label>
                                <input class="form-check-input" type="radio" v-model = "usuario.avatar" name="inlineRadioOptions" id="inlineRadio6" value="6">
                                <label class="form-check-label" for="inlineRadio6">
                                    <img src="/assets/image/avatares/woman3.png" alt="user-img" title="Man" class="rounded-circle img-thumbnail img-responsive">
                                </label>
                            </div>
                        
                        <div class="form-group text-right m-b-1">
                            <button class="btn btn-primary waves-effect waves-light"  >
                                Cadastrar
                            </button>
                            <button type="reset" class="btn btn-secondary waves-effect waves-light m-l-5">
                                Cancelar
                            </button>
                        </div>
                    </form>
                
            </div>
        </div>
    </div>
</div>
   
</template>

<script>
import Usuario from "../services/Register"
export default {
    name: "Register",
    props:{
        titulo:String
    },
    data(){
        return{
            usuario:{
                nome:null,
                email:null,
                password:null,
                avatar:0
            }
        }
    
    },computed:{

    },
    methods:{
        salvar:function(){
            if(this.usuario.nome!=null){
                if(this.usuario.email!=null){
                    if(this.usuario.password!=null){
                        if(this.usuario.avatar!=0.){
                            Usuario.salvar(this.usuario).then(resposta =>{
                                
                                alert("Salvo com sucesso")
                            })
                            this.usuario.nome=null;
                            this.usuario.email=null;
                            this.usuario.password=null;
                            this.usuario.avatar=0;
                        }
                    }else{
                         alert("Valor inválido para senha")
                    }
                }else{
                alert("Valor inválido para o email")
                }
            }else{
                alert("Valor inválido para nome do usuário")
            }
        }
    }

}
</script>

<style>

</style>
