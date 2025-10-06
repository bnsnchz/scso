import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './styles/main.css'

// Handle GitHub Pages SPA redirect for hash mode
if (window.location.search.includes('?/')) {
  const route = window.location.search.split('?/')[1].replace(/~and~/g, '&');
  // Update the URL to use hash mode
  const cleanUrl = '#' + (route || '');
  window.history.replaceState(null, '', cleanUrl);
} else if (sessionStorage.getItem('vue-router-redirect')) {
  // Handle sessionStorage redirect from 404.html for subpages
  const route = sessionStorage.getItem('vue-router-redirect');
  sessionStorage.removeItem('vue-router-redirect');
  // Update the URL to use hash mode
  const cleanUrl = '#' + (route || '');
  window.history.replaceState(null, '', cleanUrl);
}

createApp(App).use(router).mount('#app')
