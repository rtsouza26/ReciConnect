<template>
<div class ="row">
    <div class="col-12">
        <div class="card-box">
            <div clas="row">
                
                    <h1 class="display-4">{{ tituloins }}</h1>
                    <div class= "card-box">
                        <div v-show ="cadastrado" class= "alert alert-success">
                                <p>Instituição Cadastrada com sucesso</p>
                        </div>
                        <div v-show ="erroIns" class= "alert alert-danger">
                                <p>Houve algum erro no Cadastro!!!! Por favor tentar mais tarde</p>
                        </div>
                        <form @submit.prevent= "checkForm">

                            <div class="form-group">
                                <label>Email*</label>
                                <input type="text"  id = "email" name = "email" v-validate="'required|email'"  v-model = "instituicao.email"  
                                    placeholder="Entre com o email da instituição" class="form-control">
                                 <div v-show ="errors.has('email')" class = "alert alert-danger">
                                    <span >{{ errors.first('email') }}</span> 
                                 </div>  
                            </div>

                            <div class="form-group">
                                <label for="userName">Nome*</label>
                                <input  type="text" name= "name" id="name" v-validate="'required|alpha_spaces'" v-model= "instituicao.nome"  
                                    placeholder="Entre com o nome d instituiição" class="form-control"  >
                                <div v-show ="errors.has('name')" class = "alert alert-danger">
                                    <span >{{ errors.first('name') }}</span> 
                                </div>    
                            </div>
                            <div class="form-group">
                                <label for="userName">CNPJ*</label>
                                <input  type="text" name= "cnpj" id="cnpj" v-validate="'required|digits:10'" v-model= "instituicao.cnpj"  
                                    placeholder="Entre com o CNPJ ou MEI da instituição" class="form-control"  >
                                <div v-show ="errors.has('cnpj')" class = "alert alert-danger">
                                    <span >{{ errors.first('cnpj') }}</span> 
                                </div>    
                            </div>
                            <div class="form-group">
                                <label for="userName">Endereço*</label>
                                <input  type="text" name= "address" id="address" v-validate="'required|alpha_num'" v-model= "instituicao.endereco"  
                                    placeholder="Entre com o endereço completo da instituição" class="form-control"  >
                                <div v-show ="errors.has('address')" class = "alert alert-danger">
                                    <span >{{ errors.first('address') }}</span> 
                                </div>    
                            </div>
                            <div class="form-group">
                                <label for="userName">Telefone*</label>
                                <input  type="text" name= "fone" id="fone" v-validate="'required|digits:10'" v-model= "instituicao.telefone"  
                                    placeholder="Entre com o telefone da instituição" class="form-control"  >
                                <div v-show ="errors.has('fone')" class = "alert alert-danger">
                                    <span >{{ errors.first('fone') }}</span> 
                                </div>    
                            </div>
                            
                            <div class="form-group">
                                <label for="pass1">Senha*</label>
                                <input id="senha" nome="senha" v-validate= "'required'" ref="senha" type="password" v-model= "instituicao.senha" placeholder="Password" 
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
                                    <h3 class="header-title m-t-0 m-b-30">Escolha uma Categoria*</h3>
                                    <div class="card-box">
                                        <div v-show ="errors.has('radio_box')" class = "alert alert-danger">
                                            <span >{{ errors.first('radio_box') }}</span> 
                                        </div>
                                        <label class="form-check-label p-2">
                                            <input class="form-check-input p-2" type="radio" v-validate= "'required|included:plastic,glass,metal,paper'" v-model = "instituicao.categoria" name="radio_box" id="radio_box" value="plastic">
                                            <img src="/assets/image/iconscategory/plastic.png" alt="plastic-img" title="plastic" class="rounded-circle img-thumbnail img-responsive">
                                        </label>
                                        
                                        <label class="form-check-label p-2">
                                             <input class="form-check-input p-2" type="radio" v-model = "instituicao.categoria" name="radio_box" id="radio_box" value="glass">
                                            <img src="/assets/image/iconscategory/glass.png" alt="glass-img" title="glass" class="rounded-circle img-thumbnail img-responsive">
                                        </label>
                                        
                                        <label class="form-check-label p-2">
                                            <input class="form-check-input" type="radio" v-model = "instituicao.categoria" name="radio_box" id="radio_box" value="metal">
                                            <img src="/assets/image/iconscategory/metal.png" alt="metal-img" title="metal" class="rounded-circle img-thumbnail img-responsive">
                                        </label>
                                        
                                        <label class="form-check-label p-2">
                                            <input class="form-check-input" type="radio" v-model = "instituicao.categoria" name="radio_box" id="radio_box" value="paper">
                                            <img src="/assets/image/iconscategory/paper.png" alt="paper-img" title="paper" class="rounded-circle img-thumbnail img-responsive">
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
import Intituicao from "../services/Registerins"
export default {

    name: "Registerins",
    props:{
        tituloins:String
    },
    data:() =>({
        
            cadastrado :false,
            erroIns:false,
            instituicao:{
                email:null,
                nome:null,
                senha:null,
                cnpj:null,
                endereco:null,
                telefone:null,
                categoria:null
                
            
            }
            
        }),
        
    methods:{
        salvar(){
            Intituicao.salvar(this.instituicao).then(resposta =>{
                this.instituicao = {};
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
            this.erroIns=true;
        }
                 
        
    }

}
</script>

<style>

</style>
