import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import vueDebounce from 'vue-debounce';

Vue.use(vueDebounce, {
    fireOnEmpty: false
});

Vue.config.productionTip = false;

Vue.prototype.$apiPath = 'localhost:3000';

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#vue');