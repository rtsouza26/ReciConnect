import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Mapa from "./views/Mapa.vue";
import Register from "./views/Register.vue"





Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
      {
        path:"/",
        name:"home",
        component:
        Home,props:{logado:false},
        children:[{
          path:"/",
          component:Mapa
        },{
          path:"/cadastro",
          component:Register
        },{
          path:"/login",
          name:"AuthLogin",
          component:Login

        }]
      }
        
      
    ]
});
