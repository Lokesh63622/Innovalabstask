<template>
    <div>
      <ChildA />
      <ChildB />
    </div>
  </template>
  
  <script>
  import ChildA from './ChildA.vue';
  import ChildB from './ChildB.vue';
  
  export default {
    components: {
      ChildA,
      ChildB
    }
  }
  </script>
  