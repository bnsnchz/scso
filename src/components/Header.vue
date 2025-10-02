<template>
  <header class="header" :class="{ scrolled: isScrolled }" role="banner">
    <div class="header-top-bar">
      <a class="header-top-bar-link" href="mailing-list.html" aria-label="Join Santa Clarita Symphony Orchestra mailing list for updates">Join Our Mailing List</a>
    </div>
    <div class="header-container">
      <div class="header-logo">
        <a href="/" aria-label="Santa Clarita Symphony Orchestra home page">
          <img :src="logoUrl" alt="Santa Clarita Symphony Orchestra Logo" loading="eager">
        </a>
      </div>
      <nav class="header-nav" role="navigation" aria-label="Main navigation">
        <ul class="header-nav-list" role="menubar">
          <li role="none"><a href="season.html" role="menuitem" aria-label="View 2025/2026 concert season">2025/2026 Season</a></li>
          <li role="none"><a href="about.html" role="menuitem" aria-label="Learn about Santa Clarita Symphony Orchestra">About</a></li>
          <li role="none"><a href="support.html" role="menuitem" aria-label="Support Santa Clarita Symphony Orchestra">Support</a></li>
        </ul>
        <div class="header-nav-cta">
          <a href="https://scso.ludus.com/index.php" aria-label="Purchase tickets for Santa Clarita Symphony Orchestra concerts">Tickets</a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isScrolled: false
    }
  },
  computed: {
    logoUrl() {
      return '/scso/images/scso-logo-horizontal-1500x525.png'
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
  background-color: transparent;
  transition: all .25s ease 0s;
}

.header.scrolled {
  background-color: #fff;
}   

.header-container {
  display: flex;
  justify-content: space-between;
  padding: 12px 32px;
  align-items: center;
  background-color: transparent;
}

.header-logo img {
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
  color: #fff;
  transition: all .25s ease 0s;
  text-decoration: none;
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
