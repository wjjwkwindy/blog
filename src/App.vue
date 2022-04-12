<template>
  <NavBar />
  <main class="px-7 py-10">
    <router-view />
    <Footer />
  </main>
</template>

<script setup lang="ts">
useHead({
  meta: [
    { property: 'og:title', content: 'Cosy Rain' },
    { name: 'description', content: 'Cosy Rain\'s Portfolio' },
  ],
})
</script>
