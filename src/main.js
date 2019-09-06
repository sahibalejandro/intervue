// advait.trivedi@ehealth.com
import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router';
import Vuex from 'vuex';
import formComponent from './components/formComponent.vue';
import codeComponent from './components/codeComponent.vue';
import thanksComponent from './components/thanksComponent.vue';

Vue.config.productionTip = false
Vue.use(Router);
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
    },

    mutations: {
        setFirstName(state, firstName) {
            state.firstName = firstName;
        },
        setLastName(state, lastName) {
            state.lastName = lastName;
        },
        setPhone(state, phone) {
            state.phone = phone;
        },
        setEmail(state, email) {
            state.email = email;
        }
    }
});

const router = new Router({
    routes: [
        {path: '/', component: formComponent},
        {path: '/code', component: codeComponent},
        {path: '/thanks', component: thanksComponent},
    ]
});

new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app')
