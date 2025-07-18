<template>
  <div class="page-transition">
    <HomeSplitter />

    <div ref="profilePhoto" class="flex justify-center sm:-mt-4 md:-mt-20 relative z-10">
      <img
        src="https://avatars.githubusercontent.com/u/94570639"
        alt="Minha foto"
        class="w-40 h-40 object-cover rounded-full shadow-xl border-4 border-black"
      />
    </div>

    <div ref="introSection" class="text-gray-200 max-w-3xl mx-auto p-8 mt-4 text-center">
      <h3 class="text-2xl font-semibold text-white mb-4">Sobre Mim</h3>

      <!-- Apresentação Principal -->
      <Card class="border border-white/10 mb-4 text-gray-300 bg-black">
        <template #content>
          <p class="text-base leading-7 text-gray-300 m-0">
            Olá! Sou <strong class="text-white">João Camilo Mallmann</strong>, desenvolvedor
            frontend e editor de vídeo.<br />
            Minha paixão é criar soluções digitais e conteúdo audiovisual de alta qualidade.
          </p>
        </template>
      </Card>

      <!-- Seções de Habilidades -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <!-- Seção Desenvolvedor Frontend -->
        <Card
          class="cursor-pointer border-l-4 border-[#4d91ea] transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl text-gray-300 bg-black"
          @click="goToPage('/dev')"
        >
          <template #header>
            <div class="flex items-center justify-center gap-2 p-4">
              <i class="pi pi-desktop text-xl text-[#4d91ea]"></i>
              <h4 class="text-lg font-semibold text-white m-0">Desenvolvedor Frontend</h4>
            </div>
          </template>
          <template #content>
            <p class="text-gray-300 leading-relaxed m-0">
              Especializado em desenvolvimento de aplicações web modernas e responsivas utilizando
              Vue.js, JavaScript/TypeScript e as melhores práticas do mercado.
            </p>
          </template>
        </Card>

        <!-- Seção Editor de Vídeo -->
        <Card
          class="cursor-pointer border-l-4 border-[#eaa64d] transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl text-gray-300 bg-black"
          @click="goToPage('/editor')"
        >
          <template #header>
            <div class="flex items-center justify-center gap-2 p-4">
              <i class="pi pi-video text-xl text-[#eaa64d]"></i>
              <h4 class="text-lg font-semibold text-[#eaa64d] m-0">Editor de Vídeo</h4>
            </div>
          </template>
          <template #content>
            <p class="text-gray-300 leading-relaxed m-0">
              Experiência em produção audiovisual completa, desde o planejamento até a finalização,
              utilizando Adobe Photoshop e Premiere Pro profissionalmente.
            </p>
          </template>
        </Card>
      </div>

      <!-- Conclusão -->
      <Card class="border border-white/10 mt-4 text-gray-300 bg-black">
        <template #content>
          <p class="text-gray-300 leading-relaxed m-0">
            Combino criatividade técnica com visão estratégica para entregar projetos que superam
            expectativas. Seja desenvolvendo interfaces intuitivas ou produzindo conteúdo
            audiovisual impactante, meu foco é sempre a excelência.
          </p>
        </template>
      </Card>

      <div class="flex justify-center flex-wrap gap-4 mt-8 pt-8">
        <SocialMediaButton
          link="https://www.linkedin.com/in/joão-camilo-mallmann/"
          platform="linkedin"
        />
        <SocialMediaButton link="https://github.com/Joao-Camilo-Mallmann" platform="github" />
        <SocialMediaButton link="https://www.youtube.com/@J.C-12" platform="youtube" />
      </div>
    </div>
  </div>
</template>

<script setup>
import HomeSplitter from '@/components/HomeSplitter.vue'
import SocialMediaButton from '@/components/SocialMediaButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
function goToPage(path) {
  router.push(path)
}
</script>
