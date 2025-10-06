<template>
  <header class="header" :class="{ scrolled: isScrolled }" role="banner">
    <div class="header-top-bar">
      <a 
        class="header-top-bar-link" 
        :href="'#' + topBarConfig.href" 
        :aria-label="topBarConfig.ariaLabel"
      >
        {{ topBarConfig.label }}
      </a>
    </div>
    <div class="header-container">
      <div class="header-logo">
        <a href="#/" :aria-label="`${organization.name} home page`">
          <img :src="logoUrl" :alt="`${organization.name} Logo`" loading="eager">
        </a>
      </div>
      <nav class="header-nav" role="navigation" aria-label="Main navigation">
        <ul class="header-nav-list" role="menubar">
          <li 
            v-for="item in navItems" 
            :key="item.label" 
            role="none"
          >
            <a 
              :href="'#' + item.href" 
              role="menuitem" 
              :aria-label="item.ariaLabel"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
        <div class="header-nav-cta">
          <a 
            :href="ctaConfig.href" 
            :aria-label="ctaConfig.ariaLabel"
          >
            {{ ctaConfig.label }}
          </a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import { useSiteConfig } from '../composables/useSiteConfig.js'

export default {
  name: 'Header',
  setup() {
    const { 
      organization, 
      getLogoUrl, 
      getNavItems, 
      getCtaConfig, 
      getTopBarConfig 
    } = useSiteConfig()
    
    return {
      organization,
      logoUrl: getLogoUrl('horizontal'),
      navItems: getNavItems(),
      ctaConfig: getCtaConfig(),
      topBarConfig: getTopBarConfig()
    }
  },
  data() {
    return {
      isScrolled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 250
    }
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  width: 100%;
  z-index: 999;
  background-color: #fff;
  transition: all .25s ease 0s;
}

/* Hide header when scrolled on non-Home pages */
.main:not(.page-home) .header.scrolled {
  transform: translateY(-100%);
}

.page-home .header {
  background-color: transparent;
}

.header.scrolled {
  background-color: #fff;
}   

.header-container {
  display: flex;
  justify-content: space-between;
  padding: 12px 32px;
  align-items: center;
  background-color: #fff;
}

.page-home .header-container {
  background-color: transparent;
}

.header-logo img {
  max-width: 250px;
}

.page-home .header-logo img {
  max-width: 400px;
  transition: all .25s ease 0s;
}

.header.scrolled .header-logo img {
  max-width: 250px;
}

.header-nav {
  display: flex;
  gap: 48px;
}

ul.header-nav-list {
  display: flex;
  gap: 48px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.header-nav-list li a {
  font-family: var(--font-headline);
  color: #000;
  transition: all .25s ease 0s;
  text-decoration: none;
}

.page-home .header-nav-list li a {
  color: #fff;
}

.header.scrolled .header-nav-list li a {
  color: #000;
}

.header-top-bar {
  padding: 12px 32px;
  background-color: var(--color-pistachio);
  display: flex;
  justify-content: flex-end;
}

.header-top-bar-link {
  color: #fff;
  text-decoration: underline;
  font-family: var(--font-text);
  font-weight: 600;
  font-size: 16px;
}

.header-nav-cta a {
  background-color: var(--color-flame);
  padding: 10px 32px;
  color: #fff;
  font-family: var(--font-headline);
  font-weight: 100;
  transition: all .25s ease 0s;
  text-decoration: none;
}

.header-nav-cta a:hover {
  background-color: var(--color-fern);
}
</style>
