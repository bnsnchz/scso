import { createRouter, createWebHistory } from 'vue-router'

// Import page components
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Season from '../pages/Season.vue'
import Support from '../pages/Support.vue'
import MailingList from '../pages/MailingList.vue'
import YouthCompetition from '../pages/YouthCompetition.vue'
import ArtisticTeam from '../pages/ArtisticTeam.vue'
import BrianStone from '../pages/BrianStone.vue'
import AlexArellano from '../pages/AlexArellano.vue'
import BoardStaff from '../pages/BoardStaff.vue'
import NotFound from '../pages/NotFound.vue'

// Define routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home',
      description: 'Santa Clarita Symphony Orchestra - Premier community orchestra bringing classical music to the valley'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About Us',
      description: 'Learn about the Santa Clarita Symphony Orchestra, our mission, and our community impact'
    }
  },
  {
    path: '/season',
    name: 'Season',
    component: Season,
    meta: {
      title: '2025/2026 Season',
      description: 'Explore our upcoming concerts and events for the 2025/2026 season'
    }
  },
  {
    path: '/support',
    name: 'Support',
    component: Support,
    meta: {
      title: 'Support Us',
      description: 'Support the Santa Clarita Symphony Orchestra and help bring classical music to our community'
    }
  },
  {
    path: '/mailing-list',
    name: 'MailingList',
    component: MailingList,
    meta: {
      title: 'Join Our Mailing List',
      description: 'Stay connected with the latest updates on concerts, events, and special announcements'
    }
  },
  {
    path: '/youth-competition',
    name: 'YouthCompetition',
    component: YouthCompetition,
    meta: {
      title: 'Youth Concerto Competition',
      description: 'Information about the SCSO Youth Concerto Competition for young instrumentalists'
    }
  },
  {
    path: '/about/artistic-team',
    name: 'ArtisticTeam',
    component: ArtisticTeam,
    meta: {
      title: 'Artistic Team',
      description: 'Meet our conductor, Martin Alex Arellano, and learn about our artistic leadership'
    }
  },
  {
    path: '/about/artistic-team/',
    redirect: '/about/artistic-team'
  },
  {
    path: '/about/brian-stone',
    name: 'BrianStone',
    component: BrianStone,
    meta: {
      title: 'Brian Stone',
      description: 'Learn about our artistic director, Dr. Brian Stone'
    }
  },
  {
    path: '/about/brian-stone/',
    redirect: '/about/brian-stone'
  },
  {
    path: '/about/alex-arellano',
    name: 'AlexArellano',
    component: AlexArellano,
    meta: {
      title: 'Alex Arellano',
      description: 'Meet our conductor, Martin Alex Arellano, and learn about our artistic leadership'
    }
  },
  {
    path: '/about/alex-arellano/',
    redirect: '/about/alex-arellano'
  },
  {
    path: '/about/board-staff',
    name: 'BoardStaff',
    component: BoardStaff,
    meta: {
      title: 'Board and Staff',
      description: 'Meet our board and staff'
    }
  },
  {
    path: '/about/board-staff/',
    redirect: '/about/board-staff'
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: 'Page Not Found',
      description: 'The page you are looking for could not be found'
    }
  }
]

// Create router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.MODE === 'production' ? '/scso/' : '/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top when navigating to a new route
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Handle redirect parameter from 404 fallback
router.beforeEach((to, from, next) => {
  // Check for redirect parameter (from GitHub Pages 404 fallback)
  if (to.query.redirect) {
    next(to.query.redirect)
  } else {
    next()
  }
})

// Update document title and meta description on route change
router.afterEach((to) => {
  const meta = to.meta
  if (meta.title) {
    document.title = `${meta.title} | Santa Clarita Symphony Orchestra`
  }
  
  if (meta.description) {
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', meta.description)
    }
  }
})

export default router
