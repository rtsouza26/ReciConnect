import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Mapa from "./views/Mapa.vue";
import Register from "./views/Register.vue"
import About from "./views/About.vue"
import Cod404 from "./views/404.vue"
import Titulos from "./components/Titulos.vue"
import RegisterIns from "./views/RegisterIns.vue"
import MapaB from "./views/MapaB.vue"




Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
            {
              path:"/",
              name:"home",
              component: Home,
              props:{
                login:true,
                mapa:"Mapa",
                Sobre:"Sobre"
              },
              children:[{
                  path:"/cadastro",
                  component:Register,
                    props:{
                      titulo:"Cadastro de Usuário"
                    }

                },{
                  path:"/mapaB",
                  component:MapaB
                },{
                  path:"/cadastroins",
                  component:RegisterIns,
                  props:{
                    titulo:"Cadastro de Instituição"
                  }
                },{
                  path:"/login",
                  name:"AuthLogin",
                  component:Login
                },{
                  path:"/",
                  components:{
                    default:Mapa,
                    about:About,
                    titulo:Titulos},
                },{
                  path:"/logado",
                  components:{
                    default:Mapa,
                    about:About,
                    titulo:Titulos
                  }
                }]
              },{
                path:"*",
                component:Cod404
              }
          ]
});
