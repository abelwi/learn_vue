<template>
    <div id="box">
        <div id="type_text">
        <textarea v-model="text" @input="adjustHeight" required placeholder="Type here"></textarea>
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
  
  <style>
    #box {
        margin-top: 5%;
        text-align: center;
        border: solid gray 2px;
        border-radius: 10px;
        width: 50%;
        margin-right: 25%;
        margin-left: 25%;
        height:20em;
    }

    #type_text {
      margin-bottom: 12px;
    }
    textarea {
      margin-top: 5%;
      width: 80%;
      border: none;
      border-bottom: solid gray 2px;
      outline: none;
      resize: none; /* Disable manual resizing */
      overflow: hidden; /* Hide scroll bar */
    }
    textarea:focus {
      border-bottom: solid black 2px;
    }
    #test {
      font-weight: bold;
      background-color: aquamarine;
      padding: 10px 20px;
      border-radius: 8px;
      border: solid gray 1px;
    }
    button:hover {
      cursor: pointer;
      background: aqua;
    }
  </style>
  