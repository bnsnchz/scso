<template>
  <section class="content-cards">
    <div class="content-cards-container st-container-lg">
      <div class="content-cards-item st-flex st-half st-flex-center">
        <div class="content-cards-item-image image-cont st-item">
          <img :src="alexImageUrl" alt="Martin Alex Arellano">
        </div>
        <div class="content-cards-item-content cnt-stl st-item">
          <h2>Martin Alex Arellano</h2>
          <p>SCSO welcomes our new conductor, Alex Arellano, who will be working closely with Artistic Director Dr. Brian Stone to bring exciting concerts to the Santa Clarita Valley.</p>
          <a class="btn v2" href="/about-us/artistic-teams.html">Learn More</a>
        </div>
      </div>
      <div class="content-cards-item st-flex st-half st-flex-reverse st-flex-center">
        <div class="content-cards-item-image image-cont st-item">
          <img :src="youthImageUrl" alt="Youth Concerto Competition">
        </div>
        <div class="content-cards-item-content cnt-stl st-item">
          <h2>Youth Concerto Competition</h2>
          <p>SCSO is pleased to open applications for its second Youth Concerto Competition, open to young instrumentalists in grades 9-12.</p>
          <a class="btn v2" href="/youth-concerto-competition.html">Learn More</a>
        </div>
      </div>
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

.content-cards-item-content h2 {
    font-size: 48px;
}

.content-cards-item.st-flex-reverse .content-cards-item-content {
    margin-left: 0;
    margin-right: -10%;
    z-index: 3;
}

</style>    