<template>
  <section class="hero" role="banner">
    <div class="hero-container">
      <div class="hero-image">
        <img :src="heroImageUrl" alt="Santa Clarita Symphony Orchestra performing live classical music on stage" loading="eager">
      </div>
      <div class="hero-content">
        <img :src="logoUrl" alt="Santa Clarita Symphony Orchestra Logo" loading="eager">
        <h1>Join us for our 2025/2026 season</h1>
        <p class="hero-description">Experience the magic of live classical music with Santa Clarita's premier community orchestra. Join us for an unforgettable season of concerts, featuring our new conductor Martin Alex Arellano and celebrating the talented musicians who make our community vibrant through music.</p>
        <a class="btn v1" href="https://scso.ludus.com/index.php" aria-label="Purchase tickets for Santa Clarita Symphony Orchestra concerts">Explore Ticket Options</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  computed: {
    heroImageUrl() {
      return '/scso/images/SCSO-Spring2024-88.webp'
    },
    logoUrl() {
      return '/scso/images/scso-acronym-bgtransparent.png'
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
</style>
