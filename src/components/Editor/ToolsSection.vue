<template>
  <Fieldset
    legend="🛠️ Ferramentas Profissionais"
    class="!border-[#eaa64d]/30 !rounded-3xl !shadow-xl hover:!shadow-yellow-200/20 !transition-all !duration-300 mb-10 !z-999"
    :toggleable="true"
  >
    <template #legend>
      <div class="flex items-center gap-2">
        <i class="pi pi-cog text-[#eaa64d]"></i>
        <span class="text-[#eaa64d] font-bold">Ferramentas Profissionais</span>
      </div>
    </template>

    <p class="text-gray-300 text-center mb-6 leading-relaxed">
      {{ toolsDescription }}
    </p>

    <div class="flex flex-wrap justify-center gap-6 md:gap-8">
      <Fieldset
        v-for="tool in tools"
        :key="tool.name"
        class="!bg-[#eaa64d]/10 !border-[#eaa64d]/30 hover:!bg-[#eaa64d]/20 hover:!scale-105 !transition-all !duration-300 !cursor-pointer !group !rounded-2xl !p-4 flex-shrink-0 w-32 md:w-40"
        :toggleable="false"
      >
        <template #legend>
          <span class="text-[#eaa64d] font-semibold text-xs md:text-sm text-center block truncate">
            {{ tool.name }}
          </span>
        </template>
        <div class="flex justify-center">
          <img
            :src="tool.icon"
            :alt="tool.name"
            class="w-12 h-12 md:w-16 md:h-16 group-hover:scale-110 transition-transform duration-300"
            :class="tool.rounded ? 'rounded' : ''"
          />
        </div>
      </Fieldset>
    </div>
  </Fieldset>
</template>

<script>
export default {
  name: 'ToolsSection',
  data() {
    return {
      toolsDescription: `
        Utilizo um ecossistema completo de ferramentas profissionais para entregar vídeos com qualidade, criatividade e eficiência em todas as etapas do processo audiovisual: roteirização, edição, montagem, color grading, legendagem, sound design e finalização.

        Domino softwares líderes como Adobe Premiere Pro, After Effects, Photoshop, Final Cut Pro, Sony Vegas, CapCut e Canva, além de integrar recursos de inteligência artificial para acelerar fluxos e potencializar a criatividade.
      `,
      tools: [
        {
          name: 'Premiere Pro',
          icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/512px-Adobe_Premiere_Pro_CC_icon.svg.png?20210729021549',
          rounded: false,
        },
        {
          name: 'Photoshop',
          icon: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg',
          rounded: false,
        },
        {
          name: 'After Effects',
          icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/768px-Adobe_After_Effects_CC_icon.svg.png',
          rounded: false,
        },
        {
          name: 'Thumbnails',
          icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png',
          rounded: true,
        },
      ],
    }
  },
}
</script>
