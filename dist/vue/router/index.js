import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes.js';
import storage from 'local-storage';
import authorize from '@static/js/helpers/authorize.js';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach(async (to, from, next) => {
    /**
     * Authenticate user before they enter sensitive routes (widgets) and load content
     */
    if(to.path == '/' || router.authorized) {
        return next();
    }

    authorize(function(error, user) {
        if(error) {
            storage.clear();
            location.href = 'http://localhost:3002/signin';
        }

        router.authorized = true;

        console.log(user);

        return next();
    });
});

export default router;
