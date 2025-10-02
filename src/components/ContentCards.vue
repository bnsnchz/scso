<template>
  <section class="content-cards" aria-labelledby="content-cards-heading">
    <div class="content-cards-container st-container-lg">
      <h2 id="content-cards-heading" class="sr-only">About SCSO Programs</h2>
      
      <article class="content-cards-item st-flex st-half st-flex-center">
        <div class="content-cards-item-image image-cont st-item">
          <img :src="alexImageUrl" alt="Martin Alex Arellano, new conductor of Santa Clarita Symphony Orchestra" loading="lazy">
        </div>
        <div class="content-cards-item-content cnt-stl st-item">
          <h3>Martin Alex Arellano</h3>
          <p>SCSO welcomes our new conductor, Alex Arellano, who will be working closely with Artistic Director Dr. Brian Stone to bring exciting concerts to the Santa Clarita Valley. Experience the fresh energy and artistic vision that Alex brings to our classical music performances.</p>
          <a class="btn v2" href="/about-us/artistic-teams.html" aria-label="Learn more about Martin Alex Arellano and the SCSO artistic team">Learn More</a>
        </div>
      </article>
      
      <article class="content-cards-item st-flex st-half st-flex-reverse st-flex-center">
        <div class="content-cards-item-image image-cont st-item">
          <img :src="youthImageUrl" alt="Young musicians performing in Santa Clarita Symphony Orchestra Youth Concerto Competition" loading="lazy">
        </div>
        <div class="content-cards-item-content cnt-stl st-item">
          <h3>Youth Concerto Competition 2025</h3>
          <p>SCSO is pleased to open applications for its second Youth Concerto Competition, open to young instrumentalists in grades 9-12.</p>
          <a class="btn v2" href="/youth-concerto-competition.html" aria-label="Learn more about the SCSO Youth Concerto Competition and how to apply">Learn More</a>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContentCards',
  computed: {
    alexImageUrl() {
      return '/scso/images/alex-hp.webp'
    },
    youthImageUrl() {
      return '/scso/images/concerto-competition.jpg'
    }
  }
}
</script>

<style scoped>
.content-cards {
    background-color: var(--color-russet);
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