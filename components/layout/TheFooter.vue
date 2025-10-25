<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <strong>Platapalata</strong> © 2025<br>
        Поддержка: <a href="mailto:support@platapalata.com">support@platapalata.com</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer без логики
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables' as *;

/* Footer - точная копия из оригинала */
.footer {
  background: $color-bg-dark;
  padding: 2rem 0;
  margin-top: 4rem;
  border-top: 1px solid $color-bg-accent;
}

.footer-content {
  text-align: center;
  color: $color-gray;
  line-height: 1.8;

  a {
    color: $color-accent-blue;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: $color-accent-blue-secondary;
    }
  }

  strong {
    color: $color-text-light;
  }
}
</style>
