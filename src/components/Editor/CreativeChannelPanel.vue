<template>
  <div class="relative mb-8 mx-4">
    <div class="text-center mb-6 relative">
      <h2 class="relative text-2xl md:text-3xl font-extrabold mb-3">
        <span
          class="bg-gradient-to-r from-[#eaa64d] via-yellow-400 to-[#f0b86e] bg-clip-text text-transparent drop-shadow-lg"
        >
          🎨 Meu Canal Criativo
        </span>
      </h2>
      <div class="relative inline-block">
        <div
          class="absolute inset-0 bg-gradient-to-r from-[#eaa64d]/40 to-yellow-500/40 blur-sm rounded-full opacity-70"
        ></div>
        <p
          class="relative text-gray-300 text-base md:text-lg font-medium px-6 py-2 bg-black/60 rounded-full border border-[#eaa64d]/30"
        >
          Onde a <span class="text-[#eaa64d] font-bold">criatividade</span> não tem limites
        </p>
      </div>
    </div>

    <Panel
      class="!bg-black/70 !border-2 !border-[#eaa64d]/30 !rounded-2xl !shadow-xl relative backdrop-blur-sm overflow-hidden cursor-pointer hover:!border-[#eaa64d]/50 !transition-all !duration-300 max-w-4xl mx-auto animate-panel-float"
      @click="openChannel"
    >
      <div class="absolute inset-0 pointer-events-none">
        <div
          class="absolute top-4 left-4 w-16 h-16 bg-gradient-to-r from-[#eaa64d]/20 to-yellow-500/20 rounded-full blur-lg opacity-70"
        ></div>
        <div
          class="absolute bottom-4 right-4 w-20 h-20 bg-gradient-to-r from-yellow-400/15 to-[#f0b86e]/15 rounded-full blur-xl opacity-50"
        ></div>
        <div
          class="absolute inset-0 bg-gradient-to-r from-transparent via-[#eaa64d]/3 to-transparent opacity-60"
        ></div>
      </div>
      <div class="relative z-10 flex items-center justify-between p-6">
        <div class="relative">
          <div
            class="absolute inset-0 bg-gradient-to-r from-[#eaa64d]/60 to-yellow-500/60 rounded-full blur-md opacity-80"
          ></div>
          <div class="relative bg-black rounded-full p-3">
            <img
              :src="youtubeOFurryLink"
              alt="Canal OFurry"
              class="w-25 h-25 md:w-24 md:h-24 rounded-full border-4 border-[#eaa64d] shadow-2xl"
            />
          </div>
          <div
            class="absolute -inset-2 border-2 border-[#eaa64d]/40 rounded-full animate-spin-slow"
          ></div>
        </div>
        <div class="flex-1 ml-6">
          <h3 class="text-lg md:text-xl font-bold text-[#eaa64d] mb-2">OFurry</h3>
          <p class="text-gray-300 text-sm md:text-base mb-4">
            Meu lado mais <span class="text-[#eaa64d] font-semibold">criativo</span> e experimental
          </p>
          <span class="inline-flex items-center gap-2 text-[#eaa64d] font-semibold py-2 px-4">
            <i class="pi pi-external-link"></i>
            Explorar Canal
          </span>
        </div>
      </div>
    </Panel>
  </div>
</template>

<script>
export default {
  name: 'CreativeChannelPanel',
  data() {
    return {
      youtubeOFurryLink:
        'https://yt3.googleusercontent.com/gnIEqwR1vmWB45wdNA45xHpRYaE0XiJUYihwt3aCI2A4TWG4jusXHKOLVi9WDr3rcJ1P5GlHcw=s160-c-k-c0x00ffffff-no-rj',
    }
  },
  methods: {
    openChannel() {
      window.open('https://www.youtube.com/@OFurryOficial', '_blank')
    },
  },
}
</script>

<style scoped>
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 12s linear infinite;
}

@keyframes panel-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}
.animate-panel-float {
  animation: panel-float 4s ease-in-out infinite;
}
</style>
