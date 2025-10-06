<template>
  <section class="split-content" :class="{ 'has-background': hasBackground }">
    <div class="st-container">
    <h2>{{ title }}</h2>
    <div class="content-details">
      <div class="content-text" v-if="Array.isArray(content)" v-html="content.join('')"></div>
      <div class="content-text" v-else v-html="content"></div>
      <div v-if="image" class="content-image">
        <img :src="image" :alt="imageAlt" loading="lazy">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SplitContent',
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: [String, Array],
      required: true
    },
    image: {
      type: String,
      default: ''
    },
    imageAlt: {
      type: String,
      default: ''
    },
    hasBackground: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
.split-content {
  padding: 80px 0;
}

.split-content.has-background {
  background: var(--color-carrot);
}

.split-content h2 {
  color: var(--color-flame);
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 60px;
}

.split-content.has-background h2 {
  color: #fff;
}

.split-content.has-background .content-text :deep(p) {
  color: #fff;
  font-size: 1.1rem;
  line-height: 1.5;
}

.content-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.content-text p {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 24px;
}

.content-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .content-details {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>
