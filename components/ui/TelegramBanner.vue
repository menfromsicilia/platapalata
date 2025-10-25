<template>
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Telegram Stars</h2>
        <NuxtLink to="/telegram-stars" class="section-link">
          Купить
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </NuxtLink>
      </div>
      <div class="telegram-preview">
        <div class="telegram-preview-content">
          <h3>Telegram Stars</h3>
          <p>Покупайте звёзды Telegram для доступа к премиум-контенту, поддержки авторов и использования эксклюзивных функций мессенджера.</p>
          <NuxtLink to="/telegram-stars" class="btn-primary">Купить Stars</NuxtLink>
        </div>
        <div class="telegram-icon">★</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Telegram banner без логики
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables' as *;

.section {
  padding: 4rem 0;
  background: $color-bg-primary;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: $color-text-light;
}

.section-link {
  color: $color-accent-blue;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: $color-accent-blue-secondary;
  }
}

/* Telegram Preview Card - точная копия из оригинала */
.telegram-preview {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2rem;
  align-items: center;
  background: linear-gradient(135deg, $color-bg-secondary 0%, $color-bg-accent 100%);
  padding: 3rem;
  border-radius: 8px;
  border: 1px solid $color-bg-accent;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(102, 192, 244, 0.1) 0%, transparent 60%);
    border-radius: 50%;
  }
}

.telegram-preview-content {
  position: relative;
  z-index: 1;

  h3 {
    font-size: 2rem;
    color: $color-text-light;
    margin-bottom: 1rem;
  }

  p {
    color: $color-gray;
    font-size: 1.125rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
}

.telegram-icon {
  font-size: 8rem;
  color: $color-accent-blue;
  opacity: 0.3;
  line-height: 1;
  text-shadow: 0 0 40px rgba(102, 192, 244, 0.4);
}

.btn-primary {
  display: inline-block;
  padding: 0.875rem 2rem;
  background: $color-accent-blue;
  color: $color-bg-primary;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s;
  border: none;
  cursor: pointer;
  box-shadow: $shadow-sm;

  &:hover {
    background: $color-accent-blue-secondary;
    transform: translateY(-2px);
    box-shadow: $shadow-md;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .telegram-preview {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .telegram-icon {
    display: none;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}
</style>
