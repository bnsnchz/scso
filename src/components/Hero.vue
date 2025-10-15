<template>
  <section class="hero" role="banner">
    <div class="hero-container">
      <div class="hero-image">
        <img :src="heroConfig.backgroundImage" :alt="`${organization.name} performing live classical music on stage`" loading="eager">
      </div>
      <div class="hero-content">
        <img :src="logoUrl" :alt="`${organization.name} Logo`" loading="eager">
        <h1>{{ heroConfig.title }}</h1>
        <p class="hero-description">{{ heroConfig.description }}</p>
        <a 
          class="btn v1" 
          :href="heroConfig.cta.href" 
          :aria-label="heroConfig.cta.ariaLabel"
        >
          {{ heroConfig.cta.label }}
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { useSiteConfig } from '../composables/useSiteConfig.js'

export default {
  name: 'Hero',
  setup() {
    const { organization, getLogoUrl, getHeroConfig } = useSiteConfig()
    
    return {
      organization,
      logoUrl: getLogoUrl('vertical'),
      heroConfig: getHeroConfig()
    }
  }
}
</script>

<style scoped>
.hero-image {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.hero-image img {
  position: absolute;
  object-fit: cover;
  object-position: top;
  width: 100%;
  height: 100%;
}

.hero {
  padding: 0;
}

.hero-content {
  position: absolute;
  bottom: 50%;
  right: 25%;
  transform: translate(50%, 50%);
  max-width: 25%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero-container {
  position: relative;
}

.hero-content h1 {
  color: #fff;
  font-family: var(--font-headline);
  font-size: 56px;
  margin: 0 0 16px 0;
  font-weight: 600;
  line-height: 1.2;
}

.hero-description {
  color: #fff;
  font-family: var(--font-text);
  font-size: 18px;
  margin: 0 0 24px 0;
  line-height: 1.4;
  max-width: 400px;
}
@media screen and (max-width: 768px) {
  .hero-content {
      max-width: 100%;
      right: 50%;
      width: 100%;
  }

  .hero-image {
    height: 50vh;
  }


  section.hero {
      background-color: var(--color-black);
      padding: 260px 0 160px;
  }

  .hero-image img {
      display: none;
  }

  .hero-content h1 {
      font-size: 48px;
  }
}

</style>
