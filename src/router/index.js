// Vue Router Configuration
// This file sets up routing for the multipage SCSO application

import { createRouter, createWebHistory } from 'vue-router'
import { useSiteConfig } from '@/composables/useSiteConfig.js'

// Import page components
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Season from '@/pages/Season.vue'
import Support from '@/pages/Support.vue'
import MailingList from '@/pages/MailingList.vue'
import YouthCompetition from '@/pages/YouthCompetition.vue'
import ArtisticTeam from '@/pages/ArtisticTeam.vue'
import NotFound from '@/pages/NotFound.vue'

// Router configuration
const router = createRouter({
  history: createWebHistory(), // Let Vite handle the base path
  routes: [
    {
      path: '/scso',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Home',
        description: 'Santa Clarita Symphony Orchestra - Premier community orchestra bringing classical music to the valley'
      }
    },
    {
      path: '/scso/about',
      name: 'About',
      component: About,
      meta: {
        title: 'About Us',
        description: 'Learn about the Santa Clarita Symphony Orchestra, our mission, and our community impact'
      }
    },
    {
      path: '/scso/season',
      name: 'Season',
      component: Season,
      meta: {
        title: '2025/2026 Season',
        description: 'Explore our upcoming concerts and events for the 2025/2026 season'
      }
    },
    {
      path: '/scso/support',
      name: 'Support',
      component: Support,
      meta: {
        title: 'Support Us',
        description: 'Support the Santa Clarita Symphony Orchestra and help bring classical music to our community'
      }
    },
    {
      path: '/scso/mailing-list',
      name: 'MailingList',
      component: MailingList,
      meta: {
        title: 'Join Our Mailing List',
        description: 'Stay connected with the latest updates on concerts, events, and special announcements'
      }
    },
    {
      path: '/scso/youth-competition',
      name: 'YouthCompetition',
      component: YouthCompetition,
      meta: {
        title: 'Youth Concerto Competition',
        description: 'Information about the SCSO Youth Concerto Competition for young instrumentalists'
      }
    },
    {
      path: '/scso/artistic-team',
      name: 'ArtisticTeam',
      component: ArtisticTeam,
      meta: {
        title: 'Artistic Team',
        description: 'Meet our conductor, Martin Alex Arellano, and learn about our artistic leadership'
      }
    },
    // Legacy routes for backward compatibility
    {
      path: '/scso/current-season',
      redirect: '/season'
    },
    {
      path: '/scso/about-us',
      redirect: '/about'
    },
    {
      path: '/scso/about-us/artistic-teams',
      redirect: '/artistic-team'
    },
    // Catch-all route for 404
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound,
      meta: {
        title: 'Page Not Found',
        description: 'The page you are looking for could not be found'
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top when navigating to a new route
    return { top: 0 }
  }
})

// Navigation guards for SEO and meta management
router.beforeEach((to, from, next) => {
  // Update document title
  if (to.meta.title) {
    document.title = `${to.meta.title} | Santa Clarita Symphony Orchestra`
  }
  
  // Update meta description
  if (to.meta.description) {
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', to.meta.description)
    }
  }
  
  next()
})

export default router
