<script setup lang="ts">
import ImageModal from './ImageModal.vue'

const props = defineProps<{
  src: string
  alt?: string
  class?: string
}>()
</script>

<template>
  <ImageModal :src="props.src" :alt="props.alt" :class="props.class" />
</template>