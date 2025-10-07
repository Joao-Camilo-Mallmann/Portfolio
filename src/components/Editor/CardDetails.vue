<template>
  <Card class="card-container bg-gray-800/30 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1">
    <template #content>
      <Tabs value="0" class="custom-tabs">
        <TabList>
          <Tab value="0">
            <i class="pi pi-user mr-2"></i>
            <span>Sobre Mim</span>
          </Tab>
          <Tab value="1">
            <i class="pi pi-sparkles mr-2"></i>
            <span>Habilidades</span>
          </Tab>
          <Tab value="2">
            <i class="pi pi-desktop mr-2"></i>
            <span>Ferramentas</span>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <div class="p-4 text-center">
              <h3 class="text-2xl font-bold text-[#eaa64d] mb-4">Editor de Vídeo & Criador de Conteúdo</h3>
              <p class="text-gray-300 leading-relaxed">
                Com mais de 3 anos de experiência, transformo ideias em narrativas visuais impactantes. Minha paixão é contar histórias que cativam, engajam e geram resultados, utilizando as melhores ferramentas e técnicas do mercado.
              </p>
            </div>
          </TabPanel>
          <TabPanel value="1">
                      <div class="p-4 flex flex-wrap justify-center gap-6 text-gray-300">
                        <div class="flex items-center gap-2 transition-all duration-200 hover:text-white hover:scale-105 cursor-pointer">
                          <i class="pi pi-video text-[#eaa64d]"></i>
                          <span>Edição de Vídeo</span>
                        </div>
                        <div class="flex items-center gap-2 transition-all duration-200 hover:text-white hover:scale-105 cursor-pointer">
                          <i class="pi pi-palette text-[#eaa64d]"></i>
                          <span>Color Grading</span>
                        </div>
                        <div class="flex items-center gap-2 transition-all duration-200 hover:text-white hover:scale-105 cursor-pointer">
                          <i class="pi pi-book text-[#eaa64d]"></i>
                          <span>Storytelling</span>
                        </div>
                        <div class="flex items-center gap-2 transition-all duration-200 hover:text-white hover:scale-105 cursor-pointer">
                          <i class="pi pi-briefcase text-[#eaa64d]"></i>
                          <span>Experiência (+3 Anos)</span>
                        </div>
                      </div>          </TabPanel>
          <TabPanel value="2">
                      <div class="p-4 flex justify-center items-center gap-6 flex-wrap">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/512px-Adobe_Premiere_Pro_CC_icon.svg.png" alt="Premiere Pro" class="h-12 transition-transform duration-200 hover:scale-110 hover:drop-shadow-[0_0_15px_#eaa64d40] cursor-pointer" title="Premiere Pro" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/768px-Adobe_After_Effects_CC_icon.svg.png" alt="After Effects" class="h-12 transition-transform duration-200 hover:scale-110 hover:drop-shadow-[0_0_15px_#eaa64d40] cursor-pointer" title="After Effects" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" alt="Photoshop" class="h-12 transition-transform duration-200 hover:scale-110 hover:drop-shadow-[0_0_15px_#eaa64d40] cursor-pointer" title="Photoshop" />
                        <img src="https://icon-icons.com/icons2/2407/PNG/512/adobe_audition_icon_146139.png" alt="Audition" class="h-12 transition-transform duration-200 hover:scale-110 hover:drop-shadow-[0_0_15px_#eaa64d40] cursor-pointer" title="Audition" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/512px-Adobe_Illustrator_CC_icon.svg.png" alt="Illustrator" class="h-12 transition-transform duration-200 hover:scale-110 hover:drop-shadow-[0_0_15px_#eaa64d40] cursor-pointer" title="Illustrator" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg" alt="Notion" class="h-12 transition-transform duration-200 hover:scale-110 hover:drop-shadow-[0_0_15px_#eaa64d40] cursor-pointer" title="Notion" />
                        <img src="https://icon-icons.com/icons2/3032/PNG/512/capcut_logo_icon_189232.png" alt="CapCut" class="h-12 transition-transform duration-200 hover:scale-110 hover:drop-shadow-[0_0_15px_#eaa64d40] cursor-pointer" title="CapCut" />
                      </div>          </TabPanel>
        </TabPanels>
      </Tabs>
    </template>
  </Card>
</template>

<script>
import { defineComponent } from 'vue'
import Card from 'primevue/card'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'

export default defineComponent({
  name: 'CardDetails',
  components: {
    Card,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
  },
})
</script>

<style scoped>
.card-container:hover {
  box-shadow: 0 0 30px #eaa64d30;
}

@keyframes tab-content-enter {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.custom-tabs >>> .p-tabpanels .p-tabpanel {
  animation: tab-content-enter 0.5s ease-out;
}

.custom-tabs >>> .p-tablist {
  background: transparent;
  border: none;
}

.custom-tabs >>> .p-tab {
  background: transparent !important;
  color: #a0aec0 !important; /* gray-500 */
  transition: color 0.3s, border-color 0.3s;
}

.custom-tabs >>> .p-tab[data-active="true"] {
  color: #eaa64d !important; /* editor color */
}

.custom-tabs >>> .p-tab:hover {
  color: #eaa64d !important; /* editor color */
}

.custom-tabs >>> .p-tablist .p-ink-bar {
  background-color: #eaa64d !important; /* editor color */
  height: 3px;
}

.custom-tabs >>> .p-tabpanels {
  background: transparent;
}
</style>
