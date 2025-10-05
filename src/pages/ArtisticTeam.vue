<template>
  <div class="artistic-team-page">
    <section class="page-hero">
      <div class="st-container">
        <h1>Meet Our Artistic Team</h1>
        <p class="hero-description">
          Learn about the talented musicians and leaders who bring our concerts to life
        </p>
      </div>
    </section>

    <section class="team-content">
      <div class="st-container">
        <div class="conductor-section">
          <h2>Our Conductor</h2>
          <div class="conductor-profile">
            <div class="conductor-image">
              <img :src="getAssetUrl(content.about.conductor.image)" :alt="`${content.about.conductor.name}, ${content.about.conductor.title}`" loading="lazy">
            </div>
            <div class="conductor-info">
              <h3>{{ content.about.conductor.name }}</h3>
              <p class="conductor-title">{{ content.about.conductor.title }}</p>
              <div class="conductor-bio" v-html="content.about.conductor.description"></div>
              <a :href="getAssetUrl(content.about.conductor.learnMoreHref)" class="btn v2" :aria-label="content.about.conductor.learnMoreAriaLabel">
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div class="artistic-vision">
          <h2>Artistic Vision</h2>
          <div class="vision-content">
            <p>
              Under the leadership of {{ content.about.conductor.name }}, the Santa Clarita Symphony Orchestra 
              is committed to bringing world-class classical music to our community. Our artistic vision 
              focuses on:
            </p>
            <ul class="vision-points">
              <li>Presenting diverse and engaging repertoire that appeals to both seasoned classical music lovers and newcomers</li>
              <li>Supporting emerging composers and featuring works by contemporary artists</li>
              <li>Providing educational opportunities for young musicians through our Youth Concerto Competition</li>
              <li>Creating memorable concert experiences that bring our community together</li>
              <li>Maintaining the highest standards of musical excellence while remaining accessible to all</li>
            </ul>
          </div>
        </div>

        <div class="musician-spotlight">
          <h2>Meet Our Musicians</h2>
          <p>
            Our orchestra is made up of talented community musicians who bring their passion and dedication 
            to every performance. From professional musicians to dedicated amateurs, our members represent 
            the diverse musical talent of the Santa Clarita Valley.
          </p>
          
          <div class="musician-categories">
            <div class="category">
              <h3>String Section</h3>
              <p>Our string section forms the foundation of our orchestra, bringing warmth and richness to every performance.</p>
            </div>
            
            <div class="category">
              <h3>Woodwind Section</h3>
              <p>From delicate flute melodies to powerful clarinet solos, our woodwind section adds color and character.</p>
            </div>
            
            <div class="category">
              <h3>Brass Section</h3>
              <p>Our brass section provides the power and majesty that makes orchestral music so thrilling.</p>
            </div>
            
            <div class="category">
              <h3>Percussion Section</h3>
              <p>The percussion section adds rhythm, texture, and excitement to our performances.</p>
            </div>
          </div>
        </div>

        <div class="join-orchestra">
          <h2>Join Our Orchestra</h2>
          <div class="join-content">
            <p>
              Are you a musician interested in joining our community orchestra? We welcome players of all 
              orchestral instruments and skill levels. Rehearsals are held weekly, and we're always 
              looking for dedicated musicians to join our musical family.
            </p>
            
            <div class="join-benefits">
              <h3>Benefits of Joining</h3>
              <ul>
                <li>Regular performance opportunities with a full symphony orchestra</li>
                <li>Professional conductor and artistic leadership</li>
                <li>Access to high-quality rehearsal and performance venues</li>
                <li>Community of like-minded musicians</li>
                <li>Opportunity to contribute to the cultural life of Santa Clarita Valley</li>
              </ul>
            </div>
            
            <div class="audition-info">
              <h3>Audition Information</h3>
              <p>
                Auditions are held as needed throughout the season. Please contact us to schedule an 
                audition or to learn more about joining our orchestra.
              </p>
              <a href="mailto:{{ organization.email }}" class="btn v2">Contact Us About Auditions</a>
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
  name: 'ArtisticTeamPage',
  setup() {
    const { organization, content, getAssetUrl } = useSiteConfig()
    
    return {
      organization,
      content,
      getAssetUrl
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

.team-content {
  padding: 80px 0;
}

.conductor-section {
  margin-bottom: 80px;
}

.conductor-section h2 {
  color: var(--color-flame);
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 60px;
}

.conductor-profile {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;
  align-items: start;
}

.conductor-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.conductor-info h3 {
  color: var(--color-flame);
  font-size: 2rem;
  margin-bottom: 12px;
}

.conductor-title {
  font-size: 1.25rem;
  color: var(--color-dark);
  margin-bottom: 30px;
  font-weight: 500;
}

.conductor-bio {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 30px;
}

.artistic-vision {
  background: var(--color-light-gray);
  padding: 60px 40px;
  border-radius: 8px;
  margin-bottom: 80px;
}

.artistic-vision h2 {
  color: var(--color-flame);
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 40px;
}

.vision-content p {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 30px;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.vision-points {
  list-style: none;
  padding: 0;
  max-width: 800px;
  margin: 0 auto;
}

.vision-points li {
  padding: 16px 0;
  border-bottom: 1px solid var(--color-light-gray);
  position: relative;
  padding-left: 30px;
}

.vision-points li:before {
  content: "✓";
  color: var(--color-pistachio);
  font-weight: bold;
  position: absolute;
  left: 0;
}

.musician-spotlight {
  margin-bottom: 80px;
}

.musician-spotlight h2 {
  color: var(--color-flame);
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 40px;
}

.musician-spotlight > p {
  font-size: 1.1rem;
  line-height: 1.7;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 60px;
}

.musician-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.category {
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.category h3 {
  color: var(--color-flame);
  font-size: 1.5rem;
  margin-bottom: 16px;
}

.category p {
  line-height: 1.6;
}

.join-orchestra {
  background: var(--color-light-gray);
  padding: 60px 40px;
  border-radius: 8px;
}

.join-orchestra h2 {
  color: var(--color-flame);
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 40px;
}

.join-content p {
  font-size: 1.1rem;
  line-height: 1.7;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 40px;
}

.join-benefits {
  margin-bottom: 40px;
}

.join-benefits h3 {
  color: var(--color-flame);
  font-size: 1.5rem;
  margin-bottom: 20px;
  text-align: center;
}

.join-benefits ul {
  list-style: none;
  padding: 0;
  max-width: 600px;
  margin: 0 auto;
}

.join-benefits li {
  padding: 12px 0;
  border-bottom: 1px solid var(--color-light-gray);
  position: relative;
  padding-left: 30px;
}

.join-benefits li:before {
  content: "•";
  color: var(--color-flame);
  font-weight: bold;
  position: absolute;
  left: 0;
}

.audition-info {
  text-align: center;
}

.audition-info h3 {
  color: var(--color-flame);
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.audition-info p {
  margin-bottom: 30px;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .page-hero h1 {
    font-size: 2.5rem;
  }
  
  .conductor-profile {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .musician-categories {
    grid-template-columns: 1fr;
  }
}
</style>
