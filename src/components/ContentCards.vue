<template>
  <section class="content-cards" :class="backgroundClass" :aria-labelledby="sectionId">
    <div class="content-cards-container" :class="containerClass">
      <h2 :id="sectionId" class="sr-only">{{ sectionTitle }}</h2>

      <article v-for="(card, index) in cards" :key="card.id || index"
        class="content-cards-item st-flex st-half st-flex-center" :class="{ 'st-flex-reverse': card.reverse }">
        <div class="content-cards-item-image image-cont st-item">
          <img :src="card.image" :alt="card.imageAlt" loading="lazy">
        </div>
        <div class="content-cards-item-content cnt-stl st-item">
          <h3>{{ card.title }}</h3>
          <p v-if="card.subtitle">{{ card.subtitle }}</p>
          <p>{{ card.description }}</p>
          <router-link v-if="card.linkType !== 'external'" :class="card.buttonClass || 'btn v2'"
            :to="card.linkHref" :aria-label="card.linkAriaLabel">
            {{ card.linkText }}
          </router-link>
          <a v-else :class="card.buttonClass || 'btn v2'"
            :href="card.linkHref" :aria-label="card.linkAriaLabel"
            target="_blank" rel="noopener noreferrer">
            {{ card.linkText }}
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
  import {
    useSiteConfig
  } from '../composables/useSiteConfig.js'

  export default {
    name: 'ContentCards',
    props: {
      // Card data array
      cards: {
        type: Array,
        required: true,
        default: () => []
      },
      // Section configuration
      sectionTitle: {
        type: String,
        default: 'Content Cards'
      },
      sectionId: {
        type: String,
        default: 'content-cards-heading'
      },
      // Styling options
      backgroundClass: {
        type: String,
        default: 'drk-bg'
      },
      containerClass: {
        type: String,
        default: 'st-container-lg'
      }
    },
    setup() {
      const {
        organization
      } = useSiteConfig()

      return {
        organization
      }
    }
  }
</script>

<style scoped>
  .content-cards {
    background-color: var(--color-flame);
  }

  .content-cards-item:not(:last-child) {
    margin-bottom: 100px;
  }

  .content-cards-item-image {
    --_var-img-height: 450px;
  }

  .content-cards-item-content {
    padding: 24px;
    color: #fff;
    margin-left: -10%;
    max-width: 550px;
  }

  .content-cards-item-content h3 {
    font-size: 48px;
    font-family: var(--font-headline);
    font-weight: 600;
  }

  .content-cards-item.st-flex-reverse .content-cards-item-content {
    margin-left: 0;
    margin-right: -10%;
    z-index: 3;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  @media screen and (max-width: 768px) {
    .content-cards-item {
      --_var-gap: 0;
    }

    .content-cards-item-content, .content-cards-item.st-flex-reverse .content-cards-item-content {
      margin-left: 0;
      margin-right: 0;
    }

    .content-cards-item-image {
      margin-bottom: 0;
    }

    .content-cards-item:not(:last-child) {
      margin-bottom: 50px;
    }

  }
</style>