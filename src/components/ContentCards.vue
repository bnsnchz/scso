<template>
  <section class="content-cards">
    <div class="content-cards-container st-flex st-half st-flex-between st-container-lg">
      <div class="content-cards-item st-item">
        <div class="content-cards-item-image image-cont">
          <img src="/scso/images/alex-hp.webp" alt="Martin Alex Arellano">
        </div>
        <div class="content-cards-item-content cnt-stl">
          <h2>Martin Alex Arellano</h2>
          <p>SCSO welcomes our new conductor, Alex Arellano, who will be working closely with Artistic Director Dr. Brian Stone to bring exciting concerts to the Santa Clarita Valley.</p>
          <a class="btn v1" href="/about-us/artistic-teams.html">Learn More</a>
        </div>
      </div>
      <div class="content-cards-item st-item">
        <div class="content-cards-item-image image-cont">
          <img src="/scso/images/youth-concerto.avif" alt="Youth Concerto Competition">
        </div>
        <div class="content-cards-item-content cnt-stl">
          <h2>Youth Concerto Competition</h2>
          <p>Last year's event was a rousing success in showcasing the amazing talent we have here in the Santa Clarita Valley.</p>
          <p>SCSO is pleased to open applications for its second Youth Concerto Competition, open to young instrumentalists in grades 9-12.</p>
          <p>Music Teachers: <a target="_blank" href="public/documents/ycc-flyer.pdf">please download our information flyer</a> to display in your studios.</p>
          <p>Application Deadline: November 2, 2025 </p>
          <a class="btn v1" href="/youth-concerto-competition.html">Learn More</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContentCards'
}
</script>

<style scoped>
.content-cards-container {
  gap: 32px;
}

.content-cards-item-image {
    height: 361px;
    max-width: 70%;
}

.content-cards-item-image img {
    object-fit: cover;
    border: 1px solid rgba(83, 131, 62, .5);
}

.content-cards-item-content {
    background-color: #fff;
    max-width: 400px;
    padding: 24px;
    margin-left: auto;
    margin-top: -30%;
    z-index: 3;
    position: relative;
    box-shadow: 7px 7px 0px 0px var(--color-fern);
    border: 1px solid var(--color-fern);
}
</style>    