<script setup>
console.log('Hello world')

import { ref, reactive } from 'vue'
const message = ref('Hello world')

const counter = reactive({
  count: 0
})
counter.count++

</script>

<template>
  <button>Click me</button>
  <h1>{{ message }}</h1>
  <p>Count is: {{ counter.count }}</p>

</template>



