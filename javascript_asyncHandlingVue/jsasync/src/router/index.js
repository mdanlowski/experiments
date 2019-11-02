import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

import axios from 'axios';
import store from '@/store';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/profile',
    name: 'profile',
    // route level code-splitting
    // this generates a separate chunk (profile.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
    },
    beforeEnter: (to, from, next) => {
      // axios.get("http://localhost:4000/profile/true")
      // axios.get("http://localhost:4000/profile/blahblah")
      axios.get("http://localhost:4000/profile-wait/true")        // simulate slow async response by setTimeout on server
      // axios.get("http://localhost:4000/profile-wait/heuheuh")   // simulate slow async response by setTimeout on server
        .then(function(response){
            store.commit('setProfile', response.data);
            if(store.state.profile.isAuthenticated) {
              next();
            } else {
              next('/login');
            }
          }
        ).catch(function(error){
            console.log("Server error or unreachable");
          }
        ).finally(function(){

          }
        );
    }
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import(/* webpackChunkName: "login" */ '../views/Login.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
