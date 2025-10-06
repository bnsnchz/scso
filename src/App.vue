<template>
  <div id="app" :class="`page-${currentPage.toLowerCase()} main`">
    <Header />
    <main role="main" :class="`page-${currentPage.toLowerCase()}`">
      <component :is="currentView" />
    </main>
    <Footer />
  </div>
</template>

<script>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

// Import page components
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Season from './pages/Season.vue'
import Support from './pages/Support.vue'
import MailingList from './pages/MailingList.vue'
import YouthCompetition from './pages/YouthCompetition.vue'
import ArtisticTeam from './pages/ArtisticTeam.vue'
import NotFound from './pages/NotFound.vue'

// Define routes
const routes = {
  '/': Home,
  '/about': About,
  '/season': Season,
  '/support': Support,
  '/mailing-list': MailingList,
  '/youth-competition': YouthCompetition,
  '/artistic-team': ArtisticTeam
}

// Page metadata
const pageMetadata = {
  '/': {
    title: 'Home',
    description: 'Santa Clarita Symphony Orchestra - Premier community orchestra bringing classical music to the valley'
  },
  '/about': {
    title: 'About Us',
    description: 'Learn about the Santa Clarita Symphony Orchestra, our mission, and our community impact'
  },
  '/season': {
    title: '2025/2026 Season',
    description: 'Explore our upcoming concerts and events for the 2025/2026 season'
  },
  '/support': {
    title: 'Support Us',
    description: 'Support the Santa Clarita Symphony Orchestra and help bring classical music to our community'
  },
  '/mailing-list': {
    title: 'Join Our Mailing List',
    description: 'Stay connected with the latest updates on concerts, events, and special announcements'
  },
  '/youth-competition': {
    title: 'Youth Concerto Competition',
    description: 'Information about the SCSO Youth Concerto Competition for young instrumentalists'
  },
  '/artistic-team': {
    title: 'Artistic Team',
    description: 'Meet our conductor, Martin Alex Arellano, and learn about our artistic leadership'
  }
}

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  setup() {
    // Get the current path from hash, removing any base path
    const getCurrentPath = () => {
      const hash = window.location.hash.slice(1) || '/'
      // Remove /scso/ base path if present
      return hash.replace(/^\/scso/, '') || '/'
    }
    
    const currentPath = ref(getCurrentPath())
    
    // Update current path when hash changes
    const updatePath = () => {
      currentPath.value = getCurrentPath()
    }
    
    // Get current view component
    const currentView = computed(() => {
      return routes[currentPath.value] || NotFound
    })
    
    // Get current page name for CSS classes
    const currentPage = computed(() => {
      const metadata = pageMetadata[currentPath.value]
      return metadata ? metadata.title.toLowerCase().replace(/\s+/g, '-') : 'not-found'
    })
    
    // Update document title and meta description
    const updateMetadata = () => {
      const metadata = pageMetadata[currentPath.value]
      if (metadata) {
        document.title = `${metadata.title} | Santa Clarita Symphony Orchestra`
        
        const metaDescription = document.querySelector('meta[name="description"]')
        if (metaDescription) {
          metaDescription.setAttribute('content', metadata.description)
        }
      }
    }
    
    onMounted(() => {
      // Listen for hash changes
      window.addEventListener('hashchange', updatePath)
      
      // Update metadata on initial load
      updateMetadata()
    })
    
    onUnmounted(() => {
      window.removeEventListener('hashchange', updatePath)
    })
    
    // Watch for path changes to update metadata
    watch(currentPath, updateMetadata)
    
    return {
      currentView,
      currentPage
    }
  }
}
</script>
