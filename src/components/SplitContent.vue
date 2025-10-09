<template>
  <section class="split-content" :class="{ 'has-background': hasBackground }">
    <div class="st-container">
    <h2 v-if="title">{{ title }}</h2>
    <div class="content-details st-flex st-half">
      <div class="content-text st-item" v-if="Array.isArray(content)" v-html="content.join('')"></div>
      <div class="content-text st-item" v-else v-html="content"></div>
      <div v-if="image" class="content-image st-item">
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
  background: var(--color-flame);
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
  display: flex;
  gap: 16px;
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
  .split-content {
    padding: 40px 0;
  }
  
  .split-content h2 {
    font-size: 2rem;
    margin-bottom: 40px;
  }
  
  .content-details {
    flex-direction: column;
    gap: 24px;
  }
  
  .content-text {
    order: 2;
  }
  
  .content-image {
    order: 1;
  }
  
  .content-text p {
    font-size: 16px;
    line-height: 1.6;
  }
}

@media (max-width: 480px) {
  .split-content {
    padding: 32px 0;
  }
  
  .split-content h2 {
    font-size: 1.75rem;
    margin-bottom: 32px;
  }
  
  .content-details {
    gap: 20px;
  }
  
  .content-text p {
    font-size: 15px;
    line-height: 1.5;
  }
}
</style>
