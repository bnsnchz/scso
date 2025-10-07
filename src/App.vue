<template>
  <div id="app" :class="`page-${currentPage.toLowerCase()} main`">
    <Header />
    <main role="main" :class="`page-${currentPage.toLowerCase()}`">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  setup() {
    const route = useRoute()
    
    // Get current page name for CSS classes
    const currentPage = computed(() => {
      const meta = route.meta
      return meta && meta.title ? meta.title.toLowerCase().replace(/\s+/g, '-') : 'not-found'
    })
    
    return {
      currentPage
    }
  }
}
</script>
