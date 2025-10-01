<template>
  <section class="hero">
    <div class="hero-container">
      <div class="hero-image">
        <img src="/images/SCSO-Spring2024-88.webp" alt="Hero Image">
      </div>
      <div class="hero-content">
        <img src="/images/scso-acronym-bgtransparent.png" alt="SCSO Logo">
        <p>Introducing our 2025/2026 season</p>
        <a class="btn v1" href="https://scso.ludus.com/index.php">Explore Ticket Options</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/berlin-sans-fb');

:root {
  --color-russet: #653514;
  --color-fern: #53833E;
  --color-pistachio: #8DC543;
  --color-flame: #E06126;
  --color-carrot: #F7941D;
  --font-headline: 'Berlin Sans FB', sans-serif;
  --font-text: 'Roboto Light', sans-serif;
}

.hero-image {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.hero-image img {
  position: absolute;
  object-fit: cover;
  object-position: top;
  width: 100%;
  height: 100%;
}

.hero {
  padding: 0;
}

.hero-content {
  position: absolute;
  bottom: 50%;
  right: 25%;
  transform: translate(50%, 50%);
  max-width: 25%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero-container {
  position: relative;
}

.hero-content p {
  color: #fff;
  font-family: var(--font-headline);
  font-size: 48px;
  margin: 0;
}

.hero-content-highlight {
  color: #F7941D;
  display: block;
}

.btn {
  padding: 10px 32px;
  font-family: var(--font-headline);
  font-weight: 100;
  display: inline-block;
  transition: all .25s ease 0s;
  text-decoration: none;
}

.btn.v1 {
  background-color: var(--color-flame);
  color: #fff;
}

.btn.v1:hover {
  background-color: var(--color-fern);
}
</style>
