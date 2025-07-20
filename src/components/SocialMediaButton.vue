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
        case 'whatsapp':
          return 'pi pi-whatsapp'
        case 'email':
          return 'pi pi-envelope'
        default:
          return ''
      }
    },
    platformClass() {
      return `social-button ${this.platform}`
    },
  },

  methods: {
    openLink() {
      if (this.link) {
        if (this.platform === 'whatsapp') {
          // Para WhatsApp, o link deve estar no formato: https://wa.me/5511999999999
          window.open(this.link, '_blank')
        } else if (this.platform === 'email') {
          // Para email, o link deve estar no formato: mailto:email@exemplo.com
          window.location.href = this.link
        } else {
          window.open(this.link, '_blank')
        }
      }
    },
  },
}
</script>

<template>
  <Button
    :class="platformClass"
    :label="platform"
    :icon="platformIcon"
    iconPos="left"
    @click="openLink"
    type="button"
    size="small"
    class="social-media-btn !transition-all !duration-300"
  />
</template>

<style scoped>
.social-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.875rem;
  color: #fff;
  text-transform: capitalize;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  border: 1px solid transparent;
  margin: 0.25rem;
  min-width: 120px;
}

/* Responsividade para mobile */
@media (max-width: 640px) {
  .social-button {
    padding: 0.5rem 0.75rem;
    font-size: 0.8rem;
    min-width: 100px;
  }

  .social-button .pi {
    font-size: 1rem !important;
    margin-right: 0.375rem !important;
  }
}

/* Responsividade para tablet */
@media (min-width: 641px) and (max-width: 1024px) {
  .social-button {
    padding: 0.625rem 1.25rem;
    font-size: 0.9rem;
    min-width: 110px;
  }
}

/* Desktop */
@media (min-width: 1025px) {
  .social-button {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    min-width: 130px;
  }
}

.social-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.social-button .pi {
  margin-right: 0.5rem;
  font-size: 1.1rem;
}

/* Cores específicas */
.social-button.linkedin {
  background-color: #0077b5;
  border-color: #0077b5;
}

.social-button.linkedin:hover {
  background-color: #005885;
  border-color: #005885;
}

.social-button.github {
  background-color: #333;
  border-color: #333;
}

.social-button.github:hover {
  background-color: #24292e;
  border-color: #24292e;
}

.social-button.youtube {
  background-image: linear-gradient(to right, #c4302b 0%, #ff0000 51%, #c4302b 100%);
}

.social-button.youtube:hover {
  background-image: linear-gradient(to right, #a02622 0%, #e60000 51%, #a02622 100%);
  border-color: #a02622;
}

.social-button.whatsapp {
  background-color: #25d366;
  border-color: #25d366;
}

.social-button.whatsapp:hover {
  background-color: #1da851;
  border-color: #1da851;
}

.social-button.email {
  background-color: #ea4335;
  border-color: #ea4335;
}

.social-button.email:hover {
  background-color: #d33b2c;
  border-color: #d33b2c;
}
</style>
