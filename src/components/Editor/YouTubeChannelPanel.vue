<template>
  <Panel class="!bg-transparent !border-0 !shadow-none mb-6 mt-6">
    <template #header>
      <div class="w-full flex justify-center">
        <h2 class="text-2xl font-bold text-[#eaa64d]">Canal Oficial</h2>
      </div>
    </template>
    <div class="flex flex-col items-center justify-center gap-6 px-2">
      <div class="relative group">
        <span class="absolute inset-0 rounded-full border-4 border-[#eaa64d] opacity-70"></span>
        <span class="absolute -inset-2 rounded-full border-2 border-[#eaa64d]/30 opacity-50"></span>
        <img
          :src="youtubeJCLink"
          alt="Logo do Canal"
          class="w-32 h-32 md:w-50 md:h-50 rounded-full border-4 border-[#eaa64d] shadow-2xl relative z-10 bg-white group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <Button
        as="a"
        size="large"
        label="Conheça meu canal no YouTube!"
        href="https://www.youtube.com/@J.C-12"
        target="_blank"
        icon="pi pi-youtube"
        rel="noopener"
        class="!inline-flex !items-center !gap-3 !px-8 !py-4 md:!px-12 md:!py-5 !rounded-full !bg-gradient-to-r !from-[#eaa64d] !to-[#f0b86e] !text-white !font-extrabold !text-lg md:!text-xl !shadow-xl hover:!shadow-2xl hover:!scale-105 !transition-all !duration-300 !border-2 !border-[#eaa64d]/50"
      />
    </div>
  </Panel>
</template>

<script>
export default {
  name: 'YouTubeChannelPanel',
  data() {
    return {
      youtubeJCLink:
        'https://yt3.ggpht.com/VhJNJwOB8d4NY-XaUtpjcQwHMqlT_DAO7eTc1g0mmaKVt9Jj0bGQv1G02Hp3R6NwkATWXT97Rg=s600-c-k-c0x00ffffff-no-rj-rp-mo',
    }
  },
}
</script>
