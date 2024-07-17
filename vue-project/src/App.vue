<script setup>
console.log('Hello world')

import { ref, reactive } from 'vue'
const titleClass = ref('title')

const counter = reactive({
  count: 0
})
counter.count++

</script>

<template>
  <button>Click me</button>
  <h1 v-bind:class="titleClass">Hello world</h1>
  <p>Count is: {{ counter.count }}</p>

</template>

<style>
  .title {
    color: green;
  }
</style>



