<template>
  <section class="non-profit-banner" aria-labelledby="support-heading">
    <div>
      <div class="image-cont">
        <img :src="bannerImageUrl" alt="Community members enjoying Santa Clarita Symphony Orchestra performance" loading="lazy">
      </div>
      <div class="non-profit-banner-content st-center cnt-stl">
        <h2 id="support-heading">Support the Arts in Santa Clarita Valley</h2>
        <p>The Santa Clarita Symphony Orchestra depends on the generosity of our community to bring inspiring live performances to the SCV. Your gift helps us cover everything from sheet music to rehearsal space—ensuring that world-class music continues to flourish right here at home.</p>
        <p>Whether you give once or become a sustaining donor, you're helping create unforgettable experiences for audiences of all ages. Together, we can keep the arts vibrant and accessible for everyone in our community.</p>
        <a class="btn v2" href="https://scso.ludus.com/donate.php" aria-label="Support Santa Clarita Symphony Orchestra through donations">Support Us</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NonProfitBanner',
  computed: {
    bannerImageUrl() {
      return '/scso/images/non-profit.jpg'
    }
  }
}
</script>

<style scoped>
.non-profit-banner {
    position: relative;
    padding: 0;
}

.non-profit-banner .image-cont {
    --_var-img-height: 25rem;
    position: relative;
}

.non-profit-banner .image-cont img {
    object-position: top;
}

.non-profit-banner .image-cont:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.6);
    top: 0;
    left: 0;
}

.non-profit-banner-content {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 30%);
    color: #fff;
    padding: 48px 24px;
    max-width: 800px;
    background-color: var(--color-fern);
    border: 1px solid var(--color-fern);
}

.non-profit-banner h2 {
    font-family: var(--font-headline);
    text-transform: capitalize;
}

.non-profit-banner p {
    font-size: 20px;
    line-height: 120%;
}

</style>
