<template>
  <header class="header" :class="{ scrolled: isScrolled }" role="banner">
    <div class="header-top-bar">
      <router-link 
        class="header-top-bar-link" 
        :to="topBarConfig.href" 
        :aria-label="topBarConfig.ariaLabel"
      >
        {{ topBarConfig.label }}
      </router-link>
    </div>
    <div class="header-container">
      <div class="header-logo">
        <router-link to="/" :aria-label="`${organization.name} home page`">
          <img :src="logoUrl" :alt="`${organization.name} Logo`" loading="eager">
        </router-link>
      </div>
      
      <!-- Desktop Navigation -->
      <nav class="header-nav st-desktop" role="navigation" aria-label="Main navigation">
        <ul class="header-nav-list" role="menubar">
          <li 
            v-for="item in navItems" 
            :key="item.label" 
            role="none"
          >
            <router-link 
              :to="item.href" 
              role="menuitem" 
              :aria-label="item.ariaLabel"
            >
              {{ item.label }}
            </router-link>
          </li>
        </ul>
        <div class="header-nav-cta">
          <a 
            :href="ctaConfig.href" 
            :aria-label="ctaConfig.ariaLabel"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ ctaConfig.label }}
          </a>
        </div>
      </nav>

      <!-- Mobile Hamburger Button -->
      <button 
        class="hamburger-btn st-mobile" 
        :class="{ active: isMobileMenuOpen }"
        @click="toggleMobileMenu"
        :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
        aria-expanded="isMobileMenuOpen"
      >
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <div 
      class="mobile-menu-overlay" 
      :class="{ active: isMobileMenuOpen }"
      @click="closeMobileMenu"
    >
      <nav class="mobile-menu" role="navigation" aria-label="Mobile navigation">
        <ul class="mobile-menu-list">
          <li v-for="item in navItems" :key="item.label">
            <router-link 
              :to="item.href" 
              @click="closeMobileMenu"
              :aria-label="item.ariaLabel"
            >
              {{ item.label }}
            </router-link>
          </li>
        </ul>
        <div class="mobile-menu-cta">
          <a 
            :href="ctaConfig.href" 
            :aria-label="ctaConfig.ariaLabel"
            target="_blank"
            rel="noopener noreferrer"
            @click="closeMobileMenu"
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
      isScrolled: false,
      isMobileMenuOpen: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    document.addEventListener('click', this.handleClickOutside)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    document.removeEventListener('click', this.handleClickOutside)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 250
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false
    },
    handleClickOutside(event) {
      const header = this.$el
      const hamburgerBtn = header.querySelector('.hamburger-btn')
      const mobileMenu = header.querySelector('.mobile-menu-overlay')
      
      if (this.isMobileMenuOpen && 
          !header.contains(event.target) && 
          !hamburgerBtn.contains(event.target) && 
          !mobileMenu.contains(event.target)) {
        this.closeMobileMenu()
      }
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

/* Hamburger Menu Styles */
.hamburger-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
  position: relative;
}

.hamburger-line {
  width: 20px;
  height: 2px;
  background-color: #000;
  transition: all 0.3s ease;
  transform-origin: center;
  position: absolute;
}

.hamburger-line:nth-child(1) {
  top: 8px;
}

.hamburger-line:nth-child(2) {
  top: 14px;
}

.hamburger-line:nth-child(3) {
  top: 20px;
}

.page-home .hamburger-line {
  background-color: #fff;
}

.header.scrolled .hamburger-line {
  background-color: #000;
}

.hamburger-btn.active .hamburger-line {
  background-color: #000;
}

.hamburger-btn.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg);
  top: 14px;
}

.hamburger-btn.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.hamburger-btn.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg);
  top: 14px;
}

/* Mobile Menu Overlay */
.mobile-menu-overlay {
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  height: calc(100vh - 70px);
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.mobile-menu-overlay.active {
  opacity: 1;
  visibility: visible;
}

.mobile-menu {
  position: fixed;
  top: 70px;
  right: 0;
  width: 280px;
  height: calc(100vh - 70px);
  background-color: #fff;
  padding: 20px 0 40px;
  transform: translateX(100%);
  transition: transform 0.3s ease;
  overflow-y: auto;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
}

.mobile-menu-overlay.active .mobile-menu {
  transform: translateX(0);
}

.mobile-menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mobile-menu-list li {
  border-bottom: 1px solid #eee;
}

.mobile-menu-list a {
  display: block;
  padding: 20px 30px;
  color: #000;
  text-decoration: none;
  font-family: var(--font-headline);
  font-size: 18px;
  transition: background-color 0.2s ease;
}

.mobile-menu-list a:hover {
  background-color: #f5f5f5;
}

.mobile-menu-cta {
  padding: 30px;
  text-align: center;
}

.mobile-menu-cta a {
  display: inline-block;
  background-color: var(--color-flame);
  color: #fff;
  padding: 12px 24px;
  text-decoration: none;
  font-family: var(--font-headline);
  font-size: 16px;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.mobile-menu-cta a:hover {
  background-color: var(--color-fern);
}

  /* Mobile Responsive Styles */
  @media screen and (max-width: 768px) {
    .header-logo {
      flex: 1;
      max-width: 200px;
    }

    .header-logo img {
      max-height: 40px;
      width: auto;
      height: auto;
      object-fit: contain;
    }

    .page-home .header-logo img {
      max-height: 50px;
      width: auto;
      height: auto;
      object-fit: contain;
    }

    .hamburger-btn {
      display: flex;
    }
  
  .header-nav.st-desktop {
    display: none;
  }
  
  .header-container {
    justify-content: space-between;
  }
}
</style>
