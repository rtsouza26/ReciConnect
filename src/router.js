import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue"
import left from "./components/Leftsidebar.vue"
import topbar from "./components/TopBar.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
      {
        path: "/",
        name: "home",
        component: Home,
          children:[{
            path:"logado",
            component:left}

            
            
            
          ]
         
        
    },
    {
      path:"/login",
      name:"login",
      component: Login

    },
    
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
    
  ]
});
