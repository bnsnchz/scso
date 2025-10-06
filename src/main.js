import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './styles/main.css'

// Handle GitHub Pages SPA redirect
if (window.location.search.includes('?/')) {
  const route = window.location.search.split('?/')[1].replace(/~and~/g, '&');
  // Update the URL without triggering a page reload, ensuring clean URL
  // The router handles the base path, so we just need the route part
  const cleanUrl = '/scso' + (route ? '/' + route : '');
  window.history.replaceState(null, '', cleanUrl);
} else if (sessionStorage.getItem('vue-router-redirect')) {
  // Handle sessionStorage redirect from 404.html for subpages
  const route = sessionStorage.getItem('vue-router-redirect');
  sessionStorage.removeItem('vue-router-redirect');
  // Update the URL without triggering a page reload
  const cleanUrl = '/scso' + (route ? '/' + route : '');
  window.history.replaceState(null, '', cleanUrl);
}

createApp(App).use(router).mount('#app')
