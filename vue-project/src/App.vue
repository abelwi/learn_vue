<template>
  <div class="flex justify-center items-center">
    <div class="text-center py-10 mt-16 w-1/2 border-2 border-gray-900 rounded-xl" id="box">
      <h1 class="text-2xl font-semibold text-center">Luyện tập writing task 2!</h1>
      <p class="mt-12 mb-3 text-left ml-20 font-semibold">Câu hỏi:</p>
      <div class="mb-10" id="type_text">
        <textarea 
          class="w-2/3 text-lg border-b-2 border-gray-400 focus:border-black focus:outline-none font-serif"
          v-model="text" 
          @input="adjustHeight" 
          required 
          placeholder="Nhập câu hỏi của bạn..."
        ></textarea>
      </div>
      <button class="bg-lime-300 px-32 py-3 rounded-xl" id="test">Bắt đầu</button>
    </div>
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
  },
};
</script>

<style scoped>
  textarea {
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    resize: none;
  }
  textarea:focus {
    box-shadow: none;
  }
</style>
