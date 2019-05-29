<template>
<div>
    <TopBar></TopBar>
    <Leftsidebar usuario= this.usuario></Leftsidebar>
    <div class="content-page">
      <div class="content">
        <div class="container-fluid">
            
            
            
            

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
        
        usuario:{
          email:null,
          nome:null,
          senha:null,
          avatar:null,
          pontos:null
        }
    },
    data:()=>({
      
    }),
  methods:{
    
  }
}
</script>

<style>

</style>
