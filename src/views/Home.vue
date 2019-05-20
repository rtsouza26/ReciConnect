<template>
  <div>
    <TopBar></TopBar>
    <Leftsidebar logado></Leftsidebar>
    <div class="content-page">
      <div class="content">
        <div class="container-fluid">
          <router-view></router-view>
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
    Footer
  },
  data(){
    return{
      logado:Boolean
    }
  }
}
</script>
