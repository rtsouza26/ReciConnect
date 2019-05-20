<template>

<div class = "left side-menu">
    <div  class = "sidebar-inner slimscrollleft" >
        <div v-show="this.logado" class = "user-box" >
            <div class = "user-img">
                <img src="/assets/image/man.png" alt="user-img" title="Man" class="rounded-circle img-thumbnail img-responsive">
            </div>
            <h5><a href="#">Teste de Usuários</a> </h5>
                
        </div>
    
        <div id="sidebar-menu">
            <ul>
                <li class="text-muted menu-title">Navigation</li>
                <li>
                    <router-link to="/login" class="waves-effect"><span>Login</span></router-link></li> 
                <li>
                    <router-link to="/cadastro" class="waves-effect"><span>Cadastro</span></router-link></li>
                <li class="has_sub">
                    <a href="#" class="waves-effect"><span> User Interface </span> </a></li>
                <li class="has_sub">
                    <a href="#" class="waves-effect"><span> Forms </span> </a></li>
                <li class="has_sub">
                    <a href="#" class="waves-effect"> <span> Tables </span> </a></li>
                <li class="has_sub">
                <a href="#" class="waves-effect"><span> Charts </span></a>
                </li>
                <li>
                <a href="#" class="waves-effect"><span> Calendar </span></a>
                </li>
                <li class="has_sub">
                <a href="#" class="waves-effect"><span> Pages </span> </a>
                </li>
                <li class="has_sub">
                <a href="#" class="waves-effect"><span>Extra Pages </span> </a>
                </li>

            </ul>
        </div>
    
    </div>
</div>
</template>

<script>

export default {
    name: "Leftsidebar",
    props:{
        logado : Boolean
    }

}
</script>

