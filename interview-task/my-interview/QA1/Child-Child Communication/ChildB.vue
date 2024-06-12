<template>
    <div>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters(['message'])
    }
  }
  </script>
  