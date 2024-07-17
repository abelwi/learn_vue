<script setup>
console.log('Hello world')

import { ref } from 'vue'
const message = ref('Hello world')
message.value = 'Changed'
</script>

<template>
  <button>Click me</button>
  <h1>{{ message }}</h1>
  
</template>



