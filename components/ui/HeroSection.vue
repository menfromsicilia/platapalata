<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h1>Быстрое пополнение игровых аккаунтов</h1>
        <p>
          Мгновенное пополнение Steam, Epic Games, PlayStation, Xbox и других популярных платформ.
          Безопасно, быстро и с гарантией возврата.
        </p>
        <div class="hero-features">
          Моментальная доставка • Лучшие цены • Поддержка 24/7
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Hero section без логики
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables' as *;

/* Modern Hero Block - точная копия из оригинала */
.hero {
  position: relative;
  padding: 6rem 0 4rem;
  overflow: hidden;
  background: linear-gradient(135deg, $color-bg-primary 0%, $color-bg-dark 50%, $color-bg-secondary 100%);
}

.hero::before {
  content: '';
  position: absolute;
  top: -30%;
  right: -10%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(102, 192, 244, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  animation: float 20s ease-in-out infinite;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: -30%;
  left: -5%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(92, 157, 201, 0.08) 0%, transparent 70%);
  border-radius: 50%;
  animation: float 15s ease-in-out infinite reverse;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(30px, -30px) scale(1.1); }
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #ffffff 0%, $color-accent-blue 50%, $color-accent-blue-secondary 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 30px rgba(102, 192, 244, 0.3));
}

.hero p {
  font-size: 1.25rem;
  color: $color-text-light;
  line-height: 1.8;
  opacity: 0.9;
}

.hero-features {
  margin-top: 2rem;
  font-size: 1.125rem;
  color: $color-accent-blue;
  font-weight: 500;
}

/* Responsive */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }
}
</style>
