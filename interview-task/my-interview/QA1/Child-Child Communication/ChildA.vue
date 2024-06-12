<template>
    <div>
      <button @click="sendMessage">Send Message to B</button>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    methods: {
      ...mapActions(['updateMessage']),
      sendMessage() {
        this.updateMessage('Hello from Child A');
      }
    }
  }
  </script>
  