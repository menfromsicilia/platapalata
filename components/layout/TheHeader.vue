<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <NuxtLink to="/" class="logo">
          <div class="logo-icon">
            <img src="/logo.png" alt="Platapalata" />
          </div>
          <span>Platapalata</span>
        </NuxtLink>

        <SearchDropdown />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
// Простой header с SearchDropdown компонентом
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables' as *;

/* Sticky Header */
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(4, 36, 48, 0.98);
  border-bottom: 1px solid $color-bg-accent;
  box-shadow: $shadow-md;
}

.header-content {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem 0;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: $color-text-light;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: $color-accent-blue;
  }
}

.logo-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.search-wrapper {
  flex: 1;
  max-width: 600px;
  position: relative;
}

.search-input {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 3rem;
  border: 2px solid $color-bg-accent;
  border-radius: 4px;
  font-size: 1rem;
  background: $color-bg-secondary;
  color: $color-text-light;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: $color-accent-blue;
    background: $color-bg-accent;
    box-shadow: 0 0 0 3px rgba(102, 192, 244, 0.2);
  }

  &::placeholder {
    color: $color-gray;
  }
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: $color-gray;
  width: 20px;
  height: 20px;
}
</style>
