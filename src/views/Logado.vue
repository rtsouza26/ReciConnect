<template>
<div>
    <TopBar></TopBar>
    <Leftsidebar :login={logado}></Leftsidebar>
    <div class="content-page">
      <div class="content">
        <div class="container-fluid">
            <router-view name = "titulo" :titulo="mapa" ></router-view>
            <router-view name = "mapa"></router-view>
            <router-view name = "titulo" :titulo="Sobre" ></router-view>
            <router-view name="about"></router-view>

            <Footer></Footer>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import TopBar from "@/components/TopBar.vue";
import Leftsidebar from "@/components/Leftsidebar.vue";
import Footer from "@/components/Footer.vue";

export default {
    name:"Logado",
    components:{
        TopBar,
        Leftsidebar,
        Footer
    },
    props:{
        logado:Boolean,
        mapa:String,
        Sobre:String,
    },
  methods:{
    getLeftBar(login){
        this.login = login;
    }
  }
}
</script>

<style>

</style>
