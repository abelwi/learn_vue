<template>
  <h1 class="mt-16 text-2xl font-semibold text-center">Luyện tập writing task 2!</h1>
  <div id="box">
      <div id="type_text">
      <textarea v-model="text" @input="adjustHeight" required placeholder="Type here"></textarea>
      <button id="clear_button">x</button>
      </div>
      <button id="test">Click me</button>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      text: ''
    };
  },
  methods: {
    adjustHeight(event) {
      const textarea = event.target;
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  }
};
</script>



