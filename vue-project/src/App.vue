<script setup>
console.log('Hello world')

import { ref } from 'vue'
 let id = 0

 const newTodo = ref('')
 const todos = ref([
  { id: id++, text: 'Learn HTML'},
  { id: id++, text: 'Learn CSS'},
  { id: id++, text: 'Learn Javacript'}
 ])

 function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value })
  newTodo.value = ''
 }

 function removeTodo(todo) {
  todos.value = todos.value.filter(t => t !== todo );
 }
</script>

<template>
  
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" required placeholder="new todo">
    <button>Add todo</button>
  </form>

  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="removeTodo(todo)">x</button>

    </li>
  </ul>
</template>





