<template>
<div class ="row">
    <div class="col-12">
        <div class="card-box">
            <div clas="row">
                <div class="dropdown pull-right">
                    <router-link to="/cadastroins"><button class="btn btn-primary waves-effect waves-light">Cadastro de Instituição</button></router-link>
                </div>
                    <h1 class="display-4">{{ titulo }}</h1>
                    <div class= "card-box">
                        <div v-show ="cadastrado" class= "alert alert-success">
                                <p>Usuario Cadastrado com sucesso</p>
                        </div>
                        <div v-show ="errou" class= "alert alert-danger">
                                <p>Houve algum erro no Cadastro!!!! Por favor tentar mais tarde</p>
                        </div>
                        <form @submit.prevent= "checkForm">

                            <div class="form-group">
                                <label>Email*</label>
                                <input type="text"  id = "email" name = "email" v-validate="'required|email'"  v-model = "usuario.email" :class="{'input':true ,'is-danger': errors.has('email')}"  
                                    placeholder="Entre com seu Email" class="form-control">
                                 <div v-show ="errors.has('email')" class = "alert alert-danger">
                                    <span >{{ errors.first('email') }}</span> 
                                 </div>  
                            </div>

                            <div class="form-group">
                                <label for="userName">Nome*</label>
                                <input  type="text" name= "name" id="name" v-validate="'required|alpha_spaces'" v-model= "usuario.nome"  
                                    placeholder="Entre com o seu nome" class="form-control"  >
                                <div v-show ="errors.has('name')" class = "alert alert-danger">
                                    <span >{{ errors.first('name') }}</span> 
                                </div>    
                            </div>
                            
                            <div class="form-group">
                                <label for="pass1">Senha*</label>
                                <input id="senha" nome="senha" v-validate= "'required'" ref="senha" type="password" v-model= "usuario.senha" placeholder="Password" 
                                    class="form-control">
                                <div v-show ="errors.has('senha')" class = "alert alert-danger">
                                    <span >{{ errors.first('senha') }}</span> 
                                </div>  
                            </div>
                            <div class="form-group">
                                <label for="passWord2">Confirme a Senha *</label>
                                <input id="confirm_senha" name="confirm_senha"  v-validate= "'required|confirmed:senha'"  type="password"
                                    placeholder="Password" class="form-control">
                                <div v-show ="errors.has('confirm_senha')" class = "alert alert-danger">
                                    <span >{{ errors.first('confirm_senha') }}</span> 
                                </div> 
                            </div>
                                <div class="form-check">
                                    <h3 class="header-title m-t-0 m-b-30">Escolha um Avatar*</h3>
                                    <div class="card-box">
                                        <div v-show ="errors.has('radio_box')" class = "alert alert-danger">
                                            <span >{{ errors.first('radio_box') }}</span> 
                                        </div>
                                        <label class="form-check-label p-2">
                                            <input class="form-check-input p-2" type="radio" v-validate= "'required|included:1,2,3,4,5,6,7'" v-model = "usuario.avatar" name="radio_box" id="radio_box" value="1">
                                            <img src="../assets/images/avatares/man.png" alt="user-img" title="Man1" class="rounded-circle img-thumbnail img-responsive">
                                        </label>
                                        
                                        <label class="form-check-label p-2">
                                             <input class="form-check-input p-2" type="radio" v-model = "usuario.avatar" name="radio_box" id="radio_box" value="2">
                                            <img src="../assets/images/avatares/man2.png" alt="user-img" title="Man2" class="rounded-circle img-thumbnail img-responsive">
                                        </label>
                                        
                                        <label class="form-check-label p-2">
                                            <input class="form-check-input" type="radio" v-model = "usuario.avatar" name="radio_box" id="radio_box" value="3">
                                            <img src="../assets/images/avatares/man3.png" alt="user-img" title="Man3" class="rounded-circle img-thumbnail img-responsive">
                                        </label>
                                        
                                        <label class="form-check-label p-2">
                                            <input class="form-check-input" type="radio" v-model = "usuario.avatar" name="radio_box" id="radio_box" value="4">
                                            <img src="../assets/images/avatares/woman5.png" alt="user-img" title="woman" class="rounded-circle img-thumbnail img-responsive">
                                        </label>
                                        
                                        <label class="form-check-label p-2">
                                            <input class="form-check-input" type="radio" v-model = "usuario.avatar" name="radio_box" id="radio_box" value="5">
                                            <img src="../assets/images/avatares/woman2.png" alt="user-img" title="woman" class="rounded-circle img-thumbnail img-responsive">
                                        </label>
                                        
                                        <label class="form-check-label p-2">
                                            <input class="form-check-input" type="radio" v-model = "usuario.avatar" name="radio_box" id="radio_box" value="6">
                                            <img src="../assets/images/avatares/woman3.png" alt="user-img" title="woman" class="rounded-circle img-thumbnail img-responsive">
                                        </label>
                                        
                                        <label class="form-check-label p-2">
                                            <input class="form-check-input" type="radio" v-model = "usuario.avatar" name="radio_box" id="radio_box" value="7">
                                            <img src="../assets/images/avatares/woman4.png" alt="user-img" title="woman" class="rounded-circle img-thumbnail img-responsive">
                                        </label>
                                    </div>
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
</div>
   
</template>

<script>
import Usuario from "../services/Register"



export default {
    name: "Register",
    props:{
        titulo:String
    },
    data:() =>({
        
            cadastrado :false,
            errou:false,
            usuario:{
                email:null,
                nome:null,
                senha:null,
                avatar:0,
                pontos:0
            
            }
            
        }),
        
    methods:{
        salvar(){
            Usuario.salvar(this.usuario).then(resposta =>{
                                this.usuario = {};
                                this.cads();
                            }).catch(e =>{
                                this.eru();
                                console.log(e);
                                
                            })
        },
        checkForm(){
            
            this.$validator.validateAll().then((result)=>{
                if(result){
                    this.salvar();
                    return;
                }
            })
        },
        cads(){
            this.cadastrado=true;
        },
        eru(){
            this.errou=true;
        }
                 
        
    }

}
</script>

<style>

</style>
