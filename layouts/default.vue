<template>
  <div>
    <NavBar />
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup>
</script>

<style scoped>
main {
  min-height: 100vh;
}
</style>
