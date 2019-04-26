import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './App.vue';
import Edit from './Edit.vue';
import Index from './Index.vue';

Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
  { path: '/edit/:id', component: Edit },
  { path: '/', component: Index }
];

const router = new VueRouter({
  routes
});

const store = new Vuex.Store({
    state: {
        documents: []
    },
    getters: {
        getById: state => id => {
            return state.documents.filter(doc => {
                return doc._id === id
            })[0];
        }
    },
    mutations: {
        insertEmpty (state) {
            let containsEmpty = state.documents.filter(doc => {
                return doc._id === "new";
            }).length > 0;
            if (!containsEmpty) {
                state.documents.push({_id: "new", title: "", text: ""});
            }
        },
        update (state, {id, newID, title, text}) {
            let result = state.documents.filter(doc => {
                return doc._id === id
            });
            result[0]._id = newID;
            result[0].title = title;
            result[0].text = text;
        },
        insertAll (state, documents) {
            state.documents = documents;
        }
    }
});

new Vue({
    el: "#app",
    render: h => h(App),
    router,
    store
});
