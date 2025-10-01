<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; 2025 SCSO. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background-color: #060201;
  padding: 20px 0;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

p {
  font-family: var(--font-text);
  font-size: 14px;
  color: #666;
  margin: 0;
}
</style>
