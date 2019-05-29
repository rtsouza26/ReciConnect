<template>

<div class = "left side-menu">
    <div  class = "sidebar-inner slimscrollleft" >
    
        <div v-if = "login" class = "user-box" >
            
                <div class = "user-img">
                <img src="../assets/images/man.png" alt="user-img" title="Man" class="rounded-circle img-thumbnail img-responsive">
                </div>
                <h5>{{ usuario.nome }}</h5>
                <div class="progress">
                    <div class="progress-bar progress-bar-primary progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" v-bind:style="'width:'+ usuario.pontos +'%'">
                        
                    </div>
                </div>
                <ul class="list-inline">
                    <li class="list-inline-item">
                        <router-link to="/cadastro" >
                            <i class="mdi mdi-settings mdi-24px"></i>
                        </router-link>
                    </li>

                    <li class="list-inline-item">
                        <router-link to="/"  class="text-custom">
                            <i class="mdi mdi-power mdi-24px"></i>
                        </router-link>
                    </li>
                </ul>
                
                
        </div>
    
        <div id="sidebar-menu">
            <ul>
                <li class="text-muted menu-title">Navegação</li>
                <li>
                    <router-link to="/login" class="waves-effect"><i class="mdi mdi-account mdi-24px"></i><span>Login</span></router-link></li> 
                <li>
                    <router-link to="/mapab" class="waves-effect green"><i class="mdi mdi-map mdi-24px"></i><span>Mapa</span></router-link></li>
                <li class="has_sub">
                    <router-link to="/cadastro" class="waves-effect"><i class="mdi mdi-recycle mdi-24px"></i><span>Cadastro</span> </router-link></li>
                <li class="has_sub">
                    <router-link to="/cadastroins" class="waves-effect"><i class ="mdi mdi-creation mdi-24px"></i><span> Dicas </span> </router-link></li>
                <li class="has_sub">
                    <router-link to="/chat" class="waves-effect"><i class ="mdi mdi-wechat mdi-24px"></i><span> Chat </span> </router-link></li>
                <li class="has_sub">
                    <router-link to="/rank" class="waves-effect"><i class ="mdi mdi-trophy mdi-24px"></i><span> Ranking</span> </router-link></li>   
                    
            </ul>
        </div>
    
    </div>
</div>
</template>

<script>

export default {
    name: "Leftsidebar",
    props:{
            login:null,
            usuario:{
                email:null,
                nome:null,
                senha:null,
                avatar:0,
                pontos:null,
            }
            
        
    }

}
</script>
<style>
.checked {
  color: orange;
}
</style>

