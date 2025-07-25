<template>
  <div class="lights-bg-container">
    <slot />
  </div>
</template>

<style scoped>
.lights-bg-container {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: -1000;
  overflow: hidden;
}
</style>
