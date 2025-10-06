<template>
  <div id="app" :class="`page-${pageName.toLowerCase()} main`">
    <Header />
    <main role="main" :class="`page-${pageName.toLowerCase()}`">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import { usePageName } from '@/composables/usePageName.js'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  setup() {
    const { pageName, pageTitle, pageDescription, documentTitle } = usePageName()
    
    return {
      pageName,
      pageTitle,
      pageDescription,
      documentTitle
    }
  }
}
</script>
