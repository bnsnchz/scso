<template>
  <section class="wide-content-card drk-bg">
    <div class="wide-content-card-container st-flex st-half st-container-lg st-flex-center">
      <div class="wide-content-card-image image-cont st-item">
        <img :src="imageUrl" alt="Santa Clarita Symphony Orchestra at Canyon High School Performing Arts Center" loading="lazy">
      </div>
      <div class="wide-content-card-content cnt-stl st-item">
        <h2>OUR 2025-2026 SEASON</h2>
        <p>Our 2025-2026 season is here! We have four new concerts planned for you, in addition to our second Youth Concerto Competition -- and don't miss popular annual Christmas concert!</p>
        <p>We're also pleased to offer a new subscription discount: when you choose 3 or more concerts, receive 25% off of your order! Learn more about this amazing offer and see our upcoming concerts here.</p>
        <p>Looking to surprise someone with the perfect gift? We now have SCSO Gift Cards available for purchase, so you can let your recipient choose their own musical memories.</p>
        <strong>Our Concert Home</strong>
        <p>We're proud to call the Canyon High School Performing Arts Center our musical home. The 450-seat theater features cutting-edge technology, accessible seating, a beautiful lobby and is right here in the SCV.</p>
        <strong>Follow Us!</strong>
        <p>For the latest performance updates, events, fundraisers, news, ticket discounts, local events and more, follow us!</p>   
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WideContentCard',
  computed: {
    imageUrl() {
      return '/scso/images/SCSO-pac.jpg'
    }
  }
}
</script>

<style scoped>
.wide-content-card {
  background-color: var(--color-flame);
  padding: 64px 0;
}

.wide-content-card-container {
  gap: 24px;
}

.wide-content-card-image {
  --_var-img-height: 450px;
}

.wide-content-card-content {
  padding: 24px;
}

.wide-content-card-content p {
  font-size: 18px;
  line-height: 120%;
}

</style>