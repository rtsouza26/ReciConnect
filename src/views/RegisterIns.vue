<template>
<div class ="row">
    <div class="col-sm-12">
        <div class="card-box">
            <div clas="row">
                <div class = "col-12">
                    <h1 class="display-4">Cadastro de Instituição</h1> 
                    <form  data-parsley-validate novalidate >
                        <div class="form-group">
                            <label for="userName">Nome da Intituição*</label>
                            <input  type="text" name="nome"   parsley-trigger="change" required
                                placeholder="Entre com o seu nome" class="form-control" id="userName" >
                        </div>
                        <div class="form-group">
                            <label for="emailAddress">Email*</label>
                            <input type="email" name="email"   parsley-trigger="change" required
                                placeholder="Entre com seu Email" class="form-control" id="emailAddress">
                        </div>
                        <div class="form-group">
                            <label for="emailAddress">CNPJ*</label>
                            <input type="email" name="email"   parsley-trigger="change" required
                                placeholder="Entre com seu Email" class="form-control" id="emailAddress">
                        </div>
                        <div class="form-group">
                            <label for="emailAddress">Endereço*</label>
                            <input type="email" name="email"   parsley-trigger="change" required
                                placeholder="Entre com seu Email" class="form-control" id="emailAddress">
                        </div>
                        <div class="form-group">
                            <label for="emailAddress">Telefone</label>
                            <input type="email" name="email"   parsley-trigger="change" required
                                placeholder="Entre com seu Email" class="form-control" id="emailAddress">
                        </div>
                        <div class="form-group">
                            <label for="emailAddress">Email*</label>
                            <input type="email" name="email"   parsley-trigger="change" required
                                placeholder="Entre com seu Email" class="form-control" id="emailAddress">
                        </div>
                        <div class="form-group">
                            <label for="pass1">Senha*</label>
                            <input id="pass1" type="password"   placeholder="Password" required
                                class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="passWord2">Confirme a Senha *</label>
                            <input data-parsley-equalto="#pass1" type="password" required
                                placeholder="Password" class="form-control" id="passWord2">
                        </div>
                            <div class="form-check">
                                <h3 class="header-title m-t-0 m-b-30">Escolha um Avatar</h3>
                                <input class="form-check-input" type="radio"  name="inlineRadioOptions" id="inlineRadio1" value="1">
                                <label class="form-check-label" for="inlineRadio1">
                                    <img src="/assets/image/avatares/man.png" alt="user-img" title="Man" class="rounded-circle img-thumbnail img-responsive">
                                </label>
                                 <input class="form-check-input" type="radio"  name="inlineRadioOptions" id="inlineRadio2" value="2">
                                <label class="form-check-label" for="inlineRadio2">
                                    <img src="/assets/image/avatares/man2.png" alt="user-img" title="Man" class="rounded-circle img-thumbnail img-responsive">
                                </label>
                                 <input class="form-check-input" type="radio"  name="inlineRadioOptions" id="inlineRadio3" value="3">
                                <label class="form-check-label" for="inlineRadio3">
                                    <img src="/assets/image/avatares/man3.png" alt="user-img" title="Man" class="rounded-circle img-thumbnail img-responsive">
                                </label>
                                 <input class="form-check-input" type="radio"  name="inlineRadioOptions" id="inlineRadio4" value="4">
                                <label class="form-check-label" for="inlineRadio4">
                                    <img src="/assets/image/avatares/woman5.png" alt="user-img" title="Man" class="rounded-circle img-thumbnail img-responsive">
                                </label>
                                <input class="form-check-input" type="radio"  name="inlineRadioOptions" id="inlineRadio5" value="5">
                                <label class="form-check-label" for="inlineRadio5">
                                    <img src="/assets/image/avatares/woman2.png" alt="user-img" title="Man" class="rounded-circle img-thumbnail img-responsive">
                                </label>
                                <input class="form-check-input" type="radio"  name="inlineRadioOptions" id="inlineRadio6" value="6">
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
</div>
</template>

<script>
export default {
    name: "RegisterIns",
    props:{
        titulo:null
    },
    data(){
        return{
            intituicao:{
                nome:String,
                endereco:String,
                email:String,
                telefone:String,
                cnpj:String,


            }
        }
    
    },
    methods:{
        salva:function(){

        }
    }

}

<style>

</style>
