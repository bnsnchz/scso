<template>
  <section class="non-profit-banner">
    <div>
      <div class="image-cont">
        <img src="images/non-profit.jpg" alt="Non-Profit Banner">
      </div>
      <div class="non-profit-banner-content st-center cnt-stl">
        <h2>Make An Impact</h2>
        <p>The Santa Clarita Symphony Orchestra depends on the generosity of our community to bring inspiring live performances to the SCV. Your gift helps us cover everything from sheet music to rehearsal space—ensuring that world-class music continues to flourish right here at home.</p>
        <p>Whether you give once or become a sustaining donor, you're helping create unforgettable experiences for audiences of all ages. Together, we can keep the arts vibrant and accessible for everyone in our community.</p>
        <a class="btn v1" href="https://scso.ludus.com/donate.php">Support Us</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NonProfitBanner'
}
</script>

<style scoped>
.non-profit-banner {
    position: relative;
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
    max-width: 600px;
    background: #53833E;
    background: radial-gradient(circle,rgba(83, 131, 62, 1) 0%, rgba(141, 197, 67, 1) 100%);
    box-shadow: 5px 5px 0px 0px var(--color-fern);
    border: 1px solid var(--color-fern);
}

.non-profit-banner h2 {
    font-size: 48px;
}

.non-profit-banner p {
    font-size: 20px;
    line-height: 120%;
}

</style>
