<template>
  <div>
    <Topbar></Topbar>
    
    <Left logado></Left>
    <div class="content-page">
      <div class="content">
        <div class="container-fluid">
        <Register></Register>
        </div>
      </div>
    </div>
        
  </div>

</template>

<script>
// @ is an alias to /src
import Topbar from "@/components/TopBar.vue";
import Left from "@/components/Leftsidebar.vue";
import Register from "@/components/Register.vue"


export default {
  name: "home",
  components:{
    Topbar,
    Left,
    Register
  }
}
</script>
