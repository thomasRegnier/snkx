import Vue from 'vue';
import Home from '../views/Home.vue';
import { IonicVueRouter } from '@ionic/vue';
import News from '../views/News.vue';
import AllNews from '../views/AllNews.vue';
import Sneaker from '../views/Sneaker.vue';
import Catalogue from '../views/Catalogue.vue'
import Brand from '../views/Brand.vue'
import AllProducts from '../views/AllProducts.vue'
import Search from '../views/Search.vue'
import Contact from '../views/Contact.vue'

Vue.use(IonicVueRouter);

import moment from 'moment'
import 'moment/locale/fr'  // without this line it didn't work

Vue.prototype.moment = moment
export default new IonicVueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/News/:id',
            name: 'News',
            component: News
        },
        {
            path: '/Sneaker/:id',
            name: 'Sneaker',
            component: Sneaker
        },
        {
            path: '/AllNews',
            name: 'AllNews',
            component: AllNews
        },
        {
            path: '/Catalogue',
            name: 'Catalogue',
            component: Catalogue
        },
        {
            path: '/Brand/:id',
            name: 'Brand',
            component: Brand
        },
        {
            path: '/AllProducts',
            name: 'AllProducts',
            component: AllProducts
        },
        {
            path: '/Search/:search',
            name: 'Search',
            component: Search
        },
        {
            path: '/Contact',
            name: 'Contact',
            component: Contact
        }

    ]
});