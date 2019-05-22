<template>

    <div class="topbar">
       <div class="topbar-left">
            <router-link to= "/" class="logo"><span>Reci<span>Connect</span></span><i class="mdi mdi-recycle mdi-36px"></i></router-link>
        </div> 
        <div class="navbar navbar-default" role="navigation">
            <div class="container-fluid">
                <ul class="nav navbar-nav list-inline navbar-left">
                    <li class="list-inline-item"> 
                    </li>  
                </ul>
                <nav class="navbar-custom">
                    <ul class="list-unstyled topbar-right-menu float-right mb-0">
                        <li class="hide-phone p-2">
                            <router-link to="/"><h4 class="page-title">Home </h4></router-link>  
                        </li>
                        <li class="hide-phone p-2">
                             <router-link to="/login"><h4 class="page-title">Login </h4></router-link>
                        </li>
                        <li class="hide-phone p-2">
                             <router-link to="/tips"><h4 class="page-title">Dicas </h4></router-link> 
                        </li>
                        <li class="hide-phone p-2">
                             <router-link to="/chat"><h4 class="page-title">Chat </h4></router-link>
                        </li>
                        <li class="hide-phone p-2">
                             <router-link to="/rank"><h4 class="page-title">Ranking </h4></router-link>
                        </li>
                        <li class="hide-phone">
                            <form class="app-search">
                                <input type="text" placeholder="Search..."
                                    class="form-control">
                                <button type="submit"><i class="fa fa-search"></i></button>
                            </form>
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
