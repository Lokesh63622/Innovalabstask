<template>
    <div>
      <ChildComponent @childEvent="handleChildEvent" />
    </div>
  </template>
  
  <script>
  import ChildComponent from './ChildComponent.vue';
  
  export default {
    components: {
      ChildComponent
    },
    methods: {
      handleChildEvent(payload) {
        console.log('Received from child:', payload);
      }
    }
  }
  </script>
  