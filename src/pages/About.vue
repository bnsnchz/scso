<template>
  <div class="about-page">
    <PageHero
      :background-image="getAssetUrl('/images/about-hero.png')"
      background-image-alt="Santa Clarita Symphony Orchestra"
    />

    <section class="about-content">
      <div class="st-container">
        <div class="about-section cnt-stl">
          <h2>Our Story</h2>
          <h3>Santa Clarita Symphony Orchestra: Music Rooted in Community</h3>
          <p>Born from a shared vision in 2022, the Santa Clarita Symphony Orchestra (SCSO) is a vibrant and inclusive performing arts nonprofit dedicated to making music an essential part of our community. What began as a platform for some local talent has blossomed into a full orchestra of passionate volunteer and professional musicians. Our mission is to inspire a lifelong love of music and create a thriving artistic home where everyone feels welcome.</p>
          <p>We believe the arts are vital to a vibrant local culture, and we are committed to fostering a deeper appreciation for orchestral music—the rich, complex sounds created by string, woodwind, brass, and percussion instruments. We warmly invite residents of all ages, backgrounds, and musical experiences to join us. Come as you are, and feel the music come alive.</p>
          <h3>Our Programs &amp; Performances</h3>
          <p>Join us for a musical experience that goes beyond the stage. Our performances are an adventure that will immerse you in a world where every note tells a story and makes you feel everything from heart-pounding excitement to quiet reflection. Each concert is designed to inspire, delight, and move you, blending beloved classics with exciting new works. Each season, you will get to experience:</p>
          <ul>
            <li>
              <p>Local Voices: We're proud to feature the incredible talent that calls Santa Clarita Valley home. This includes showcasing original works by local composers and inviting professional musicians —including members of our own orchestra— to join us as guest artists.</p>
            </li>
          </ul>
          <ul>
            <li>
              <p>Rising Stars: We support the next generation through our annual Youth Concerto Competition, which provides aspiring young musicians the thrilling opportunity to perform as soloists with a full orchestra. We also mentor an emerging conductor through our Assistant Conductor Internship, a unique program that provides significant podium time and hands-on experience in shaping the artistic vision of the orchestra.</p>
            </li>
          </ul>
          <ul>
            <li>
              <p>Behind the Music: We'll share the fascinating stories behind the music, the composers who created it, and its impact on the world, then and now. From timeless classical music to the infectious energy of Broadway jazz, uncover the historical context, the personal lives of the composers, and the cultural movements that shaped these timeless works, enriching your listening experience and deepening your appreciation for the art.</p>
            </li>
          </ul>
          <h3>Looking to the Future</h3>
          <p>As we look ahead, our vision is to grow beyond the concert hall and into the very fabric of our community. What began as a shared love for music has evolved into a thriving hub for artistic collaboration. We are committed to building bridges with fellow arts organizations like the Santa Clarita Valley Youth Orchestra and Mission Opera, creating unique opportunities for local talent and expanding the reach of musical encounters.</p>
          <p>We believe music should be everywhere. You'll find us not just on the main stage, but woven into local events —from the twinkling lights of the River of Lights to the creative energy of our local Film Festivals.</p>
          <p>Our ultimate vision is to make orchestral music integral and accessible to everyone. We are dedicated to ensuring that the joy of music echoes throughout our city, inspiring generations to come.</p>
          <h3>Now . . .</h3>
          <p>Join us in our shared vision to make music an essential part of life. Whether you are a lifelong music lover or discovering orchestral music for the first time, we invite you to be a part of our story. We look forward to sharing our passion with you at our next concert.</p>
        </div>
      </div>
    </section>

    <Newsletter />
  </div>
</template>

<script>
import { useSiteConfig } from '@/composables/useSiteConfig.js'
import PageHero from '@/components/PageHero.vue'
import Newsletter from '@/components/Newsletter.vue'

export default {
  name: 'AboutPage',
  components: {
    PageHero,
    Newsletter
  },
  setup() {
    const { organization, getAssetUrl } = useSiteConfig()
    
    return {
      organization,
      getAssetUrl
    }
  }
}
</script>

<style scoped>
.about-page :deep(.page-hero) {
  padding: 185px 0;
}

.about-content {
  padding: 80px 0;
}
</style>
