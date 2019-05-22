<template>
  <div>
    <TopBar></TopBar>
    <Leftsidebar :logado={login}></Leftsidebar>
    <div class="content-page">
      <div class="content">
        <div class="container-fluid">
          <router-view name = "titulo" :titulo="mapa" ></router-view>
          <router-view @emit-click="getLeftBar"></router-view>
          <router-view name = "titulo" :titulo="Sobre" ></router-view>
          <router-view name="about"></router-view>
          <Footer></Footer>
        </div>
      </div>
    </div> 
  </div>

</template>

<script>
// @ is an alias to /src
import TopBar from "@/components/TopBar.vue";
import Leftsidebar from "@/components/Leftsidebar.vue";
import Footer from "@/components/Footer.vue"

export default {
  name: "home",
  components:{
    TopBar,
    Leftsidebar,
    Footer,
  
  },
  props:{
    
      login:Boolean,

    mapa:String,
    Sobre:String,
    Register:String
  },
  methods:{
    getLeftBar(login){
        this.login = login;
    }
  }
}
</script>
