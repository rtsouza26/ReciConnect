<template>
<div>
        <TopBar></TopBar>
          
                <div class="content">
                    <div class="container-fluid">
                        <div class="row">
                            
                            <div class = "col-12">
                                <Titulos titulo= "----"></Titulos>
                                <Mapa></Mapa>
                                <Titulos titulo="Estatisticas"></Titulos>
                                <About></About>
                                <Footer></Footer>
                            </div>
                        </div>
                    </div>
                </div>
            

</div>

</template>

<script>
import TopBar from "@/components/TopBar.vue";
import Mapa from "../views/Mapa";
import Footer from "@/components/Footer.vue";
import Titulos from "@/components/Titulos.vue";
import About from "../views/About";

export default {
    name:"MapaB",
    components:{
        TopBar,
        Mapa,
        Footer,
        Titulos,About
    },
    data(){
        return{
            login:false
                
                
        
        }
    },
    methods:{
        emitClick(){
            this.$emit('emitClick',login)
        }
    }


}
</script>

<style>

</style>
