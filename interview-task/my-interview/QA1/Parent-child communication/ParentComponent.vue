<template>
    <div>
      <ChildComponent :message="parentMessage" />
    </div>
  </template>
  
  <script>
  import ChildComponent from './ChildComponent.vue';
  
  export default {
    components: {
      ChildComponent
    },
    data() {
      return {
        parentMessage: 'Hello from Parent'
      }
    }
  }
  </script>
  