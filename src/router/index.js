import {createRouter, createWebHistory} from 'vue-router'
import Home from '../components/Home.vue'
import Shop from '../components/Shop.vue'
import Contact from '../components/Contact.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:"/",
            name:"Home",
            component:Home, 
        },
        {
            path:"/shop",
            name:"Shop",
            component:Shop, 
        },
        {
            path:"/contact",
            name:"Contact",
            component:Contact, 
        },
    ]
});

export default router