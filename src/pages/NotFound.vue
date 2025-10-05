<template>
  <div class="not-found-page">
    <section class="error-hero">
      <div class="st-container">
        <h1>404 - Page Not Found</h1>
        <p class="error-description">
          Sorry, the page you are looking for could not be found.
        </p>
        <div class="error-actions">
          <router-link to="/" class="btn v2">Go Home</router-link>
          <router-link to="/season" class="btn v1">View Season</router-link>
        </div>
      </div>
    </section>

    <section class="helpful-links">
      <div class="st-container">
        <h2>Here are some helpful links:</h2>
        <div class="links-grid">
          <div class="link-card">
            <h3>About Us</h3>
            <p>Learn about the Santa Clarita Symphony Orchestra</p>
            <router-link to="/about" class="btn v2">Learn More</router-link>
          </div>
          
          <div class="link-card">
            <h3>2025/2026 Season</h3>
            <p>Explore our upcoming concerts and events</p>
            <router-link to="/season" class="btn v2">View Season</router-link>
          </div>
          
          <div class="link-card">
            <h3>Support Us</h3>
            <p>Help us bring classical music to the community</p>
            <router-link to="/support" class="btn v2">Support</router-link>
          </div>
          
          <div class="link-card">
            <h3>Contact</h3>
            <p>Get in touch with us</p>
            <a href="mailto:{{ organization.email }}" class="btn v2">Contact</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useSiteConfig } from '@/composables/useSiteConfig.js'

export default {
  name: 'NotFoundPage',
  setup() {
    const { organization } = useSiteConfig()
    
    return {
      organization
    }
  }
}
</script>

<style scoped>
.error-hero {
  background: linear-gradient(135deg, var(--color-flame), var(--color-pistachio));
  color: white;
  padding: 120px 0;
  text-align: center;
}

.error-hero h1 {
  font-size: 4rem;
  font-weight: 100;
  margin-bottom: 24px;
}

.error-description {
  font-size: 1.25rem;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.error-actions {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.helpful-links {
  padding: 80px 0;
  background: var(--color-light-gray);
}

.helpful-links h2 {
  color: var(--color-flame);
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 60px;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.link-card {
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.link-card:hover {
  transform: translateY(-5px);
}

.link-card h3 {
  color: var(--color-flame);
  font-size: 1.5rem;
  margin-bottom: 16px;
}

.link-card p {
  margin-bottom: 24px;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .error-hero h1 {
    font-size: 3rem;
  }
  
  .error-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .links-grid {
    grid-template-columns: 1fr;
  }
}
</style>
