import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './styles/main.css'

// Handle GitHub Pages SPA redirect
if (window.location.search.includes('?/')) {
  const route = window.location.search.split('?/')[1].replace(/~and~/g, '&');
  // Update the URL without triggering a page reload
  window.history.replaceState(null, '', window.location.pathname + route);
} else if (sessionStorage.getItem('vue-router-redirect')) {
  // Handle sessionStorage redirect from 404.html
  const route = sessionStorage.getItem('vue-router-redirect');
  sessionStorage.removeItem('vue-router-redirect');
  // Update the URL without triggering a page reload
  window.history.replaceState(null, '', window.location.pathname + route);
}

createApp(App).use(router).mount('#app')
