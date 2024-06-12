<template>
    <div>
      <input type="text" v-model="searchQuery" @input="onSearch" placeholder="Search users..." />
      <ul>
        <li v-for="user in paginatedUsers" :key="user.id">
          {{ user.name }} ({{ user.username }}) - {{ user.email }}
        </li>
      </ul>
      <div>
        <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions, mapGetters } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['searchQuery', 'currentPage']),
      ...mapGetters(['paginatedUsers', 'totalPages'])
    },
    methods: {
      ...mapActions(['fetchUsers', 'search', 'changePage']),
      onSearch(event) {
        this.search(event.target.value);
      },
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.changePage(this.currentPage + 1);
        }
      },
      prevPage() {
        if (this.currentPage > 1) {
          this.changePage(this.currentPage - 1);
        }
      }
    },
    created() {
      this.fetchUsers();
    }
  };
  </script>
  
  <style scoped>
  </style>
  