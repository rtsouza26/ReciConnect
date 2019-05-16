<template>

    <div class="topbar">
       <div class="topbar-left">
            <router-link to= "/"><a href="index.html" class="logo"><span>Reci<span>Connect</span></span></a></router-link>
        </div> 
        <div class="navbar navbar-default" role="navigation">
            <div class="container-fluid">
                <ul class="nav navbar-nav list-inline navbar-left">
                    <li class="list-inline-item">
                                <button class="button-menu-mobile open-left">
                                    <i>teste</i>
                                </button>
                            </li>
                    <li class="list-inline-item">
                         <router-link to="/login" class="page-title">Login</router-link>
                        
                    </li>
                    
                        
                    
                </ul>
                <nav class="navbar-custom">
                    <ul class="list-unstyled topbar-right-menu float-right mb-0">
                        <li>
                        </li>
                    </ul>
                


                </nav>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    name: "TopBar",
    

}
</script>

<style>

</style>
