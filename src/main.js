import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './styles/main.css'

// Handle GitHub Pages SPA redirect
if (window.location.search.includes('?/')) {
  const route = window.location.search.split('?/')[1].replace(/~and~/g, '&');
  window.history.replaceState(null, '', route);
}

createApp(App).use(router).mount('#app')
