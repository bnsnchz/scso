<template>
  <section class="page-hero" :class="{ 'has-background-image': backgroundImage }">
    <picture v-if="backgroundImage">
      <img :src="backgroundImage" :alt="backgroundImageAlt" loading="eager">
    </picture>
    <div class="st-container">
      <h1>{{ title }}</h1>
      <p v-if="description" class="hero-description">
        {{ description }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PageHero',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    backgroundImage: {
      type: String,
      default: ''
    },
    backgroundImageAlt: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, var(--color-flame), var(--color-pistachio));
  color: white;
  padding: 185px 0;;
  text-align: center;
  position: relative;
}

.page-hero.has-background-image {
  background: transparent;
}

.page-hero picture {
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.page-hero picture img {
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.page-hero h1 {
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 24px;
  position: relative;
  z-index: 1;
}

.hero-description {
  font-size: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  z-index: 1;
}

@media (max-width: 768px) {
  .page-hero h1 {
    font-size: 2.5rem;
  }
}
</style>
