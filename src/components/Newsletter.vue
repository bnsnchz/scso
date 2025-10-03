<template>
  <section class="newsletter drk-bg" role="region" aria-labelledby="newsletter-heading">
    <div class="newsletter-container st-center">
      <h3 id="newsletter-heading">Sign up for discounts and updates on music and events.</h3>
      <form class="newsletter-form st-flex st-center">
        <input type="email" placeholder="Enter your email" required aria-label="Enter your email to subscribe to our newsletter">
        <button class="btn v2" type="submit">Subscribe</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Newsletter'
}
</script>

<style scoped>
.newsletter {
  background-color: var(--color-pistachio);
  padding: 32px 0;
}

.newsletter-container {
  max-width: var(--var-container-width);
  margin: 0 auto;
  padding: 0 20px;
}

.drk-bg .newsletter-container {
  color: #fff;
}

.newsletter-form {
  gap: 16px;
  align-items: center;
}

input[type="email"] {
    border: none;
    padding: 10px 16px;
    max-width: 300px;
    width: 100%;
    font-family: var(--font-text);
    font-size: 18px;
}
</style>