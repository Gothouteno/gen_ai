<template>
  <div class="slidev-layout image-right grid grid-cols-2">
    <div class="my-auto p-4">
      <slot />
    </div>
    <div class="w-full h-full bg-contain bg-no-repeat bg-center" 
    :style="imageContainerStyle">
    </div>
    <NavBar />
  </div>
</template>
<script setup>
import { computed } from 'vue'
const props = defineProps({
  image: {
    type: String,
  },
})
const imageContainerStyle = computed(() => ({
  backgroundImage: props.image ? `url(${props.image.startsWith('/') ? '.' + props.image : props.image})` : 'none',
  backgroundPosition: 'center',
  backgroundSize: 'contain', 
}))
</script>