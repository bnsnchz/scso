<template>
  <div class="artistic-team-page">
    <PageHero
      title="Artistic Team"
      description="Meet the talented musicians and conductors who bring our orchestra to life"
      :background-image="getAssetUrl('/images/artistic-hero.png')"
      background-image-alt="Artistic Team"
    />
    <ContentCards 
      :cards="artisticTeamCards"
      section-title="Our Artistic Leadership"
      section-id="artistic-team-cards"
    />
    <Newsletter />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useSiteConfig } from '@/composables/useSiteConfig.js'
import Newsletter from '@/components/Newsletter.vue'
import ContentCards from '@/components/ContentCards.vue'
import PageHero from '@/components/PageHero.vue'

export default {
  name: 'ArtisticTeamPage',
  components: {
    Newsletter,
    ContentCards,
    PageHero
  },
  setup() {
    const { getAssetUrl, getArtisticTeamCards } = useSiteConfig()
    
    // Use computed to ensure reactivity
    const artisticTeamCards = computed(() => {
      return getArtisticTeamCards()
    })
    
    return {
      getAssetUrl,
      artisticTeamCards
    }
  }
}
</script>

<style scoped>
.artistic-team-page :deep(.content-cards-item-image) {
  --_var-img-height: 800px;
}

.artistic-team-page :deep(.content-cards-item .content-cards-item-content) {
  margin-left: 0;
}

.artistic-team-page :deep(.content-cards-item.st-flex-reverse .content-cards-item-content){
  margin-right: 0;
}
</style>