<template>
  <section class="content-cards drk-bg" aria-labelledby="content-cards-heading">
    <div class="content-cards-container st-container-lg">
      <h2 id="content-cards-heading" class="sr-only">About {{ organization.shortName }} Programs</h2>
      
      <article class="content-cards-item st-flex st-half st-flex-center">
        <div class="content-cards-item-image image-cont st-item">
          <img :src="contentConfig.about.conductor.image" :alt="`${contentConfig.about.conductor.name}, ${contentConfig.about.conductor.title} of ${organization.name}`" loading="lazy">
        </div>
        <div class="content-cards-item-content cnt-stl st-item">
          <h3>{{ contentConfig.about.conductor.name }}</h3>
          <p>{{ contentConfig.about.conductor.description }}</p>
          <a 
            class="btn v2" 
            :href="contentConfig.about.conductor.learnMoreHref" 
            :aria-label="contentConfig.about.conductor.learnMoreAriaLabel"
          >
            Learn More
          </a>
        </div>
      </article>
      
      <article class="content-cards-item st-flex st-half st-flex-reverse st-flex-center">
        <div class="content-cards-item-image image-cont st-item">
          <img :src="contentConfig.about.youthCompetition.image" :alt="`Young musicians performing in ${organization.name} Youth Concerto Competition`" loading="lazy">
        </div>
        <div class="content-cards-item-content cnt-stl st-item">
          <h3>{{ contentConfig.about.youthCompetition.title }}</h3>
          <p>{{ contentConfig.about.youthCompetition.description }}</p>
          <a 
            class="btn v2" 
            :href="contentConfig.about.youthCompetition.learnMoreHref" 
            :aria-label="contentConfig.about.youthCompetition.learnMoreAriaLabel"
          >
            Learn More
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import { useSiteConfig } from '../composables/useSiteConfig.js'

export default {
  name: 'ContentCards',
  setup() {
    const { organization, getContentConfig } = useSiteConfig()
    
    return {
      organization,
      contentConfig: getContentConfig()
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

</style>    