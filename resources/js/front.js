windows.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-with'] = 'XMLHttpRequest';


window.Vue = require('vue');


import VueRouter from 'vue-router'
import App from "./views/App";


Vue.use(VueRouter);

import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const  router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/homepage',
            name: 'homepace',
            component: Home
        },
        {
        path: '/about-us',
        name: 'about-us',
        component: About
        },
        {
            path: '/posts',
            name: 'posts',
            component: Posts
        },
        {
            path: '/contact-us',
            name: 'contact-us',
            component: Contact
        },
        {
            path: '/not-found',
            name: 'not-found',
            component: NotFound
        }
    
    ]
});

const app = new Vue({
    el: '#root',
    render: h => h(App),
    router
});
