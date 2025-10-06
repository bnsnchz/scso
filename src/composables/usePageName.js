import { computed } from 'vue'
import { useRoute } from 'vue-router'

/**
 * Composable for getting the current page name and related information
 * @returns {Object} Page information including name, title, and description
 */
export function usePageName() {
  const route = useRoute()
  
  // Get the page name from the route
  const pageName = computed(() => route.name || 'Unknown')
  
  // Get the page title from route meta
  const pageTitle = computed(() => route.meta?.title || pageName.value)
  
  // Get the page description from route meta
  const pageDescription = computed(() => route.meta?.description || '')
  
  // Get the full document title
  const documentTitle = computed(() => {
    if (pageTitle.value) {
      return `${pageTitle.value} | Santa Clarita Symphony Orchestra`
    }
    return 'Santa Clarita Symphony Orchestra'
  })
  
  // Get the route path
  const routePath = computed(() => route.path)
  
  // Check if we're on a specific page
  const isPage = (name) => computed(() => route.name === name)
  
  return {
    pageName,
    pageTitle,
    pageDescription,
    documentTitle,
    routePath,
    isPage
  }
}
