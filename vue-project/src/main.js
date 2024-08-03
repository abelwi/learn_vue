import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import FoodItems from './components/FoodItems.vue'

const app = createApp(App)
app.component('food-items', FoodItems)
app.mount('#app')
