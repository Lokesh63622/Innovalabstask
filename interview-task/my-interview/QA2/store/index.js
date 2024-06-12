import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    filteredUsers: [],
    searchQuery: '',
    currentPage: 1,
    itemsPerPage: 5
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
      state.filteredUsers = users;
    },
    SET_SEARCH_QUERY(state, query) {
      state.searchQuery = query;
    },
    SET_CURRENT_PAGE(state, page) {
      state.currentPage = page;
    },
    SET_FILTERED_USERS(state, users) {
      state.filteredUsers = users;
    }
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        commit('SET_USERS', response.data);
      } catch (error) {
        console.error(error);
      }
    },
    filterUsers({ commit, state }) {
      let filtered = state.users.filter(user =>
        user.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
        user.username.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
      commit('SET_FILTERED_USERS', filtered);
    },
    search({ commit, dispatch }, query) {
      commit('SET_SEARCH_QUERY', query);
      dispatch('filterUsers');
    },
    changePage({ commit }, page) {
      commit('SET_CURRENT_PAGE', page);
    }
  },
  getters: {
    paginatedUsers: (state) => {
      const start = (state.currentPage - 1) * state.itemsPerPage;
      const end = start + state.itemsPerPage;
      return state.filteredUsers.slice(start, end);
    },
    totalPages: (state) => {
      return Math.ceil(state.filteredUsers.length / state.itemsPerPage);
    }
  }
});
