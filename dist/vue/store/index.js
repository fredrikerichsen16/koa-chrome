import Vue from 'vue';
import Vuex from 'vuex';
import storage from 'local-storage';
import merge from 'lodash.merge';

Vue.use(Vuex);

const modules = {};

const state = {
    user: storage.get('user'),
    page: storage.get('page'),

    magicSearchPosition: 0,
};

const mutations = {
    CHANGE_MAGIC_SEARCH_POSITION: (state, pos) => {
        state.magicSearchPosition = pos;
    },

    /**
     * TODO: Write a similar function for state.user, but input an object and only overwrite the
     * overlap. You know? And also start using state.user and state.page rather than directly to storage
     * inside Vue components.
     */
    OVERWRITE_PAGE: (state, overwriter) => {
        state.page = merge(state.page, overwriter);
        storage.set('page', state.page);
    },

    OVERWRITE_USER: (state, overwriter) => {
        state.user = merge(state.user, overwriter);
        storage.set('user', state.user);
    },
};

const actions = {};

export default new Vuex.Store({
    modules,
    state,
    mutations,
    actions,
});