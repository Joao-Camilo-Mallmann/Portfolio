<script setup>
import { computed } from 'vue'

const props = defineProps({
  platform: {
    type: String,
    required: true,
    validator: (value) =>
      ['linkedin', 'github', 'youtube', 'whatsapp', 'email', 'curriculo'].includes(value),
  },
  link: {
    type: String,
    required: false,
  },
  variant: {
    type: String,
    default: 'default', // 'default' or 'editor'
  },
})

const platformConfig = {
  linkedin: {
    icon: 'pi pi-linkedin',
    colors: {
      primary: '#0077b5',
      hover: '#005885',
    },
  },
  github: {
    icon: 'pi pi-github',
    colors: {
      primary: '#333',
      hover: '#24292e',
    },
  },
  youtube: {
    icon: 'pi pi-youtube',
    colors: {
      primary: 'linear-gradient(to right, #c4302b 0%, #ff0000 51%, #c4302b 100%)',
      hover: 'linear-gradient(to right, #a02622 0%, #e60000 51%, #a02622 100%)',
    },
  },
  whatsapp: {
    icon: 'pi pi-whatsapp',
    colors: {
      primary: '#25d366',
      hover: '#1da851',
    },
  },
  email: {
    icon: 'pi pi-envelope',
    colors: {
      primary: '#ea4335',
      hover: '#d33b2c',
    },
  },
  curriculo: {
    icon: 'pi pi-file',
    colors: {
      primary: '#4d91ea',
      hover: '#3a6bbf',
    },
  },
}

const platformIcon = computed(() => {
  return platformConfig[props.platform]?.icon || ''
})

const platformClass = computed(() => {
  return `social-button ${props.platform}`
})

const platformColors = computed(() => {
  return platformConfig[props.platform]?.colors || {}
})

const openLink = () => {
  if (props.platform === 'email') {
    window.location.href = props.link
  } else if (props.platform === 'curriculo') {
    window.open('public/Currículo.pdf', '_blank')
  } else {
    window.open(props.link, '_blank')
  }
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
  --social-padding: 0.5rem 1rem;
  --social-font-size: 0.875rem;
  --social-min-width: 120px;
  --social-icon-size: 1.1rem;
  --social-icon-margin: 0.5rem;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--social-padding);
  border-radius: 8px;
  font-weight: 600;
  font-size: var(--social-font-size);
  color: #fff;
  text-transform: capitalize;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  border: 1px solid transparent;
  margin: 0.25rem;
  min-width: var(--social-min-width);
}

.social-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.social-button :deep(.pi) {
  margin-right: var(--social-icon-margin);
  font-size: var(--social-icon-size);
}

/* Platform-specific colors */
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

.social-button.curriculo {
  background-color: #4d91ea;
  border-color: #4d91ea;
}

.social-button.curriculo:hover {
  background-color: #3a6bbf;
  border-color: #3a6bbf;
}

/* Responsive Design */
@media (max-width: 640px) {
  .social-button {
    --social-padding: 0.5rem 0.75rem;
    --social-font-size: 0.8rem;
    --social-min-width: 100px;
    --social-icon-size: 1rem;
    --social-icon-margin: 0.375rem;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .social-button {
    --social-padding: 0.625rem 1.25rem;
    --social-font-size: 0.9rem;
    --social-min-width: 110px;
  }
}

@media (min-width: 1025px) {
  .social-button {
    --social-padding: 0.75rem 1.5rem;
    --social-font-size: 1rem;
    --social-min-width: 130px;
  }
}
</style>
