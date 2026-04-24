<div align="center">
  <img src="https://avatars.githubusercontent.com/u/94570639?v=4" alt="João Camilo Mallmann" width="120" style="border-radius: 50%" />
  <h1>✨ João Camilo Mallmann ✨</h1>
  <p><strong>Software Developer & Frontend Specialist | Editor de Vídeo</strong></p>
  
  <p>
    <a href="https://joao-camilo-mallmann.com/">
      <img alt="Site Pessoal" src="https://img.shields.io/badge/Acessar%20Portfólio-%231E1E1E?style=for-the-badge&logo=vercel&logoColor=white" />
    </a>
    <a href="https://www.linkedin.com/in/joão-camilo-mallmann/">
      <img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
    </a>
  </p>

  <p>
    <em>Aplicações web modernas com Vue.js | Edições de Vídeo de Alto Impacto</em>
  </p>
</div>

<br/>

## 🚀 Sobre Mim

Sou um profissional focado na interseção entre **desenvolvimento frontend** e a **criação de conteúdo audiovisual**. Construo interfaces ricas e interativas com as melhores práticas de SEO e acessibilidade, enquanto também atuo como editor de vídeo com domínio avançado na suíte Adobe (Premiere Pro, After Effects, Photoshop).

---

## � Tech Stack e Ferramentas

<div align="center">
  <img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D" alt="Vue.js" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  <img src="https://img.shields.io/badge/VueUse_Motion-111827?style=for-the-badge&logo=vue.js&logoColor=4FC08D" alt="VueUse Motion" />
  <img src="https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white" alt="Bun" />
</div>

<div align="center">
  <img src="https://img.shields.io/badge/Adobe%20Premiere%20Pro-9999FF.svg?style=for-the-badge&logo=Adobe%20Premiere%20Pro&logoColor=white" alt="Premiere" />
  <img src="https://img.shields.io/badge/Adobe%20After%20Effects-9999FF.svg?style=for-the-badge&logo=Adobe%20After%20Effects&logoColor=white" alt="After Effects" />
  <img src="https://img.shields.io/badge/Adobe%20Photoshop-31A8FF.svg?style=for-the-badge&logo=Adobe%20Photoshop&logoColor=white" alt="Photoshop" />
</div>

---

## 🎯 Seções do Portfolio

O portfólio está dividido em vertentes principais:

1. 🏠 **Home:** Visão geral rápida sobre meu perfil profissional.
2. 👨‍💻 **Dev:** Casos de sucesso, repositórios de projetos frontend.
3. 🎬 **Editor:** Trabalhos audiovisuais para YouTube, comerciais e institucionais.

---

## ⚙️ Como executar localmente

### 1. Pré-requisitos

Certifique-se de que o **[Bun](https://bun.sh/)** está instalado na sua máquina!

### 2. Instalação de dependências

```sh
bun install
```

### 3. Subir ambiente de desenvolvimento

Ao rodar este comando, o servidor local (Vite) será iniciado com Hot-Module-Replacement (HMR) ativado. Ideal para testar mudanças no código em tempo real.

```sh
bun dev
```

### 4. Geração do Bundle para Produção (com SSG)

O projeto usa renderização de páginas estáticas por padrão (`vite-ssg`). Este comando cuidará de transpilar, otimizar os assets (Tailwind, Imagens e Código HTML) e minificar os scripts e o Vue.

```sh
bun run build
```

### 5. Pré-visualização do Build Local

Para testar a saída estática gerada na etapa anterior (tudo contido na pasta `dist/`), use:

```sh
bun run preview
```

### 6. Linting e Formatação de Código

Para checar possíveis erros e garantir que o código segue o padrão de formatação Prettier da equipe.

```sh
bun lint
bun format
```

---

## 📈 Destaques Técnicos

- **SSG & SEO:** `vite-ssg` com `<meta>` tags em JSON-LD configuradas dinamicamente via unhead, focando também em Sublinks (SiteNavigationElement).
- **Acessibilidade (a11y):** Aplicação coerente pensando em screen readers.
- **Otimizações (Performance):** Pre-fetch de imagens globais sob lazy load. Animações puramente no Tailwind v4 (`main.css`) sem JS desnecessário.
- **i18n Customizado:** Composables otimizados criados do zero para gerir traduções (PT-BR/EN).

<br/>
