import Vue from 'vue';
import Vuex from 'vuex';
import storage from 'local-storage';

Vue.use(Vuex);

const modules = {};

const state = {
    user: {},

    magicSearchPosition: 0,
};

const mutations = {
    SET_USER: (state) => {
        state.user = storage.get('user');
    },

    CHANGE_MAGIC_SEARCH_POSITION: (state, pos) => {
        state.magicSearchPosition = pos;
    },
};

const actions = {};

export default new Vuex.Store({
    modules,
    state,
    mutations,
    actions,
});