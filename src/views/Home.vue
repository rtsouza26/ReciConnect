<template>
  <div>
    <Topbar></Topbar>
    <router-view></router-view>
  </div>

</template>

<script>
// @ is an alias to /src

import Left from "@/components/Leftsidebar.vue";
import Topbar from "@/components/TopBar.vue"



export default {
  name: "home",
  components:{
    Topbar,
    Left
  }
};
</script>
