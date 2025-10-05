<template>
  <div class="about-page">
    <section class="page-hero">
      <div class="st-container">
        <h1>About the Santa Clarita Symphony Orchestra</h1>
        <p class="hero-description">
          {{ organization.description }}
        </p>
      </div>
    </section>

    <section class="about-content">
      <div class="st-container">
        <div class="about-grid">
          <div class="about-text">
            <h2>Our Mission</h2>
            <p>
              The Santa Clarita Symphony Orchestra is dedicated to bringing high-quality classical music 
              to the Santa Clarita Valley community. As a community orchestra, we provide 
              opportunities for local musicians to perform together while enriching our community 
              through the power of live classical music.
            </p>
            
            <h2>Our Story</h2>
            <p>
              Founded in {{ organization.founded }}, the SCSO has grown from a small group of 
              dedicated musicians to a full symphony orchestra that serves the entire Santa Clarita Valley. 
              We believe that classical music should be accessible to everyone, and we're proud to 
              be a part of this vibrant community.
            </p>

            <h2>Community Impact</h2>
            <p>
              As a 501(c)(3) nonprofit organization (EIN: {{ organization.ein }}), we rely on the 
              support of our community to continue bringing world-class classical music to the valley. 
              Your support helps us maintain our commitment to musical excellence and community engagement.
            </p>
          </div>
          
          <div class="about-sidebar">
            <div class="contact-info">
              <h3>Contact Information</h3>
              <p><strong>Email:</strong> {{ organization.email }}</p>
              <p><strong>Phone:</strong> {{ organization.phone }}</p>
              <p><strong>Location:</strong> {{ organization.address }}</p>
            </div>
            
            <div class="quick-links">
              <h3>Quick Links</h3>
              <ul>
                <li><router-link to="/artistic-team">Meet Our Conductor</router-link></li>
                <li><router-link to="/youth-competition">Youth Competition</router-link></li>
                <li><router-link to="/support">Support Us</router-link></li>
                <li><router-link to="/mailing-list">Join Our Mailing List</router-link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useSiteConfig } from '@/composables/useSiteConfig.js'

export default {
  name: 'AboutPage',
  setup() {
    const { organization } = useSiteConfig()
    
    return {
      organization
    }
  }
}
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, var(--color-flame), var(--color-pistachio));
  color: white;
  padding: 80px 0;
  text-align: center;
}

.page-hero h1 {
  font-size: 3rem;
  font-weight: 100;
  margin-bottom: 24px;
}

.hero-description {
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.about-content {
  padding: 80px 0;
}

.about-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;
  align-items: start;
}

.about-text h2 {
  color: var(--color-flame);
  font-size: 2rem;
  margin-bottom: 24px;
  margin-top: 48px;
}

.about-text h2:first-child {
  margin-top: 0;
}

.about-text p {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 24px;
}

.about-sidebar {
  background: var(--color-light-gray);
  padding: 40px;
  border-radius: 8px;
}

.contact-info h3,
.quick-links h3 {
  color: var(--color-flame);
  font-size: 1.5rem;
  margin-bottom: 24px;
}

.contact-info p {
  margin-bottom: 16px;
  line-height: 1.6;
}

.quick-links ul {
  list-style: none;
  padding: 0;
}

.quick-links li {
  margin-bottom: 12px;
}

.quick-links a {
  color: var(--color-flame);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.quick-links a:hover {
  color: var(--color-pistachio);
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .page-hero h1 {
    font-size: 2.5rem;
  }
}
</style>
