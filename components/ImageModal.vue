<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  src: string
  alt?: string
}>()

const isOpen = ref(false)
const modalRef = ref<HTMLElement>()

const openModal = () => {
  isOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isOpen.value = false
  document.body.style.overflow = ''
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isOpen.value) {
    closeModal()
  }
}

const handleBackdropClick = (event: MouseEvent) => {
  if (event.target === modalRef.value) {
    closeModal()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <div>
    <!-- Clickable image -->
    <img 
      :src="props.src" 
      :alt="props.alt || ''"
      class="cursor-pointer hover:opacity-80 transition-opacity duration-200 rounded-lg shadow-lg"
      @click="openModal"
    />
    
    <!-- Modal overlay -->
    <Teleport to="body">
      <div 
        v-if="isOpen"
        ref="modalRef"
        class="modal-overlay"
        @click="handleBackdropClick"
      >
        <div class="modal-container">
          <!-- Close button -->
          <button 
            class="close-button"
            @click="closeModal"
            aria-label="Close modal"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          
          <!-- Modal image -->
          <img 
            :src="props.src" 
            :alt="props.alt || ''"
            class="modal-image"
          />
          
          <!-- Caption if alt text exists -->
          <div v-if="props.alt" class="modal-caption">
            {{ props.alt }}
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  
  /* Glassmorphism background */
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  
  /* Smooth entrance animation */
  animation: fadeIn 0.3s ease-out;
}

.modal-container {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  /* Glass card effect */
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  box-shadow: 
    0 25px 45px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  
  padding: 2rem;
  
  /* Entrance animation */
  animation: modalEnter 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  color: white;
  cursor: pointer;
  
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  
  transition: all 0.2s ease;
}

.close-button:hover {
  background: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.4);
  transform: scale(1.1);
}

.close-button:active {
  transform: scale(0.95);
}

.modal-image {
  max-width: 100%;
  max-height: calc(90vh - 8rem);
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

.modal-caption {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  text-align: center;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes modalEnter {
  from {
    opacity: 0;
    transform: scale(0.8) translateY(40px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .modal-container {
    padding: 1rem;
    margin: 1rem;
  }
  
  .modal-image {
    max-height: calc(90vh - 6rem);
  }
  
  .close-button {
    top: 0.5rem;
    right: 0.5rem;
    width: 36px;
    height: 36px;
  }
}
</style>