<template>

<div class = "left side-menu">
    <div  class = "sidebar-inner slimscrollleft" >
    
        <div v-show= "this.logado.login" class = "user-box" >
            <div class = "user-img">
                <img src="/assets/image/man.png" alt="user-img" title="Man" class="rounded-circle img-thumbnail img-responsive">
            </div>
            <h5><a href="#">Teste de Usuários</a> </h5>
                
        </div>
    
        <div id="sidebar-menu">
            <ul>
                <li class="text-muted menu-title">Navegação</li>
                <li>
                    <router-link to="/login" class="waves-effect"><i class="mdi mdi-account mdi-24px"></i><span>Login</span></router-link></li> 
                <li>
                    <router-link to="/mapa" class="waves-effect green"><i class="mdi mdi-map mdi-24px"></i><span>Mapa</span></router-link></li>
                <li class="has_sub">
                    <router-link to="/sobre" class="waves-effect"><i class="mdi mdi-recycle mdi-24px"></i><span>Sobre</span> </router-link></li>
                <li class="has_sub">
                    <router-link to="/tips" class="waves-effect"><i class ="mdi mdi-creation mdi-24px"></i><span> Dicas </span> </router-link></li>
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
        logado :{
            login:Boolean,
            
        }
    }

}
</script>

