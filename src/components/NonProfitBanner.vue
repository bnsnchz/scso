<template>
  <section class="non-profit-banner drk-bg" aria-labelledby="support-heading">
    <div>
      <div class="image-cont">
        <img :src="bannerImageUrl" :alt="`Community members enjoying ${organization.name} performance`" loading="lazy">
      </div>
      <div class="non-profit-banner-content st-center cnt-stl">
        <h2 id="support-heading">Support the Arts in {{ organization.address }}</h2>
        <p>The {{ organization.name }} depends on the generosity of our community to bring inspiring live performances to the SCV. Your gift helps us cover everything from sheet music to rehearsal space—ensuring that world-class music continues to flourish right here at home.</p>
        <p>Whether you give once or become a sustaining donor, you're helping create unforgettable experiences for audiences of all ages. Together, we can keep the arts vibrant and accessible for everyone in our community.</p>
        <a class="btn v2" :href="supportUrl" :aria-label="`Support ${organization.name} through donations`">Support Us</a>
      </div>
    </div>
  </section>
</template>

<script>
import { useSiteConfig } from '../composables/useSiteConfig.js'

export default {
  name: 'NonProfitBanner',
  setup() {
    const { organization, getAssetUrl } = useSiteConfig()
    
    return {
      organization,
      bannerImageUrl: getAssetUrl('/images/non-profit.jpg'),
      supportUrl: 'https://scso.ludus.com/donate.php'
    }
  }
}
</script>

<style scoped>
.non-profit-banner {
    position: relative;
    padding: 0;
    margin-bottom: 350px;
}

.non-profit-banner .image-cont {
    --_var-img-height: 25rem;
    position: relative;
}

.non-profit-banner .image-cont img {
    object-position: top;
}

/* .non-profit-banner .image-cont:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.6);
    top: 0;
    left: 0;
} */

.non-profit-banner-content {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 40%);
    color: #fff;
    padding: 48px 24px;
    max-width: 800px;
    background-color: var(--color-black);
}

.non-profit-banner h2 {
    font-family: var(--font-headline);
    text-transform: capitalize;
}

.non-profit-banner p {
    font-size: 20px;
    line-height: 1.5;
}

</style>
