import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './styles/main.css'

// Handle GitHub Pages base path routing
const isProduction = import.meta.env.PROD
const basePath = isProduction ? '/scso' : ''

// Function to handle base path routing
function handleBasePathRouting() {
  const currentPath = window.location.pathname
  
  if (isProduction && currentPath.startsWith('/scso/')) {
    // Remove the base path from the current URL for router
    const routePath = currentPath.substring(6) // Remove '/scso'
    if (routePath === '') {
      // Homepage
      window.history.replaceState(null, '', basePath + '/')
    } else {
      // Subpage
      window.history.replaceState(null, '', basePath + routePath)
    }
  }
}

// Handle initial routing
handleBasePathRouting()

// Handle GitHub Pages SPA redirect
if (window.location.search.includes('?/')) {
  const route = window.location.search.split('?/')[1].replace(/~and~/g, '&');
  // Update the URL without triggering a page reload
  window.history.replaceState(null, '', basePath + route);
} else if (sessionStorage.getItem('vue-router-redirect')) {
  // Handle sessionStorage redirect from 404.html for subpages
  const route = sessionStorage.getItem('vue-router-redirect');
  sessionStorage.removeItem('vue-router-redirect');
  // Update the URL without triggering a page reload
  window.history.replaceState(null, '', basePath + route);
}

createApp(App).use(router).mount('#app')
