<script>
export default {
  props: {
    platform: {
      type: String,
      required: false,
    },

    link: {
      type: String,
      required: false,
    },
  },

  data() {
    return {}
  },

  computed: {
    platformIcon() {
      switch (this.platform) {
        case 'linkedin':
          return 'pi pi-linkedin'
        case 'github':
          return 'pi pi-github'

        case 'youtube':
          return 'pi pi-youtube'
        default:
          return ''
      }
    },
    platformClass() {
      return `social-button ${this.platform}`
    },
  },
}
</script>

<template>
  <a :href="link" target="_blank" :class="`${platformClass}`">
    <i :class="platformIcon"></i> {{ platform }}
  </a>
</template>

<style scoped>
.social-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  color: #fff;
  text-transform: capitalize;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  border: 1px solid transparent;
  margin-top: 24px;
}

.social-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.social-button .pi {
  margin-right: 0.5rem;
  font-size: 1.2rem;
}

/* Cores específicas */
.social-button.linkedin {
  background-color: #0077b5;
  border-color: #0077b5;
}

.social-button.github {
  background-color: #333;
  border-color: #333;
}

.social-button.youtube {
  background-image: linear-gradient(to right, #c4302b 0%, #ff0000 51%, #c4302b 100%);
}
</style>
